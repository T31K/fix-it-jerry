// Visible FAQ (native <details> accordion, zero client JS) + FAQPage JSON-LD.
// Usage: <FaqSection faqs={buildServiceFaqs(model, service)} heading="..." />

export default function FaqSection({ faqs, heading = "Frequently asked questions" }) {
  if (!faqs || faqs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="mt-10">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        {heading}
      </h3>
      <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
        {faqs.map((f, i) => (
          <details key={i} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] md:text-base font-semibold text-gray-800">
              <span>{f.question}</span>
              <span className="text-brand-600 transition-transform group-open:rotate-45 text-xl leading-none">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
              {f.answer}
            </p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
