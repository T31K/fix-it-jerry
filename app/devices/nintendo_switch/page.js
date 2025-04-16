import { features, repairItems } from "@/data";
import InnerSideBar from "@/components/InnerSideBar";
export default function page() {
  // Get the switch item from repairItems
  const nintendoSwitchItem = repairItems.find(
    (item) => item.title === "Nintendo Switch"
  );

  return (
    <div id="wrapper">
      <div className="float-text show-on-scroll">
        <span>
          <a href="#">Scroll to top</a>
        </span>
      </div>
      <div className="scrollbar-v show-on-scroll"></div>

      <header className="transparent has-topbar">
        <div id="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between xs-hide">
                  <div className="d-flex">
                    <div className="topbar-widget me-5">
                      <a href="#">
                        <i className="icofont-location-pin"></i>Our Workshop:
                        Desa Parkcity, Kuala Lumpur, Malaysia
                      </a>
                    </div>
                    <div className="topbar-widget me-5">
                      <a href="#">
                        <i className="icofont-clock-time"></i>Monday - Sunday
                        08.00 - 18.00
                      </a>
                    </div>
                  </div>
                  <div className="d-flex">
                    <a
                      className="btn-topbar bg-color me-3"
                      href="book-repair.html"
                    >
                      Book a Repair
                    </a>
                    <div className="social-icons">
                      <a href="https://wa.me/+60183646909?text=Hello%20from%20fixitjerry.com!">
                        <i className="fa-brands fa-whatsapp fa-lg"></i>
                      </a>
                      <a href="https://facebook.com/fixitjerry">
                        <i className="fa-brands fa-facebook fa-lg"></i>
                      </a>
                      <a href="https://instagram.com/fixitjerry">
                        <i className="fa-brands fa-instagram fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  {/* Logo */}
                  <div id="logo">
                    <a href="index.html">
                      <img
                        className="logo-main"
                        src="/images/logo.webp"
                        alt=""
                      />
                      <img
                        className="logo-scroll"
                        src="/images/logo-black.webp"
                        alt=""
                      />
                      <img
                        className="logo-mobile"
                        src="/images/logo.webp"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <a className="menu-item" href="services.html">
                        Services
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="/services/smartphone">
                            Smartphone
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="/book-a-repair">
                        Book a Repair
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="/track-my-repair">
                        Track My Repair
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="de-flex-col">
                  <div className="menu_side_area">
                    <span id="menu-btn"></span>
                  </div>
                  <div id="btn-extra">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
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
                <h1 className="md:whitespace-nowrap">Nintendo Switch Repair</h1>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/devices">Devices</a>
              </li>
              <li>
                <a href="/services/nintendo_switch">Nintendo Switch</a>
              </li>
            </ul>
          </div>
          <div className="sw-overlay"></div>
        </section>
        {/* section close */}

        <section>
          <div className="container">
            <div className="row g-4">
              <InnerSideBar activeLink="switch" />

              <section className="col-lg-9 !py-0">
                <div className="row">
                  <div className="col-sm-12 col-md-12 mb-4">
                    <h2 className="!text-4xl">Nintendo Switch Services</h2>
                    <p>{nintendoSwitchItem?.description}</p>
                  </div>
                </div>

                {nintendoSwitchItem?.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="row mb-5">
                    <div className="col-sm-12 col-md-12">
                      <h2 className="text-3xl font-bold mb-3">
                        <a
                          href={`/${service.slug}`}
                          className="text-color hover:text-color-2"
                        >
                          {service.service}{" "}
                          {service.service_type && `(${service.service_type})`}
                        </a>
                      </h2>

                      {service.meta_description && (
                        <p className="mb-4">{service.meta_description}</p>
                      )}

                      {/* Nested loop for sections within each service */}
                      {service.sections &&
                        service.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">
                              {section.heading}
                            </h3>
                            {Array.isArray(section.content) ? (
                              <ul className="list-disc pl-5">
                                {section.content.map(
                                  (content, contentIndex) => (
                                    <li key={contentIndex} className="mb-1">
                                      {content}
                                    </li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <p>{section.content}</p>
                            )}
                          </div>
                        ))}

                      <div className="border-b border-gray-200 my-4"></div>
                    </div>
                  </div>
                ))}

                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="row g-0">
                      <div className="col-sm-6">
                        <div className="p-5 bg-color-2 text-dark">
                          <h3>Original Parts</h3>
                          <p className="mb-0">
                            We use only original parts for all our gadget
                            repairs, ensuring your device gets the best quality
                            and performance.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <img
                          alt=""
                          className="h-100 mh-200"
                          src="/images/misc/1.webp"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8 offset-lg-4">
                    <div className="row g-0">
                      <div className="col-sm-6">
                        <div className="p-5 bg-dark-2 text-light">
                          <h3>Affordable Prices</h3>
                          <p className="mb-0">
                            {`We offer competitive prices for all our gadget repairs,
                            ensuring you get the best value for your money.`}
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <img
                          alt=""
                          className="h-100 mh-200"
                          src="/images/misc/3.webp"
                        ></img>
                      </div>
                    </div>
                  </div>

                  <div className="spacer-single"></div>

                  <div className="row g-4 mb-2 justify-content-center">
                    <div className="col-lg-5 text-center">
                      <div className="subtitle s2 wow fadeInUp mb-2">
                        Top Reasons
                      </div>
                      <h2 className="wow fadeInUp" data-wow-delay=".2s">
                        Why Choose Us
                      </h2>
                    </div>
                  </div>
                  <div className="row g-4">
                    {features.map((reason, index) => (
                      <div
                        key={index}
                        className="col-lg-4 col-md-6 wow fadeInUp"
                      >
                        <div className="relative">
                          <i className="abs fs-40 p-3 border-1-black icon_check rounded-1 text-dark"></i>
                          <div className="ps-100 ms-4">
                            <h4>{reason.title}</h4>
                            <p>{`${reason.feature} `}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="bg-color-2 pt-40 pb-40">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-9">
                <h3 className="mb-1">
                  <i className="icofont-check-circled fs-32 me-3"></i>Quick,
                  reliable, and affordable gadget repairs
                </h3>
              </div>

              <div className="col-lg-3 text-lg-end text-start">
                <a className="btn-main" href="book-repair.html">
                  Book a Repair
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="section-dark">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-sm-6">
              <img src="/images/logo.webp" className="w-150px" alt="" />
              <div className="spacer-20"></div>
              <p>
                {`We fix phones, tablets and laptop at an affordable price with quality service guaranteed.`}
              </p>
              <div className="social-icons mb-sm-30">
                <a href="https://wa.me/+60183646909?text=Hello%20from%20fixitjerry.com!">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="https://facebook.com/fixitjerry">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://instagram.com/fixitjerry">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="widget">
                    <h5>Company</h5>
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="services">Our Services</a>
                      </li>
                      <li>
                        <a href="track.html">Track My Repair</a>
                      </li>
                      <li>
                        <a href="book-repair.html">Book a Repair</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="widget">
                    <h5>Our Services</h5>
                    <ul>
                      <li>
                        <a href="services.html">Phone Repair</a>
                      </li>
                      <li>
                        <a href="services.html">Tablet Repair</a>
                      </li>
                      <li>
                        <a href="services.html">Computer &amp; Laptop</a>
                      </li>
                      <li>
                        <a href="services.html">Game Console</a>
                      </li>
                      <li>
                        <a href="services.html">Smartwatch Repair</a>
                      </li>
                      <li>
                        <a href="services.html">Software Repair</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
              <div className="widget">
                <div className="fw-bold text-white">
                  <i className="icofont-clock-time me-2 id-color-2"></i>
                  {`We're
                  Open`}
                </div>
                Monday - Sunday 08.00 - 18.00
                <div className="spacer-20"></div>
                <div className="fw-bold text-white">
                  <i className="icofont-location-pin me-2 id-color-2"></i>
                  Workshop Location
                </div>
                Desa Parkcity, Kuala Lumpur Malaysia
                <div className="spacer-20"></div>
                <div className="fw-bold text-white">
                  <i className="icofont-envelope me-2 id-color-2"></i>Send a
                  Message
                </div>
                hello@fixitjerry.com
              </div>
            </div>
          </div>
        </div>
        <div className="subfooter">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="de-flex">
                  <div className="de-flex-col">
                    Copyright {new Date().getFullYear()} - Fix It Jerry - All
                    Rights Reserved
                  </div>
                  <ul className="menu-simple">
                    <li>
                      <a href="/terms-and-conditions">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Overlay content */}
      <div id="extra-wrap" className="text-light">
        <div id="btn-close">
          <span></span>
          <span></span>
        </div>
        <div id="extra-content">
          <img src="/images/logo.webp" className="w-150px" alt="" />
          {/* <div className="spacer-30-line"></div>
          <h5 className="mb-3">Our Services</h5>
          <div className="row g-2">
            {repairItems.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 wow fadeInRight"
                data-wow-delay={`${index * 0.2}s`}
              >
                <div className="h-100 mb-sm-30">
                  <Image
                    src={item.imgSrc}
                    width={250}
                    height={250}
                    className="mb-3 bg-green-400 rounded-full"
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
          </div> */}
          <h5 className="mt-12">Visit Us</h5>
          <div>
            <i className="icofont-clock-time me-2 op-5"></i>Monday - Sunday
            08.00 - 18.00
          </div>
          <div>
            <i className="icofont-location-pin me-2 op-5"></i>Desa Parkcity,
            Kuala Lumpur Malaysia
          </div>
          <div>
            <i className="icofont-envelope me-2 op-5"></i>hello@fixitjerry.com
          </div>
          <div className="spacer-30-line"></div>
          <h5>About Us</h5>
          <p>{`We fix phones, tablets and laptop at an affordable price with quality service guaranteed.`}</p>
          <div className="spacer-30-line"></div>
          <h5>Contact Us</h5>
          <div className="social-icons">
            <a href="https://wa.me/+60183646909">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.facebook.com/fixitjerry">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/fixitjerry/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  const nintendoSwitchItem = repairItems.find(
    (item) => item.title === "Nintendo Switch"
  );

  return {
    title: `Nintendo Switch Repair | Fix It Jerry | #1 Nintendo Switch, Devices, Gadget Repair in KL`,
    description: `${nintendoSwitchItem?.description}`,
    openGraph: {
      title: `Nintendo Switch Repair | Fix It Jerry | #1 Nintendo Switch, Devices, Gadget Repair in KL`,
      description: `${nintendoSwitchItem?.description}`,
      url: `https://fixitjerry.com/services/devices/nintendo_switch`,
      images: "https://fixitjerry.com/og.png",
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
    twitter: {
      card: "summary_large_image",
      title: `Nintendo Switch Repair | #1 Nintendo Switch, Devices, Gadget Repair in KL`,
      description: `${nintendoSwitchItem?.description}`,
      images: ["https://fixitjerry.com/og.png"],
    },
  };
}
