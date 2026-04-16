import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectToMongo } from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const company = String(body?.company ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // ✅ VALIDATION
    if (!name) {
      return NextResponse.json(
        { error: "Full Name is required" },
        { status: 400 },
      );
    }
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid Email is required" },
        { status: 400 },
      );
    }
    if (!phone) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }
    if (!subject) {
      return NextResponse.json(
        { error: "Subject is required" },
        { status: 400 },
      );
    }
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI missing");
    const emailUser = String(process.env.EMAIL_USER ?? "").trim();
    const emailPass = String(process.env.EMAIL_PASS ?? "").trim();
    const receiverEmail = String(
      process.env.CONTACT_RECEIVER_EMAIL ?? emailUser,
    ).trim();

    if (!emailUser || !emailPass) throw new Error("EMAIL env missing");

    // ✅ CONNECT DB
    await connectToMongo();

    // ✅ SAVE DATA
    const created = await ContactSubmission.create({
      name,
      email,
      phone,
      company: company || null,
      subject,
      message,
    });

    // ✅ SMTP CONFIG
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // ✅ VERIFY CONNECTION
    try {
      await transporter.verify();
      console.log("✅ SMTP Connected");
    } catch (err) {
      console.error("❌ SMTP VERIFY ERROR:", err);
      throw new Error("SMTP connection failed");
    }

    // ✅ SEND EMAIL TO ADMIN
    try {
      const info = await transporter.sendMail({
        from: `"AIShyp Contact Form" <${emailUser}>`,
        to: receiverEmail,
        replyTo: email,
        subject: `New Contact: ${subject}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "N/A"}
Subject: ${subject}

Message:
${message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Company:</b> ${company || "N/A"}</p>
          <p><b>Subject:</b> ${subject}</p>
          <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
        `,
      });

      console.log("✅ ADMIN EMAIL SENT:", info.messageId);

      // ✅ AUTO-REPLY TO USER (form email)
      const autoReplyInfo = await transporter.sendMail({
        from: `"AIShyp Team" <${emailUser}>`,
        to: email,
        subject: "We received your enquiry - AIShyp",
        text: `Hi ${name},

Thanks for contacting AIShyp.
We have received your enquiry and our team will connect with you shortly.

Your submitted details:
- Subject: ${subject}
- Phone: ${phone}

Best regards,
AIShyp Team`,
        html: `
          <p>Hi ${name},</p>
          <p>Thanks for contacting <b>AIShyp</b>.</p>
          <p>We have received your enquiry and our team will connect with you shortly.</p>
          <p><b>Your submitted details:</b></p>
          <ul>
            <li><b>Subject:</b> ${subject}</li>
            <li><b>Phone:</b> ${phone}</li>
          </ul>
          <p>Best regards,<br/>AIShyp Team</p>
        `,
      });

      console.log("✅ USER AUTO-REPLY SENT:", autoReplyInfo.messageId);
    } catch (err) {
      console.error("❌ SEND MAIL ERROR:", err);
      throw new Error("Email sending failed");
    }

    return NextResponse.json(
      { ok: true, message: "Saved + Email Sent ✅", id: created._id },
      { status: 201 },
    );
  } catch (err) {
    console.error("🔥 FINAL ERROR:", err);

    return NextResponse.json(
      {
        error: "Something went wrong",
        details: err.message,
      },
      { status: 500 },
    );
  }
}
