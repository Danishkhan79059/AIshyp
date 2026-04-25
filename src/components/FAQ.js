"use client";

import { memo, useMemo, useState } from "react";
import Link from "next/link";
import { faqCategories } from "../data/faq";

function FAQ({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Answers for shipping aggregation, franchise operations, RTO/NDR, and delivery optimization.",
  maxItems,
  showSearch = true,
  showCategoryFilter = true,
  showCta = true,
  className = "",
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState(null);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredItems = useMemo(() => {
    let result = items;

    if (showCategoryFilter && activeCategory !== "All") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (showSearch && normalizedQuery) {
      result = result.filter(
        (item) =>
          item.question.toLowerCase().includes(normalizedQuery) ||
          item.answer.toLowerCase().includes(normalizedQuery),
      );
    }

    if (typeof maxItems === "number") {
      result = result.slice(0, maxItems);
    }

    return result;
  }, [activeCategory, items, maxItems, normalizedQuery, showCategoryFilter, showSearch]);

  return (
    <section className={`max-w-6xl mx-auto px-6 ${className}`}>
      <div className="rounded-3xl border border-blue-900/15 bg-white p-6 md:p-8">
        <header className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-950">{title}</h2>
          <p className="mt-3 text-black/70">{subtitle}</p>
        </header>

        {(showSearch || showCategoryFilter) && (
          <div className="mt-6 space-y-4">
            {showSearch && (
              <label className="block">
                <span className="sr-only">Search FAQs</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search FAQ by keyword..."
                  className="w-full rounded-xl border border-blue-900/20 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
                />
              </label>
            )}

            {showCategoryFilter && (
              <div className="flex flex-wrap gap-2">
                {faqCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      activeCategory === category
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-blue-900/20 text-blue-900 hover:bg-blue-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mt-8 space-y-3">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <article key={item.id} className="rounded-2xl border border-blue-900/10 bg-blue-50/40">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-blue-950">{item.question}</span>
                    <span className="text-blue-900 text-lg">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm text-black/75 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <p className="mt-8 text-center text-sm text-black/60">
            No FAQs matched your search. Try a different keyword or category.
          </p>
        )}

        {showCta && (
          <footer className="mt-8 rounded-2xl border border-blue-900/15 bg-blue-950 text-white p-5 text-center">
            <p className="font-semibold">Still have questions?</p>
            <p className="text-sm text-blue-100 mt-1">
              Talk to our logistics team for franchise setup, pricing, and integration support.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-3 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-blue-950 hover:bg-amber-300"
            >
              Contact AIShyp Team
            </Link>
          </footer>
        )}
      </div>
    </section>
  );
}

export default memo(FAQ);
