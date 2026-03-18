import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { iphoneModels, iphoneServices } from "@/data/iphone";

export async function generateStaticParams() {
  return iphoneModels.map((model) => ({ model: model.slug }));
}

export async function generateMetadata({ params }) {
  const model = iphoneModels.find((m) => m.slug === params.model);
  if (!model) return { title: "Not Found | Fix It Jerry" };

  return {
    title: `${model.name} Repair in KL | Fix It Jerry`,
    description: `${model.name} repair in Kuala Lumpur — screen replacement, battery, back glass, camera, charging port & more. Fast, affordable. Walk in or book online.`,
    openGraph: {
      title: `${model.name} Repair in KL | Fix It Jerry`,
      description: `${model.name} repair in Kuala Lumpur — screen replacement, battery, back glass, camera, charging port & more. Fast, affordable. Walk in or book online.`,
    },
    alternates: { canonical: `/iphone/${params.model}` },
  };
}

export default function IphoneModelPage({ params }) {
  const model = iphoneModels.find((m) => m.slug === params.model);
  if (!model) notFound();

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
                <h1 className="!text-[28px] md:!text-[48px]">
                  {model.name} Repair in KL
                </h1>
                <p className="text-gray-200 max-w-2xl mx-auto !text-[16px] md:!text-[18px] text-center mt-3">
                  {model.screenSize} · {model.screenType} · {model.port} · {model.batteryMah}mAh
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/iphone">iPhone</a></li>
              <li><a href={`/iphone/${model.slug}`}>{model.name}</a></li>
            </ul>
          </div>
        </section>

        <section className="py-10">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                <h2 className="mb-6">
                  {model.name} Repair Services in Kuala Lumpur
                </h2>
                <div className="row g-3">
                  {iphoneServices.map((service) => (
                    <div key={service.slug} className="col-12 col-md-6">
                      <Link
                        href={`/iphone/${model.slug}/${service.slug}`}
                        className="d-block text-decoration-none"
                      >
                        <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="fw-bold text-brand-700 mb-1">
                            {model.name} {service.name}
                          </div>
                          <div className="text-muted small">
                            {service.getMetaDescription(model).slice(0, 80)}...
                          </div>
                          <div className="mt-2 text-brand-700 small fw-semibold">
                            View details →
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-light rounded-lg p-5">
                  <h3 className="mb-3">About {model.name} Repairs</h3>
                  <p className="text-gray-700">
                    The {model.name} ({model.year}) features a {model.screenSize}{" "}
                    {model.screenType} display
                    {model.hasProMotion ? " with 120Hz ProMotion" : ""} and a{" "}
                    {model.batteryMah}mAh battery, charging via {model.port}.
                    Fix It Jerry in Kuala Lumpur handles all component-level
                    repairs for this model — from screen and battery replacements
                    to water damage recovery and IC-level board repairs.
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="sticky-top" style={{ top: "100px" }}>
                  <div className="bg-white border rounded-lg p-4 mb-4">
                    <h5 className="mb-3">Book a Repair</h5>
                    <BookingForm defaultColor={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
