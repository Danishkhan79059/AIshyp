"use client"
import Image from "next/image"
import Link from "next/link"
import { SITE_THEME } from "../theme"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const theme = SITE_THEME

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
    <footer className="border-t border-black/10" style={{ background: theme.colors.footerBackground, color: theme.colors.text }}>

      {/* ── STATS BAR ── */}
      <div className="border-b border-black/10">
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
              className="relative w-11 h-11 rounded-xl flex items-center justify-center  overflow-hidden bg-white"
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

          <p className="text-sm text-black leading-relaxed max-w-xs">
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
              <div key={i} className="flex items-center gap-3 text-sm text-black/60">
                <span className="text-blue-950 flex-shrink-0">
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
                className="w-9 h-9 rounded-lg flex items-center justify-center text-black/60 border border-black/10 transition-all duration-200 hover:text-blue-950 hover:border-[#ffa200]/50 hover:bg-[#ffa200]/10"
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
                    className="text-sm text-black hover:text-black transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ffa200] transition-all duration-200 rounded-full" />
                    {typeof item === "string" ? item : item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── NEWSLETTER ── */}
      <div className="border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-black font-semibold text-sm tracking-wide">Stay updated with AIShyp</p>
            <p className="text-black/50 text-xs mt-0.5">Get delivery tips, offers & logistics news.</p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-black/[0.02] border border-black/10 text-sm text-black placeholder-black/35 outline-none focus:border-[#ffa200]/50 transition-colors duration-200"
            />
            <button
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white flex-shrink-0 transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
              style={{ background: theme.colors.accentGradient }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-black/45 tracking-wide">
            © {currentYear} AIShyp Logistics Network. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs text-black/45 hover:text-black/70 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}