import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { macbookModels, macbookServices } from "@/data/macbook";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export async function generateStaticParams() {
  const params = [];
  for (const model of macbookModels) {
    for (const service of macbookServices) {
      params.push({ model: model.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const model = macbookModels.find((m) => m.slug === params.model);
  const service = macbookServices.find((s) => s.slug === params.service);
  if (!model || !service) return { title: "Not Found | Fix It Jerry" };

  return {
    title: service.getTitle(model),
    description: service.getMetaDescription(model),
    openGraph: {
      title: service.getTitle(model),
      description: service.getMetaDescription(model),
      images: [`https://fixitjerry.com/og_images/macbook-${params.model}-${params.service}.png`],
    },
  };
}

export default function MacbookServicePage({ params }) {
  const model = macbookModels.find((m) => m.slug === params.model);
  const service = macbookServices.find((s) => s.slug === params.service);
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
                  {model.name} {service.name.toLowerCase()} service in Kuala Lumpur
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/macbook">MacBook</a></li>
              <li><a href={`/macbook/${model.slug}`}>{model.name}</a></li>
              <li><a href={`/macbook/${model.slug}/${service.slug}`}>{service.name}</a></li>
            </ul>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container">
            <div className="row g-4 g-lg-5">
              <div className="col-lg-8">
                <div className="bg-white rounded-xl shadow-sm border p-5 md:p-8">
                    <Image
                      src={service.image}
                      width={800}
                      height={450}
                      alt={`${model.name} ${service.name}`}
                      className="rounded-xl w-full max-h-[350px] object-cover mb-6"
                    />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {model.name} {service.name} in Kuala Lumpur
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
                      {service.getMetaDescription(model)}
                    </p>

                    <div className="space-y-8 w-full">
                      {sections.map((section, idx) => (
                        <div
                          key={idx}
                          className="border-l-4 border-brand-600 pl-5 py-1"
                        >
                          <h3 className="text-lg md:text-xl font-semibold mb-3 text-brand-700">
                            {section.heading}
                          </h3>
                          {Array.isArray(section.content) ? (
                            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[15px] leading-relaxed">
                              {section.content.map((item, i) => (
                                <li key={i}>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600 text-[15px] leading-relaxed">
                              {section.content}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 bg-gray-50 rounded-xl p-5">
                      <h4 className="fw-semibold mb-3 text-gray-800">Other {model.name} repairs</h4>
                      <div className="flex flex-wrap gap-2">
                        {macbookServices
                          .filter((s) => s.slug !== service.slug)
                          .map((s) => (
                            <a
                              key={s.slug}
                              href={`/macbook/${model.slug}/${s.slug}`}
                              className="inline-block rounded-full border border-gray-200 bg-white text-gray-700 text-sm px-4 py-2 hover:border-brand-600 hover:text-brand-700 transition-colors text-decoration-none"
                            >
                              {s.name}
                            </a>
                          ))}
                      </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                      <BookingForm defaultColor={false} />
                    </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="sticky-top" style={{ top: "100px" }}>
                  <div className="bg-white border rounded-xl shadow-sm p-4">
                    <h5 className="fw-bold mb-3 text-gray-800 text-base">All MacBook Models</h5>
                    <ul className="list-unstyled mb-0">
                      {macbookModels
                        .slice()
                        .reverse()
                        .map((m) => (
                          <li key={m.slug} className="mb-1">
                            <a
                              href={`/macbook/${m.slug}/${service.slug}`}
                              className={`text-decoration-none small d-block py-1 px-2 rounded ${
                                m.slug === model.slug
                                  ? "fw-bold text-brand-700 bg-gray-50"
                                  : "text-gray-500 hover:text-brand-700"
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
        { name: "MacBook Repair KL", url: "/macbook" },
        { name: model.name, url: `/macbook/${model.slug}` },
        { name: service.name, url: `/macbook/${model.slug}/${service.slug}` },
      ]} />
    </div>
  );
}
