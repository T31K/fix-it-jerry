import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { appleWatchModels, appleWatchServices } from "@/data/applewatchModels";

export const metadata = {
  title: "Apple Watch Repair in KL | Fix It Jerry",
  description:
    "Expert Apple Watch repair in Kuala Lumpur. Screen replacement, battery replacement, Digital Crown repair, charging repair & more for Series 6–9, Ultra, Ultra 2, and SE. Free diagnostics.",
  openGraph: {
    title: "Apple Watch Repair in KL | Fix It Jerry",
    description:
      "Expert Apple Watch repair in Kuala Lumpur. Screen replacement, battery replacement, Digital Crown repair & more. Fast turnaround, OEM parts.",
    images: ["https://fixitjerry.com/og_images/apple-watch.png"],
  },
  alternates: { canonical: '/apple-watch' },
};

export default function AppleWatchHubPage() {
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
                <h1 className="!text-[28px] md:!text-[48px]">Apple Watch Repair KL</h1>
                <p className="text-gray-200 max-w-2xl mx-auto !text-[16px] md:!text-[18px] text-center mt-3">
                  Screen replacements, battery swaps, Digital Crown repair & more — for every Apple Watch model.
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/apple-watch">Apple Watch</a></li>
            </ul>
          </div>
        </section>

        <section className="py-10">
          <div className="container">

            {/* Services strip */}
            <div className="row g-3 mb-10">
              {appleWatchServices.map((service) => (
                <div key={service.slug} className="col-6 col-md-4 col-lg-2">
                  <div className="bg-white border rounded-lg p-3 text-center hover:shadow-md transition-shadow h-full">
                    <p className="fw-semibold text-sm text-gray-800 mb-1">{service.name}</p>
                    <p className="text-xs text-muted mb-0">All models</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Models grid */}
            <h2 className="text-2xl font-bold mb-6">Choose Your Apple Watch Model</h2>
            <div className="row g-4">
              {appleWatchModels.map((model) => (
                <div key={model.slug} className="col-6 col-md-4 col-lg-3">
                  <div className="bg-white border rounded-xl p-4 hover:shadow-lg transition-shadow h-full">
                    <p className="text-xs text-muted mb-1">{model.year}</p>
                    <h3 className="fw-bold text-gray-900 mb-2 text-base">{model.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{model.screenSize} · {model.screenType}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {appleWatchServices.slice(0, 3).map((s) => (
                        <a
                          key={s.slug}
                          href={`/apple-watch/${model.slug}/${s.slug}`}
                          className="text-xs badge bg-gray-100 text-gray-700 text-decoration-none hover:bg-[#C6E76C]/30 px-2 py-1"
                        >
                          {s.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href={`/apple-watch/${model.slug}`}
                      className="inline-flex items-center justify-center w-full rounded-md py-2 text-sm font-semibold text-[#2b3f48] bg-[#C6E76C] hover:bg-[#b5d455] transition-colors"
                    >
                      View All Repairs →
                    </a>
                  </div>
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
