import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
function page() {
  return (
    <div id="wrapper">
      <div className="float-text show-on-scroll">
        <span>
          <a href="#">Scroll to top</a>
        </span>
      </div>
      <div className="scrollbar-v show-on-scroll"></div>

      <Navbar />
      <div id="content" className="no-top no-bottom">

        <div id="top"></div>
        {/* section begin */}
        <section id="subheader" className="relative jarallax text-light">
          <div className="de-gradient-edge-top"></div>
          <img
            src="/images/background/4.webp"
            className="jarallax-img"
            alt=""
          />
          <div className="container relative z-2">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle">Fix It Jerry</div>
                <h1 className="md:whitespace-nowrap">Privacy Policy</h1>
                <p className="text-gray-700 max-w-3xl text-sm md:text-base text-center mt-3">
                  At Fix It Jerry, we value the privacy of our customers and
                  take the necessary steps to protect your personal information.
                  We do not collect any personal data from your device without
                  your explicit consent.
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="sw-overlay"></div>
        </section>
        {/* section close */}

        <section className="bg-green-200/20">
          <div className="container">
            <div className="row g-4">
              <section className="flex items-center justify-center">
                <div className="text-center max-w-3xl">
                  <h2 className="mb-4">Our Promise</h2>
                  <p className="text-gray-700  text-md font-semibold italic mt-3">
                    We promise to respect your privacy and protect your personal
                    information. We will not collect any personal data from your
                    device without your explicit consent. We will not share your
                    personal information with any third parties without your
                    consent.
                  </p>
                  <div className="text-left">

                  <ul className="list-disc mt-4">
                    <li>
                      We will not collect any personal data from your device
                      without your explicit consent.
                    </li>
                    <li>
                      We will not share your personal information with any third
                      parties without your consent.
                    </li>
                    <li>
                      We will not use your personal information for any purpose
                      other than to provide you with the services you have
                      requested.
                    </li>
                    <li>
                      We will not retain your personal information for longer
                      than necessary.
                    </li>
                    <li>
                      We will take appropriate security measures to protect your
                      personal information from unauthorized access or disclosure.
                    </li>
                  </ul>
                  </div>

                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default page
