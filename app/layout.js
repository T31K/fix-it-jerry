export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {children}

        {/* Ensure jQuery loads first */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
          onLoad={() => console.log("jQuery Loaded")}
        />

        {/* Load dependent plugins after jQuery */}
        <Script
          src="/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof $.fn.magnificPopup === "undefined") {
              console.error("Magnific Popup did not load correctly.");
            } else {
              console.log("Magnific Popup Loaded");
            }
          }}
        />
        <Script
          src="/js/owl.carousel.min.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof $.fn.owlCarousel === "undefined") {
              console.error("Owl Carousel did not load correctly.");
            } else {
              console.log("Owl Carousel Loaded");
            }
          }}
        />

        {/* Finally, load your custom scripts */}
        <Script src="/js/plugins.js" strategy="afterInteractive" />
        <Script src="/js/designesia.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
