import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { samsungModels, samsungServices } from "@/data/samsung";

export const metadata = {
  title: "Samsung Repair in Kuala Lumpur | Fix It Jerry",
  description:
    "Expert Samsung repair in KL — screen replacement, battery, back glass, charging port, camera & water damage. Galaxy S, A & Note series supported.",
  openGraph: {
    title: "Samsung Repair in Kuala Lumpur | Fix It Jerry",
    description:
      "Expert Samsung repair in KL — screen replacement, battery, back glass, charging port, camera & water damage. Galaxy S, A & Note series supported.",
  },
};

const seriesOrder = ["S", "Note", "A"];

export default function SamsungHubPage() {
  const groupedModels = seriesOrder.map((series) => ({
    series,
    models: samsungModels.filter((m) => m.series === series).reverse(),
  }));

  const seriesLabel = { S: "Galaxy S Series", Note: "Galaxy Note Series", A: "Galaxy A Series" };

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
                  Samsung Repair in Kuala Lumpur
                </h1>
                <p className="text-gray-200 max-w-2xl mx-auto !text-[16px] md:!text-[20px] text-center mt-3">
                  Galaxy S, Note & A Series. All repairs. Fast turnaround & affordable prices.
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/samsung">Samsung</a></li>
            </ul>
          </div>
        </section>

        <section className="py-10">
          <div className="container">
            <div className="row justify-content-center mb-8">
              <div className="col-lg-8 text-center">
                <div className="subtitle s2 mb-2">What We Fix</div>
                <h2 className="mb-3">Samsung Repairs We Specialise In</h2>
                <div className="row g-3 justify-content-center mt-4">
                  {samsungServices.map((service) => (
                    <div key={service.slug} className="col-auto">
                      <span className="badge bg-light text-dark border px-3 py-2 fs-6">
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {groupedModels.map(({ series, models }) => (
              <div key={series} className="mb-10">
                <h3 className="mb-4 fw-bold">{seriesLabel[series]}</h3>
                <div className="row g-3">
                  {models.map((model) => (
                    <div key={model.slug} className="col-6 col-md-4 col-lg-3">
                      <Link
                        href={`/samsung/${model.slug}`}
                        className="d-block text-decoration-none"
                      >
                        <div className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow h-full">
                          <div className="text-brand-700 fw-bold mb-1">
                            {model.name}
                          </div>
                          <div className="text-muted small">{model.screenSize}</div>
                          {model.hasSPen && (
                            <div className="text-muted small">S Pen included</div>
                          )}
                          <div className="text-muted small mt-1">
                            {samsungServices.length} services available
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
