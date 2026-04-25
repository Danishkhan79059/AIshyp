"use client";
import { useRouter } from "next/navigation";
import FAQ from "../../components/FAQ";
import { buildFaqSchema, faqItems } from "../../data/faq";

export default function Page() {

   const router = useRouter();
   const pricingFaqItems = faqItems
    .filter(
      (item) =>
        item.category === "Courier Franchise" ||
        item.category === "Shipping Aggregator" ||
        item.category === "RTO & NDR",
    )
    .slice(0, 10);
  const pricingFaqSchema = buildFaqSchema(pricingFaqItems);
  const plans = [
    {
      name: "Starter Franchise",
      badge: "For new city launch",
      price: "₹14,999",
      priceMeta: "per month / city",
      highlight: "Low-risk entry for first-time partners.",
      features: [
        "Upto 2 service areas / zones",
        "Core AIShyp aggregator dashboard access",
        "Standard courier partner stack enabled",
        "Branded tracking page + notifications",
        "Basic WhatsApp + SMS shipment alerts",
      ],
    },
    {
      name: "Growth Franchise",
      badge: "Most popular for multi-city",
      price: "₹29,999",
      priceMeta: "per month / up to 3 cities",
      highlight: "For franchises scaling operations across regions.",
      featured: true,
      features: [
        "Manage up to 3 franchise territories",
        "Priority access to new carrier integrations",
        "AI-powered courier allocation for better margins",
        "Advanced branded tracking & NDR workflows",
        "Dedicated franchise onboarding & account manager",
        "Monthly performance review and playbook support",
      ],
    },
    {
      name: "Network Enterprise",
      badge: "For aggregators & chains",
      price: "Custom",
      priceMeta: "Nationwide / multi-region",
      highlight:
        "Central control with local franchise execution for large networks.",
      features: [
        "Unlimited franchise locations & sub-franchises",
        "Centralized pricing & SLA engine for all partners",
        "White-labelled AIShyp dashboard and tracking",
        "Custom integrations (ERP, OMS, marketplace, etc.)",
        "Dedicated success, NDR, and ops support squad",
        "Quarterly business reviews & strategy workshops",
      ],
    },
  ];

  const incentives = [
    "Performance-based rebates on volume slabs",
    "Better buy-rates as your region grows",
    "Co-branded marketing support in select cities",
    "Training modules for franchise ops teams",
  ];

  return (
    <main className="bg-[#eef6ff] text-black pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      {/* HERO */}
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
                AIshyp Franchise Pricing
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-blue-950">
                Franchise-first pricing for aggregator partners
              </h1>
              <p className="mt-4 text-black/75 leading-relaxed">
                AIshyp provides you with a tech-enabled franchise ecosystem where
                you can manage your city, region, or entire network from a single
                dashboard—couriers, tracking, billing, and NDR workflows all in one
                place.
              </p>
              <p className="mt-3 text-sm text-black/60">
                Transparent monthly plans, no hidden platform fee. As your volume
                grows, your effective costs improve and operations get smoother.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-xl border border-blue-900/15 bg-white px-4 py-3 text-sm font-semibold text-blue-950">
                  Franchise-driven logistics aggregator model
                </div>
                <div className="rounded-xl border border-blue-900/15 bg-white px-4 py-3 text-sm font-semibold text-blue-950">
                  Local partners, central control
                </div>
                <div className="rounded-xl border border-blue-900/15 bg-white px-4 py-3 text-sm font-semibold text-blue-950">
                  Scale-ready for brands & aggregators
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-900/15 bg-white/80 p-5 shadow-lg">
              <h2 className="text-lg font-bold text-blue-950">
                Franchise Snapshot
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-black/75">
                <li>• City, regional and national level franchise models</li>
                <li>• Multi-courier stack with unified tracking & billing</li>
                <li>• Branded experience for every shipment</li>
                <li>• Dedicated success team for serious operators</li>
              </ul>
              <p className="mt-4 text-xs text-black/60">
                Detailed commercials and contract terms are shared during the
                onboarding call, based on your business size and use case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-950">
            Choose the right AIshyp franchise plan
          </h2>
          <p className="mt-3 text-black/70">
            Whether you are launching a single city, expanding to multiple cities,
            or building a full aggregator network—AIshyp has plans aligned with
            your scale.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 md:p-7 ${plan.featured
                  ? "border-blue-700 bg-blue-900 text-white shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
                  : "border-blue-900/15 bg-white"
                }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold tracking-[2px] uppercase text-blue-950 shadow-md">
                  Recommended
                </span>
              )}
              <p
                className={`text-[11px] font-bold tracking-[2px] uppercase ${plan.featured ? "text-blue-100" : "text-blue-700"
                  }`}
              >
                {plan.badge}
              </p>
              <h3
                className={`mt-2 text-xl font-extrabold ${plan.featured ? "text-white" : "text-blue-950"
                  }`}
              >
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span
                  className={`text-xs font-medium ${plan.featured ? "text-blue-100/80" : "text-black/60"
                    }`}
                >
                  {plan.priceMeta}
                </span>
              </div>
              <p
                className={`mt-3 text-sm ${plan.featured ? "text-blue-100" : "text-black/70"
                  }`}
              >
                {plan.highlight}
              </p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {plan.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 leading-relaxed"
                  >
                    <span
                      className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${plan.featured ? "bg-amber-300" : "bg-blue-700"
                        }`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => router.push("/contact")}
                className={`mt-6 w-full rounded-xl cursor-pointer px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${plan.featured
                    ? "bg-amber-400 text-blue-950 hover:bg-amber-300"
                    : "bg-blue-900 text-white hover:bg-blue-800"
                  }`}
              >
                Talk to AIshyp team
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* INCENTIVES */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="rounded-3xl border border-blue-900/15 bg-blue-900 text-white p-6 md:p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">
                Franchise incentives that grow with you
              </h2>
              <p className="mt-3 text-sm md:text-base text-blue-100 leading-relaxed">
                AIshyp's franchise ecosystem rewards you based on your shipment
                volume and service quality. As your network grows, your effective
                logistics cost and support improve.
              </p>
            </div>
            <div className="grid gap-3">
              {incentives.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <FAQ
          items={pricingFaqItems}
          title="Pricing and Franchise FAQs"
          subtitle="Detailed answers for franchise pricing, operations, and platform fit."
          maxItems={10}
          showSearch={true}
          showCategoryFilter={true}
          showCta={true}
        />
      </section>
    </main>
  );
}