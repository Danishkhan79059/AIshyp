import Link from "next/link";
import EncyclopediaSearch from "../../components/EncyclopediaSearch";
import { getAllEncyclopediaTopics } from "../../data/encyclopedia";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Logistics Encyclopedia - RTO, NDR, Shipping Aggregator Terms",
  description:
    "Explore AIShyp encyclopedia topics on RTO, NDR, shipping aggregators, courier APIs, last-mile delivery, and ecommerce logistics.",
  path: "/encyclopedia",
  images: ["/image.png"],
});

export default function EncyclopediaPage() {
  const topics = getAllEncyclopediaTopics();

  return (
    <main className="bg-[#eef6ff] text-black pt-28 pb-16 px-6">
      <section className="max-w-6xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-sm text-black/50 mb-5">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-900">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-blue-900 font-medium">Encyclopedia</li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950">
            Shipping and Logistics Knowledge Hub
          </h1>
          <p className="mt-3 text-black/70 max-w-3xl">
            A searchable encyclopedia for franchise-driven shipping operations, ecommerce
            fulfillment, delivery optimization, courier APIs, and exception handling terms.
          </p>
        </header>

        <EncyclopediaSearch topics={topics} />
      </section>
    </main>
  );
}
