import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllEncyclopediaTopics,
  getEncyclopediaReadingTime,
  getEncyclopediaTopicBySlug,
  getRelatedEncyclopediaTopics,
} from "../../../data/encyclopedia";
import { SITE_NAME, SITE_URL } from "../../../lib/seo";

export async function generateStaticParams() {
  return getAllEncyclopediaTopics().map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = getEncyclopediaTopicBySlug(slug);

  if (!topic) {
    return {
      title: "Topic Not Found | AIShyp Encyclopedia",
      description: "This encyclopedia topic does not exist.",
    };
  }

  const canonical = `${SITE_URL}/encyclopedia/${topic.slug}`;

  return {
    title: `${topic.title} | ${SITE_NAME} Encyclopedia`,
    description: topic.shortDefinition,
    alternates: {
      canonical,
    },
    openGraph: {
      title: topic.title,
      description: topic.shortDefinition,
      url: canonical,
      siteName: SITE_NAME,
      type: "article",
      images: ["/AIship1.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: topic.title,
      description: topic.shortDefinition,
      images: ["/AIship1.png"],
    },
  };
}

export default async function EncyclopediaTopicPage({ params }) {
  const { slug } = await params;
  const topic = getEncyclopediaTopicBySlug(slug);
  if (!topic) notFound();

  const relatedTopics = getRelatedEncyclopediaTopics(topic.relatedTopics);
  const readingTime = getEncyclopediaReadingTime(topic);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: topic.title,
    description: topic.shortDefinition,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    datePublished: "2026-04-25",
  };

  return (
    <main className="bg-white text-black pt-28 pb-16 px-6">
      <article className="max-w-4xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <nav aria-label="Breadcrumb" className="text-sm text-black/50 mb-6">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-900">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/encyclopedia" className="hover:text-blue-900">
                Encyclopedia
              </Link>
            </li>
            <li>/</li>
            <li className="text-blue-900 font-medium">{topic.title}</li>
          </ol>
        </nav>

        <header>
          <p className="text-xs text-black/50">{readingTime}</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950 mt-2">{topic.title}</h1>
          <p className="mt-4 text-lg text-black/75 leading-relaxed">{topic.shortDefinition}</p>
        </header>

        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-blue-900/15 mt-8">
          <Image
            src="/AIship1.png"
            alt={`${topic.title} encyclopedia banner`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <section className="mt-8 space-y-7">
          <section>
            <h2 className="text-2xl font-bold text-blue-950">Detailed Explanation</h2>
            <p className="mt-3 text-black/80 leading-relaxed">{topic.description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-950">How It Works</h2>
            <p className="mt-3 text-black/80 leading-relaxed">{topic.howItWorks}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-950">Why It Matters</h2>
            <p className="mt-3 text-black/80 leading-relaxed">{topic.whyItMatters}</p>
          </section>
        </section>

        <section className="mt-10 rounded-2xl border border-blue-900/15 bg-blue-50/40 p-5">
          <h2 className="text-xl font-bold text-blue-950">Related Product Resources</h2>
          <div className="mt-3 flex flex-wrap gap-4">
            <Link href="/features" className="text-sm font-semibold text-blue-900 hover:underline">
              Explore Features
            </Link>
            <Link href="/pricing" className="text-sm font-semibold text-blue-900 hover:underline">
              Compare Pricing
            </Link>
            <Link href="/blog" className="text-sm font-semibold text-blue-900 hover:underline">
              Read Blog Guides
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Related Topics</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedTopics.map((related) => (
              <article key={related.slug} className="rounded-xl border border-blue-900/10 p-4">
                <h3 className="font-semibold text-blue-950">
                  <Link href={`/encyclopedia/${related.slug}`} className="hover:underline">
                    {related.title}
                  </Link>
                </h3>
                <p className="text-sm text-black/70 mt-2">{related.shortDefinition}</p>
              </article>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
