import Image from "next/image";
import Link from "next/link";
import { getAllBlogs } from "../../lib/blogs";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Logistics Blog - Franchise Shipping Insights",
  description:
    "Read AIShyp blog articles on franchise-driven shipping aggregator growth, RTO reduction, NDR automation, and ecommerce logistics best practices.",
  path: "/blog",
  images: ["/partner.png"],
});

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <main className="bg-white text-black pt-28 pb-16 px-6">
      <section className="max-w-6xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-sm text-black/50 mb-6">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-900">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-blue-900 font-medium">Blog</li>
          </ol>
        </nav>

        <header className="mb-10">
          <p className="text-[11px] font-bold tracking-[3px] uppercase text-blue-700">
            AIShyp Blog
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950 mt-2">
            Franchise-Driven Shipping Aggregator Insights
          </h1>
          <p className="text-black/70 max-w-3xl mt-4 leading-relaxed">
            Actionable guides on shipping automation, NDR workflows, courier rate optimization,
            and logistics growth for franchise partners.
          </p>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="rounded-2xl border border-blue-900/15 bg-white overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${blog.slug}`} className="block">
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.featuredImage}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-5">
                <p className="text-xs text-black/50">
                  {formatDate(blog.publishedDate)} · {blog.readingTime}
                </p>
                <h2 className="text-lg font-bold text-blue-950 mt-2 leading-snug">
                  <Link href={`/blog/${blog.slug}`} className="hover:underline">
                    {blog.title}
                  </Link>
                </h2>
                <p className="text-sm text-black/70 mt-3 leading-relaxed">{blog.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-blue-200 text-blue-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-block mt-4 text-sm font-semibold text-blue-900 hover:underline"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
