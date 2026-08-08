import { existsSync } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import { guides } from "@/data/guides";

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) return { title: "Not Found | Fix It Jerry" };

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: [`https://www.fixitjerry.com/og_images/guide-${params.slug}.png`],
    },
    alternates: { canonical: `/guides/${params.slug}` },
  };
}

const categoryLabel = {
  "cost-guide": "Cost Guide",
  symptom: "Symptom Diagnosis",
  listicle: "Best Of",
};

const categoryColor = {
  "cost-guide": "bg-green-100 text-green-800",
  symptom: "bg-blue-100 text-blue-800",
  listicle: "bg-amber-100 text-amber-800",
};

const guideImg = (slug, slot) => {
  const rel = `/guides/${slug}-${slot}.jpg`;
  return existsSync(path.join(process.cwd(), "public", rel)) ? rel : null;
};

export default function GuidePage({ params }) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) notFound();

  const heroImg = guideImg(guide.slug, "hero");
  const sectionImgs = { 0: guideImg(guide.slug, "1"), 2: guideImg(guide.slug, "2") };
  const otherGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 4);

  // Ranked entries ("1. Shop Name — tagline") drive ItemList schema on listicles
  const listItems =
    guide.category === "listicle"
      ? guide.sections
          .filter((s) => /^\d+\.\s/.test(s.heading))
          .map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.heading.replace(/^\d+\.\s*/, ""),
          }))
      : [];

  return (
    <div id="wrapper">
      {listItems.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: guide.title,
            itemListOrder: "https://schema.org/ItemListOrderAscending",
            numberOfItems: listItems.length,
            itemListElement: listItems,
          }}
        />
      )}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": guide.metaTitle,
        "description": guide.metaDescription,
        "url": `https://www.fixitjerry.com/guides/${guide.slug}`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.fixitjerry.com/guides/${guide.slug}`
        },
        "image": {
          "@type": "ImageObject",
          "url": `https://www.fixitjerry.com/og_images/guide-${guide.slug}.png`,
          "width": 1200,
          "height": 630
        },
        "datePublished": guide.datePublished,
        "dateModified": guide.dateModified,
        "author": {
          "@type": "Organization",
          "name": "Fix It Jerry",
          "url": "https://www.fixitjerry.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Fix It Jerry",
          "url": "https://www.fixitjerry.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.fixitjerry.com/images/logo.webp"
          }
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".text-gray-600.text-lg", "h2"]
        }
      }} />
      <Navbar />
      <div id="content" className="no-top no-bottom">
        <div id="top"></div>

        <section
          id="subheader"
          className="relative text-white bg-cover bg-center bg-no-repeat min-h-[350px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/background/4.webp')`,
          }}
        >
          <div className="container relative z-2">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="subtitle">Fix It Jerry — Kuala Lumpur</div>
                <h1 className="!text-[24px] md:!text-[42px]">{guide.title}</h1>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/guides">Guides</a></li>
              <li><a href={`/guides/${guide.slug}`}>{guide.title}</a></li>
            </ul>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <span className={`badge ${categoryColor[guide.category]} mb-3`}>
                    {categoryLabel[guide.category]}
                  </span>
                  <p className="text-muted small mb-4">
                    Last updated: <time dateTime={guide.dateModified}>{new Date(guide.dateModified).toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  </p>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {guide.intro}
                  </p>

                  {heroImg && (
                    <img
                      src={heroImg}
                      alt={guide.title}
                      width={1200}
                      height={800}
                      className="w-full rounded-lg border mb-6"
                    />
                  )}

                  <div className="space-y-6">
                    {guide.sections.map((section, idx) => (
                      <div
                        key={idx}
                        className="border-b border-gray-200 pb-5 last:border-b-0"
                      >
                        <h2 className="text-xl font-semibold mb-3 text-brand-700">
                          {section.heading}
                        </h2>
                        {Array.isArray(section.content) ? (
                          // Price lists ("Label: RM x – RM y") render as a real table so AI
                          // engines and rich results can extract the pricing directly.
                          section.content.every((item) => /:\s*RM\s?\d/.test(item)) ? (
                            <div className="overflow-x-auto">
                              <table className="w-full text-left text-gray-700 border border-gray-200 rounded-lg">
                                <thead>
                                  <tr className="bg-light">
                                    <th className="p-3 font-semibold">Repair</th>
                                    <th className="p-3 font-semibold">Price (MYR)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {section.content.map((item, i) => {
                                    const sep = item.indexOf(":");
                                    return (
                                      <tr key={i} className="border-t border-gray-200">
                                        <td className="p-3">{item.slice(0, sep)}</td>
                                        <td className="p-3 whitespace-nowrap">{item.slice(sep + 1).trim()}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                              {section.content.map((item, i) => (
                                <li key={i} className="leading-relaxed">{item}</li>
                              ))}
                            </ul>
                          )
                        ) : (
                          <p className="text-gray-700 leading-relaxed">{section.content}</p>
                        )}
                        {sectionImgs[idx] && (
                          <img
                            src={sectionImgs[idx]}
                            alt={`${guide.title} — ${section.heading}`}
                            width={1200}
                            height={800}
                            loading="lazy"
                            className="w-full rounded-lg border mt-4"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {guide.relatedServices?.length > 0 && (
                    <div className="mt-8 bg-light rounded-lg p-5">
                      <h3 className="fw-bold mb-3">Relevant Repair Services</h3>
                      <div className="flex flex-wrap gap-2">
                        {guide.relatedServices.map((s) => (
                          <a
                            key={s.href}
                            href={s.href}
                            className="badge bg-white border text-dark text-decoration-none px-3 py-2 hover:bg-gray-100"
                          >
                            {s.label} →
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex justify-center">
                    <BookingForm defaultColor={false} />
                  </div>
                </div>

                {otherGuides.length > 0 && (
                  <div className="mt-8">
                    <h3 className="fw-bold mb-4">More Guides</h3>
                    <div className="row g-3">
                      {otherGuides.map((g) => (
                        <div key={g.slug} className="col-12 col-md-6">
                          <a
                            href={`/guides/${g.slug}`}
                            className="d-block text-decoration-none"
                          >
                            <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                              <span className={`badge ${categoryColor[g.category]} mb-2`}>
                                {categoryLabel[g.category]}
                              </span>
                              <div className="fw-semibold text-gray-900">{g.title}</div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="col-lg-4">
                <div className="sticky-top" style={{ top: "100px" }}>
                  <div className="bg-white border rounded-lg p-4 mb-4">
                    <h5 className="fw-bold mb-3">Book a Repair</h5>
                    <p className="text-muted small mb-3">
                      Free diagnostics. No fix, no charge.
                    </p>
                    <BookingForm defaultColor={false} />
                  </div>

                  <div className="bg-white border rounded-lg p-4">
                    <h5 className="fw-bold mb-3">All Guides</h5>
                    <ul className="list-unstyled mb-0">
                      {guides.map((g) => (
                        <li key={g.slug} className="mb-2">
                          <a
                            href={`/guides/${g.slug}`}
                            className={`text-decoration-none small ${
                              g.slug === guide.slug
                                ? "fw-bold text-brand-700"
                                : "text-muted"
                            }`}
                          >
                            {g.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "/" },
        { name: "Guides", url: "/guides" },
        { name: guide.title, url: `/guides/${guide.slug}` },
      ]} />
      <Footer />
    </div>
  );
}
