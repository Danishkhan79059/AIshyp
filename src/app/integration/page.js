"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IntegrationPage() {
  const integrationShowcases = [
    {
      title: "Shopify",
      image: "/shopify.jpeg",
    },
    {
      title: "Amazon",
      image: "/Amazon.jpg",
    },

  ];
  const shopifySteps = [
    {
      icon: "🧾",
      title: "Sign Up / Log In",
      description:
        "Create your AIShyp account and open your dashboard in seconds.",
    },
    {
      icon: "🔗",
      title: "Connect Shopify Store",
      description:
        "Open the Integrations tab and connect your Shopify store in one click.",
    },
    {
      icon: "⚙️",
      title: "Authorize & Sync",
      description:
        "Grant permissions once and start syncing products and orders automatically.",
    },
    {
      icon: "🚚",
      title: "Start Shipping",
      description:
        "Generate labels, schedule pickups, and track every order in real time.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        if (integrationShowcases.length <= 1) return prev;
        let next = prev;
        while (next === prev) {
          next = Math.floor(Math.random() * integrationShowcases.length);
        }
        return next;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [integrationShowcases.length]);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % shopifySteps.length);
    }, 2200);

    return () => clearInterval(stepTimer);
  }, [shopifySteps.length]);

  const activeIntegration = integrationShowcases[activeIndex];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef6ff] px-6 pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,58,138,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.09) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.2),transparent_42%),radial-gradient(circle_at_80%_85%,rgba(37,99,235,0.14),transparent_46%)]" />

      <section className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-blue-900">
              Integrations
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-blue-950 leading-[1.05]">
              Seamless Integrations
              <br />
              that simplify your logistics operations
            </h1>

            <p className="text-black/65 text-base md:text-lg mt-6 leading-relaxed max-w-lg">
              Connect Shopify, WooCommerce or use our Open API to automate your
              shipping and scale faster with AIShyp.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-[#e5ebf0] bg-[#091c5a] hover:brightness-95 transition "
              >
                Connect Now
                <span aria-hidden>→</span>
              </Link>

              <Link
                href="/features"
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-blue-950 border border-blue-200 bg-white hover:bg-blue-50 transition"
              >
                Back to Features
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white/90 backdrop-blur-sm p-5 md:p-7 shadow-[0_24px_65px_rgba(30,58,138,0.18)]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-blue-950 text-sm font-semibold tracking-wide">
                Live Integration Preview
              </p>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-black/55">
                <span className="h-2 w-2 rounded-full bg-[#8bc34a]" />
                Auto-switching
              </span>
            </div>

            <div className="relative mx-auto max-w-[430px] rounded-xl bg-[#f5f9ff] p-3 border border-blue-100">
              <div className="relative h-[260px] md:h-[320px] rounded-lg overflow-hidden bg-white">
                <Image
                  key={activeIntegration.image}
                  src={activeIntegration.image}
                  alt={activeIntegration.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 430px"
                />
              </div>
            </div>

            <p className="text-center text-blue-950 font-semibold mt-5 tracking-wide">
              {activeIntegration.title}
            </p>

            <div className="mt-4 flex items-center justify-center gap-2.5">
              {integrationShowcases.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                      ? "w-8 bg-[#ffb400]"
                      : "w-2.5 bg-blue-200 hover:bg-blue-300"
                    }`}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-28">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-blue-900">
            Shopify Flow
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950">
            How AIShyp + Shopify Integration Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-black/60 md:text-lg">
            Follow this guided flow to connect your store and activate shipping
            automation with a Shopify-style setup experience.
          </p>
        </div>

        <div className="mt-14 relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-9 left-[11%] right-[11%] h-[2px] bg-blue-100" />
          <motion.div
            className="hidden md:block absolute top-9 left-[11%] h-[2px] bg-gradient-to-r from-[#ffb400] to-[#ffd66b]"
            initial={{ width: "0%" }}
            animate={{
              width: `${((activeStep + 1) / shopifySteps.length) * 78}%`,
            }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          />

          <div className="grid gap-6 md:grid-cols-4">
            {shopifySteps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative rounded-2xl border p-5 text-center shadow-sm transition-all duration-300 ${
                    isActive
                      ? "border-[#ffcf57] bg-white shadow-[0_14px_45px_rgba(255,180,0,0.18)]"
                      : "border-blue-100 bg-white/85 hover:border-blue-200"
                  }`}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? [1, 1.08, 1] : 1,
                    }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#ffe18d] to-[#ffb400] text-2xl shadow-md"
                  >
                    {step.icon}
                  </motion.div>
                  <p className="mt-4 text-xs font-semibold tracking-[2px] text-blue-700">
                    STEP {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-blue-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


    </main>
  );
}
