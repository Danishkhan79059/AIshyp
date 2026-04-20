import Image from "next/image";

const heroHighlights = [
  "One dashboard control",
  "Manage orders seamlessly",
  "Mobile + desktop accessibility",
  "Simple clean dashboard",
];

const trackingSteps = [
  "Order Created",
  "Courier Assigned",
  "Shipment Picked",
  "In Transit",
  "Out for Delivery",
  "Delivered",
];

const automationCards = [
  {
    title: "Flat-Rate Shipping",
    text: "Predictable billing with transparent shipping charges to protect margins and simplify cost planning.",
  },
  {
    title: "Single Platform for B2B Freight and B2C",
    text: "Handle B2B parcels and B2C orders from one platform with unified tracking and reporting.",
  },
  {
    title: "Branded Labels and Invoices",
    text: "Generate professional labels and invoices with your brand identity for cleaner dispatch operations.",
  },
  {
    title: "One-Click Store Integration",
    text: "Connect Shopify and other stores quickly to automate order sync and reduce manual work.",
  },
];

const ndrSections = [
  {
    title: "Automated Order Confirmation",
    description:
      "Verify orders through WhatsApp and IVR before shipping to minimize impulse cancellations, avoid doorstep rejections, and improve successful delivery rate.",
    image: "/whats.png",
    reverse: false,
  },
  {
    title: "Automated NDR Workflows",
    description:
      "Handle undelivered orders with automation + human support. Follow up via WhatsApp and IVR, then step in through call support for timely reattempts and reduced RTO.",
    image: "/ndr.png",
    reverse: true,
  },
];

const imageSections = [
 {
  badge: "Branded Experience",
  title: "Branded Tracking Page",
  description:
    "AIShyp’s branded tracking page allows you to provide real-time shipment tracking while maintaining your brand identity.",
  details:
    "Enhance customer experience, build trust, and reduce support queries with a fully customizable and professional tracking interface.",
  image: "/tracking.png",
  reverse: false,
  highlights: [
    "Custom branded tracking page",
    "Live order status visibility",
    "Reduced support queries",
    "Improved customer trust",
  ],
},
{
  badge: "Tech-Enabled",
  title: "Unified Dashboard",
  description:
    "AIShyp’s tech-enabled shipping dashboard provides complete logistics control from a single platform, accessible on both mobile and desktop devices.",
  details:
    "Manage orders, track shipments in real time, monitor performance, and make smarter shipping decisions with a clean and scalable dashboard.",
  image: "/dashboardai.png",
  reverse: false,
  highlights: [
    "One dashboard, complete control",
    "Seamless order management",
    "Accessible on mobile and desktop",
  ],
},
  {
    badge: "Quick COD",
    title: "Remittance",
    description:
      "Fast COD remittance with D+1 / D+2 payouts helps sellers improve cash flow with no extra hidden charges.",
    details:
      "Real-time visibility ke saath transparent settlement workflows, quick payouts, aur smooth reconciliation operations.",
    image: "/cod.png",
    reverse: true,
    highlights: [
      "Get paid in 1-2 days",
      "No extra fees",
      "Daily and weekly settlements",
      "Better business cash flow",
    ],
  },
];

const sections = [
  {
    title: "Tracking and Shipment Visibility",
    subtitle: "Track order created se delivery tak",
    points: [
      "Tracking from order created to final delivery on one timeline",
      "Compare couriers before booking every shipment",
      "Generate AWB + labels in one click",
      "Email and SMS notifications to customers",
    ],
  },
  {
    title: "Integrations and Multi-LSP Stack",
    subtitle: "All channels connected in one place",
    points: [
      "Multiple LSP support from a single panel",
      "Shopify integration for auto order sync",
      "WhatsApp integration for customer updates",
      "Single platform for B2B freight and B2C branded labels",
      "Branded labels and invoices for every order",
    ],
  },
  {
    title: "Automation and Cost Efficiency",
    subtitle: "Faster ops with better rates",
    points: [
      "AI-powered courier allocation",
      "Quick COD remittance workflows",
      "Best shipping rates across partnered carriers",
      "Flat-rate shipping support for predictable costing",
      "No platform fee model",
    ],
  },
  {
    title: "NDR, RTO and Support",
    subtitle: "Delivery failure recovery engine",
    points: [
      "RTO reduction using structured NDR workflows",
      "Free NDR calling support",
      "Priority customer support for urgent operations",
      "High control dashboard for operations teams",
    ],
  },
];

