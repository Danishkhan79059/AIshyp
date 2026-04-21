"use client"
import { useState } from "react"
import { toast } from "react-hot-toast"
const infoCards = [
  {
    label: "Phone",
    value: "+91 7045814007",
    href: "tel:+917045814007",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "mohit@vizlabs.in",
    href: "mailto:mohit@vizlabs.in",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Gurgaon,India",
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "Mon–Sat, 9:30–19:00",
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

const whyReasons = [
  "Logistics portal onboarding and full implementation support",
  "Shipment workflow planning tailored to your business model",
  "Live tracking and operations guidance for customer success",
  "Tailored solutions for growing delivery requirements",
  "Dedicated account manager for enterprise clients",
]

const steps = [
  {
    num: "1",
    title: "Team reviews your request",
    desc: "We assess your logistics and portal requirements in detail.",
  },
  {
    num: "2",
    title: "Consultation call scheduled",
    desc: "A quick call to understand your goals and priorities.",
  },
  {
    num: "3",
    title: "Custom onboarding plan",
    desc: "You receive a tailored implementation roadmap.",
  },
  {
    num: "4",
    title: "Dedicated launch support",
    desc: "Our team stays with you through setup and go-live.",
  },
]

const inputClass =
  "w-full border border-black/12 rounded-xl px-4 py-3 text-sm text-black placeholder-black/30 outline-none focus:border-[#ffa200]/70 focus:ring-2 focus:ring-[#ffa200]/10 transition-all duration-200"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    shipmentVolume: "",
    message: "",
  })
  const [submitState, setSubmitState] = useState({
    loading: false,
    error: "",
    success: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitState({ loading: true, error: "", success: "" })

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: `${formData.message}\n\nDaily Shipment Volume: ${formData.shipmentVolume || "Not provided"
          }`,
      }

      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.error || "Failed to submit enquiry")
      }

      toast.success("Enquiry submitted successfully. We will contact you soon.")
      setSubmitState({
        loading: false,
        error: "",
        success: "",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        shipmentVolume: "",
        message: "",
      })
    } catch (error) {
      toast.error(error?.message || "Something went wrong. Please try again.")
      setSubmitState({
        loading: false,
        error: "",
        success: "",
      })
    }
  }

  return (
    <main className="relative min-h-screen bg-[#eef6ff] text-black pt-28 pb-16 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at 50% 35%, black 22%, transparent 78%)",
        }}
      />

      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto mb-10 animate-fade-up relative">
        <div className="pointer-events-none absolute -top-14 -right-16 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(255,162,0,0.07)_0%,transparent_70%)]" />
        <span className="inline-block bg-[rgba(255,162,0,0.15)] text-blue-950 text-[11px] font-semibold tracking-[3px] uppercase px-3 py-1 rounded-full border border-[rgba(255,162,0,0.3)]">
          Contact Aishyp
        </span>
        <h1 className="mt-3 text-3xl md:text-5xl font-medium leading-tight">
          Connect with the{" "}
          <span className="text-blue-950 [text-shadow:0_0_20px_rgba(255,162,0,0.25)]">
            AIShyp
          </span>{" "}
          team.
        </h1>
        <p className="mt-5 text-black max-w-2xl leading-relaxed">
          Whether you're looking to launch a logistics portal, scale your
          shipping operations, or need enterprise support — our team is ready
          to build the right solution with you.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-black/45">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Support team online
          </div>
          <div className="flex items-center gap-2 text-sm text-black/45">
            <span className="w-2 h-2 rounded-full bg-[#ffa200]" />
            Avg. response: under 2 hours
          </div>
          <div className="flex items-center gap-2 text-sm text-black/45">
            <span className="w-2 h-2 rounded-full bg-white/30" />
            Mon–Sat, 9:30 AM – 7:00 PM IST
          </div>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="max-w-5xl mx-auto mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {infoCards.map((card, i) => (
          <div
            key={card.label}
            className="flex items-center gap-3 rounded-2xl border border-[rgba(255,162,0,0.18)]  px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,162,0,0.4)]"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-10 h-10 rounded-xl bg-[rgba(255,162,0,0.12)] border border-[rgba(255,162,0,0.2)] flex items-center justify-center shrink-0">
              {card.icon}
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[1.5px] text-black mb-0.5">
                {card.label}
              </div>
              {card.href ? (
                <a
                  href={card.href}
                  className="text-sm font-medium text-black no-underline hover:text-blue-950 transition-colors"
                >
                  {card.value}
                </a>
              ) : (
                <span className="text-sm font-medium">{card.value}</span>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* ── Main Grid: Form + Sidebar ── */}
      <section className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-6">

        {/* Contact Form */}
        <div className="lg:col-span-3 rounded-2xl border border-[rgba(255,162,0,0.18)]  p-6 md:p-8">
          <h2 className="text-2xl font-medium text-blue-950 mb-1">
            Send us a message
          </h2>
          <p className="text-sm text-black/50 mb-6 leading-relaxed">
            Fill in your details and our team will reach out within 2 hours.
          </p>

          <form className="grid md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-[13px] text-black/65 block mb-2">Full Name</label>
              <input className={inputClass} type="text" name="name" placeholder="Rahul Sharma" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label className="text-[13px] text-black block mb-2">Work Email</label>
              <input className={inputClass} type="email" name="email" placeholder="shyp@company.com" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label className="text-[13px] text-black block mb-2">Phone Number</label>
              <input className={inputClass} type="tel" name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
              <label className="text-[13px] text-black/65 block mb-2">Company Name</label>
              <input className={inputClass} type="text" name="company" placeholder="Your Company Pvt. Ltd." value={formData.company} onChange={handleChange} />
            </div>
            <div>
              <label className="text-[13px] text-black/65 block mb-2">Subject</label>
              <select className={inputClass + " appearance-none cursor-pointer"} name="subject" value={formData.subject} onChange={handleChange}>
                <option value="">Select enquiry subject</option>
                <option value="E-commerce / D2C Brand">E-commerce / D2C Brand</option>
                <option value="3PL / Logistics Provider">3PL / Logistics Provider</option>
                <option value="Enterprise / Corporate">Enterprise / Corporate</option>
                <option value="Startup / SME">Startup / SME</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-[13px] text-black/65 block mb-2">Daily Shipment Volume</label>
              <select className={inputClass + " appearance-none cursor-pointer"} name="shipmentVolume" value={formData.shipmentVolume} onChange={handleChange}>
                <option value="">Select volume range</option>
                <option value="Under 100 shipments/day">Under 100 shipments/day</option>
                <option value="100-500 shipments/day">100-500 shipments/day</option>
                <option value="500-2000 shipments/day">500-2000 shipments/day</option>
                <option value="2000+ shipments/day">2000+ shipments/day</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-[13px] text-black/65 block mb-2">Requirement Details</label>
              <textarea
                name="message"
                className={inputClass + " resize-none leading-relaxed"}
                rows={4}
                placeholder="Describe your logistics needs, current challenges, or portal requirements..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-4 flex-wrap">
              <button
                type="submit"
                disabled={submitState.loading}
                className="bg-blue-900 text-white font-semibold px-7 py-3 rounded-xl text-sm hover:bg-blue-600 active:scale-95 transition-all duration-200"
              >
                {submitState.loading ? "Submitting..." : "Submit Enquiry →"}
              </button>
              <span className="text-xs text-black/35">
                We'll respond within 2 business hours
              </span>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2 flex flex-col gap-5">

          {/* Why Aishyp */}
          <div className="rounded-2xl border border-[rgba(255,162,0,0.18)] ">
            <h2 className="text-lg font-medium text-blue-950 mb-4">
              Why contact Aishyp?
            </h2>
            <ul className="space-y-3">
              {whyReasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-3 pb-3 border-b border-black/7 last:border-0 last:pb-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffa200] mt-2 shrink-0" />
                  <p className="text-sm text-black/62 leading-relaxed">{reason}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* What Happens Next */}
          <div className="rounded-2xl border border-[rgba(255,162,0,0.18)] ] p-6">
            <h2 className="text-lg font-medium text-blue-950 mb-5">
              What happens next?
            </h2>
            <div className="relative flex flex-col gap-4">
              <div className="absolute left-[15px] top-8 bottom-8 w-px bg-[rgba(255,162,0,0.2)]" />
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[rgba(255,162,0,0.15)] border border-[rgba(255,162,0,0.35)] flex items-center justify-center text-[13px] font-medium text-blue-950 shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-0.5">{step.title}</div>
                    <div className="text-xs text-black/45 leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Urgent CTA */}
          <div className="rounded-2xl border border-[rgba(255,162,0,0.35)]  p-5">
            <p className="text-sm text-black/85 leading-relaxed">
              For urgent assistance, call{" "}
              <a
                href="tel:+917045814007"
                className="text-blue-950 font-semibold hover:underline"
              >
                +91 7045814007
              </a>{" "}
              or email{" "}
              <a
                href="mailto:mohit@vizlabs.in"
                className="text-blue-950 font-semibold hover:underline"
              >
                mohit@vizlabs.in
              </a>
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}