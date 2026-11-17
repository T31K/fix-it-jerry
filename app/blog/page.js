import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { guides } from "@/data/guides";

const title = "Blog: Device Repair Tips, Costs & Fixes | Fix It Jerry KL";
const description =
  "The Fix It Jerry blog: repair cost breakdowns, troubleshooting help and honest repair-or-replace advice for phones, laptops, tablets and consoles in Kuala Lumpur.";

export const metadata = {
  title,
  description,
  openGraph: { title, description, url: "https://www.fixitjerry.com/blog" },
  alternates: { canonical: "/blog" },
};

// Rough read time from the article's word count.
function readMinutes(g) {
  const text = [
    g.intro,
    ...g.sections.flatMap((s) => [s.heading, ...(Array.isArray(s.content) ? s.content : [s.content])]),
  ].join(" ");
  return Math.max(2, Math.round(text.split(/\s+/).length / 220));
}

const posts = guides
  .map((g) => ({
    slug: g.slug,
    title: g.title,
    intro: g.intro,
    category: g.category,
    datePublished: g.datePublished,
    dateModified: g.dateModified,
    readMinutes: readMinutes(g),
  }))
  .sort((a, b) => b.datePublished.localeCompare(a.datePublished) || b.dateModified.localeCompare(a.dateModified));

const fmt = (d) =>
  new Date(d).toLocaleDateString("en-MY", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div id="wrapper">
      <Navbar />
      <div id="content" className="no-top no-bottom">
        <div id="top"></div>

        <section
          id="subheader"
          className="relative text-white bg-cover bg-center bg-no-repeat min-h-[360px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/background/4.webp')`,
          }}
        >
          <div className="container relative z-2">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="subtitle">Fix It Jerry Blog</div>
                <h1 className="!text-[28px] md:!text-[48px]">Repair Tips, Costs & Fixes</h1>
                <p className="text-gray-200 max-w-2xl mx-auto !text-[16px] md:!text-[20px] text-center mt-3">
                  What our technicians see on the bench every day, written up so you know the price and the problem before you walk in.
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
        </section>

        <section className="py-10 bg-stone-50">
          <div className="container">
            {/* Featured (latest) post */}
            <a
              href={`/guides/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-6 lg:gap-10 items-center bg-white border rounded-2xl overflow-hidden mb-12 hover:shadow-lg transition-shadow text-decoration-none"
            >
              <div className="aspect-[1200/630] overflow-hidden bg-stone-100">
                <img
                  src={`/og_images/guide-${featured.slug}.png`}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 lg:pr-10">
                <div className="text-xs uppercase tracking-wider font-semibold text-green-800 mb-3">
                  Latest post · {fmt(featured.datePublished)} · {featured.readMinutes} min read
                </div>
                <h2 className="!text-2xl md:!text-3xl font-bold text-stone-900 mb-3 group-hover:text-green-800">
                  {featured.title}
                </h2>
                <p className="text-stone-600 mb-4">{featured.intro}</p>
                <span className="font-semibold text-stone-900">Read the post →</span>
              </div>
            </a>

            <BlogGrid posts={rest} />

            <div className="mt-14 text-center bg-stone-900 text-white rounded-2xl p-8">
              <h2 className="!text-2xl text-white mb-2">Got a device that needs fixing?</h2>
              <p className="text-stone-300 mb-5">Free quote, same-day repairs at four branches across KL and Selangor.</p>
              <a href="/book-a-repair" className="inline-block bg-[#C6E76C] text-stone-900 font-bold px-6 py-3 rounded-full">
                Book a Repair
              </a>
            </div>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Fix It Jerry Blog",
            url: "https://www.fixitjerry.com/blog",
            description,
            publisher: { "@type": "Organization", name: "Fix It Jerry", url: "https://www.fixitjerry.com" },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `https://www.fixitjerry.com/guides/${p.slug}`,
              datePublished: p.datePublished,
              dateModified: p.dateModified,
              image: `https://www.fixitjerry.com/og_images/guide-${p.slug}.png`,
            })),
          }),
        }}
      />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]} />
      <Footer />
    </div>
  );
}
