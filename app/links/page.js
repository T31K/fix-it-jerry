import React from "react";
import { Star } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhone,
  IconMapPin,
  IconCalendarEvent,
} from "@tabler/icons-react";
import SocialProof from "./SocialProof";

export const metadata = {
  title: "Fix It Jerry | Links",
  description:
    "Book a repair, message us on WhatsApp, or visit our 4 stores across KL & Selangor.",
  alternates: { canonical: "/links" },
};

const primaryLinks = [
  {
    title: "Book a Repair",
    url: "/book-a-repair",
    Icon: IconCalendarEvent,
    external: false,
  },
  {
    title: "WhatsApp Us",
    url: "https://api.whatsapp.com/send?phone=60183646909",
    Icon: IconBrandWhatsapp,
    external: true,
  },
];

const contactLinks = [
  {
    title: "Call Us",
    url: "tel:+60183646909",
    Icon: IconPhone,
    external: true,
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/fixitjerry/",
    Icon: IconBrandFacebook,
    external: true,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/fixitjerry/",
    Icon: IconBrandInstagram,
    external: true,
  },
];

const stores = [
  {
    title: "Bukit Jalil",
    url: "https://maps.google.com/maps?q=1-10,+Jalan+Bukit+Jalil+indah+4B,+Bukit+Jalil,+Taman+Ltat,+57000+Kuala+Lumpur",
  },
  {
    title: "Puchong",
    url: "https://maps.google.com/maps?q=23A,+Jalan+Sri+Manja+10,+Taman+Sri+Manja,+46000+Petaling+Jaya,+Selangor",
  },
  {
    title: "Desa Parkcity",
    url: "https://maps.google.com/maps?q=7,+Jalan+Residen+Utama,+Desa+Parkcity,+52200+Wilayah+Persekutuan,+Kuala+Lumpur",
  },
  {
    title: "Subang Jaya",
    url: "https://maps.google.com/maps?q=22-1,+Jalan+SS+15/8,+SS+15,+47500+Subang+Jaya,+Selangor",
  },
];

function LinkButton({ href, Icon, title, variant = "light", external = true }) {
  const base =
    "flex items-center justify-center gap-2 w-full rounded-2xl py-4 px-4 font-semibold text-center no-underline shadow-md transition-all active:scale-[0.98]";

  const styles = {
    primary: "bg-[#C6E76C] text-[#4d6c77] hover:bg-[#b5d455]",
    light: "bg-white text-[#4d6c77] hover:bg-gray-50",
    ghost:
      "bg-white/10 text-white border border-white/25 hover:bg-white/20 backdrop-blur",
  }[variant];

  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${styles}`}
      style={{ minHeight: 56 }}
    >
      <Icon size={22} />
      <span>{title}</span>
    </a>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="my-4 text-center text-[11px] uppercase tracking-[0.2em] font-semibold text-white/60">
      {children}
    </div>
  );
}

export default function LinksPage() {
  return (
    <main
      className="min-h-screen bg-[#4d6c77] font-manrope px-4 py-8 sm:py-12"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 2rem)" }}
    >
      <div className="mx-auto w-full max-w-md">
        <header className="text-center mb-5">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg mb-3 ring-4 ring-white/30">
            <img
              src="/images/logo.webp"
              alt="Fix It Jerry"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-1">
            Fix It Jerry
          </h1>
          <p className="text-sm text-white/80 mb-3">
            #1 Device Repair in Kuala Lumpur
          </p>

          <a
            href="https://www.google.com/search?q=fix+it+jerry+kl+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white no-underline bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20"
          >
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-[#C6E76C] fill-[#C6E76C]"
                />
              ))}
            </span>
            <span className="font-semibold">5.0 on Google</span>
          </a>
        </header>

        <SocialProof />

        <div className="space-y-3">
          {primaryLinks.map((link, i) => (
            <LinkButton
              key={i}
              href={link.url}
              Icon={link.Icon}
              title={link.title}
              variant="primary"
              external={link.external}
            />
          ))}
        </div>

        <SectionLabel>Connect with us</SectionLabel>

        <div className="space-y-3">
          {contactLinks.map((link, i) => (
            <LinkButton
              key={i}
              href={link.url}
              Icon={link.Icon}
              title={link.title}
              variant="light"
              external={link.external}
            />
          ))}
        </div>

        <SectionLabel>Visit a Store</SectionLabel>

        <div className="space-y-3">
          {stores.map((store, i) => (
            <LinkButton
              key={i}
              href={store.url}
              Icon={IconMapPin}
              title={store.title}
              variant="ghost"
              external={true}
            />
          ))}
        </div>

        <footer className="mt-8 text-center">
          <p className="text-xs text-white/50 m-0">
            &copy; {new Date().getFullYear()} Fix It Jerry. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
