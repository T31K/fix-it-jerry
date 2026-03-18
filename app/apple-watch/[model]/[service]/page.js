import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { appleWatchModels, appleWatchServices } from "@/data/applewatchModels";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export async function generateStaticParams() {
  const params = [];
  for (const model of appleWatchModels) {
    for (const service of appleWatchServices) {
      params.push({ model: model.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const model = appleWatchModels.find((m) => m.slug === params.model);
  const service = appleWatchServices.find((s) => s.slug === params.service);
  if (!model || !service) return { title: "Not Found | Fix It Jerry" };

  return {
    title: service.getTitle(model),
    description: service.getMetaDescription(model),
    openGraph: {
      title: service.getTitle(model),
      description: service.getMetaDescription(model),
      images: [`https://fixitjerry.com/og_images/apple-watch-${params.model}-${params.service}.png`],
    },
    alternates: { canonical: `/apple-watch/${params.model}/${params.service}` },
  };
}

export default function AppleWatchServicePage({ params }) {
  const model = appleWatchModels.find((m) => m.slug === params.model);
  const service = appleWatchServices.find((s) => s.slug === params.service);
  if (!model || !service) notFound();

  const sections = service.getSections(model);

  return (
    <div id="wrapper">
      <Navbar />
      <div id="content" className="no-top no-bottom">
        <div id="top"></div>

        <section
          id="subheader"
          className="relative text-white bg-cover bg-center bg-no-repeat min-h-[400px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/background/4.webp')`,
          }}
        >
          <div className="container relative z-2">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="subtitle">Fix It Jerry — Kuala Lumpur</div>
                <h1 className="md:whitespace-nowrap !text-[22px] md:!text-[44px]">
                  {model.name} {service.name}
                </h1>
                <p className="text-gray-200 max-w-2xl mx-auto !text-[16px] md:!text-[18px] text-center mt-3">
                  Professional {model.name} {service.name.toLowerCase()} in Kuala Lumpur
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/apple-watch">Apple Watch</a></li>
              <li><a href={`/apple-watch/${model.slug}`}>{model.name}</a></li>
              <li><a href={`/apple-watch/${model.slug}/${service.slug}`}>{service.name}</a></li>
            </ul>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-9">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex flex-col items-start gap-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {model.name} {service.name} in Kuala Lumpur
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {service.getMetaDescription(model)}
                    </p>

                    <div className="space-y-6 w-full">
                      {sections.map((section, idx) => (
                        <div
                          key={idx}
                          className="border-b border-gray-200 pb-4 last:border-b-0"
                        >
                          <h3 className="text-lg font-semibold mb-3 text-brand-700">
                            {section.heading}
                          </h3>
                          {Array.isArray(section.content) ? (
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                              {section.content.map((item, i) => (
                                <li key={i} className="leading-relaxed">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-700 leading-relaxed">
                              {section.content}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 w-full bg-light rounded-lg p-4">
                      <h4 className="fw-semibold mb-2">Other {model.name} Repairs</h4>
                      <div className="flex flex-wrap gap-2">
                        {appleWatchServices
                          .filter((s) => s.slug !== service.slug)
                          .map((s) => (
                            <a
                              key={s.slug}
                              href={`/apple-watch/${model.slug}/${s.slug}`}
                              className="badge bg-white border text-dark text-decoration-none px-3 py-2"
                            >
                              {s.name}
                            </a>
                          ))}
                      </div>
                    </div>

                    <div className="mt-4 w-full flex justify-center">
                      <BookingForm defaultColor={false} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="sticky-top" style={{ top: "100px" }}>
                  <div className="bg-white border rounded-lg p-4">
                    <h5 className="fw-bold mb-3">All Apple Watch Models</h5>
                    <ul className="list-unstyled mb-0">
                      {appleWatchModels
                        .slice()
                        .reverse()
                        .map((m) => (
                          <li key={m.slug} className="mb-1">
                            <a
                              href={`/apple-watch/${m.slug}/${service.slug}`}
                              className={`text-decoration-none small ${
                                m.slug === model.slug
                                  ? "fw-bold text-brand-700"
                                  : "text-muted"
                              }`}
                            >
                              {m.name}
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
      <Footer />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "/" },
        { name: "Apple Watch Repair KL", url: "/apple-watch" },
        { name: model.name, url: `/apple-watch/${model.slug}` },
        { name: service.name, url: `/apple-watch/${model.slug}/${service.slug}` },
      ]} />
    </div>
  );
}
