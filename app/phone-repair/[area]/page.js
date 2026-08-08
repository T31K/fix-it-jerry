import { notFound } from "next/navigation";
import Link from "next/link";
import { existsSync } from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import Reviews from "@/components/Reviews";
import JsonLd from "@/components/JsonLd";
import { locations, branches, locationServices } from "@/data/locations";

export async function generateStaticParams() {
  return locations.map((loc) => ({ area: loc.slug }));
}

export async function generateMetadata({ params }) {
  const loc = locations.find((l) => l.slug === params.area);
  if (!loc) return { title: "Not Found | Fix It Jerry" };

  const title = `Phone & Laptop Repair in ${loc.name} | Fix It Jerry`;
  const description = `Same-day phone, tablet & laptop repair in ${loc.name} — pickup around ${loc.landmarks.slice(0, 2).join(", ")} and nearby. On-site, Lalamove/Grab, or walk-in. Screens from RM 120, batteries from RM 80.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`https://www.fixitjerry.com/og_images/phone-repair-${loc.slug}.png`],
    },
    alternates: { canonical: `/phone-repair/${loc.slug}` },
  };
}

export default function LocationPage({ params }) {
  const loc = locations.find((l) => l.slug === params.area);
  if (!loc) notFound();

  const branch = branches[loc.nearestBranch];
  const url = `https://www.fixitjerry.com/phone-repair/${loc.slug}`;
  const areaImg = existsSync(path.join(process.cwd(), "public", "phone-repair", `${loc.slug}.jpg`))
    ? `/phone-repair/${loc.slug}.jpg`
    : null;

  const nearby = locations
    .filter((l) => l.nearestBranch === loc.nearestBranch && l.slug !== loc.slug)
    .slice(0, 6);

  const faqs = [
    {
      q: `How long does pickup from ${loc.name} take?`,
      a: `Most Lalamove or Grab pickups from ${loc.name} reach our ${branch.name} branch in around ${loc.drivingMinutes} minutes off-peak. Screen and battery jobs typically finish the same day.`,
    },
    {
      q: `Can you collect my device from ${loc.landmarks[0]}?`,
      a: `Yes — ${loc.landmarks.slice(0, -1).join(", ")} and ${loc.landmarks[loc.landmarks.length - 1]} are all regular pickup points for us in ${loc.name}. Share your exact location when booking and we'll arrange the courier to meet you there.`,
    },
    {
      q: `Do you visit ${loc.name} for on-site repairs?`,
      a: `Yes — our technicians cover ${loc.name} for diagnostics, water damage triage, and simple swaps. Booking is required so we can match the job to a free technician.`,
    },
    {
      q: `What devices do you repair?`,
      a: `iPhones, Samsung, Pixel and other smartphones; iPads and tablets; MacBooks and Windows laptops; Apple Watch; AirPods; Nintendo Switch. If it has a battery and a screen, we likely repair it.`,
    },
    {
      q: `How much does a screen replacement cost?`,
      a: `Screen replacements start at RM 120 and depend on the model. We quote a fixed price upfront — no surprise charges. Most repairs around RM 200–500.`,
    },
    {
      q: `Do you use original parts?`,
      a: `We carry both original and high-grade aftermarket parts. We'll show you both options and let you choose based on budget. Every part is tested before installation.`,
    },
    {
      q: `What's the warranty?`,
      a: `All repairs come with a workmanship warranty. Screens and batteries are covered for 90 days against defects. Bring it back for a free re-fix if anything goes wrong.`,
    },
  ];

  return (
    <div id="wrapper">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Phone & Laptop Repair in ${loc.name}`,
            serviceType: "Mobile Phone Repair",
            url,
            ...(areaImg && { image: `https://www.fixitjerry.com${areaImg}` }),
            description: `Mobile phone, tablet and laptop repair serving ${loc.name}. On-site, courier pickup, or drop-in at our ${branch.name} branch.`,
            areaServed: {
              "@type": "Place",
              name: loc.name,
              address: {
                "@type": "PostalAddress",
                addressLocality: loc.name,
                addressRegion: loc.region,
                postalCode: loc.postcode,
                addressCountry: "MY",
              },
            },
            provider: { "@id": "https://www.fixitjerry.com/#business" },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "MYR",
              lowPrice: 80,
              highPrice: 500,
              availability: "https://schema.org/InStock",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fixitjerry.com/" },
              { "@type": "ListItem", position: 2, name: "Repair Areas", item: "https://www.fixitjerry.com/phone-repair" },
              { "@type": "ListItem", position: 3, name: loc.name, item: url },
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
                <div className="subtitle">Fix It Jerry — {loc.region}</div>
                <h1 className="!text-[28px] md:!text-[48px] text-balance">
                  Phone & Laptop Repair in {loc.name}
                </h1>
                <p className="text-gray-200 max-w-2xl mx-auto !text-[16px] md:!text-[20px] text-center mt-3 text-balance">
                  On-site, courier pickup, or walk-in at our {branch.name} branch — about {loc.drivingMinutes} minutes from {loc.name}.
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/phone-repair">Repair Areas</a></li>
              <li><a href={`/phone-repair/${loc.slug}`}>{loc.name}</a></li>
            </ul>
          </div>
        </section>

        {/* Service options — three honest paths */}
        <section className="py-10">
          <div className="container">
            <div className="row justify-content-center mb-6">
              <div className="col-lg-9 text-center">
                <div className="subtitle s2 mb-2">Three Ways to Get a Repair</div>
                <h2 className="mb-3">Whichever's Easiest for You</h2>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="bg-white border rounded-lg p-4 h-full">
                  <div className="fw-bold mb-2">On-Site Visit</div>
                  <p className="text-muted small mb-0">
                    Our technician comes to you in {loc.name} for diagnostics, water damage triage, or simple swaps. Useful when you can't leave the house or office.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white border rounded-lg p-4 h-full">
                  <div className="fw-bold mb-2">Lalamove or Grab Pickup</div>
                  <p className="text-muted small mb-0">
                    We arrange a courier from {loc.name} to our {branch.name} branch. Most jobs come back the same day.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white border rounded-lg p-4 h-full">
                  <div className="fw-bold mb-2">Walk In</div>
                  <p className="text-muted small mb-0">
                    Drop by our {branch.name} branch — about {loc.drivingMinutes} minutes from {loc.name}. Most screen and battery jobs done while you wait.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local context — the unique-content layer that protects against duplicate-page penalty */}
        <section className="py-10 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="subtitle s2 mb-2">About Our Service in {loc.name}</div>
                <h2 className="mb-4">Why Customers in {loc.name} Choose Fix It Jerry</h2>
                {areaImg && (
                  <img
                    src={areaImg}
                    alt={`${loc.landmarks[0]}, ${loc.name}`}
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="w-full rounded-lg border mb-4 object-cover"
                  />
                )}
                <p className="mb-4">{loc.blurb}</p>
                <div className="row g-3 mt-4">
                  <div className="col-md-6">
                    <div className="bg-white border rounded-lg p-4 h-full">
                      <div className="fw-bold mb-2">Common Pickup Spots in {loc.name}</div>
                      <ul className="mb-0 ps-3 text-muted small">
                        {loc.landmarks.map((l) => (
                          <li key={l}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-white border rounded-lg p-4 h-full">
                      <div className="fw-bold mb-2">Closest Branch</div>
                      <div className="text-muted small">
                        {branch.name}<br />
                        {branch.address}<br />
                        Approx. {loc.drivingMinutes} min from {loc.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services + transparent pricing */}
        <section className="py-10">
          <div className="container">
            <div className="row justify-content-center mb-6">
              <div className="col-lg-9 text-center">
                <div className="subtitle s2 mb-2">What We Fix</div>
                <h2 className="mb-3">Repairs Available in {loc.name}</h2>
                <p className="text-muted">Fixed-price quotes upfront. No diagnosis fee.</p>
              </div>
            </div>
            <div className="row g-3">
              {locationServices.map((s) => (
                <div key={s.slug} className="col-6 col-md-4 col-lg-3">
                  <div className="bg-white border rounded-lg p-4 h-full text-center">
                    <div className="fw-bold mb-1">{s.name}</div>
                    <div className="text-muted small">From RM {s.from}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking form */}
        <section className="py-10 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center mb-6">
                  <div className="subtitle s2 mb-2">Get a Free Quote</div>
                  <h2>Book a Repair from {loc.name}</h2>
                  <p className="text-muted">Tell us your device and the issue — we'll quote within an hour.</p>
                </div>
                <div className="flex justify-center">
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby areas served by the same branch — unique cross-links per page */}
        {nearby.length > 0 && (
          <section className="py-10">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="text-center mb-6">
                    <div className="subtitle s2 mb-2">Also Nearby</div>
                    <h2>Other Areas Served by Our {branch.name} Branch</h2>
                  </div>
                  <div className="row g-3 justify-content-center">
                    {nearby.map((n) => (
                      <div key={n.slug} className="col-6 col-md-4">
                        <Link
                          href={`/phone-repair/${n.slug}`}
                          className="d-block text-decoration-none"
                        >
                          <div className="bg-white border rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                            <div className="text-brand-700 fw-bold">{n.name}</div>
                            <div className="text-muted small">~{n.drivingMinutes} min away</div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Reviews */}
        <Reviews />

        {/* FAQ */}
        <section className="py-10">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="text-center mb-6">
                  <div className="subtitle s2 mb-2">Frequently Asked</div>
                  <h2>Common Questions from {loc.name} Customers</h2>
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
