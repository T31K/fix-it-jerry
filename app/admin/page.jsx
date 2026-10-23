"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

// Lead table for the owner. main-server (routes/fij.js) checks the password on
// every request; the browser only remembers it in localStorage. Bookings come
// from BookingForm, WhatsApp / call clicks from LeadTracker.

const LEADS_URL = `${process.env.NEXT_PUBLIC_API_URL}/fij/leads`;
const PW_KEY = "fij_admin_pw";

const readPw = () => {
  try {
    return localStorage.getItem(PW_KEY) || "";
  } catch {
    return "";
  }
};
const writePw = (pw) => {
  try {
    if (pw) localStorage.setItem(PW_KEY, pw);
    else localStorage.removeItem(PW_KEY);
    // Keep the owner's own visits out of Umami while they use the admin.
    if (pw) localStorage.setItem("umami.disabled", "1");
  } catch {}
};

const KINDS = {
  booking: { label: "Booking", className: "bg-[#4d6c77] text-white" },
  whatsapp: { label: "WhatsApp", className: "bg-[#25D366]/15 text-[#128C4B]" },
  call: { label: "Call", className: "bg-[#C6E76C]/40 text-slate-800" },
};

// Every lead saved by the site carries a source (at least "direct"); only
// bookings backfilled from Telegram before source tracking (Oct 2026) have none.
const sourceOf = (lead) => lead.source || "unknown";

