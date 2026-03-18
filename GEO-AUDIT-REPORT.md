# GEO Audit Report — fixitjerry.com
**Date:** March 2026
**Business:** Fix It Jerry — Device Repair Shop, Kuala Lumpur, Malaysia
**Locations:** Desa Parkcity · Subang Jaya · Bukit Jalil · Puchong
**Audited by:** GEO Audit Tool (5 parallel subagents)

---

## Overall GEO Score: 40 / 100 — Poor

> Fix It Jerry has a technically sound foundation (SSG, HTTPS, SSR, 800+ programmatic pages) but is nearly invisible to AI search engines. The core problems are zero external brand presence, broken content pages, missing canonical tags, and schema errors — all fixable.

---

## Score Breakdown

| Category | Weight | Score | Weighted | Status |
|---|---|---|---|---|
| AI Citability & Visibility | 25% | 34/100 | 8.5 | Poor |
| Brand Authority Signals | 20% | 18/100 | 3.6 | Critical |
| Content Quality & E-E-A-T | 20% | 54/100 | 10.8 | Fair |
| Technical Foundations | 15% | 61/100 | 9.15 | Fair |
| Structured Data | 10% | 32/100 | 3.2 | Poor |
| Platform Optimization | 10% | 44/100 | 4.4 | Poor |
| **COMPOSITE GEO SCORE** | 100% | **40/100** | **39.65** | **Poor** |

---

## Platform Readiness

| Platform | Score | Status |
|---|---|---|
| Google AI Overviews | 52/100 | Fair |
| Google Gemini | 48/100 | Fair |
| Bing Copilot | 38/100 | Poor |
| Perplexity AI | 36/100 | Poor |
| ChatGPT Web Search | 33/100 | Poor |
| **Average** | **44/100** | **Poor** |

---

## What's Working

- **SSR/SSG architecture** — Next.js static generation means every AI crawler reads full page content immediately. This is the best possible technical foundation.
- **625+ programmatic pages** — Deep topical coverage across device/brand/model/service combinations.
- **AI crawlers fully allowed** — All major AI bots (GPTBot, ClaudeBot, PerplexityBot) have unrestricted access.
- **Unique OG images** — Per-page OG images for every pSEO page is an excellent implementation.
- **Proprietary pricing data** — The repair cost tables with MYR pricing are genuinely citable content that doesn't exist elsewhere.
- **4 physical locations with named contacts** — Strong local authority foundation.
- **LocalBusiness schema present** — JSON-LD is in place and server-rendered.

---

## Critical Issues (Fix These First)

### 1. Guide Pages Are Returning 404
**Impact: Kills the highest-citability content on the site**

Multiple guide pages linked from the `/guides` index return 404:
- `/guides/iphone-battery-replacement`
- `/guides/samsung-screen-replacement`
- `/guides/water-damage-repair`
- `/guides/charging-port-repair`

Only `/guides/phone-wont-turn-on` resolved. The guides section is the most AI-citable content on the site — the water damage and battery guides scored 74-78/100 for citability when they work. If the guides exist at different URL slugs, the index page links are broken and neither users nor crawlers can reach the content.

**Fix:** Audit every guide URL in `/data/guides.js` and match slugs to the actual routes in `app/guides/[slug]/page.js`.

---

### 2. About Page is 404
**Impact: Destroys E-E-A-T across all 4 dimensions**

The `/about` page returns 404. There is no company story, no founders, no technician bios, and no "who we are" content anywhere on the site. This is the single largest content gap for E-E-A-T — it simultaneously fails Experience, Expertise, Authoritativeness, and Trustworthiness.

**Fix:** Create `/about` with: founding story, named owners/founders, technician team (photos + bios), years in business, total repairs completed, any certifications or training.

---

### 3. No Canonical Tags Anywhere
**Impact: Duplicate content risk across 625+ pages, www/non-www split unresolved**

Not a single page on the site has a `<link rel="canonical">` tag. With 625 programmatic pages and a www vs non-www redirect inconsistency (server sends `www` but sitemap, robots.txt, og:url, and JSON-LD all reference non-www), there is an unresolved duplicate URL signal across every page.

**Fix in Next.js App Router:**
```js
// app/iphone/[model]/[service]/page.js
export async function generateMetadata({ params }) {
  return {
    alternates: {
      canonical: `https://fixitjerry.com/iphone/${params.model}/${params.service}`,
    },
  }
}
```
Apply to all page types: homepage, device pages, guide pages, brand pages.

---

### 4. Opening Hours in Schema Are Wrong
**Impact: Factual conflict — schema says 10:00–20:00, site shows 10:00–18:00**

In `app/layout.js`, the `openingHoursSpecification` says 10:00–20:00 every day. The contact page displays Mon–Fri 10:00–18:00 and Sat–Sun 10:00–15:00. This conflict will be flagged by Google's Rich Results Test and misleads AI models that ingest structured data.

**Fix in `app/layout.js`:**
```json
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "10:00",
    "closes": "18:00"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Saturday","Sunday"],
    "opens": "10:00",
    "closes": "15:00"
  }
]
```

---

### 5. No llms.txt
**Impact: AI crawlers must guess which of 625+ pages to prioritize — they default to homepage only**

There is no `llms.txt` at the domain root. For a site with 625+ programmatic pages, this is a major missed opportunity. AI crawlers use this file to understand site structure and prioritize content.

**Fix:** Create `/public/llms.txt`:

```
# Fix It Jerry

