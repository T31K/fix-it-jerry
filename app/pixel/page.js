import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { pixelModels, pixelServices } from "@/data/pixel";

export const metadata = {
  title: "Google Pixel Repair in Kuala Lumpur | Fix It Jerry",
  description:
    "Google Pixel repair in KL. Screen, battery, charging port, water damage & back glass. Pixel 6 through Pixel 9 Pro Fold. Walk in or book online.",
  openGraph: {
    title: "Google Pixel Repair in Kuala Lumpur | Fix It Jerry",
    description:
      "Google Pixel repair in KL. Screen, battery, charging port, water damage & back glass. Pixel 6 through Pixel 9 Pro Fold. Walk in or book online.",
  },
};

export default function PixelHubPage() {
  const modelsByYear = pixelModels.slice().reverse();

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
                  Google Pixel Repair in Kuala Lumpur
                </h1>
                <p className="text-gray-200 max-w-2xl mx-auto !text-[16px] md:!text-[20px] text-center mt-3">
                  Pixel 6 through Pixel 9 Pro Fold. All Tensor chips. Fast turnaround.
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/pixel">Google Pixel</a></li>
            </ul>
          </div>
        </section>

        <section className="py-10">
          <div className="container">
            <div className="row justify-content-center mb-8">
              <div className="col-lg-8 text-center">
                <div className="subtitle s2 mb-2">What We Fix</div>
                <h2 className="mb-3">Pixel Repairs We Handle</h2>
                <div className="row g-3 justify-content-center mt-4">
                  {pixelServices.map((service) => (
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
                <h2 className="mb-6">All Pixel Models We Repair</h2>
              </div>
            </div>

            <div className="row g-3">
              {modelsByYear.map((model) => (
                <div key={model.slug} className="col-6 col-md-4 col-lg-3">
                  <Link
                    href={`/pixel/${model.slug}`}
                    className="d-block text-decoration-none"
                  >
                    <div className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow h-full">
                      <div className="text-brand-700 fw-bold mb-1">
                        {model.name}
                      </div>
                      <div className="text-muted small">{model.screenSize} · {model.chipset}</div>
                      <div className="text-muted small mt-1">
                        {pixelServices.length} services available
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
