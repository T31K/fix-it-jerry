// Emits Service (+ AggregateOffer) and FAQPage JSON-LD for a brand
// [model]/[service] page. Everything is derived defensively from the
// service's getSections(model) output, since the content shape (price
// formatting, presence of a turnaround line, question-style headings)
// varies across brands.

const PROVIDER = {
  "@type": "RepairBusiness",
  name: "Fix It Jerry",
  url: "https://www.fixitjerry.com",
  telephone: "+60183646909",
  image: "https://www.fixitjerry.com/og.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7, Jalan Residen Utama",
    addressLocality: "Desa Parkcity",
    addressRegion: "Kuala Lumpur",
    postalCode: "52200",
    addressCountry: "MY",
  },
};

const withCommas = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function flattenContent(sections) {
  const lines = [];
  for (const s of sections) {
    if (Array.isArray(s.content)) lines.push(...s.content.filter((x) => typeof x === "string"));
    else if (typeof s.content === "string") lines.push(s.content);
  }
  return lines;
}

function parsePriceRange(lines) {
  const amounts = [];
  for (const line of lines) {
    const matches = line.match(/RM\s*[\d,]+/g);
    if (!matches) continue;
    for (const m of matches) {
      const n = parseInt(m.replace(/[^\d]/g, ""), 10);
      if (!Number.isNaN(n)) amounts.push(n);
    }
  }
  if (!amounts.length) return null;
  return { low: Math.min(...amounts), high: Math.max(...amounts) };
}

function parseTurnaround(lines) {
  for (const line of lines) {
    const idx = line.toLowerCase().indexOf("turnaround");
    if (idx === -1) continue;
    const colon = line.indexOf(":", idx);
    const value = (colon !== -1 ? line.slice(colon + 1) : line.slice(idx + "turnaround".length)).trim();
    if (value) return value;
  }
  return null;
}

export default function ServiceJsonLd({ model, service, url }) {
  const sections = typeof service.getSections === "function" ? service.getSections(model) : [];
  const lines = flattenContent(sections);
  const price = parsePriceRange(lines);
  const turnaround = parseTurnaround(lines);

  const serviceName = `${model.name} ${service.name}`;
  const description =
    typeof service.getMetaDescription === "function"
      ? service.getMetaDescription(model)
      : `${serviceName} in Kuala Lumpur by Fix It Jerry.`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in Kuala Lumpur`,
    serviceType: service.name,
    description,
    url,
    provider: PROVIDER,
    areaServed: { "@type": "City", name: "Kuala Lumpur" },
  };
  if (price) {
    serviceLd.offers = {
      "@type": "AggregateOffer",
      priceCurrency: "MYR",
      lowPrice: price.low,
      highPrice: price.high,
      availability: "https://schema.org/InStock",
      url,
    };
  }

  const faqs = [];
  if (price) {
    const priceText =
      price.low === price.high
        ? `Fix It Jerry's ${serviceName.toLowerCase()} in Kuala Lumpur is priced around RM ${withCommas(price.low)}.`
        : `Fix It Jerry's ${serviceName.toLowerCase()} in Kuala Lumpur typically costs between RM ${withCommas(price.low)} and RM ${withCommas(price.high)}, depending on the extent of the damage.`;
    faqs.push({
      q: `How much does ${serviceName} cost in Kuala Lumpur?`,
      a: `${priceText} Walk in or book online for an exact quote.`,
    });
  }
  if (turnaround) {
    faqs.push({
      q: `How long does ${serviceName} take?`,
      a: `Most ${serviceName.toLowerCase()} jobs at Fix It Jerry take ${turnaround}. Bring your device to our Kuala Lumpur store or book a slot online.`,
    });
  }
  // Genuinely question-shaped section headings become additional FAQs.
  for (const s of sections) {
    if (typeof s.heading !== "string" || !s.heading.trim().endsWith("?")) continue;
    const answer = Array.isArray(s.content) ? s.content.join(" ") : s.content;
    if (typeof answer === "string" && answer.trim()) {
      faqs.push({ q: s.heading.trim(), a: answer.trim() });
    }
  }

  const faqLd = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
    </>
  );
}
