"use client";
import { useEffect } from "react";
import { getLeadSource, recordFirstTouch, trackLead } from "@/lib/leadSource";

const WHATSAPP_RE = /wa\.me\/\+?60183646909/;

// Mounted once in the root layout. Records first touch, and catches every
// WhatsApp / call link click site-wide (Navbar, Footer, page bodies) so each
// lead is tagged without touching every link.
export default function LeadTracker() {
  useEffect(() => {
    recordFirstTouch();

    const onClick = (e) => {
      const link = e.target.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";

      if (WHATSAPP_RE.test(href)) {
        const s = getLeadSource();
        const via = s.source && s.source !== "direct" ? ` (found you via ${s.source})` : "";
        const text = `Hello from fixitjerry.com${s.bookingPage}!${via}`;
        // Runs before the browser follows the link, so the prefilled chat
        // message carries the page + source.
        link.setAttribute("href", `https://wa.me/60183646909?text=${encodeURIComponent(text)}`);
        trackLead("whatsapp_click");
      } else if (href.startsWith("tel:")) {
        trackLead("call_click");
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