function FeatureCard({ title, subtitle, points }) {
  return (
    <div className="rounded-2xl border border-blue-900/15 bg-blue-50/60 p-6">
      <p className="text-[11px] font-bold tracking-[2px] uppercase text-blue-700">
        {subtitle}
      </p>
      <h3 className="mt-2 text-lg font-bold text-blue-950">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {points.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-black/80">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImageTextSection({ section }) {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-14">
      <div
        className={`grid lg:grid-cols-2 gap-8 items-center rounded-3xl border border-blue-900/15 bg-white p-6 md:p-8 ${section.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-blue-900/15 bg-blue-50/40">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={section.image}
              alt={`${section.title} preview`}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute left-4 top-4 space-y-2">
            {section.highlights.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-blue-900/15 bg-white/95 px-3 py-2 text-xs font-semibold text-blue-950 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-blue-700">
            {section.badge}
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight text-blue-950">
            {section.title}
          </h2>
          <p className="mt-4 text-lg text-black/80 leading-relaxed">
            {section.description}
          </p>
          <p className="mt-5 text-lg text-black/70 leading-relaxed">
            {section.details}
          </p>
        </div>
      </div>
    </section>
  );
}

function NdrFeatureSection({ section }) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 items-center ${section.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
    >
      <div className="overflow-hidden rounded-2xl border border-blue-900/15 bg-blue-900 p-2">
        <div className="relative w-full overflow-hidden rounded-xl 
                  aspect-[16/9] sm:aspect-[16/2] md:aspect-[4/3]">
          <Image
            src={section.image}
            alt={section.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <h3 className="text-2xl md:text-4xl font-extrabold text-blue-950 leading-tight">
          {section.title}
        </h3>
        <p className="mt-4 text-black/70 leading-relaxed text-base md:text-lg">
          {section.description}
        </p>
        {section.title === "Automated NDR Workflows" ? (
          <p className="mt-4 text-sm font-semibold text-blue-950">Know More →</p>
        ) : null}
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <main className="bg-white text-black pt-28 pb-20">
      <section className="max-w-6xl mx-auto px-6">
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
        <div className="rounded-3xl border border-blue-900/15 bg-gradient-to-br from-white via-blue-50 to-blue-100/70 p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex rounded-full border border-blue-900/20 bg-white px-3 py-1 text-[11px] font-bold tracking-[2px] uppercase text-blue-950">
                AIShyp Features
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-blue-950">
                One Strong Dashboard for Complete Shipping Control
              </h1>
              <p className="mt-4 text-black/75 leading-relaxed">
                Compare couriers, generate AWB and labels, track shipments, and
                reduce RTO using NDR workflows with free NDR calling support - all
                from one centralized AIShyp dashboard.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-blue-900/15 bg-white px-4 py-3 text-sm font-semibold text-blue-950"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-900/15 bg-white p-4 shadow-lg">
              <div className="overflow-hidden rounded-xl border border-blue-900/10">
                <Image
                  src="/dashboardai.png"
                  alt="AIShyp feature dashboard preview"
                  width={900}
                  height={620}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <p className="mt-3 text-xs text-black/55">
                Live operations view: order creation, courier choice, tracking and
                workflow actions in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {imageSections.map((section) => (
        <ImageTextSection key={section.title} section={section} />
      ))}

      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="rounded-3xl bg-blue-800 p-6 md:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-blue-100">
                Shipping Automation
              </p>
              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                Prioritize Core Business with Smart Shipping
              </h2>
              <p className="mt-3 text-blue-100 text-sm md:text-base leading-relaxed max-w-xl">
                Partner with AIShyp to automate daily shipping tasks, control cost,
                and run operations faster from one central system.
              </p>

              <div className="mt-6 space-y-3">
                {automationCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-white/10 bg-slate-950/85 p-4 md:p-5"
                  >
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                      {card.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white/10">
                  <Image
                    src="/AIShip.png"
                    alt="Shipping automation visual"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="rounded-3xl border border-blue-900/15 bg-white p-6 md:p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-blue-950">
              Tracking Journey Section
            </h2>
            <p className="mt-3 text-black/70">
              Dedicated tracking section from order created to delivered status.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {trackingSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-blue-900/15 bg-blue-50/60 px-4 py-4 text-center"
              >
                <p className="text-xs font-bold text-blue-700">Step {index + 1}</p>
                <p className="mt-1 text-sm font-semibold text-blue-950">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="space-y-12">
          {ndrSections.map((section) => (
            <NdrFeatureSection key={section.title} section={section} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-950">
            Features Section Wise
          </h2>
          <p className="mt-3 text-black/70">
            Aapke diye hue har feature ko alag clear section me organize kiya gaya
            hai.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {sections.map((section) => (
            <FeatureCard
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              points={section.points}
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="rounded-2xl border border-blue-900/15 bg-blue-950 text-white p-6 md:p-8">
          <h3 className="text-2xl font-extrabold">AIShyp Advantage</h3>
          <p className="mt-3 text-sm md:text-base text-blue-100 leading-relaxed max-w-4xl">
            Compare couriers, book faster, manage B2B + B2C flows, and handle
            operations with a clean, centralized dashboard. AIShyp helps reduce
            RTO, improve control, and scale shipping without platform fee
            complexity.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm">
              Best shipping rates + flat-rate options
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm">
              Priority support + free NDR calling support
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm">
              One platform with total operational control
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}