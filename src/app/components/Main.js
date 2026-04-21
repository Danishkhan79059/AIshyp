"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── count-up hook ─── */
function useCountUp(target, duration = 2000, start = false) {
  const [val, setVal] = useState("0");
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const raw = target.replace(/[^0-9.]/g, "");
    const prefix = target.match(/^[^0-9]*/)?.[0] ?? "";
    const suffix = target.replace(/^[^0-9]*[0-9.]+/, "");
    const num = parseFloat(raw);
    const isDecimal = raw.includes(".");
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;
      setVal(
        prefix +
        (isDecimal ? current.toFixed(1) : Math.round(current)) +
        suffix,
      );
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return val;
}

/* ─── intersection observer ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── StatCard ─── */
function StatCard({ num, label, delay = "0s", sub }) {
  const [ref, inView] = useInView();
  const value = useCountUp(num, 1800, inView);
  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.65s ease ${delay}`,
      }}
    >
      <p className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight">
        {value}
      </p>
      <p className="text-xs text-black/40 tracking-widest uppercase mt-1">
        {label}
      </p>
      {sub && (
        <p className="text-[11px] text-green-400 mt-0.5 font-medium">{sub}</p>
      )}
    </div>
  );
}

/* ─── Reveal wrapper ─── */
function Reveal({ children, delay = "0s", className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
      }}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function LandingPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [currentTrackingStep, setCurrentTrackingStep] = useState(0);
  const [activePreviewTab, setActivePreviewTab] = useState("dashboard");
  const [howVideoOpen, setHowVideoOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);



  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!howVideoOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setHowVideoOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [howVideoOpen]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTrackingStep((prev) => (prev + 1) % 4);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, 2000);

    return () => clearInterval(stepTimer);
  }, []);

  /* ── Problems ── */
  const problems = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      ),
      title: "Stuck at Small Scale",
      desc: "Independent brick-and-mortar shipping partners can't grow while large aggregators continue to dominate and scale.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
      title: "Expensive to Compete",
      desc: "Building a competitive aggregator platform requires significant capital and technical complexity — out of reach for most operators.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </svg>
      ),
      title: "No Rate Access",
      desc: "Without volume, shipping partners are locked out of competitive rates — a compounding disadvantage.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
        </svg>
      ),
      title: "No Time to Grow",
      desc: "Operators are buried in day-to-day logistics management, leaving almost no bandwidth for sales or strategic growth.",
    },
  ];

  /* ── Solutions ── */
  const solutions = [
    {
      num: "01",
      title: "Go Digital Instantly",
      points: [
        "Launch your logistics business online within minutes — no setup delays",
        "Zero technical knowledge required — everything is ready-to-use",
        "Fully white-labelled platform with your brand identity",
        "Create, manage, and track orders from a single dashboard",
        "Offer real-time shipment tracking to your customers",
        "Improve customer trust with a professional digital presence",
        "Reduce manual work and eliminate operational errors",
        "Start scaling your business from day one without heavy investment",
      ],
      img: "/Digital.png",
      accent: "text-blue-400",
    },
    {
      num: "02",
      title: "Aggregate & Unlock Rates",
      points: [
        "Leverage collective shipping volume to unlock premium pricing",
        "Access discounted courier rates usually available to large enterprises",
        "Automatically choose the best and cheapest logistics partner",
        "Optimize every shipment for cost, speed, and reliability",
        "Increase your profit margins without increasing customer prices",
        "Stay competitive in pricing against big logistics players",
        "Reduce dependency on a single courier provider",
        "Ensure consistent service quality across all shipments",
      ],
      img: "/Ratess.png",
      accent: "text-orange-400",
    },
    {
      num: "03",
      title: "Grow Partner Revenue",
      points: [
        "Receive high-quality inbound leads ready to ship",
        "Expand your reach without spending on marketing",
        "Connect with multiple logistics service providers in one place",
        "Increase customer retention with better service experience",
        "Boost average order value with smarter pricing and options",
        "Convert more inquiries into paying customers",
        "Build long-term relationships with consistent demand flow",
        "Scale your revenue predictably with continuous business growth",
      ],
      img: "/Revenue (2).png",
      accent: "text-green-400",
    },
  ];

  /* ── Adoption Steps ── */
  const adoptionSteps = [
    {
      num: "01",
      title: "Free Platform Access",
      desc: "Zero cost to join — removing all friction for new shipping partners to go digital immediately.",
    },
    {
      num: "02",
      title: "Hot Leads Delivered",
      desc: "We deliver high-intent shipping leads directly to franchisees, giving them instant value from day one.",
    },
    {
      num: "03",
      title: "Lower Rates, Instantly",
      desc: "Partners gain access to aggregated shipping rates that would otherwise be unavailable to them individually.",
    },
    {
      num: "04",
      title: "FranchiseIndia Distribution",
      desc: "Leveraging FranchiseIndia's network to reach thousands of prospective shipping franchise owners at scale.",
    },
  ];

  /* ── Competitive Advantages ── */
  const advantages = [
    {
      title: "First Mover",
      desc: "First platform to digitize and aggregate offline shipping franchisees in India.",
      icon: "🚀",
    },
    {
      title: "Demand Control",
      desc: "We own high-intent demand and route it directly to our partner network.",
      icon: "🎯",
    },
    {
      title: "Better Pricing",
      desc: "Aggregated volume unlocks rates individual partners could never negotiate alone.",
      icon: "💰",
    },
    {
      title: "Multi-LSP Access",
      desc: "Partners can access multiple logistics service providers, boosting revenue per customer.",
      icon: "🔗",
    },
    {
      title: "Strong Retention",
      desc: "Improved margins and repeat business create a sticky, high-retention partner ecosystem.",
      icon: "♻️",
    },
  ];

  /* ── Use Cases ── */
  const useCases = [
    {
      title: "Local Courier Franchise Owners",
      desc: "Digitize walk-in and WhatsApp orders, auto-compare rates, and increase daily bookings without adding ops overhead.",
      badge: "Operations",
    },
    {
      title: "Growing Regional Partners",
      desc: "Expand into new pincodes with centralized tracking, faster onboarding, and better pricing from aggregated volume.",
      badge: "Growth",
    },
    {
      title: "SME Shipping Desks",
      desc: "Give business clients multi-LSP options, COD support, and transparent tracking from one branded dashboard.",
      badge: "Enterprise",
    },
  ];

  /* ── Team ── */
  const team = [
    {
      name: "Mohit Panwar",
      role: "Founder",
      detail: "IIM Mumbai · Ex DTDC",
      initials: "MP",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Parag Aggarwal",
      role: "Full Stack Developer",
      detail: "IIM Mumbai",
      initials: "PA",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Danish Khan",
      role: "Full Stack Developer",
      detail: "",
      initials: "DK",
      color: "from-green-500 to-teal-500",
    },
    {
      name: "Manav Panwar",
      role: "Vibe Coder & Server Mgmt",
      detail: "",
      initials: "MnP",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Sudhanshu Saini",
      role: "Backend Developer",
      detail: "",
      initials: "SS",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Hitesh Saini",
      role: "Backend Developer",
      detail: "",
      initials: "HS",
      color: "from-cyan-500 to-blue-500",
    },
  ];


  const steps = [
    {
      id: 1,
      badge: "Step 01",
      icon: "📝",
      title: "Signup & Dashboard",
      description:
        "Create your account and access your dashboard to manage all shipping operations in one place.",
      points: ["Quick signup", "Access dashboard", "Manage everything centrally"],
      accent: "from-blue-600 to-indigo-600",
      softBg: "bg-blue-600/10",
      accentText: "text-blue-950",
      pointColor: "text-blue-600",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800",
    },
    {
      id: 2,
      badge: "Step 02",
      icon: "🧾",
      title: "Set Up Your Profile",
      description:
        "Complete your KYC and business profile to start shipping without any delays.",
      points: ["KYC verification", "Business details", "Warehouse setup"],
      accent: "from-[#ffa200] to-orange-500",
      softBg: "bg-[#ffa200]/15",
      accentText: "text-[#a85f00]",
      pointColor: "text-[#cc7a00]",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
    },
    {
      id: 3,
      badge: "Step 03",
      icon: "📦",
      title: "Create Your Orders",
      description:
        "Easily create and manage your orders with all necessary shipment details.",
      points: ["Add order details", "Bulk order upload", "Order management"],
      accent: "from-green-600 to-emerald-600",
      softBg: "bg-green-600/10",
      accentText: "text-green-700",
      pointColor: "text-green-600",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
    },
    {
      id: 4,
      badge: "Step 04",
      icon: "🚚",
      title: "Ship & Track",
      description:
        "Ship your orders with top courier partners and track them in real-time.",
      points: ["Choose courier", "Ship orders", "Live tracking updates"],
      accent: "from-purple-600 to-violet-600",
      softBg: "bg-purple-600/10",
      accentText: "text-purple-700",
      pointColor: "text-purple-600",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800",
    },
  ];

  /* ── Join Cards ── */
  const joinCards = [
    {
      title: "For Investors",
      desc: "A capital-efficient, high-retention platform attacking a $100B+ market with proven early traction.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
        </svg>
      ),
      cta: "Talk to Us",
      color: "from-blue-500/15 to-indigo-500/5",
      border: "border-blue-500/25",
    },
    {
      title: "For Partners",
      desc: "Go digital, access better rates, and grow your shipping business — all from one platform, for free.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      cta: "Join Free",
      color: "from-orange-500/15 to-amber-500/5",
      border: "border-orange-500/25",
    },
    {
      title: "For the Market",
      desc: "Leveling the playing field for India's thousands of independent shipping franchise operators.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      cta: "Learn More",
      color: "from-green-500/15 to-emerald-500/5",
      border: "border-green-500/25",
    },
  ];

  const trackingSteps = [
    {
      title: "Shipment Created",
      desc: "Order placed and branded link generated.",
    },
    {
      title: "Picked Courier",
      desc: "Delivery partner assigned and package picked up.",
    },
    {
      title: "Out for Delivery",
      desc: "Live movement starts and customer gets updates.",
    },
    {
      title: "Delivered",
      desc: "Shipment completed with final branded confirmation.",
    },
  ];

  const discountShippingLogos = [
    "/aramax.png",
    "/ekart.jpg",
    "/movin2.png",
    "/photoses.jpg",
    "/shipmozo.png",
    "/shadowfx.png",
    "/bluedarte.png",
  ];

  const platformPreviewTabs = [
    {
      id: "dashboard",
      label: "Dashboard",
      image: "/aydash.png",
      alt: "AIShyp dashboard preview",
    },
    {
      id: "analytics",
      label: "Analytics",
      image: "/analyticss.png",
      alt: "AIShyp analytics preview",
    },
    {
      id: "support",
      label: "Support Tickets",
      image: "/support.png",
      alt: "AIShyp support tickets preview",
    },
  ];

  const current = steps.find((s) => s.id === activeStep);


  const activePreview =
    platformPreviewTabs.find((tab) => tab.id === activePreviewTab) ??
    platformPreviewTabs[0];

  return (
    <main className="bg-white text-black overflow-x-hidden">
      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20">
        {/* grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
          }}
        />

        {/* top amber glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 65%)",
          }}
        />

        {/* floating news-style stat card — right */}
        <div
          className="hidden lg:block absolute top-32 right-8 xl:right-20"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible
              ? "translateY(0) rotate(2deg)"
              : "translateY(-20px)",
            transition: "all 0.9s ease 0.8s",
          }}
        >
          <div className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur-md px-5 py-5 w-[240px] shadow-xl">
            {/* Tag */}
            <span className="text-[10px] uppercase tracking-widest text-blue-900 font-bold">
              Platform Benefits
            </span>

            {/* Headline */}
            <p className="text-sm font-semibold text-black mt-1 leading-snug">
              Built to Grow Your Shipping Business 🚀
            </p>

            {/* Features */}
            <div className="mt-3 space-y-2">
              <div>
                <p className="text-[12px] font-semibold text-blue-950">
                  📈 Grow Partner Revenue
                </p>
                <p className="text-[11px] text-black/60">
                  Get more orders & repeat customers
                </p>
              </div>

              <div>
                <p className="text-[12px] font-semibold text-blue-950">
                  🤝 Aggregate & Unlock Rates
                </p>
                <p className="text-[11px] text-black/60">
                  Access better courier pricing through volume
                </p>
              </div>

              <div>
                <p className="text-[12px] font-semibold text-blue-950">
                  ⚡ Go Digital Instantly
                </p>
                <p className="text-[11px] text-black/60">
                  Manage bookings, tracking & billing in one place
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-black/10 my-3"></div>

            {/* Bottom line */}
            <p className="text-[11px] text-blue-900 font-semibold">
              💡 Everything you need to scale — in one platform
            </p>
          </div>
        </div>

        {/* floating news-style stat card — right */}

        {/* floating value card — left */}
        <div
          className="hidden lg:block absolute bottom-40 left-8 xl:left-16"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible
              ? "translateY(0) rotate(-2deg)"
              : "translateY(20px)",
            transition: "all 0.9s ease 1s",
          }}
        >
          <div className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur-md px-5 py-5 w-[240px] shadow-xl">
            {/* Tag */}
            <span className="text-[10px] uppercase tracking-widest text-blue-900 font-bold">
              For Franchise Partners
            </span>

            {/* Headline */}
            <p className="text-sm font-semibold text-black mt-1 leading-snug">
              More Business. Better Margins.
            </p>

            {/* Description */}
            <p className="text-[12px] text-black/60 mt-2 leading-relaxed">
              Grow your shipping franchise with better courier rates,
              high-quality leads, and powerful tools — all in one platform.
            </p>

            {/* Key highlights */}
            <div className="mt-3 space-y-1">
              <p className="text-[11px] text-black/70">
                ✔ White-label platform
              </p>
              <p className="text-[11px] text-black/70">✔ Hot leads provided</p>
              <p className="text-[11px] text-black/70">✔ No upfront cost</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-black/10 my-3"></div>

            {/* Bottom CTA style line */}
            <p className="text-[11px] text-blue-900 font-semibold">
              🚀 Free to join • Start instantly
            </p>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Logo row */}
          {/* <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(-12px)",
              transition: "all 0.6s ease 0.05s",
            }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(90deg, #1e3a8a, #172554)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
            </div>
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-black">AI</span>
              <span className="text-blue-950">Shyp</span>
            </span>
          </div> */}

          {/* Badge */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(-12px)",
              transition: "all 0.7s ease 0.15s",
            }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ffa200]/30  text-blue-950 text-xs font-semibold tracking-widest uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffa200] text-blue-950 animate-pulse" />
            Franchise-Driven Shipping Aggregator Platform
          </div>

          {/* Headline */}
          <h1
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.8s ease 0.3s",
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-4 text-blue-950"
          >
            More Business,
            <br />
            Better Margins for{" "}
            <span className="text-red-500">Shipping Partners</span>
          </h1>

          {/* Sub */}
          <p
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.45s",
            }}
            className="text-black md:text-lg  max-w-2xl mx-auto leading-relaxed mb-10"
          >
            The white-label aggregation platform that digitizes and grows local
            shipping franchisees with better rates, hot leads, and modern tools
            — all under one roof. Free to join.
          </p>

          {/* CTAs */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.6s",
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#join"
              className="relative overflow-hidden flex items-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-bold text-white transition-all duration-300  hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(96,165,250,0.35)] group"
              style={{ background: "linear-gradient(90deg, #1e3a8a, #172554)" }}
            >
              <span
                className="absolute top-0 left-[-100%] w-full h-full group-hover:left-full transition-all duration-600"
                style={{
                  background: "linear-gradient(90deg, #1e3a8a, #172554)",
                }}
              />
              Join the Network — Free
            </a>
            <button
              type="button"
              onClick={() => setHowVideoOpen(true)}
              className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-[15px] font-semibold text-black/70 border border-black/15 hover:text-black hover:border-black/30 hover:bg-black/5 transition-all duration-300"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              See How It Works
            </button>
          </div>

          {/* Hero stats */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transition: "all 0.8s ease 0.75s",
            }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-14 mb-12"
          >
            {[
              { val: "$100B+", label: "Total Market (TAM)" },
              { val: "₹2Cr", label: "Seed Funding Sought" },
              { val: "50+", label: "Active Partners" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-black">
                  {s.val}
                </p>
                <p className="text-[11px] text-black/35 uppercase tracking-widest mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Contact row */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transition: "all 0.8s ease 0.88s",
            }}
            className="flex flex-wrap items-center justify-center gap-5 md:gap-8 text-sm text-black"
          >
            <span className="flex items-center gap-2 text">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              aishyp.com
            </span>
            <span className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              India-wide Network
            </span>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══ */}
      {/* <section className="">
        <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          <StatCard
            num="2000+"
            label="Orders/Day Target"
            delay="0s"
            sub="↑ Scaling fast"
          />
          <StatCard num="100+" label="Billion TAM (USD)" delay="0.12s" />
          <StatCard num="15+" label="Billion SAM (USD)" delay="0.24s" />
          <StatCard num="50+" label="Active Partners" delay="0.36s" />
        </div>
      </section> */}

      {/* ══ SOLUTION ══ */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          {/* HEADER */}
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-[11px] font-bold tracking-[4px] uppercase text-blue-950">
                Our Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
                One Platform. Three Game-Changers.
              </h2>
              <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                AIShyp gives shipping partners the tools, rates, and leads to
                compete and scale — overnight.
              </p>
            </div>
          </Reveal>

          {/* CONTENT */}
          <div className="space-y-20">
            {solutions.map((s, i) => (
              <Reveal key={s.num}>
                <div
                  className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* IMAGE */}
                  <div className="md:w-1/2">
                    <div className="w-full h-[50%] flex items-center justify-center bg-gray-100 rounded-2xl shadow-lg p-2">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-auto object-contain rounded-2xl"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="md:w-1/2">
                    <div
                      className={`text-5xl font-extrabold mb-4 opacity-20 ${s.accent}`}
                    >
                      {s.num}
                    </div>

                    <h3 className="text-2xl font-bold text-black mb-4">
                      {s.title}
                    </h3>

                    {/* BULLET LIST */}
                    <ul className="space-y-3">
                      {s.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-black-700 text-sm"
                        >
                          <span
                            className={`mt-2 w-2 h-2 rounded-full text-black bg-current `}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PLATFORM PREVIEW ══ */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 pb-6 md:pb-12">
          <Reveal className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ffa200]/30  text-blue-950 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffa200]" />
              Platform Preview
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-blue-950">
              Everything you need,
              <span className="text-red-500"> in one dashboard</span>
            </h2>
            <p className="text-black mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              A focused view for orders, analytics, and support so partners can
              run daily shipping operations faster.
            </p>
          </Reveal>

          <Reveal delay="0.12s">
            <div className="rounded-[28px] border border-black/10 bg-white shadow-[0_22px_75px_rgba(17,24,39,0.09)] p-4 md:p-6 lg:p-8">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                {platformPreviewTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActivePreviewTab(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold border transition-all duration-200 ${activePreviewTab === tab.id
                        ? "bg-[#ffa200]/15 text-blue-950 border-[#ffa200]/35"
                        : "bg-white text-black/70 border-black/15 hover:border-black/30 hover:text-black"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-black/10 overflow-hidden bg-white">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/10 bg-black/[0.02]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] md:text-xs text-black/45 font-semibold tracking-wide">
                    aishyp.com
                  </span>
                  <span className="text-[10px] md:text-xs text-blue-950 font-semibold">
                    Live Platform
                  </span>
                </div>

                <img
                  src={activePreview.image}
                  alt={activePreview.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-all duration-300"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ffa200]/30  text-blue-950 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffa200]" />
              ⚡ Simple Process
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 text-blue-950">
              How It <span className="text-[#ffa200]">Works</span>
            </h2>
            <p className="text-black/60 mt-3 max-w-2xl mx-auto text-base leading-relaxed">
              Streamline your shipping process in just four simple steps with our
              user-friendly platform
            </p>
          </div>

          {/* Step Progress */}
          <div className="flex items-center justify-center mb-12 overflow-x-auto pb-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center min-w-fit">
                {/* Circle */}
                <div
                  onClick={() => setActiveStep(step.id)}
                  className={`w-11 h-11 flex items-center justify-center rounded-full cursor-pointer text-sm font-bold border transition-all
              ${activeStep === step.id
                      ? "bg-[#ffa200] text-white border-[#ffa200] shadow-lg shadow-[#ffa200]/35"
                      : activeStep > step.id
                        ? "bg-blue-950 text-white border-blue-950"
                        : "bg-white text-black/50 border-black/15 hover:border-black/25"
                    }`}
                >
                  {step.id}
                </div>

                {/* Line */}
                {index !== steps.length - 1 && (
                  <div
                    className={`w-14 md:w-24 h-1 transition-all
                ${activeStep > step.id
                        ? "bg-blue-950"
                        : "bg-black/10"
                      }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${current.accent} flex items-center justify-center text-white text-xl shadow-md`}
                >
                  {current.icon}
                </div>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${current.softBg} ${current.accentText}`}
                >
                  {current.badge}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-blue-950 mb-3">
                {current.title}
              </h3>

              <p className="text-black/60 mb-5 leading-relaxed">{current.description}</p>

              <ul className="space-y-2">
                {current.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-black/75">
                    <span className={current.pointColor}>✔</span> {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl border border-black/10 shadow-xl p-4">
                <img
                  src={current.image}
                  alt="step"
                  className="w-full h-[280px] object-cover rounded-xl"
                />
              </div>

              {/* Floating Badge */}
              {/* <div className="absolute top-4 right-4 bg-white border border-black/10 px-3 py-1 rounded-full shadow text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ffa200] rounded-full"></span>
            Live Status
          </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROBLEM ══ */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        {/* HEADER */}
        <Reveal className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[4px] uppercase text-red-500">
            The Problem
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-blue-950 leading-tight">
            What’s Slowing Down <br className="hidden md:block" />
            Shipping Franchise Growth
          </h2>

          <p className="text-black/60 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Independent shipping partners struggle to compete due to limited
            access to pricing power, technology, and consistent business
            opportunities.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={`${i * 0.08}s`}>
              <div
                onMouseEnter={() => setActiveCard(`p-${i}`)}
                onMouseLeave={() => setActiveCard(null)}
                className={`
            group p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden
            ${activeCard === `p-${i}`
                    ? "border-red-400/40 bg-red-500/5 scale-[1.03] shadow-lg"
                    : "border-black/10 bg-white hover:scale-[1.02] hover:shadow-md"
                  }
          `}
              >
                {/* subtle gradient glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-red-500/5 to-transparent"></div>

                <div className="flex items-start gap-4 relative z-10">
                  {/* ICON */}
                  <div
                    className={`
              w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center
              border transition-all duration-300
              ${activeCard === `p-${i}`
                        ? "bg-red-500 text-white border-red-500 shadow-md"
                        : "bg-red-500/10 border-red-500/20 text-red-500 group-hover:bg-red-500 group-hover:text-white"
                      }
            `}
                  >
                    {p.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-base font-bold text-black mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-sm text-black/60 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ MARKET SIZE ══ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Reveal className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[4px] uppercase text-blue-950">
            Market Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            A Massive, Underserved Market
          </h2>
          <p className="text-black mt-3 max-w-xl mx-auto text-base leading-relaxed">
            Shipping and logistics franchises are among the most searched brands
            on FranchiseIndia.com — the demand signal is clear.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: "Total Addressable Market",
              val: "$100B+",
              sub: "Global & domestic logistics (₹10,00,000 Cr+)",
              color: "text-blue-950",
              bg: "bg-[#ffa200]/10 border-[#ffa200]/20",
            },
            {
              label: "Serviceable Available Market",
              val: "$15B",
              sub: "Organized shipping and franchise logistics segment",
              color: "text-blue-500",
              bg: "bg-blue-500/10 border-blue-500/20",
            },
            {
              label: "Serviceable Obtainable Market",
              val: "$50M",
              sub: "Realistic near-term capture through our platform",
              color: "text-green-500",
              bg: "bg-green-500/10 border-green-500/20",
            },
          ].map((m, i) => (
            <Reveal key={m.label} delay={`${i * 0.1}s`}>
              <div
                className={`p-7 rounded-2xl border text-center transition-all duration-300 hover:scale-[1.02] ${m.bg}`}
              >
                <p
                  className={`text-4xl md:text-5xl font-extrabold mb-2 ${m.color}`}
                >
                  {m.val}
                </p>
                <p className="text-sm font-bold text-black mb-2">{m.label}</p>
                <p className="text-xs text-black/40 leading-relaxed">{m.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Market validation callout */}
        <Reveal>
          <div className="p-7 rounded-2xl border border-[#ffa200]/20  flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-[#ffa200]/15 border border-[#ffa200]/30 text-blue-950">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-black mb-1">
                Market Validation
              </p>
              <p className="text-sm text-black leading-relaxed">
                Logistics players like DHL Logistics, Xpressbees, Ecom Express,
                and Delhivery rank in the top tier of April 2026 searches on
                FranchiseIndia.com — confirming massive organic demand for
                shipping franchise opportunities.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══ HOW WE DRIVE ADOPTION ══ */}
      <section id="how" className="bg-white ">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <Reveal className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[4px] uppercase text-blue-950">
              How We Drive Adoption
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
              Built for Zero-Friction Onboarding
            </h2>
            <p className="text-black/40 mt-3 text-base">
              Four pillars that make joining AIShyp a no-brainer for any
              shipping partner.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-9 left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-[#ffa200]/25 to-transparent" />

            {adoptionSteps.map((step, i) => (
              <Reveal
                key={step.num}
                delay={`${i * 0.1}s`}
                className="relative flex flex-col items-center text-center h-full"
              >
                {/* Number Box */}
                <div className="w-16 h-16 flex-shrink-0 mx-auto rounded-2xl flex items-center justify-center mb-5 border border-[#ffa200]/30 bg-[#ffa200]/10 relative z-10">
                  <span className="text-xl font-extrabold text-blue-950">
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-black mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-black leading-relaxed flex-grow">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY AISHYP WINS ══ */}
      <section className="bg-white ">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[4px] uppercase text-blue-950">
              Use Cases
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
              Who Gets the Most Value from AIShyp
            </h2>
            <p className="text-black mt-3 max-w-2xl mx-auto text-base leading-relaxed">
              Built for real-world shipping workflows across franchise owners,
              regional operators, and high-volume business desks.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((item, i) => (
              <Reveal key={item.title} delay={`${i * 0.1}s`}>
                <div className="h-full p-7 rounded-2xl border border-black/10 bg-white hover:border-[#ffa200]/25 hover:shadow-md transition-all duration-300">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-blue-950 bg-[#ffa200]/10 border border-[#ffa200]/20">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-bold text-black mt-4 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-black/45 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[4px] uppercase text-blue-950">
              Why AIShyp Wins
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4 leading-tight">
              Built on Structural
              <br />
              Advantages That Last.
            </h2>
            <p className="text-black text-base leading-relaxed mb-8">
              AIShyp isn't just a tech platform — it's a network with
              compounding advantages. First mover position, demand ownership,
              and aggregated pricing power create a moat that deepens with every
              new partner.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {advantages.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 p-4 rounded-xl border border-black/8 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-cente border border-[#ffa200]/20 mt-0.5 text-lg">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black leading-snug">
                      {f.title}
                    </p>
                    <p className="text-xs text-black mt-0.5 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Financials mock */}
          <Reveal delay="0.2s">
            <div className="relative rounded-3xl border border-black/10 bg-white p-6 overflow-hidden shadow-lg">
              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,162,0,0.06), transparent 70%)",
                }}
              />
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-black/50 tracking-widest uppercase">
                  Financials
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] text-blue-950 font-bold px-2.5 py-1 rounded-full bg-[#ffa200]/10 border border-[#ffa200]/20">
                  Seed Stage
                </span>
              </div>
              {[
                {
                  label: "Funding Required",
                  val: "₹2 Crore",
                  sub: "Seed capital for growth",
                  color: "text-blue-950",
                },
                {
                  label: "Orders Per Day (Target)",
                  val: "2,000",
                  sub: "Avg daily order volume target",
                  color: "text-blue-500",
                },
                {
                  label: "Aggregated Volume Revenue",
                  val: "₹6 Crore",
                  sub: "Revenue through shipping volume",
                  color: "text-green-500",
                },
                {
                  label: "Platform Fees",
                  val: "₹50 Lakh",
                  sub: "Recurring fee revenue from partners",
                  color: "text-purple-500",
                },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between py-3.5 ${i < 3 ? "border-b border-black/6" : ""}`}
                >
                  <div>
                    <p className="text-xs font-bold text-black">{row.label}</p>
                    <p className="text-[11px] text-black/35 mt-0.5">
                      {row.sub}
                    </p>
                  </div>
                  <span className={`text-lg font-extrabold ${row.color}`}>
                    {row.val}
                  </span>
                </div>
              ))}
              <div className="mt-5 pt-4 border-t border-black/6">
                <p className="text-[11px] text-black/35 mb-3 tracking-wide uppercase font-medium">
                  Revenue Breakdown
                </p>
                <div className="flex items-end gap-1.5 h-14">
                  {[30, 55, 40, 70, 60, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all duration-500"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 5
                            ? "linear-gradient(135deg,#ffa200,#ff6b00)"
                            : "rgba(0,0,0,0.07)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1.5">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <span
                      key={i}
                      className="flex-1 text-center text-[10px] text-black/25"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ BRANDED TRACKING ══ */}
      <section className="bg-white ">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal>
            <div className="w-full rounded-[28px] border border-[#ffa200]/20 p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-10 overflow-hidden relative">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,162,0,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,162,0,0.05) 1px,transparent 1px)",
                  backgroundSize: "34px 34px",
                  maskImage:
                    "radial-gradient(circle at center, black 20%, transparent 80%)",
                }}
              />
              <div className="max-w-lg">
                <span className="text-[11px] font-bold tracking-[4px] uppercase text-blue-950">
                  Branded Experience
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">
                  Branded <span className="text-blue-950">Tracking</span>
                </h2>
                <p className="text-black/55 text-base leading-relaxed">
                  Upload your logo, social media, and website links to send
                  shareable tracking links to your customers.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold text-black/70 bg-white border border-black/10 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#ffa200]" />
                    Live step-by-step updates
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold text-black/70 bg-white border border-black/10 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Shareable branded link
                  </span>
                </div>
              </div>

              <div className="w-full max-w-2xl relative">
                <div className="relative rounded-[26px] border border-black/10 bg-white/90 backdrop-blur-sm shadow-[0_24px_80px_rgba(17,24,39,0.08)] p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div>
                      <p className="text-xs font-bold tracking-[3px] uppercase text-blue-950">
                        Tracking Journey
                      </p>
                      <p className="text-xl font-extrabold text-black mt-2">
                        Shipment moving to the customer
                      </p>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-[#ffa200]/10 border border-[#ffa200]/20 text-blue-950 text-xs font-bold"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#ffa200]" />
                      Live Status
                    </motion.div>
                  </div>

                  <div className="relative mb-10 hidden md:block">
                    <div className="absolute left-[8%] right-[8%] top-5 h-1 rounded-full bg-black/8" />
                    <motion.div
                      className="absolute left-[8%] top-5 h-1 rounded-full"
                      style={{
                        background: "linear-gradient(90deg,#ffa200,#ff6b00)",
                      }}
                      initial={false}
                      animate={{
                        width: `${currentTrackingStep === 0 ? 0 : currentTrackingStep * (84 / 3)}%`,
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute top-0 -translate-x-1/2"
                      initial={false}
                      animate={{
                        left: `calc(8% + ${currentTrackingStep * 28}%)`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 16,
                      }}
                    >
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                        style={{
                          background: "linear-gradient(135deg,#ffa200,#ff6b00)",
                        }}
                      >
                        <Truck className="w-6 h-6" />
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="grid gap-4">
                    {trackingSteps.map((step, index) => {
                      const isDone = index < currentTrackingStep;
                      const isActive = index === currentTrackingStep;

                      return (
                        <motion.div
                          key={step.title}
                          initial={false}
                          animate={{
                            borderColor: isActive
                              ? "rgba(255,162,0,0.35)"
                              : isDone
                                ? "rgba(34,197,94,0.25)"
                                : "rgba(17,24,39,0.08)",
                            backgroundColor: isActive
                              ? "rgba(255,162,0,0.08)"
                              : isDone
                                ? "rgba(34,197,94,0.05)"
                                : "rgba(255,255,255,0.95)",
                            y: isActive ? -2 : 0,
                            scale: isActive ? 1.01 : 1,
                          }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                          className="rounded-2xl border p-4 md:p-5"
                        >
                          <div className="flex items-start gap-4">
                            <motion.div
                              initial={false}
                              animate={{
                                scale: isActive ? [1, 1.08, 1] : 1,
                                background: isDone
                                  ? "linear-gradient(135deg,#22c55e,#16a34a)"
                                  : isActive
                                    ? "linear-gradient(135deg,#ffa200,#ff6b00)"
                                    : "linear-gradient(135deg,#ffffff,#f5f5f5)",
                              }}
                              transition={{
                                duration: isActive ? 1.2 : 0.4,
                                repeat: isActive ? Infinity : 0,
                                ease: "easeInOut",
                              }}
                              className="w-12 h-12 rounded-2xl border border-black/10 flex items-center justify-center shrink-0 shadow-sm"
                            >
                              <AnimatePresence mode="wait">
                                {isDone ? (
                                  <motion.div
                                    key="done"
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.6, opacity: 0 }}
                                  >
                                    <CheckCircle className="w-6 h-6 text-white" />
                                  </motion.div>
                                ) : (
                                  <motion.span
                                    key="count"
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.7, opacity: 0 }}
                                    className={`text-sm font-extrabold ${isActive ? "text-white" : "text-black/60"}`}
                                  >
                                    {index + 1}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </motion.div>

                            <div className="flex-1 pt-1">
                              <div className="flex items-center justify-between gap-4">
                                <p className="text-sm md:text-base font-bold text-black">
                                  {step.title}
                                </p>
                                <span
                                  className={`text-[10px] md:text-xs font-bold uppercase tracking-[2px] ${isDone
                                      ? "text-green-600"
                                      : isActive
                                        ? "text-blue-950"
                                        : "text-black/35"
                                    }`}
                                >
                                  {isDone
                                    ? "Done"
                                    : isActive
                                      ? "In Transit"
                                      : "Pending"}
                                </span>
                              </div>
                              <p className="text-sm text-black/45 mt-1.5 leading-relaxed">
                                {step.desc}
                              </p>

                              {isActive && (
                                <motion.div
                                  initial={{ width: "0%" }}
                                  animate={{ width: "100%" }}
                                  transition={{
                                    duration: 1.45,
                                    ease: "linear",
                                  }}
                                  className="h-1 rounded-full mt-4"
                                  style={{
                                    background:
                                      "linear-gradient(90deg,#ffa200,#ff6b00)",
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ COMPARE RATES (UI PANEL) ══ */}
      <section className="bg-white ">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(17,24,39,0.08)]">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 65%)",
                }}
              />
              <div className="absolute inset-0 pointer-events-none border-2 border-[#ffa200]/20 rounded-[30px]" />

              <div className="relative grid lg:grid-cols-2 gap-10 items-center p-8 md:p-10 lg:p-12">
                {/* left */}
                <div className="max-w-xl">
                  <span className="text-[11px] font-bold tracking-[4px] uppercase text-blue-950">
                    Pricing
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
                    Compare{" "}
                    <span
                      className="text-red-500 bg-clip-text"
                    // style={{
                    //   backgroundImage:
                    //     "linear-gradient(135deg,#ffa200,#ff6b00)",
                    // }}
                    >
                      Rates
                    </span>
                  </h2>
                  <p className="text-black/55 text-base leading-relaxed mt-4">
                    Shipping rates are presented so you can compare price,
                    transit time, and ratings — and pick the best option
                    instantly.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold text-black/70 bg-white border border-black/10 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#ffa200]" />
                      Best price selection
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold text-black/70 bg-white border border-black/10 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      Transit time visibility
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold text-black/70 bg-white border border-black/10 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      Partner ratings
                    </span>
                  </div>
                </div>

                {/* right */}
                <div className="relative">
                  {/* background arrow-ish accent */}
                  <div
                    className="absolute -left-10 top-1/2 -translate-y-1/2 w-44 h-44 rounded-[32px] rotate-45 pointer-events-none hidden md:block"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,162,0,0.12), rgba(255,107,0,0.06))",
                    }}
                  />
                  <div
                    className="absolute -left-2 top-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl pointer-events-none hidden md:block"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(17,24,39,0.10) 0%, transparent 70%)",
                    }}
                  />

                  <div className="relative rounded-[26px] border border-black/10 bg-white/85 backdrop-blur-sm shadow-[0_20px_70px_rgba(17,24,39,0.10)] p-6 md:p-7 overflow-hidden">
                    <div className="flex items-center justify-between mb-5">
                      <p className="text-xs font-bold tracking-[3px] uppercase text-black/45">
                        Available Carriers
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-[2px] text-blue-950 bg-[#ffa200]/10 border border-[#ffa200]/20 px-2.5 py-1 rounded-full">
                        Live
                      </span>
                    </div>

                    <div className="relative h-[360px] overflow-hidden">
                      <motion.div
                        aria-hidden="true"
                        animate={{ y: ["0%", "-45%", "0%"] }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="space-y-3"
                      >
                        {[
                          {
                            name: "BlueDart",
                            price: "₹8.22",
                            sub: "2–3 days",
                            color: "from-blue-500 to-indigo-500",
                          },
                          {
                            name: "FedEx",
                            price: "₹12.35",
                            sub: "3–5 days",
                            color: "from-violet-500 to-purple-500",
                          },
                          {
                            name: "Delhivery",
                            price: "₹14.19",
                            sub: "1–2 days",
                            color: "from-yellow-500 to-amber-500",
                          },
                          {
                            name: "DHL",
                            price: "₹13.26",
                            sub: "2–4 days",
                            color: "from-orange-500 to-amber-500",
                          },
                          {
                            name: "Express",
                            price: "₹9.12",
                            sub: "3–4 days",
                            color: "from-emerald-500 to-teal-500",
                          },
                          {
                            name: "Post",
                            price: "₹10.48",
                            sub: "4–6 days",
                            color: "from-slate-500 to-zinc-500",
                          },
                        ].map((c, idx) => (
                          <motion.div
                            key={c.name}
                            animate={{
                              y: [-4, 4, -4],
                              scale: [1, 1.03, 1],
                            }}
                            transition={{
                              duration: 2.4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: idx * 0.18,
                            }}
                            className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-12 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-sm bg-gradient-to-br ${c.color}`}
                              >
                                {c.name.slice(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <p className="text-sm font-extrabold text-black leading-tight">
                                  {c.name}
                                </p>
                                <p className="text-[11px] text-black/40 mt-0.5">
                                  {c.sub}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-extrabold text-black">
                                {c.price}
                              </p>
                              <p className="text-[11px] text-black/35 mt-0.5">
                                est. rate
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>

                      <div
                        className="absolute inset-x-0 top-0 h-10 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
                        }}
                      />
                      <div
                        className="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ DISCOUNTED SHIPPING ══ */}
      <section className="bg-white ">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(17,24,39,0.08)]">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 65%)",
                }}
              />
              <div className="absolute inset-0 pointer-events-none border-2 border-[#ffa200]/18 rounded-[30px]" />

              <div className="relative w-full p-8 md:p-10 lg:p-12 grid md:grid-cols-[240px_1fr] gap-10 items-center">
                {/* LEFT: scrolling logos */}
                <div className="relative h-[320px] w-full max-w-[220px] mx-auto overflow-hidden">
                  <motion.div
                    aria-hidden="true"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-x-0 top-0 space-y-6"
                  >
                    {[...discountShippingLogos, ...discountShippingLogos].map(
                      (logo, index) => (
                        <div
                          key={`${logo}-${index}`}
                          className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto border border-black/10 shadow-[0_18px_50px_rgba(17,24,39,0.10)]"
                        >
                          <img
                            src={logo}
                            alt="logo"
                            loading="lazy"
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                      ),
                    )}
                  </motion.div>

                  <div
                    className="absolute inset-x-0 top-0 h-14 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-14 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
                    }}
                  />
                </div>

                {/* RIGHT: copy */}
                <div className="relative max-w-2xl text-center md:text-left">
                  <span className="text-[11px] font-bold tracking-[4px] uppercase text-blue-950">
                    Savings
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">
                    Discounted <span className="text-red-500">Shipping</span>
                  </h2>
                  <p className="text-black/55 text-base md:text-lg leading-relaxed">
                    AIShyp combines volume from all our shippers to get the best
                    rates — and passes those savings back to you.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold text-black/70 bg-white border border-black/10 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#ffa200]" />
                      Aggregated volume pricing
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold text-black/70 bg-white border border-black/10 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      Savings passed to you
                    </span>
                  </div>

                  <div
                    className="absolute -right-6 -bottom-14 text-[210px] font-extrabold leading-none pointer-events-none select-none hidden md:block"
                    style={{ color: "rgba(147,197,253,0.10)" }}
                  >
                    %
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ TESTIMONIAL ══ */}
      <section className="bg-white ">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <Reveal className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[4px] uppercase text-blue-950">
              Partner Love
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
              Real Feedback. Real Results.
            </h2>
            <p className="text-black mt-3 text-base">
              The kind of validation that matters most — from our partners
              themselves.
            </p>
          </Reveal>

          <Reveal>
            <div className="p-8 md:p-10 rounded-3xl border border-[#ffa200]/20  text-center">
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#ffa200"
                  >
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg md:text-xl text-black/70 leading-relaxed italic mb-8 max-w-2xl mx-auto">
                "Your efforts are truly appreciable. Thank you for working with
                us — this is genuinely commendable work."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-extrabold text-white flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#ffa200,#ff6b00)",
                  }}
                >
                  N
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-black">Nitin</p>
                  <p className="text-xs text-black/40">
                    AIShyp Network Partner
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ TEAM ══ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Reveal className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[4px] uppercase text-blue-950">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            The People Behind AIShyp
          </h2>
          <p className="text-black/40 mt-3 max-w-xl mx-auto text-base leading-relaxed">
            A tight-knit team of operators and engineers building India's
            logistics future.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={`${i * 0.08}s`}>
              <div className="p-6 rounded-2xl border border-black/8 bg-white hover:border-[#ffa200]/25 hover:shadow-md transition-all duration-300 flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-base font-extrabold text-white bg-gradient-to-br ${member.color}`}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-black">{member.name}</p>
                  <p className="text-xs text-blue-950 font-semibold mt-0.5">
                    {member.role}
                  </p>
                  {member.detail && (
                    <p className="text-[11px] text-black/35 mt-0.5">
                      {member.detail}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ JOIN — CTA ══ */}
      <section id="join" className="max-w-5xl mx-auto px-6 py-24">
        <Reveal className="text-center mb-12">
          <span className="text-[11px] font-bold tracking-[4px] uppercase text-blue-950">
            Join the AIShyp Network
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-4 leading-tight">
            The future of shipping belongs to{" "}
            <span className="text-red-500">connected partners</span>
          </h2>
          <p className="text-black text-base max-w-xl mx-auto leading-relaxed">
            Not isolated operators. Join AIShyp today — and start competing on
            equal footing with the biggest names in Indian logistics.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {joinCards.map((card, i) => (
            <Reveal key={card.title} delay={`${i * 0.1}s`}>
              <div
                className={`p-7 rounded-2xl border bg-gradient-to-br h-full flex flex-col ${card.color} ${card.border} hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/50 border border-black/10 text-black/60 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-black mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-black leading-relaxed flex-1 mb-5">
                  {card.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs text-blue-950 font-bold hover:gap-2 transition-all duration-200"
                >
                  {card.cta}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-[#ffa200]/18"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,162,0,0.07) 0%, rgba(255,107,0,0.04) 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,162,0,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,162,0,0.035) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10">
              <p className="text-black text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Ready to go digital, access better rates, and grow your shipping
                business?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="relative overflow-hidden flex items-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(96,165,250,0.35)] group"
                  style={{
                    background: "linear-gradient(90deg, #1e3a8a, #172554)",
                  }}
                >
                  <span
                    className="absolute top-0 left-[-100%] w-full h-full group-hover:left-full transition-all duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)",
                    }}
                  />
                  Join the Network — It's Free
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-semibold text-black/65 border border-black/15 hover:text-black hover:border-black/30 hover:bg-black/5 transition-all duration-300"
                >
                  Contact for Investment
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="border-t border-black/10 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #ef4444, #172554)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z" />
              </svg>
            </div>
            <span className="text-lg font-extrabold">
              <span className="text-black">AI</span>
              <span className="text-blue-950">Shyp</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-5 text-sm text-black">
            <span>More business. Better margins.</span>
            <span>·</span>
            <span>India's First Shipping Partner Aggregator</span>
          </div>
          <p className="text-xs text-black">
            © 2026 AIShyp. All rights reserved.
          </p>
        </div>
      </footer>

      <AnimatePresence>
        {howVideoOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setHowVideoOpen(false);
            }}
          >
            {/* BACKDROP */}
            <div className="absolute inset-0 bg-black/70" />

            {/* MODAL BOX */}
            <motion.div
              className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-black shadow-2xl overflow-hidden"
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black">
                <p className="text-sm font-bold text-white tracking-wide">
                  How AIShyp Works
                </p>

                <button
                  onClick={() => setHowVideoOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  ✕
                </button>
              </div>

              {/* VIDEO */}
              <div className="bg-black">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/APA85mhQ5ho?autoplay=1&rel=0"
                  title="How AIShyp Works"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
