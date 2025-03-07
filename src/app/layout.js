import localFont from "next/font/local";
import "./globals.css";
import "./styles/animate.min.css";
import "./styles/all.css";
import "./styles/chosen.min.css";
import "./styles/jquery-ui.min.css";
import "./styles/pentix.css";
import "./styles/theme.css";

import Script from "next/script";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800", "900"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Fix It Jerry | Smartphone, Tablet, Laptop repairs Kuala Lumpur",
  description:
    "Fix It Jerry offers expert smartphone, tablet, and laptop repair services in Kuala Lumpur. Our skilled technicians provide fast and reliable solutions to get your devices back in perfect working order. Contact us for quality repairs and exceptional customer service.",
  openGraph: {
    title: "Fix It Jerry | Smartphone, Tablet, Laptop repairs Kuala Lumpur",
    description:
      "Fix It Jerry offers expert smartphone, tablet, and laptop repair services in Kuala Lumpur. Our skilled technicians provide fast and reliable solutions to get your devices back in perfect working order. Contact us for quality repairs and exceptional customer service.",
    url: "https://fixitjerry.com",
    images: ["https://fixitjerry.com/og.png"],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`body ${raleway.variable} ${montserrat.variable}`}>
        {children}
      </body>
      <Script src="/scripts/jquery-3.3.1.min.js" strategy="beforeInteractive" />
      <Script src="/scripts/parallax.min.js" strategy="afterInteractive" />
      <Script
        src="/scripts/jquery.flexslider-min.js"
        strategy="afterInteractive"
      />
      <Script src="/scripts/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/scripts/shuffle.min.js" strategy="afterInteractive" />
      <Script
        src="/scripts/jquery.waypoints.min.js"
        strategy="afterInteractive"
      />
      <Script src="/scripts/chosen.jquery.min.js" strategy="afterInteractive" />
      <Script src="/scripts/jquery-ui.min.js" strategy="afterInteractive" />
      <Script src="/scripts/pentix.js" strategy="afterInteractive" />
      <Script src="/scripts/script.js" strategy="afterInteractive" />
    </html>
  );
}
