import FAQ from "../../components/FAQ";
import { buildFaqSchema, faqItems } from "../../data/faq";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "FAQ - Shipping Aggregator, Courier Franchise, RTO, NDR",
  description:
    "Find answers to common questions about shipping aggregators, courier franchise business, RTO reduction, NDR automation, ecommerce logistics, and delivery optimization.",
  path: "/faq",
  images: ["/support.png"],
});

export default function FAQPage() {
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <main className="bg-[#eef6ff] text-black pt-28 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQ
        items={faqItems}
        title="AIShyp Logistics FAQ"
        subtitle="Everything about shipping aggregator operations, courier franchise growth, NDR workflows, API integration, and delivery optimization."
      />
    </main>
  );
}
