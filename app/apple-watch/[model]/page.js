import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { appleWatchModels, appleWatchServices } from "@/data/applewatchModels";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export async function generateStaticParams() {
  return appleWatchModels.map((m) => ({ model: m.slug }));
}

export async function generateMetadata({ params }) {
  const model = appleWatchModels.find((m) => m.slug === params.model);
  if (!model) return { title: "Not Found | Fix It Jerry" };

  return {
    title: `${model.name} Repair in KL | Fix It Jerry`,
    description: `${model.name} repair in Kuala Lumpur. Screen replacement, battery replacement, Digital Crown repair & more. OEM-grade parts, free diagnostics.`,
    openGraph: {
      title: `${model.name} Repair in KL | Fix It Jerry`,
      description: `${model.name} repair in Kuala Lumpur. OEM parts, fast turnaround.`,
      images: [`https://fixitjerry.com/og_images/apple-watch-${params.model}.png`],
    },
    alternates: { canonical: `/apple-watch/${params.model}` },
  };
}

export default function AppleWatchModelPage({ params }) {
  const model = appleWatchModels.find((m) => m.slug === params.model);
  if (!model) notFound();

  return (
    <div id="wrapper">
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
                <h1 className="!text-[24px] md:!text-[44px]">{model.name} Repair</h1>
                <p className="text-gray-200 max-w-2xl mx-auto !text-[16px] md:!text-[18px] text-center mt-3">
                  {model.screenSize} · {model.screenType} · {model.caseMaterial}
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/apple-watch">Apple Watch</a></li>
              <li><a href={`/apple-watch/${model.slug}`}>{model.name}</a></li>
            </ul>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                <h2 className="text-2xl font-bold mb-6">{model.name} Repair Services</h2>
                <div className="row g-3">
                  {appleWatchServices.map((service) => (
                    <div key={service.slug} className="col-12 col-md-6">
                      <a
                        href={`/apple-watch/${model.slug}/${service.slug}`}
                        className="d-block text-decoration-none"
                      >
                        <div className="bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
                          <h3 className="fw-semibold text-gray-900 mb-1">{service.name}</h3>
                          <p className="text-sm text-muted mb-0 line-clamp-2">
                            {service.getMetaDescription(model)}
                          </p>
                          <span className="text-sm text-[#2b3f48] font-semibold mt-2 d-block">
                            View details →
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <BookingForm defaultColor={false} />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="sticky-top" style={{ top: "100px" }}>
                  <div className="bg-white border rounded-lg p-4 mb-4">
                    <h5 className="fw-bold mb-3">All Apple Watch Models</h5>
                    <ul className="list-unstyled mb-0">
                      {appleWatchModels
                        .slice()
                        .reverse()
                        .map((m) => (
                          <li key={m.slug} className="mb-1">
                            <a
                              href={`/apple-watch/${m.slug}`}
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

                  <div className="bg-white border rounded-lg p-4">
                    <h5 className="fw-bold mb-2">Book a Repair</h5>
                    <p className="text-muted small mb-3">Free diagnostics. No fix, no charge.</p>
                    <BookingForm defaultColor={false} />
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
      ]} />
    </div>
  );
}
