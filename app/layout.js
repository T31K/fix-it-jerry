import localFont from "next/font/local";
import "./globals.css";
import "@/assets/styles/bootstrap.min.css";
import "@/assets/styles/swiper.css";
import "@/assets/styles/plugins.css";
import "@/assets/styles/coloring.css";
import "@/assets/styles/style.css";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});


export const metadata = {
  metadataBase: new URL('https://fixitjerry.com'),
  title: "Fix It Jerry – Phone, Laptop & Device Repair KL",
  description: "Cracked screen? Dead battery? Water damage? Fix It Jerry repairs phones, tablets, laptops & more in KL. Fast turnaround, affordable prices. Book now ✓",
  openGraph: {
    title: 'Fix It Jerry – Phone, Laptop & Device Repair KL',
    description:
      'Cracked screen? Dead battery? Water damage? Fix It Jerry repairs phones, tablets, laptops & more in KL. Fast turnaround, affordable prices. Book now ✓',
    url: 'https://fixitjerry.com',
    images: ['https://fixitjerry.com/og.png'],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "RepairBusiness",
          "name": "Fix It Jerry",
          "url": "https://fixitjerry.com",
          "logo": "https://fixitjerry.com/images/logo.webp",
          "image": "https://fixitjerry.com/og.png",
          "description": "Fix It Jerry is a device repair shop in Kuala Lumpur specialising in smartphones, tablets, laptops, Nintendo Switch, AirPods, Apple Watch and more.",
          "priceRange": "RM 80 - RM 1200",
          "currenciesAccepted": "MYR",
          "paymentAccepted": "Cash, Bank Transfer",
          "telephone": "+60183646909",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "7, Jalan Residen Utama",
            "addressLocality": "Desa Parkcity",
            "addressRegion": "Kuala Lumpur",
            "postalCode": "52200",
            "addressCountry": "MY"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 3.1796,
            "longitude": 101.6227
          },
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
          ],
          "sameAs": [
            "https://www.facebook.com/fixitjerry",
            "https://www.instagram.com/fixitjerry"
          ]
        }} />
        {children}
        <Script src="/js/plugins.js" strategy="beforeInteractive"></Script>

        <Script src="/js/swiper.js" strategy="afterInteractive"></Script>
        <Script
          src="/js/custom-marquee.js"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="/js/custom-swiper-1.js"
          strategy="afterInteractive"
        ></Script>
        <Script src="/js/designesia.js" strategy="afterInteractive"></Script>
        <Script
          src="https://umami.t31k.cloud/script.js"
          data-website-id="54794c99-93ed-409e-88c8-f73cb2ce6be3"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
