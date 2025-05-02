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
                <h1 className="md:whitespace-nowrap">Terms and Conditions</h1>
                <p className="text-gray-700 max-w-3xl text-sm md:text-base text-center mt-3">
                  Please read these terms and conditions carefully before using
                  our website. By using our website, you agree to be bound by
                  these terms and conditions. If you do not agree to these terms
                  and conditions, please do not use our website.
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
                <a href="/terms-and-conditions">Terms and Conditions</a>
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
                  <h2 className="mb-4">Our Terms</h2>
                  <p className="text-gray-700  text-md font-semibold italic mt-3">
                    By using our website, you agree to the following terms and
                    conditions.
                  </p>
                  <div className="text-left">

                  <ul className="list-disc mt-4">
                    <li>
                      You agree to provide accurate and complete information
                      when using our website.
                    </li>
                    <li>
                      You agree to use our website only for lawful purposes and
                      in accordance with these terms and conditions.
                    </li>
                    <li>
                      You agree not to use our website in any way that could
                      damage, disable, overburden, or impair our website or
                      interfere with any other party's use and enjoyment of our
                      website.
                    </li>
                    <li>
                      You agree not to use our website to collect or harvest
                      personal information about other users.
                    </li>
                    <li>
                      You agree not to upload, post, or transmit any content that
                      is unlawful, harmful, threatening, abusive, harassing,
                      defamatory, or obscene.
                    </li>
                    <li>
                      You agree not to use our website to solicit or promote any
                      products or services.
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
