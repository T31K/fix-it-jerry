import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { iphoneModels, iphoneServices } from "@/data/iphone";

export const metadata = {
  title: "iPhone Repair in Kuala Lumpur | Fix It Jerry",
  description:
    "Expert iPhone repair in KL — screen replacement, battery, back glass, charging port, camera & water damage. All models from iPhone 11 to iPhone 16 Pro Max.",
  openGraph: {
    title: "iPhone Repair in Kuala Lumpur | Fix It Jerry",
    description:
      "Expert iPhone repair in KL — screen replacement, battery, back glass, charging port, camera & water damage. All models from iPhone 11 to iPhone 16 Pro Max.",
  },
  alternates: { canonical: '/iphone' },
};

export default function IphoneHubPage() {
  const modelsByYear = iphoneModels.slice().reverse();

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
                <div className="subtitle">Fix It Jerry</div>
                <h1 className="!text-[28px] md:!text-[48px]">
                  iPhone Repair in Kuala Lumpur
                </h1>
                <p className="text-gray-200 max-w-2xl mx-auto !text-[16px] md:!text-[20px] text-center mt-3">
                  All models. All repairs. Fast turnaround & affordable prices.
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/iphone">iPhone</a></li>
            </ul>
          </div>
        </section>

        <section className="py-10">
          <div className="container">
            <div className="row justify-content-center mb-8">
              <div className="col-lg-8 text-center">
                <div className="subtitle s2 mb-2">What We Fix</div>
                <h2 className="mb-3">iPhone Repairs We Specialise In</h2>
                <div className="row g-3 justify-content-center mt-4">
                  {iphoneServices.map((service) => (
                    <div key={service.slug} className="col-auto">
                      <span className="badge bg-light text-dark border px-3 py-2 fs-6">
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row justify-content-center mb-6">
              <div className="col-lg-10 text-center">
                <div className="subtitle s2 mb-2">Select Your Model</div>
                <h2 className="mb-6">All iPhone Models We Repair</h2>
              </div>
            </div>

            <div className="row g-3">
              {modelsByYear.map((model) => (
                <div key={model.slug} className="col-6 col-md-4 col-lg-3">
                  <Link
                    href={`/iphone/${model.slug}`}
                    className="d-block text-decoration-none"
                  >
                    <div className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow h-full">
                      <div className="text-brand-700 fw-bold mb-1">
                        {model.name}
                      </div>
                      <div className="text-muted small">{model.screenSize}</div>
                      <div className="text-muted small mt-1">
                        {iphoneServices.length} services available
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
