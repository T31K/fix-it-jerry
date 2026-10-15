// First-touch lead attribution. On a visitor's first arrival we store where they
// came from (UTM / ad click id / referrer) and the page they landed on, then
// every lead action (booking form, WhatsApp, call) reports it. Lives in
// localStorage for 90 days because repair decisions often span a few visits.

const KEY = "fij_lead_source";
const TTL_MS = 90 * 24 * 60 * 60 * 1000;

// Referrer host → readable source name.
const REFERRER_NAMES = [
  [/google\./, "google"],
  [/bing\.com/, "bing"],
  [/yahoo\./, "yahoo"],
  [/duckduckgo\./, "duckduckgo"],
  [/chatgpt\.com|openai\.com/, "chatgpt"],
  [/perplexity\.ai/, "perplexity"],
  [/facebook\.com|fb\.com/, "facebook"],
  [/instagram\.com/, "instagram"],
  [/tiktok\.com/, "tiktok"],
  [/youtube\.com/, "youtube"],
  [/reddit\.com/, "reddit"],
  [/lowyat\.net/, "lowyat"],
  [/maps\.app\.goo\.gl|maps\.google\./, "google maps"],
];

function detectSource() {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source");
  if (utmSource) {
    return { source: utmSource, medium: params.get("utm_medium") || "", campaign: params.get("utm_campaign") || "" };
  }
  if (params.get("gclid")) return { source: "google ads", medium: "cpc", campaign: "" };
  if (params.get("fbclid")) return { source: "facebook", medium: "social", campaign: "" };

  let host = "";
  try {
    host = document.referrer ? new URL(document.referrer).hostname : "";
  } catch {}
  if (!host || host.endsWith("fixitjerry.com")) return { source: "direct", medium: "", campaign: "" };
  const named = REFERRER_NAMES.find(([re]) => re.test(host));
  const source = named ? named[1] : host.replace(/^www\./, "");
  const medium = ["google", "bing", "yahoo", "duckduckgo"].includes(source) ? "organic" : "referral";
  return { source, medium, campaign: "" };
}

// Call once per page load; only writes when there's no live first touch.
export function recordFirstTouch() {
  try {
    const existing = JSON.parse(localStorage.getItem(KEY) || "null");
    if (existing && Date.now() - existing.ts < TTL_MS) return;
    localStorage.setItem(
      KEY,
      JSON.stringify({ ...detectSource(), landingPage: window.location.pathname, referrer: document.referrer || "", ts: Date.now() })
    );
  } catch {}
}

// Attribution payload for a lead action happening on the current page.
export function getLeadSource() {
  let first = null;
  try {
    first = JSON.parse(localStorage.getItem(KEY) || "null");
  } catch {}
  if (!first) first = { ...detectSource(), landingPage: window.location.pathname, referrer: document.referrer || "" };
  return {
    source: first.source,
    medium: first.medium,
    campaign: first.campaign,
    landingPage: first.landingPage,
    referrer: first.referrer,
    firstSeen: first.ts ? new Date(first.ts).toISOString().slice(0, 10) : "",
    bookingPage: window.location.pathname,
  };
}

// Umami custom event; no-op if the script hasn't loaded or is blocked.
export function trackLead(event, extra = {}) {
  try {
    const s = getLeadSource();
    window.umami?.track(event, { source: s.source, landing: s.landingPage, page: s.bookingPage, ...extra });
  } catch {}
}
