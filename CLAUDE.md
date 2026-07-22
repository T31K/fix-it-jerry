# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` (or `npm run dev`) — start Next dev server on http://localhost:3000
- `pnpm build` — production build (`next build`)
- `pnpm start` — serve the built app
- `pnpm lint` — `next lint` (ESLint with `eslint-config-next`)
- `node scripts/og.js` — regenerate Open Graph images for every pSEO page into `public/og_images/`. Auto-installs `sharp` on first run. Requires `scripts/manrope.ttf` (falls back to Arial if missing) and `public/og_template.png`.

There is no test runner configured in this repo.

## Architecture

This is a Next.js 14 App Router landing site (`fij-landing`) for a Kuala Lumpur device-repair business. JavaScript only — `components.json` sets `tsx: false`, so do not introduce `.ts`/`.tsx` files. Path alias `@/*` maps to repo root (see `jsconfig.json`).

### pSEO route shape (`app/`)

Device categories are programmatic SEO hubs with two layers of dynamic nesting:

```
app/<device>/page.js                       — hub (lists all models)
app/<device>/[model]/page.js               — model landing
app/<device>/[model]/[service]/page.js     — model × service combo
```

Implemented for: `iphone`, `samsung`, `macbook`, `ipad`, `apple-watch`, `pixel`. There's also a `app/devices/` tree organized by device class (smartphone, tablet, laptop, desktop, airpods, apple_watch, ipod, nintendo_switch) used as a generic catalog hub.

The `[model]` and `[service]` segments must be statically resolvable via `generateStaticParams` from the corresponding data file in `/data` — these pages exist purely to rank for `<model> <service> repair kuala lumpur` queries.

### Data layer (`/data`)

Every device family has a flat JS module exporting model arrays + service arrays:

- `iphone.js`, `samsung.js`, `pixel.js`, `macbook.js`, `ipad.js`, `applewatch.js` (+ `applewatchModels.js`) — pSEO source of truth
- `smartphone.js`, `tablet.js`, `laptop.js`, `desktop.js`, `airpods.js`, `ipod.js`, `nintendoswitch.js` — catalog cards for `/devices/*`
- `guides.js` — blog/guide content surfaced at `/guides/[slug]`
- `index.js` — aggregator (reviews, combined exports)

When adding a new model or service, **update the data file first** — the routes, sitemap, and OG generator all read from these arrays. Pages should not hardcode model lists.

### OG image pipeline

`scripts/og.js` reads `/data/*` to enumerate every pSEO URL and composites text onto `public/og_template.png` (1200×630) with `sharp` + SVG. Output filenames mirror the URL slug. Re-run after adding/renaming models or services. Recent commits show OG images are also overlaid with product photos for some service-level pages.

### Components (`/components`)

Top-level JSX components (Navbar, Footer, MobileNav, hero, services, BookingForm, Reviews, etc.) are page-level building blocks. shadcn/ui primitives live in `components/ui/` (new-york style, base color **stone**, `cssVariables: true`). Magicui components are registered via the `@magicui` registry in `components.json`. Icon library is **lucide**; `@tabler/icons-react` is also installed for legacy use. `JsonLd.jsx` and `BreadcrumbJsonLd.jsx` inject structured data — keep them on every page that targets search.

### GEO / SEO infrastructure

The project is actively optimized for both traditional SEO and GEO (AI search). Existing artifacts:

- `GEO-AUDIT-REPORT.md` — last full audit summary
- `reports/` — GSC exports, keyword research CSVs, competitor research (`digg_kl_posts.md`)
- `public/llms.txt` (if present) and JSON-LD blocks throughout pages

When working on content, schema, or technical SEO, check those reports for recent context before proposing changes.

### Styling

Tailwind 3 with `tailwindcss-animate`, animations driven by `motion` (Framer Motion successor). Global styles in `app/globals.css` carry over a legacy template's class names (`#wrapper`, `#content`, `subheader`, `crumb`, `container`/`row`/`col-lg-*`) — these are intentional and used across pSEO pages, not Bootstrap.
