"use client";

import { useEffect, useRef } from "react";

const team = [
  {
    key: "mohit",
    name: "Mohit Panwar",
    role: "Founder & CEO",
    detail: "IIM Mumbai · Ex DTDC",
    isFounder: true,
  },
  {
    key: "parag",
    name: "Parag Aggarwal",
    role: "Full Stack Developer",
    detail: "",
  },
  {
    key: "danish",
    name: "Danish Khan",
    role: "Full Stack Developer",
    detail: "",
  },
  {
    key: "manav",
    name: "Manav Panwar",
    role: "Vibe Coder & Server Mgmt",
    detail: "",
  },
  {
    key: "sudhanshu",
    name: "Sudhanshu Saini",
    role: "Backend Developer",
    detail: "",
  },
  {
    key: "hitesh",
    name: "Hitesh Saini",
    role: "Backend Developer",
    detail: "",
  },
];

const PHOTOS = {
  mohit: "/Mohit.png",
  parag: "/Parag.png",
  danish: "/Danish.png",
  manav: "/Manav.png",
  sudhanshu: "/sudhanshu.png",
  hitesh: "/hitesh.jpeg",
};

function animateCounter(el, target, suffix, duration) {
  if (!el) return;
  let start = 0;
  const step = target / 60;
  const interval = setInterval(() => {
    start = Math.min(start + step, target);
    if (suffix === "%") {
      el.textContent = start.toFixed(1) + "%";
    } else if (target >= 1000) {
      el.textContent = Math.round(start / 1000) + "K+";
    } else {
      el.textContent = Math.round(start) + "+";
    }
    if (start >= target) clearInterval(interval);
  }, duration / 60);
}

