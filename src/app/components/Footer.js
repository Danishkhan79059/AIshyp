"use client"
import { useState } from "react"
import { toast } from "react-hot-toast"
import Image from "next/image"
import Link from "next/link"
import { SITE_THEME } from "../theme"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const theme = SITE_THEME
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = async (event) => {
    event.preventDefault()

    const normalizedEmail = email.trim().toLowerCase()
    if (!normalizedEmail) {
      toast.error("Please enter your email.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail }),
      })

      const data = await response.json()
      if (!response.ok) {
        toast.error(data?.error || "Subscription failed. Please try again.")
        return
      }

      toast.success(data?.message || "Subscribed successfully.")
      setEmail("")
    } catch {
      toast.error("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const links = {
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press & Media", href: "#" },
      { label: "Contact Us", href: "/contact" },
    ],
    Services: ["Air Freight", "Sea Freight", "Road Transport", "Warehousing", "Express Delivery"],
    Support: ["Track Shipment", "Get a Quote", "FAQs", "Help Center", "Terms & Policy"],
  }

  const socials = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="#0a0e1a" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#0a0e1a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ]

  const stats = [
    { num: "50K+", label: "Daily Deliveries" },
    { num: "500+", label: "Cities Covered" },
    { num: "99.2%", label: "On-Time Rate" },
    { num: "18+", label: "Years Experience" },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-blue-200/70 bg-[#eaf3ff] text-black">
      {/* backdrop glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-80 rounded-full bg-sky-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-80 rounded-full bg-sky-300/25 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
              "linear-gradient(rgba(37,99,235,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="relative">
        {/* ── NEWSLETTER ── */}
        <div className="border-b border-blue-200/70">
          <div className="max-w-6xl mx-auto px-6 py-12 text-center">
            <p className="text-2xl md:text-3xl font-bold tracking-tight">Stay updated with AIShyp</p>
            <p className="text-black/55 text-sm mt-2">Get delivery tips, offers & logistics news.</p>
            <form onSubmit={handleSubscribe} className="mt-6 w-full">
              <div className="flex items-center justify-center gap-2 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="w-full max-w-sm px-4 py-2.5 rounded-full bg-white border border-blue-200 text-sm text-black placeholder-black/40 outline-none focus:border-blue-400 transition-colors duration-200"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-white flex-shrink-0 transition-all duration-200 hover:opacity-90 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{ background: theme.colors.accentGradient }}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div className="border-b border-blue-200/60">
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-blue-950 tracking-wide">{s.num}</p>
              <p className="text-xs text-black/50 tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* Brand col */}
        <div className="lg:col-span-2 flex flex-col gap-5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 w-fit">
            <div
              className="relative w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden bg-white"
            >
              <Image
                src="/aishiplogo.png"
                alt="AIShip logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-[22px] tracking-widest uppercase text-black">
                AI<span className="text-blue-950">Shyp</span>
              </span>
             
            </div>
          </Link>

          <p className="text-sm text-black/70 leading-relaxed max-w-xs">
            Pan-India freight solutions with real-time tracking, guaranteed delivery windows,
            and a trusted network spanning 500+ cities since 2005.
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            {[
              {
                icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
                text: "+91 7045814007",
              },
              {
                icon: <><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></>,
                text: "mohit@vizlabs.in",
              },
              {
                icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />,
                text: "Gurgaon, sector-4",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-black/65">
                <span className="text-blue-900 flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">{item.icon}</svg>
                </span>
                {item.text}
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2 mt-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-black/70 border border-blue-200 transition-all duration-200 hover:text-blue-950 hover:border-blue-300 hover:bg-blue-100"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title} className="flex flex-col gap-4">
            <h4 className="text-[11px] font-semibold tracking-[3px] uppercase text-blue-950">
              {title}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {items.map((item) => (
                <li key={typeof item === "string" ? item : item.label}>
                  <a
                    href={typeof item === "string" ? "#" : item.href}
                    className="text-sm text-black/70 hover:text-black transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-200 rounded-full" />
                    {typeof item === "string" ? item : item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-blue-200/60">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-black/45 tracking-wide">
            © {currentYear} AIShyp Logistics Network. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs text-black/45 hover:text-blue-800 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}