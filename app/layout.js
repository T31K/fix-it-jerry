import localFont from "next/font/local";
import "./globals.css";
import "@/assets/styles/bootstrap.min.css";
import "@/assets/styles/swiper.css";
import "@/assets/styles/plugins.css";
import "@/assets/styles/coloring.css";
import "@/assets/styles/style.css";
import Script from "next/script";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});


export const metadata = {
  title: "Fix It Jerry | #1 Phone Repair in Kuala Lumpur",
  description: "Fix It Jerry is the best phone repair shop in Kuala Lumpur. We offer a wide range of services for all types of devices including smartphones, tablets, laptops, airpods, Nintendo Switch, and TVs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
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
      </body>
    </html>
  );
}
