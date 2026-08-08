# GEO Audit Report — fixitjerry.com
**Date:** July 2026 (re-audit; prior baseline March 2026: 40/100)
**Business:** Fix It Jerry — Device Repair Shop, Kuala Lumpur, Malaysia
**Locations:** Desa Parkcity · Subang Jaya SS15 · Bukit Jalil · Sri Manja PJ
**Audited by:** GEO Audit Tool (5 parallel subagents)

---

## Overall GEO Score: 56 / 100 — Fair (▲ +16 since March)

> Technical foundations, schema coverage, and content citability have all improved materially since March. The site is fully crawlable by every AI engine, server-renders all content and schema, and its cost guides are genuinely citation-ready (88/100). The score is now dominated by a single problem: **near-zero off-site brand presence (12/100)** — AI engines answering "best phone repair KL" find no independent corroboration that Fix It Jerry exists. Second-biggest drag: hundreds of model×service pages sharing one implausible price range.

---

## Score Breakdown

| Category | Weight | Mar 2026 | Jul 2026 | Weighted | Status |
|---|---|---|---|---|---|
| AI Citability & Visibility | 25% | 34 | 70 | 17.5 | Good ▲ |
| Brand Authority Signals | 20% | 18 | 12 | 2.4 | Critical ▼ |
| Content Quality & E-E-A-T | 20% | 54 | 50 | 10.0 | Fair |
| Technical Foundations | 15% | 61 | 83 | 12.5 | Good ▲ |
| Structured Data | 10% | 32 | 72 | 7.2 | Good ▲ |
| Platform Optimization | 10% | 44 | 60 | 6.0 | Fair ▲ |
| **COMPOSITE** | 100% | **40** | **56** | **55.6** | **Fair** |

*AI Citability & Visibility = citability 66 (page avg), crawler access 100, llms.txt 70. Brand authority scored strictly this round (verified searches on Reddit, Lowyat, review platforms, listicles — all absent); the March 18 was generous.*

## Platform Readiness

| Platform | Mar | Jul | Notes |
|---|---|---|---|
| Google AI Overviews | 52 | 74 | Best platform. SSG FAQ/LocalBusiness schema + question-form H2s. Gap: prices in styled divs, not `<table>` |
| Google Gemini | 48 | 66 | Good clustering + NAP; no GBP in sameAs, no ratings schema |
| ChatGPT Web Search | 33 | 58 | Full crawler access, quotable MYR figures; thin entity corroboration |
| Perplexity AI | 36 | 56 | Stale freshness (dateModified March); no community validation |
| Bing Copilot | 38 | 48 | No Bing Webmaster verification, no IndexNow, host-split hurts Bing most |
| **Average** | **44** | **60** | |

---

## Key Findings (consolidated, by severity)

### Critical
1. **Brand authority 12/100.** Only confirmed third-party surface is the Facebook page. No Reddit, no Lowyat.net, no review platforms, no third-party listicles. Competitors (e.g. sprtech.com.my) own the "best phone repair KL" citations. This is 20% of the score at near-zero and cannot be fixed on-site.
2. **Model×service pages are thin (HIGH thin-content risk).** Hundreds of pages (largest surface on the site) differ only by model name + one spec sentence, all showing "RM 300 – RM 1,200". An AI asked "iPhone 13 screen price KL" learns nothing from the iPhone 13 page. The battery cost guide proves the per-model data exists.

### High
3. **Host split (www vs apex).** Site serves on www; every canonical, og:url, schema URL and all 814 sitemap URLs point to apex (which 308s to www). Splits signals; Bing penalizes most. Fix `metadataBase` + align everything to one host.
4. **No entity `@id` / fragmented schema.** Sitewide RepairBusiness repeats unlinked on every page; location pages add a second RepairBusiness modeling a service area as a fake branch. Should be one `@id`'d business + `Service` entities with `areaServed`.
5. **No author identity anywhere.** No byline, no Person schema, "Our Experts" names nobody. Cheapest E-E-A-T fix: one lead-technician bio page + bylines on guides.
6. **Homepage anti-trust signals.** "Verified Reviews" heading renders zero reviews; service cards say "2–3 days" while FAQ says "under an hour" (self-contradiction that AI engines misquote).

### Medium
7. **No AggregateRating/Review schema** (defensible first-party markup is possible since reviews render on-page — never import Google star counts).
8. **Hub pages (/iphone etc.) are citation-unlikely boilerplate** — no pricing, turnaround, warranty, or FAQ.
9. **Cost-guide prices in styled divs, not `<table>`** — blocks AI Overviews price extraction.
10. **Bing basics absent** — no Webmaster Tools verification, no IndexNow.
11. **Contact-page branch schema defects** — shared url, missing geo on 3 branches, Puchong/PJ locality mismatch.
12. **Freshness** — dateModified stuck at March; sitemap lastmod is one uniform build timestamp.

### Positive confirmations
- robots.txt allows all AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, CCBot): 100/100
- Full SSR — all content + 4–8 JSON-LD blocks per page in raw HTML
- Location pages passed differentiation review: "written per-location, not string-swapped" (LOW-MODERATE risk)
- llms.txt valid and well-formed (update with /phone-repair + new guides is committed locally, unpushed at audit time)
- Cost guides are the citability template: dated, tabled, stat-backed (88/100)
- /links removed cleanly (true 404, absent from sitemap)

---

## Prioritized Action Plan

### Quick wins (hours)
1. Unify host to `https://www.fixitjerry.com`: set `metadataBase`, regenerate sitemap URLs, update all JSON-LD URLs.
2. Fix homepage: render the actual reviews under "Verified Reviews"; reconcile turnaround claims ("screens/batteries under 1 hour; board-level 1–3 days").
3. Convert cost-guide pricing divs to semantic `<table>`.
4. Add `@id` to the master RepairBusiness; convert location-page second business to `Service` + `areaServed` + `provider @id`.
5. Register Bing Webmaster Tools + IndexNow; fix contact-page branch schema (geo, unique @id, Puchong locality).
6. Push the already-committed llms.txt update.

### Medium-term (days)
7. **Per-model pricing on model×service pages** — add price field per model×service to /data files, render + AggregateOffer schema. Converts the site's largest surface from thin to citable.
8. Author identity: "Jerry" bio page with Person schema, byline + visible updated-date on every guide; refresh dateModified quarterly.
9. Hub pages: add answer block (from-price, turnaround, warranty) + short FAQ to /iphone, /samsung, /macbook, /ipad, /pixel, /apple-watch.
10. First-party AggregateRating/Review markup matching on-page reviews; add GBP/WhatsApp/TikTok to sameAs.

### Strategic (weeks–months) — the score-mover
11. **Off-site presence program.** In order of AI-citation impact for Malaysia: Google Business Profile reviews (all 4 branches), Lowyat.net forum presence, r/malaysia + r/kualalumpur genuine participation, Malaysian directory listings, outreach for inclusion in third-party "best repair KL" listicles, a few YouTube repair shorts. Even 3–4 independent mentions would multiply inclusion in AI answers. Target: brand authority 12 → 50+, which alone moves the composite to ~64.

---

*Full agent transcripts and fetched-page evidence preserved in session scratchpad. Prior audit (March 2026, 40/100) superseded by this report.*