const formatDate = (iso) =>
  new Date(iso).toLocaleString("en-MY", {
    timeZone: "Asia/Kuala_Lumpur",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

const waLink = (phone) => {
  let digits = String(phone || "").replace(/\D/g, "");
  if (digits.startsWith("0")) digits = "60" + digits.slice(1);
  return `https://wa.me/${digits}`;
};

function Login({ onLogin, error, loading }) {
  const [pw, setPw] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (pw) onLogin(pw);
      }}
      className="mx-auto mt-[20vh] w-full max-w-[360px] rounded-3xl bg-[#4d6c77] p-6 text-white"
    >
      <h1 className="!m-0 !text-[24px] font-bold !text-white">Fix It Jerry leads</h1>
      <label htmlFor="admin-pw" className="!mt-5 block text-xs font-bold uppercase tracking-wider text-white/70">
        Password
      </label>
      <input
        id="admin-pw"
        type="password"
        autoComplete="current-password"
        autoFocus
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        className="!mt-2 h-11 w-full rounded-lg bg-white px-3 text-slate-700 focus:outline-none"
      />
      {error && <p className="!mt-3 !mb-0 text-sm text-[#ffd5d5]">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="!mt-5 h-11 w-full rounded-full bg-[#C6E76C] font-semibold text-slate-800 disabled:opacity-50"
      >
        {loading ? "Checking…" : "Sign in"}
      </button>
    </form>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-[13px] ${
        active ? "border-[#4d6c77] bg-[#4d6c77] text-white" : "border-slate-300 bg-white text-slate-600 hover:border-[#4d6c77]"
      }`}
    >
      {children}
    </button>
  );
}

export default function AdminPage() {
  const [pw, setPw] = useState("");
  const [leads, setLeads] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [kind, setKind] = useState("all");
  const [source, setSource] = useState("all");

  const load = useCallback(async (password) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(LEADS_URL, { headers: { Authorization: `Bearer ${password}` }, cache: "no-store" });
      if (res.status === 401) {
        writePw("");
        setPw("");
        setLeads(null);
        setError("Wrong password.");
        return;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      writePw(password);
      setPw(password);
      setLeads(data.leads || []);
    } catch (err) {
      setError(`Couldn't load leads (${err.message}). Try again.`);
    } finally {
      setLoading(false);
    }
  }, []);

  // Signed in from a previous visit.
  useEffect(() => {
    const saved = readPw();
    if (saved) load(saved);
  }, [load]);

  const rows = leads || [];
  const kindCounts = useMemo(() => rows.reduce((acc, r) => ({ ...acc, [r.kind]: (acc[r.kind] || 0) + 1 }), {}), [rows]);
  const byKind = kind === "all" ? rows : rows.filter((r) => r.kind === kind);
  const sourceCounts = useMemo(
    () =>
      Object.entries(byKind.reduce((acc, r) => ({ ...acc, [sourceOf(r)]: (acc[sourceOf(r)] || 0) + 1 }), {})).sort(
        (a, b) => b[1] - a[1]
      ),
    [byKind]
  );
  const shown = source === "all" ? byKind : byKind.filter((r) => sourceOf(r) === source);

  if (!leads) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 font-manrope">
        <Login onLogin={load} error={error} loading={loading} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 font-manrope text-slate-700 md:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="!m-0 !text-[28px] font-bold !text-slate-800">
            Leads <span className="text-slate-400">({rows.length})</span>
          </h1>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => load(pw)}
              className="rounded-full bg-[#C6E76C] px-4 py-2 text-sm font-semibold text-slate-800"
            >
              {loading ? "Refreshing…" : "Refresh"}
            </button>
            <button
              type="button"
              onClick={() => {
                writePw("");
                setPw("");
                setLeads(null);
              }}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-500"
            >
              Sign out
            </button>
          </div>
        </div>

        {/* Filter by lead type, then by source, with counts. */}
        <div className="mt-5 flex flex-wrap gap-2">
          <Chip active={kind === "all"} onClick={() => { setKind("all"); setSource("all"); }}>
            All · {rows.length}
          </Chip>
          {Object.entries(KINDS).map(([key, k]) => (
            <Chip key={key} active={kind === key} onClick={() => { setKind(key); setSource("all"); }}>
              {k.label} · {kindCounts[key] || 0}
            </Chip>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <Chip active={source === "all"} onClick={() => setSource("all")}>
            Any source
          </Chip>
          {sourceCounts.map(([s, n]) => (
            <Chip key={s} active={source === s} onClick={() => setSource(s)}>
              {s} · {n}
            </Chip>
          ))}
        </div>
        {error && <p className="!mt-4 !mb-0 text-sm text-red-600">{error}</p>}

        <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[1200px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500">
              <tr>
                {["When", "Type", "Name", "Contact", "Device", "Issue", "Source", "Landed on", "Lead on"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {shown.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-4 py-8 text-center text-slate-400">
                    No leads yet.
                  </td>
                </tr>
              )}
              {shown.map((lead) => {
                const k = KINDS[lead.kind] || { label: lead.kind, className: "bg-slate-100" };
                const device = [lead.device_type, lead.device_brand].filter(Boolean).join(" · ");
                return (
                  <tr key={lead.id} className="border-t border-slate-100 align-top hover:bg-slate-50">
                    <td className="whitespace-nowrap px-4 py-3 text-slate-500">{formatDate(lead.created_at)}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${k.className}`}>
                        {k.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-800">{lead.name || "-"}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {lead.phone ? (
                        <a href={waLink(lead.phone)} target="_blank" rel="noopener noreferrer" className="block text-[#128C4B] hover:underline">
                          {lead.phone}
                        </a>
                      ) : (
                        "-"
                      )}
                      {lead.email && (
                        <a href={`mailto:${lead.email}`} className="block text-xs text-slate-500 hover:underline">
                          {lead.email}
                        </a>
                      )}
                    </td>
                    <td className="px-4 py-3">{device || "-"}</td>
                    <td className="max-w-[280px] px-4 py-3 text-slate-500">{lead.issue || "-"}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {sourceOf(lead)}
                      {(lead.medium || lead.campaign) && (
                        <span className="block text-xs text-slate-400">{[lead.medium, lead.campaign].filter(Boolean).join(" / ")}</span>
                      )}
                      {lead.first_seen && <span className="block text-xs text-slate-400">first visit {lead.first_seen}</span>}
                    </td>
                    <td className="max-w-[220px] break-words px-4 py-3 text-slate-500">{lead.landing_page || "-"}</td>
                    <td className="max-w-[220px] break-words px-4 py-3 text-slate-500">{lead.page || "-"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="!mt-4 !mb-0 text-xs text-slate-400">
          Saved automatically from 23 Oct 2026; bookings before that were added from the Telegram messages. WhatsApp / call rows are
          clicks: the chat or call itself happens off-site.
        </p>
      </div>
    </main>
  );
}