> Fix It Jerry is a device repair shop in Kuala Lumpur, Malaysia with four branches
> (Desa Parkcity, Subang Jaya, Bukit Jalil, Puchong). We repair smartphones, tablets,
> laptops, Nintendo Switch, AirPods, and Apple Watches with transparent MYR pricing.

## Core Pages
- [Homepage](https://fixitjerry.com/): Overview, pricing range RM 80–1,200, locations.
- [Contact & Locations](https://fixitjerry.com/contact): Full addresses, per-branch contacts, hours.
- [Book a Repair](https://fixitjerry.com/book-a-repair): Online booking form.

## Repair Guides
- [Phone Won't Turn On](https://fixitjerry.com/guides/phone-wont-turn-on): Diagnostic steps and costs.
- [iPhone Battery Replacement](https://fixitjerry.com/guides/iphone-battery-replacement): Malaysia pricing guide.
- [Samsung Screen Replacement](https://fixitjerry.com/guides/samsung-screen-replacement): AMOLED pricing.
- [Water Damage Repair](https://fixitjerry.com/guides/water-damage-repair): Immediate action + costs.
- [MacBook Screen Repair](https://fixitjerry.com/guides/macbook-screen-repair): Retina display guide.

## Device Services
- [iPhone Repairs](https://fixitjerry.com/iphone): All iPhone models and service types.
- [Samsung Repairs](https://fixitjerry.com/samsung): All Samsung Galaxy models.
- [MacBook Repairs](https://fixitjerry.com/macbook): Screen, battery, board-level repairs.
- [Nintendo Switch Repairs](https://fixitjerry.com/devices/nintendo-switch): Battery, fan, screen repairs.

## Optional
- [Sitemap](https://fixitjerry.com/sitemap.xml): Full index of all device/brand/model/service pages.
```

---

### 6. Zero Brand Presence Outside the Domain
**Impact: AI models cannot confidently cite a business they've only seen on one domain**

| Platform | Status |
|---|---|
| Wikipedia | No article or Wikidata entity |
| Reddit | Zero mentions on r/malaysia, r/kualalumpur |
| YouTube | No channel found |
| LinkedIn | No company page |
| Lowyat.net | Not present |
| SoyaCincau | Not featured |
| Google Business Profile | Implied but not verified via sameAs |

This is the most impactful long-term gap. AI models (ChatGPT, Perplexity, Claude) need to find a business name on multiple independent sources before they'll confidently cite it.

---

## High Priority Actions

### 7. Add Service Schema to All 625 pSEO Pages
800+ service pages describe specific repairs but emit zero machine-readable service identity. This is the largest schema gap.

**Add to `app/iphone/[model]/[service]/page.js`** (and equivalent pages):
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "iPhone 16 Screen Replacement",
  "provider": {
    "@type": "RepairBusiness",
    "name": "Fix It Jerry",
    "url": "https://fixitjerry.com"
  },
  "areaServed": { "@type": "City", "name": "Kuala Lumpur" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MYR",
    "price": "450",
    "availability": "https://schema.org/InStock"
  }
}
```

---

### 8. Add Article Schema + Dates to All Guide Pages
All 20 guides have no `Article` schema, no `datePublished`, no `dateModified`, no author. They are invisible to AI content indexing.

**Add to `app/guides/[slug]/page.js`:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "iPhone Battery Replacement Cost in Malaysia (2026)",
  "datePublished": "2025-01-15",
  "dateModified": "2026-03-01",
  "author": {
    "@type": "Organization",
    "name": "Fix It Jerry",
    "url": "https://fixitjerry.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Fix It Jerry",
    "logo": { "@type": "ImageObject", "url": "https://fixitjerry.com/images/logo.webp" }
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".text-gray-600.text-lg", "h2"]
  }
}
```
Also add `datePublished` and `dateModified` fields to `/data/guides.js`.

---

### 9. Add Multi-Location Schema (3 Missing Branches)
Only Desa Parkcity is in the schema. Subang Jaya, Bukit Jalil, and Puchong are invisible to structured data consumers.

Add individual `RepairBusiness` schema blocks to `app/contact/page.js` for each of the 4 branches with their full address, phone number, geo coordinates, and `parentOrganization` linking back to the main entity.

---

### 10. Fix www vs Non-www Inconsistency
The server redirects to `www.fixitjerry.com` but **every** internal signal (sitemap, robots.txt, og:url, JSON-LD) references `fixitjerry.com` (non-www). Pick one and align everything.

**Recommended:** Standardize on `https://fixitjerry.com` (non-www) and remove the 308 redirect. Then update canonical tags, OG tags, sitemap, robots.txt, and JSON-LD to match.

---

### 11. Add FAQPage Schema to Homepage and Guides
The homepage has 10 written FAQ pairs. Guide pages have question-based sections. Neither has FAQPage schema.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a screen replacement take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most screen replacements are completed in 1–2 hours. Walk-ins welcome."
      }
    }
  ]
}
```

---

### 12. Add Visible Publication Dates to All Guides
Repair cost guides in MYR are time-sensitive pricing content. No page shows when it was written or updated. Add "Last updated: March 2026" above every guide H1 — both as visible HTML and as `<time datetime="2026-03-01">` for machine-readable freshness.

---

### 13. Activate or Fix the Blog Section
The `/blog` endpoint redirects to the booking form. No blog content was accessible. The blog is linked in primary navigation but appears non-functional. Either fix the routing or replace the nav link with content that exists.

---

### 14. Verify Site in Bing Webmaster Tools
No `msvalidate.01` meta tag detected. Verify the site in Bing Webmaster Tools (free, 5 minutes), submit the sitemap, and enable IndexNow. This is the single fastest win for Bing Copilot and ChatGPT-via-Bing visibility.

---

## Medium Priority Actions

| # | Action | Platforms Impacted |
|---|---|---|
| 15 | Upgrade `@type` from `LocalBusiness` → `RepairBusiness` in `app/layout.js` | All |
| 16 | Expand `sameAs` array: add Google Business Profile URLs, LinkedIn, YouTube | ChatGPT, Gemini, Bing |
| 17 | Add author bylines to all guide pages ("Written by the Fix It Jerry repair team") | Google AIO, ChatGPT, Perplexity |
| 18 | Fix `BreadcrumbJsonLd.jsx` — add `"@type": "ListItem"` to each item in map | Google, Bing |
| 19 | Add `BreadcrumbJsonLd` to guide pages (visual breadcrumb exists, schema doesn't) | Google, Bing |
| 20 | Expand thin device pages (Laptop page: ~200 words) to 600–800 words minimum | Google AIO, Gemini |
| 21 | Fix underscore URLs: `/devices/nintendo_switch` → `/devices/nintendo-switch` | All search engines |
| 22 | Remove `/analytics` and `/links` from sitemap, add `noindex` meta to both | All crawlers |
| 23 | Add `<lastmod>` dates to all sitemap entries | Google, Bing |
| 24 | Add security headers via `next.config.js`: X-Content-Type-Options, X-Frame-Options, Referrer-Policy, CSP | Trust signals |
| 25 | Audit `plugins.js` loaded as `beforeInteractive` — may be blocking LCP | Core Web Vitals |

---

## Long-Term / Strategic Actions

| # | Action | Platforms Impacted |
|---|---|---|
| 26 | Create a Reddit presence on r/malaysia and r/kualalumpur with genuine repair content | Perplexity, ChatGPT |
| 27 | Get listed/featured on Lowyat.net and SoyaCincau | Perplexity, ChatGPT, Gemini |
| 28 | Create a LinkedIn company page | Bing Copilot, ChatGPT |
| 29 | Launch YouTube channel with repair diagnostic videos | Google Gemini, ChatGPT |
| 30 | Create a Wikidata entity (Q-item) for Fix It Jerry | All AI models |
| 31 | Build location-specific landing pages ("Laptop Repair in Subang Jaya") | Google AIO, Gemini |
| 32 | Expand guides from ~650 words to 1,200–1,500 words with Sources & Methodology section | All AI platforms |
| 33 | Add repair photography to guide pages (ultrasonic cleaner, before/after) | E-E-A-T signals |
| 34 | Add "No Fix, No Charge" guarantee as a dedicated policy page | Trust/E-E-A-T |

---

## Scoring Summary

```
Overall GEO Score: 40/100

AI Citability & Visibility  ████░░░░░░  34/100
Brand Authority Signals     ██░░░░░░░░  18/100
Content Quality / E-E-A-T   █████░░░░░  54/100
Technical Foundations       ██████░░░░  61/100
Structured Data             ███░░░░░░░  32/100
Platform Optimization       ████░░░░░░  44/100
```

---

## 30-Day Quick Win Roadmap

**Week 1 (Dev work):**
- Fix guide page 404s
- Fix opening hours in schema
- Add canonical tags sitewide (Next.js `alternates.canonical`)
- Fix www/non-www consistency
- Create `llms.txt`
- Fix BreadcrumbJsonLd `@type` bug

**Week 2 (Dev work):**
- Upgrade to `RepairBusiness` schema type
- Add Article schema + dates to all guide pages
- Add Service schema to pSEO pages
- Add multi-location schema on contact page
- Add FAQPage schema to homepage and guides

**Week 3 (Content):**
- Create About page
- Add publication dates to all guides
- Fix or remove blog nav link
- Add author attribution to guides
- Verify Bing Webmaster Tools

**Week 4 (Off-site):**
- Create LinkedIn company page
- Post on r/malaysia with transparent attribution
- Reach out to Lowyat.net
- Submit for SoyaCincau feature

**Projected score after 30 days:** 58–65/100

---

*Report generated by GEO Audit Tool · fixitjerry.com · March 2026*
