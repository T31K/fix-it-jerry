import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { locations, branches } from "@/data/locations";

export const metadata = {
  title: "Phone & Laptop Repair Across Klang Valley | Fix It Jerry",
  description:
    "On-site, courier pickup or walk-in device repair — covering 44 areas across KL, PJ and Selangor — including every condo in Desa ParkCity. Same-day screen, battery and water damage repairs. From RM 80.",
  openGraph: {
    title: "Phone & Laptop Repair Across Klang Valley | Fix It Jerry",
    description:
      "On-site, courier pickup or walk-in device repair — covering 44 areas across KL, PJ and Selangor — including every condo in Desa ParkCity. Same-day screen, battery and water damage repairs.",
  },
  alternates: { canonical: "/phone-repair" },
};

const grouped = {
  "Desa ParkCity": locations.filter((l) => l.region === "Desa ParkCity"),
  "Kuala Lumpur": locations.filter((l) => l.region === "Kuala Lumpur"),
  "Petaling Jaya": locations.filter((l) => l.region === "Petaling Jaya"),
  Selangor: locations.filter((l) => l.region === "Selangor"),
};

const faqs = [
  {
    q: "Which areas do you cover for phone repair?",
    a: "We cover 44 areas across Kuala Lumpur, Petaling Jaya and Selangor — including condo-level coverage in Desa ParkCity from four branches — Desa Parkcity, Bukit Jalil, Sri Manja PJ, and SS15 Subang Jaya. If you're anywhere in the Klang Valley, one of them is usually under 20 minutes away.",
  },
  {
    q: "Do I have to come to a branch?",
    a: "No. You can walk in, but we also do on-site visits for diagnostics and simple swaps, or arrange a Lalamove/Grab courier to collect your device and return it the same day.",
  },
  {
    q: "How fast is a typical repair?",
    a: "Most screen and battery replacements are done in under an hour at the branch. Courier jobs usually go out and come back the same day. Board-level and water damage repairs take 1–3 days depending on severity.",
  },
  {
    q: "How much do repairs cost?",
    a: "Batteries from RM 80 and screens from RM 120, depending on the model. We quote a fixed price upfront before any work starts — no diagnosis fee, no surprise charges.",
  },
  {
    q: "Is there a warranty on repairs?",
    a: "Yes — screens and batteries carry a 90-day workmanship warranty. If anything goes wrong with the repair, bring it back and we'll re-fix it free.",
  },
];

export default function RepairHubPage() {
  return (
    <div id="wrapper">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixitjerry.com/" },
              { "@type": "ListItem", position: 2, name: "Repair Areas", item: "https://www.fixitjerry.com/phone-repair" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
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
                <div className="subtitle">Fix It Jerry — Klang Valley</div>
                <h1 className="!text-[28px] md:!text-[48px]">
                  Phone & Laptop Repair Across the Klang Valley
                </h1>
                <p className="text-gray-200 max-w-2xl mx-auto !text-[16px] md:!text-[20px] text-center mt-3">
                  On-site, courier pickup, or walk-in. Pick the area closest to you.
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/phone-repair">Repair Areas</a></li>
            </ul>
          </div>
        </section>

        <section className="py-10">
          <div className="container">
            <div className="row justify-content-center mb-8">
              <div className="col-lg-9 text-center">
                <div className="subtitle s2 mb-2">How We Reach You</div>
                <h2 className="mb-3">Three Ways to Get a Repair</h2>
                <p className="text-muted">
                  We have four branches across the Klang Valley — Desa Parkcity, Bukit Jalil,
                  Sri Manja PJ, and SS15 Subang. Whichever is closest, we'll come to you,
                  send a Grab/Lalamove for the device, or you can drop in.
                </p>
              </div>
            </div>

            <div className="row g-4 mb-10">
              <div className="col-md-4">
                <div className="bg-white border rounded-lg p-4 h-full text-center">
                  <div className="fw-bold mb-2">On-Site Visit</div>
                  <p className="text-muted small mb-0">
                    A technician comes to your home or office for in-warranty diagnoses, simple swaps and water-damage triage.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white border rounded-lg p-4 h-full text-center">
                  <div className="fw-bold mb-2">Lalamove or Grab Pickup</div>
                  <p className="text-muted small mb-0">
                    We coordinate the courier — your device leaves your door and comes back the same day for most common repairs.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white border rounded-lg p-4 h-full text-center">
                  <div className="fw-bold mb-2">Walk In</div>
                  <p className="text-muted small mb-0">
                    Drop in at any of our four branches. Most screen and battery jobs are done in under an hour while you wait.
                  </p>
                </div>
              </div>
            </div>

            {Object.entries(grouped).map(([region, items]) => (
              <div key={region} className="mb-8">
                <h3 className="mb-4">{region}</h3>
                <div className="row g-3">
                  {items.map((loc) => {
                    const branch = branches[loc.nearestBranch];
                    return (
                      <div key={loc.slug} className="col-6 col-md-4 col-lg-3">
                        <Link
                          href={`/phone-repair/${loc.slug}`}
                          className="d-block text-decoration-none"
                        >
                          <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow h-full">
                            <div className="text-brand-700 fw-bold mb-1">{loc.name}</div>
                            <div className="text-muted small">
                              Nearest: {branch.name}
                            </div>
                            <div className="text-muted small">
                              ~{loc.drivingMinutes} min away
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="text-center mb-6">
                  <div className="subtitle s2 mb-2">Frequently Asked</div>
                  <h2>Common Questions</h2>
                </div>
                <div className="row g-3">
                  {faqs.map((f) => (
                    <div key={f.q} className="col-12">
                      <div className="bg-white border rounded-lg p-4">
                        <div className="fw-bold mb-2">{f.q}</div>
                        <div className="text-muted">{f.a}</div>
                      </div>
                    </div>
                  ))}
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
