import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug, getRelatedBlogs } from "../../../lib/blogs";
import { SITE_URL, SITE_NAME } from "../../../lib/seo";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) {
    return {
      title: "Blog Not Found | AIShyp",
      description: "The requested blog post could not be found.",
    };
  }

  const canonicalPath = `/blog/${blog.slug}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return {
    title: `${blog.title} | ${SITE_NAME} Blog`,
    description: blog.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: blog.publishedDate,
      authors: [blog.author],
      images: [blog.featuredImage],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.featuredImage],
    },
  };
}

function renderContentBlock(block, index) {
  if (block.type === "heading") {
    return (
      <h2 key={`heading-${index}`} className="text-2xl font-bold text-blue-950 mt-8 mb-3">
        {block.value}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={`list-${index}`} className="list-disc pl-6 space-y-2 text-black/85 leading-relaxed">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.link) {
    return (
      <p key={`paragraph-link-${index}`} className="text-black/85 leading-relaxed mt-4">
        {block.value}
        <Link href={block.link.href} className="text-blue-900 font-medium hover:underline">
          {block.link.label}
        </Link>
        {block.trailing}
      </p>
    );
  }

  return (
    <p key={`paragraph-${index}`} className="text-black/85 leading-relaxed mt-4">
      {block.value}
    </p>
  );
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const relatedBlogs = getRelatedBlogs(blog.slug, 2);
  const canonicalUrl = `${SITE_URL}/blog/${blog.slug}`;
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    datePublished: blog.publishedDate,
    image: `${SITE_URL}${blog.featuredImage}`,
    mainEntityOfPage: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/aishiplogo.png`,
      },
    },
  };

  return (
    <main className="bg-white text-black pt-28 pb-16 px-6">
      <article className="max-w-4xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />

        <nav aria-label="Breadcrumb" className="text-sm text-black/50 mb-6">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-blue-900">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-blue-900">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-blue-900 font-medium">{blog.title}</li>
          </ol>
        </nav>

        <header>
          <p className="text-xs text-black/50">
            {formatDate(blog.publishedDate)} · {blog.readingTime} · By {blog.author}
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950 mt-3 leading-tight">
            {blog.title}
          </h1>
          <p className="text-black/70 mt-4 text-lg leading-relaxed">{blog.description}</p>
        </header>

        <div className="relative h-72 md:h-[430px] w-full rounded-2xl overflow-hidden border border-blue-900/15 mt-8">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <section className="mt-8 prose prose-lg max-w-none">
          {blog.content.map((block, index) => renderContentBlock(block, index))}
        </section>

        <section className="mt-10 p-5 rounded-2xl border border-blue-900/15 bg-blue-50/50">
          <h2 className="text-xl font-bold text-blue-950">Continue exploring AIShyp</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link href="/features" className="text-sm font-semibold text-blue-900 hover:underline">
              Explore Features
            </Link>
            <Link href="/pricing" className="text-sm font-semibold text-blue-900 hover:underline">
              View Pricing
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-blue-900 hover:underline">
              Talk to Team
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-950 mb-5">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {relatedBlogs.map((related) => (
              <article
                key={related.slug}
                className="rounded-2xl border border-blue-900/15 overflow-hidden"
              >
                <Link href={`/blog/${related.slug}`} className="block">
                  <div className="relative h-40 w-full">
                    <Image
                      src={related.featuredImage}
                      alt={related.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <p className="text-xs text-black/50">{formatDate(related.publishedDate)}</p>
                  <h3 className="text-lg font-bold text-blue-950 mt-2">
                    <Link href={`/blog/${related.slug}`} className="hover:underline">
                      {related.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
