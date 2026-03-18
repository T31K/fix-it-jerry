import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { guides } from "@/data/guides";

export const metadata = {
  title: "Repair Guides & Cost Breakdowns KL | Fix It Jerry",
  description:
    "Device repair guides for Kuala Lumpur — IC repair costs, symptom diagnosis, and honest advice on whether to repair or replace your device.",
  openGraph: {
    title: "Repair Guides & Cost Breakdowns KL | Fix It Jerry",
    description:
      "Device repair guides for Kuala Lumpur — IC repair costs, symptom diagnosis, and honest advice on whether to repair or replace your device.",
  },
  alternates: { canonical: '/guides' },
};

const categoryLabel = {
  "cost-guide": "Cost Guide",
  symptom: "Symptom Diagnosis",
};

const categoryColor = {
  "cost-guide": "bg-green-100 text-green-800",
  symptom: "bg-blue-100 text-blue-800",
};

export default function GuidesHubPage() {
  const costGuides = guides.filter((g) => g.category === "cost-guide");
  const symptomGuides = guides.filter((g) => g.category === "symptom");

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
                  Repair Guides & Cost Breakdowns
                </h1>
                <p className="text-gray-200 max-w-2xl mx-auto !text-[16px] md:!text-[20px] text-center mt-3">
                  Honest advice on repair costs, symptom diagnosis, and when to fix vs replace.
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/guides">Guides</a></li>
            </ul>
          </div>
        </section>

        <section className="py-10">
          <div className="container">
            <div className="mb-10">
              <h2 className="mb-2">Repair Cost Guides</h2>
              <p className="text-muted mb-6">Transparent pricing breakdowns before you book.</p>
              <div className="row g-4">
                {costGuides.map((guide) => (
                  <div key={guide.slug} className="col-12 col-md-6 col-lg-4">
                    <a href={`/guides/${guide.slug}`} className="d-block text-decoration-none h-full">
                      <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow h-full">
                        <span className={`badge ${categoryColor[guide.category]} mb-3`}>
                          {categoryLabel[guide.category]}
                        </span>
                        <h4 className="fw-bold text-gray-900 mb-2">{guide.title}</h4>
                        <p className="text-muted small">{guide.intro.slice(0, 100)}...</p>
                        <div className="mt-3 text-brand-700 small fw-semibold">Read guide →</div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-2">Symptom Diagnosis Guides</h2>
              <p className="text-muted mb-6">Figure out what's wrong before you come in.</p>
              <div className="row g-4">
                {symptomGuides.map((guide) => (
                  <div key={guide.slug} className="col-12 col-md-6 col-lg-4">
                    <a href={`/guides/${guide.slug}`} className="d-block text-decoration-none h-full">
                      <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow h-full">
                        <span className={`badge ${categoryColor[guide.category]} mb-3`}>
                          {categoryLabel[guide.category]}
                        </span>
                        <h4 className="fw-bold text-gray-900 mb-2">{guide.title}</h4>
                        <p className="text-muted small">{guide.intro.slice(0, 100)}...</p>
                        <div className="mt-3 text-brand-700 small fw-semibold">Read guide →</div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
