"use client";
import React, { useState, useEffect } from "react";
import { Menu, MapPin, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const devices = [
  { label: "iPhone", href: "/iphone" },
  { label: "Samsung", href: "/samsung" },
  { label: "Smartphone", href: "/devices/smartphone" },
  { label: "Tablet", href: "/devices/tablet" },
  { label: "Laptop", href: "/devices/laptop" },
  { label: "Desktop", href: "/devices/desktop" },
  { label: "Nintendo Switch", href: "/devices/nintendo_switch" },
  { label: "AirPods", href: "/devices/airpods" },
  { label: "Apple Watch", href: "/apple-watch" },
  { label: "iPod", href: "/devices/ipod" },
];

const navLinks = [
  { label: "Book a Repair", href: "/book-a-repair" },
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const branches = [
  "Desa Parkcity, KL",
  "Subang Jaya, Selangor",
  "Bukit Jalil, KL",
  "Puchong, Selangor",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [branchIndex, setBranchIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBranchIndex((i) => (i + 1) % branches.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full bg-[#2b3f48] transition-all duration-300",
        scrolled ? "shadow-md" : ""
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img src="/images/logo.webp" alt="Fix It Jerry" className="h-9 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-white font-medium text-sm h-9 px-3 data-[state=open]:bg-white/10">
                  Devices
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-2 gap-1 p-3 w-[320px]">
                    {devices.map((d) => (
                      <li key={d.href}>
                        <NavigationMenuLink asChild>
                          <a
                            href={d.href}
                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-[#C6E76C]/20 hover:text-[#2b3f48] transition-colors font-medium"
                          >
                            {d.label}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: branch + phone + socials + CTA */}
        <div className="hidden lg:flex items-center gap-4 text-xs text-white/70 shrink-0">
          <a
            href="/contact#branches"
            className="flex items-center gap-1 hover:text-[#C6E76C] transition-colors w-[160px]"
          >
            <MapPin className="w-3 h-3 shrink-0 text-[#C6E76C]" />
            <span className="truncate">{branches[branchIndex]}</span>
          </a>

          <a
            href="tel:+60183646909"
            className="flex items-center gap-1 hover:text-[#C6E76C] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#C6E76C]" />
            +60 18-364 6909
          </a>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/+60183646909?text=Hello%20from%20fixitjerry.com!" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6E76C] transition-colors">
              <i className="fa-brands fa-whatsapp" />
            </a>
            <a href="https://facebook.com/fixitjerry" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6E76C] transition-colors">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="https://instagram.com/fixitjerry" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6E76C] transition-colors">
              <i className="fa-brands fa-instagram" />
            </a>
          </div>

          <a
            href="/book-a-repair"
            className="inline-flex items-center justify-center rounded-md px-4 py-1.5 text-sm font-semibold text-[#2b3f48] bg-[#C6E76C] hover:bg-[#b5d455] transition-colors"
          >
            Book a Repair
          </a>
        </div>

        {/* Mobile toggle */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 text-white hover:bg-white/10 hover:text-white" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-0 flex flex-col">
            <SheetHeader className="px-5 pt-5 pb-4 border-b">
              <SheetTitle className="text-left">
                <img src="/images/logo.webp" alt="Fix It Jerry" className="h-8 w-auto" />
              </SheetTitle>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Devices</p>
                <ul className="space-y-0.5">
                  {devices.map((d) => (
                    <li key={d.href}>
                      <a href={d.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-[#C6E76C]/20 hover:text-[#2b3f48] transition-colors">
                        {d.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Navigate</p>
                <ul className="space-y-0.5">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Our Branches</p>
                <div className="space-y-3 text-sm text-gray-600">
                  {[
                    { name: "Desa Parkcity", addr: "7, Jalan Residen Utama", phone: "018-3646909 (Jerry)" },
                    { name: "Subang Jaya", addr: "22-1, Jalan SS 15/8, SS 15", phone: "018-3267909 (Jack)" },
                    { name: "Bukit Jalil", addr: "1-10, Jalan Bukit Jalil Indah 4B", phone: "018-3101909 (John)" },
                    { name: "Puchong", addr: "23A, Jalan Sri Manja 10", phone: "018-7673909 (Jason)" },
                  ].map((b) => (
                    <div key={b.name} className="pl-2 border-l-2 border-[#C6E76C]">
                      <p className="font-semibold text-gray-800">{b.name}</p>
                      <p className="text-gray-500 text-xs">{b.addr}</p>
                      <p className="text-gray-500 text-xs">{b.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-5 py-4 border-t space-y-3">
              <a href="/book-a-repair" onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-full rounded-md py-2.5 text-sm font-semibold text-[#2b3f48] bg-[#C6E76C] hover:bg-[#b5d455] transition-colors">
                Book a Repair
              </a>
              <div className="flex items-center justify-center gap-5 text-gray-400">
                <a href="https://wa.me/+60183646909" target="_blank" rel="noopener noreferrer" className="hover:text-[#2b3f48] transition-colors">
                  <i className="fa-brands fa-whatsapp text-lg" />
                </a>
                <a href="https://facebook.com/fixitjerry" target="_blank" rel="noopener noreferrer" className="hover:text-[#2b3f48] transition-colors">
                  <i className="fa-brands fa-facebook text-lg" />
                </a>
                <a href="https://instagram.com/fixitjerry" target="_blank" rel="noopener noreferrer" className="hover:text-[#2b3f48] transition-colors">
                  <i className="fa-brands fa-instagram text-lg" />
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </nav>
  );
}
