import { NextResponse } from "next/server";
import { connectToMongo } from "@/lib/mongodb";
import NewsletterSubscription from "@/models/NewsletterSubscription";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  try {
    const body = await req.json();
    const email = String(body?.email ?? "")
      .trim()
      .toLowerCase();

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    await connectToMongo();

    const existing = await NewsletterSubscription.findOne({ email }).lean();
    if (existing) {
      return NextResponse.json(
        { ok: true, message: "Email already subscribed." },
        { status: 200 },
      );
    }

    await NewsletterSubscription.create({ email });

    return NextResponse.json(
      { ok: true, message: "Subscribed successfully." },
      { status: 201 },
    );
  } catch (error) {
    if (error?.code === 11000) {
      return NextResponse.json(
        { ok: true, message: "Email already subscribed." },
        { status: 200 },
      );
    }

    console.error("Newsletter subscribe error:", error);
    return NextResponse.json(
      { error: "Unable to subscribe right now. Please try again." },
      { status: 500 },
    );
  }
}