export default function AboutPage() {
  const c1 = useRef(null);
  const c2 = useRef(null);
  const c3 = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      animateCounter(c1.current, 50, "", 1200);
      animateCounter(c2.current, 2000, "k", 1400);
      animateCounter(c3.current, 100, "", 1000);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Our Mission",
      text: "To level the playing field for India's thousands of independent shipping franchise operators — giving them the tools, rates, and leads to compete with the biggest names in logistics.",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: "What We Offer",
      text: "A free white-label platform that digitizes shipping partners overnight — with aggregated rates, hot leads, multi-LSP access, and a business portal — all under one roof.",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Why AIShyp",
      text: "First mover advantage, FranchiseIndia distribution, and aggregated pricing power create a network that gets stronger with every partner who joins.",
    },
  ];

  const values = [
    {
      title: "Zero Barrier Entry",
      text: "Free platform access removes all friction — any shipping partner can go digital immediately with no upfront cost.",
    },
    {
      title: "Compounding Network",
      text: "Every new partner adds volume, unlocking better rates and more value for the entire ecosystem.",
    },
    {
      title: "Partner-First Growth",
      text: "We succeed when our partners grow. Hot leads, better margins, and real tools — not just software.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-white text-black pt-28 pb-16 px-6 overflow-hidden">
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
      {/* ══ FOUNDER — TOP ══ */}
      <section className="max-w-5xl mx-auto mb-12">
        <div className="mb-6">
          <span className="inline-block bg-[rgba(255,162,0,0.15)] text-blue-950 text-[11px] font-semibold tracking-[3px] uppercase px-3 py-1 rounded-full border border-[rgba(255,162,0,0.3)]">
            Meet the Founder
          </span>
        </div>
        <div className="rounded-2xl border border-[rgba(255,162,0,0.3)] bg-gradient-to-br from-[rgba(255,162,0,0.07)] to-[rgba(255,107,0,0.03)] p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Photo */}
            <div className="flex flex-col items-center gap-4 md:w-52 shrink-0">
              <div className="relative">
                <div className="w-44 h-44 rounded-2xl border-2 border-[rgba(255,162,0,0.5)] overflow-hidden shadow-xl">
                  <img
                    src={PHOTOS.mohit}
                    alt="Mohit Panwar"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -inset-2 rounded-2xl bg-[rgba(255,162,0,0.06)] -z-10 blur-sm" />
              </div>
              <div className="text-center">
                <p className="text-base font-bold">Mohit Panwar</p>
                <p className="text-[13px] text-blue-950 mt-0.5 font-semibold">
                  Founder & CEO
                </p>
                <p className="text-xs text-white mt-1">
                  IIM Mumbai · Ex DTDC
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/mohitpanwar2111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center hover:border-[#3b82f6] transition-colors"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="#3b82f6"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2 bg-[rgba(255,162,0,0.07)] border border-[rgba(255,162,0,0.15)] rounded-lg px-3 py-2">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                  <span className="text-[11px] text-black/55">
                    IIM Mumbai Alumni
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[rgba(255,162,0,0.07)] border border-[rgba(255,162,0,0.15)] rounded-lg px-3 py-2">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                  </svg>
                  <span className="text-[11px] text-black/55">
                    Ex-Operations, DTDC
                  </span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 min-w-0">
              <h2 className="text-xl md:text-2xl font-medium leading-snug mb-1">
                Building the logistics network{" "}
                <span className="text-blue-950">
                  India's small partners deserve.
                </span>
              </h2>
              <p className="text-[11px] uppercase tracking-widest text-black mb-5">
                The story behind AIShyp
              </p>
              <div className="space-y-3.5 text-sm text-black leading-7">
                <p>
                  Before founding AIShyp, Mohit Panwar worked at DTDC — one of
                  India's largest courier networks — where he saw firsthand the
                  structural disadvantage faced by independent shipping
                  franchisees. Large aggregators had the scale, technology, and
                  rates. Small partners had none of that.
                </p>
                <p>
                  He left to build the platform that small partners could never
                  build themselves.{" "}
                  <span className="text-black/88 font-medium">
                    "These operators work incredibly hard, but they're fighting
                    with one hand tied behind their back,"
                  </span>{" "}
                  he says. "AIShyp is about untying that hand — giving them real
                  tools, real rates, and real leads."
                </p>
                <p>
                  Today, AIShyp is building the aggregation infrastructure that
                  will connect India's thousands of shipping franchise operators
                  into a single, powerful network — creating value for every
                  partner in the ecosystem.
                </p>
              </div>
              <div className="mt-6 pl-4 border-l-2 border-[#ffa200] py-1">
                <p className="text-sm text-black/78 italic leading-relaxed">
                  "The future of shipping belongs to connected partners — not
                  isolated operators. AIShyp is that connection."
                </p>
                <p className="text-xs text-blue-950 font-medium mt-2">
                  — Mohit Panwar, Founder & CEO, AIShyp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto mb-12 h-px bg-gradient-to-r from-transparent via-[rgba(255,162,0,0.3)] to-transparent" />

      {/* ══ HERO TAGLINE + STATS ══ */}
      <section className="max-w-5xl mx-auto relative mb-14">
        <div className="pointer-events-none absolute -top-10 -right-16 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(255,162,0,0.07)_0%,transparent_70%)]" />
        <span className="inline-block bg-[rgba(255,162,0,0.15)] text-blue-950 text-[11px] font-semibold tracking-[3px] uppercase px-3 py-1 rounded-full border border-[rgba(255,162,0,0.3)] mb-3">
          About AIShyp
        </span>
        <h1 className="text-3xl md:text-5xl font-medium leading-tight mb-5">
          Empowering shipping partners{" "}
          <span className="text-blue-950 [text-shadow:0_0_20px_rgba(255,162,0,0.25)]">
            to compete & scale.
          </span>
        </h1>
        <p className="text-black max-w-2xl leading-relaxed mb-6 text-[15px]">
          AIShyp is India's first white-label aggregation platform built
          exclusively for shipping franchisees. We digitize offline partners
          overnight — giving them better rates, high-intent leads, and modern
          tools, for free.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2 text-sm text-black/50">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Platform live & onboarding partners
          </div>
          <div className="flex items-center gap-2 text-sm text-black/50">
            <span className="w-2 h-2 rounded-full bg-[#ffa200]" />
            Backed by FranchiseIndia network
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { ref: c1, initial: "0+", label: "Active Partners" },
            { ref: c2, initial: "0+", label: "Orders/Day Target" },
            { ref: c3, initial: "0+", label: "Billion USD TAM" },
            { ref: null, initial: "Free", label: "To Join Platform" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[rgba(255,162,0,0.2)] bg-[rgba(255,162,0,0.06)] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#ffa200] hover:shadow-[0_4px_20px_rgba(255,162,0,0.08)]"
            >
              <p ref={item.ref} className="text-3xl font-bold text-blue-950">
                {item.initial}
              </p>
              <p className="text-[11px] tracking-widest uppercase text-black/45 mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto mb-12 h-px bg-gradient-to-r from-transparent via-[rgba(255,162,0,0.3)] to-transparent" />

      {/* ══ TEAM PHOTO CARDS ══ */}
      <section className="max-w-5xl mx-auto mb-14">
        <div className="mb-3">
          <span className="inline-block bg-[rgba(255,162,0,0.15)] text-blue-950 text-[11px] font-semibold tracking-[3px] uppercase px-3 py-1 rounded-full border border-[rgba(255,162,0,0.3)]">
            Our Team
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium mb-2">
          The people building <span className="text-blue-950">AIShyp</span>
        </h2>
        <p className="text-sm text-black mb-8 max-w-xl leading-relaxed">
          Engineers and builders shipping fast — united by the belief that small
          partners deserve big advantages.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member) => (
            <div
              key={member.key}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(255,162,0,0.12)] ${member.isFounder ? "border-[rgba(255,162,0,0.45)] sm:col-span-2 lg:col-span-1" : "border-[rgba(255,162,0,0.18)]"}`}
            >
              {/* Photo */}
              <div className="relative h-60 overflow-hidden bg-black/5">
                <img
                  src={PHOTOS[member.key]}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Founder badge */}
                {member.isFounder && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#ffa200] text-white shadow-md">
                      Founder
                    </span>
                  </div>
                )}
                {/* Name overlay on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-base leading-tight">
                    {member.name}
                  </p>
                  <p className="text-white text-[12px] font-semibold mt-0.5">
                    {member.role}
                  </p>
                  {member.detail && (
                    <p className="text-white text-[11px] mt-0.5">
                      {member.detail}
                    </p>
                  )}
                </div>
              </div>
              {/* Bottom accent line */}
              <div className="h-0.5 bg-gradient-to-r from-[#ffa200] via-[rgba(255,162,0,0.4)] to-transparent group-hover:from-[#ffa200] group-hover:via-[#ff8c00] transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Team quote */}
        <div className="mt-8 rounded-xl border border-[rgba(255,162,0,0.15)] bg-[rgba(255,162,0,0.03)] p-5 text-center">
          <p className="text-sm text-black italic leading-relaxed">
            "We're a small team solving a big problem. Every line of code, every
            partner onboarded, every lead delivered — it all adds up."
          </p>
          <p className="text-xs text-blue-950 font-medium mt-2">
            — The AIShyp Team
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto mb-12 h-px bg-gradient-to-r from-transparent via-[rgba(255,162,0,0.3)] to-transparent" />

      {/* ── Mission / Offer / Why ── */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5 mb-12">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-[rgba(255,162,0,0.18)] bg-[rgba(255,162,0,0.04)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,162,0,0.5)] hover:bg-[rgba(255,162,0,0.08)]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-[rgba(255,162,0,0.15)] flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <h2 className="text-base font-medium text-blue-950">
                {card.title}
              </h2>
            </div>
            <p className="text-sm leading-7 text-black">{card.text}</p>
          </article>
        ))}
      </section>

      {/* ── Our Approach ── */}
      <section className="max-w-5xl mx-auto rounded-2xl border border-[rgba(255,162,0,0.18)] bg-[rgba(255,162,0,0.04)] p-6 md:p-8 mb-10">
        <h2 className="text-2xl font-medium text-blue-950">Our Approach</h2>
        <p className="mt-4 text-black leading-relaxed max-w-3xl">
          AIShyp combines aggregation economics, technology, and FranchiseIndia
          distribution to build a network that gets more valuable with every new
          partner. We remove the barriers — cost, complexity, and access — so
          that any shipping franchisee can compete from day one.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {values.map((v) => (
            <article
              key={v.title}
              className="rounded-xl border border-[rgba(255,162,0,0.12)] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,162,0,0.4)]"
            >
              <div className="flex items-center mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ffa200] mr-3 shrink-0" />
                <h3 className="text-base font-medium">{v.title}</h3>
              </div>
              <p className="text-sm text-black leading-7">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-[rgba(255,162,0,0.25)] bg-[rgba(255,162,0,0.06)] p-8 text-center">
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full bg-[radial-gradient(circle,rgba(255,162,0,0.1)_0%,transparent_70%)]" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,162,0,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,162,0,0.025) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <p className="text-[11px] font-semibold tracking-[3px] uppercase text-blue-950 mb-2 relative z-10">
            Join the AIShyp Network
          </p>
          <h2 className="text-2xl md:text-3xl font-medium mb-3 leading-snug relative z-10">
            The future of shipping belongs to
            <br />
            <span className="text-blue-950">connected partners.</span>
          </h2>
          <p className="text-sm text-black/55 mb-6 max-w-md mx-auto relative z-10">
            Go digital, access better rates, and grow your shipping business —
            all from one platform, for free.
          </p>
          <div className="flex justify-center gap-4 flex-wrap relative z-10">
            <a
              href="/contact"
              className="bg-[#ffa200] text-blue-950 font-bold px-6 py-2.5 rounded-lg text-sm hover:opacity-90 hover:shadow-[0_8px_24px_rgba(255,162,0,0.35)] transition-all"
            >
              Join Free — No Cost →
            </a>
            <a
              href="/contact"
              className="border border-[rgba(255,162,0,0.4)] text-blue-950 px-6 py-2.5 rounded-lg text-sm hover:border-[#ffa200] hover:bg-[rgba(255,162,0,0.05)] transition-all"
            >
              Talk to Investors →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
