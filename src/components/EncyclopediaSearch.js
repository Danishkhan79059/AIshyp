"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function EncyclopediaSearch({ topics }) {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();

  const filteredTopics = useMemo(() => {
    if (!normalized) return topics;
    return topics.filter(
      (topic) =>
        topic.title.toLowerCase().includes(normalized) ||
        topic.shortDefinition.toLowerCase().includes(normalized),
    );
  }, [normalized, topics]);

  return (
    <>
      <label className="block mb-6">
        <span className="sr-only">Search encyclopedia topics</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search topics like RTO, NDR, shipping API..."
          className="w-full rounded-xl border border-blue-900/20 px-4 py-3 text-sm outline-none focus:border-blue-700"
        />
      </label>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTopics.map((topic) => (
          <article
            key={topic.slug}
            className="rounded-2xl border border-blue-900/15 bg-white overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* <div className="relative h-32 w-full">
              <Image
                src="/AIship1.png"
                alt={`${topic.title} topic card`}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div> */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-blue-950 leading-snug">
                <Link href={`/encyclopedia/${topic.slug}`} className="hover:underline">
                  {topic.title}
                </Link>
              </h2>
              <p className="text-sm text-black/70 mt-2 leading-relaxed">{topic.shortDefinition}</p>
              <Link
                href={`/encyclopedia/${topic.slug}`}
                className="inline-block mt-3 text-sm font-semibold text-blue-900 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {filteredTopics.length === 0 && (
        <p className="text-center text-sm text-black/60 mt-8">
          No topic found. Try a different keyword.
        </p>
      )}
    </>
  );
}
