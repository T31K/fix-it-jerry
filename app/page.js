import React from "react";
import { reviews, features, repairItems } from "@/data";

import Hero from "@/components/hero";
import Services from "@/components/services";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { IconBrandFacebook } from "@tabler/icons-react";
const GadgetFixPage = () => {
  return (
    <div id="wrapper">
      <div className="float-text show-on-scroll">
        <span>
          <a href="#">Scroll to top</a>
        </span>
      </div>
      <div className="scrollbar-v show-on-scroll"></div>

      {/* Page preloader */}

      <Navbar />

      {/* Content */}
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <Hero />

        <Services />

        <section>
          <div className="container">
            <div className="row g-4 mb-2 justify-content-center">
              <div className="col-lg-5 text-center">
                <div className="subtitle s2 wow fadeInUp mb-2">
                  All our services
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Your one-stop solution for all gadget repair needs
                </h2>
              </div>
            </div>
            <div className="row g-4">
              {[
                {
                  title: "Repair",
                  desc: "Replacing the display screen of an electronic device, such as a smartphone, tablet, laptop, or television.",
                  img: "macbook_repair.webp",
                  estimated_days: "2 - 3 days",
                },
                {
                  title: "Replacement",
                  desc: "Over time, batteries can degrade, leading to decreased performance, reduced battery life, even complete failure.",
                  img: "charging_port_replacement.webp",
                  estimated_days: "0.5 - 1 day(s)",
                },
                {
                  title: "Upgrade",
                  desc: "It can be particularly detrimental to electronic components, corrosion, short circuits, and other issues.",
                  img: "ram_upgrade.webp",
                  estimated_days: "1 - 2 days",
                },
                {
                  title: "Data Recovery",
                  desc: "Retrieving or restoring inaccessible, lost, corrupted, or accidentally deleted data from storage.",
                  img: "data_recovery.webp",
                  estimated_days: "4 - 5 days",
                },
              ].map((issue, index) => (
                <div
                  key={index}
                  className={`col-lg-3 col-md-6 wow fadeInRight hover`}
                  data-wow-delay={`${(index % 4) * 0.3}s`}
                >
                  <div className="bg-dark-2 text-light h-100 rounded-1 border-[2px] border-[#303030] overflow-hidden">
                    <div className="relative overflow-hidden">
                      <p className="d-inline bg-blur abs abs-center px-2 rounded-3 text-center bottom-10 z-1000 text-white mb-0 fs-14">
                        {issue.estimated_days}
                      </p>
                      <img
                        src={`images/services/${issue.img}`}
                        className="img-fluid hover-scale-1-1"
                        alt=""
                      />
                    </div>
                    <div className="p-30">
                      <h4 className="border-bottom-1-light pb-3">
                        {issue.title}
                      </h4>
                      <p className="mb-0">{issue.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="no-top">
          <div className="container">
            <div className="row g-4 mb-2 justify-content-center">
              <div className="col-lg-5 text-center">
                <div className="subtitle s2 wow fadeInUp mb-2">Top Reasons</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Why Choose Us
                </h2>
              </div>
            </div>
            <div className="row g-4">
              {features.map((reason, index) => (
                <div key={index} className="col-lg-4 col-md-6 wow fadeInUp">
                  <div className="relative">
                    <i className="abs fs-40 p-4 border-1-black icon_check rounded-1 text-dark"></i>
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

        <section className="section-dark text-light jarallax">
          <img
            src="images/background/12.webp"
            className="jarallax-img"
            alt=""
          />
          <div className="sw-overlay"></div>
          <div className="row g-4 mb-2 justify-content-center">
            <div className="col-lg-5 text-center">
              <div className="subtitle s2 wow fadeInUp mb-2">
                Services Process
              </div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                How It Works
              </h2>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 grid-divider">
              {[
                "Select your repair & request a quote",
                "Send you gadget or visit our store",
                "Our technicians fix your gadget",
                "We'll request payment",
                "Return to you",
              ].map((step, index) => (
                <div
                  key={index}
                  className={`col-lg-1-5 col-md-6 wow fadeInRight`}
                  data-wow-delay={`${index * 0.2 + 0.2}s`}
                >
                  <div className="de-step-s1 text-center">
                    <div
                      className={`d-number bg-color-2 text-dark wow fadeInRight`}
                      data-wow-delay={`${index * 0.2 + 0.2}s`}
                    >
                      Step {index + 1}
                    </div>
                    <h4>{step}</h4>
                    <div className="abs abs-center fs-96 top-50 text-white op-2 fw-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-color-2 pt-60 pb-60 hidden">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-4">
                <h3 className="mb-0">Track Your Repair</h3>
              </div>
              <div className="col-lg-8">
                <div className="row align-items-center justify-content-end">
                  <div className="col-md-9 col-8">
                    <div className="hover-underline">
                      <input
                        className="form-underline mb-0 no-border fs-18 !font-mono"
                        id="order_id"
                        name="order_id"
                        placeholder="enter your order number here..."
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-4">
                    <a className="btn-main fx-slide w-100" href="track.html">
                      <span>Track It</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="no-top no-bottom overflow-hidden hidden">
          <div className="container-fluid relative half-fluid">
            <div className="container">
              <div className="row">
                {/* Image */}
                <div className="col-lg-6 position-lg-absolute right-half h-100 overflow-hidden rounded-bottom-start-60">
                  <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
                    <a
                      className="player d-block hover popup-youtube bg-dark-2 no-border rounded-1 wow scaleIn"
                      href="https://www.youtube.com/watch?v=C6rf51uHWJg"
                    >
                      <span></span>
                    </a>
                  </div>
                  <div
                    className="image"
                    data-bgimage="url(images/misc/7.webp) center"
                  ></div>
                </div>
                {/* Text */}
                <div className="col-lg-5 relative z-2">
                  <div className="spacer-double"></div>
                  <div className="ps-lg-5">
                    <div className="subtitle wow fadeInUp mb-3">
                      Our Experts
                    </div>
                    <h2 className="wow fadeInUp">
                      Trust our experts for reliable gadget solutions
                    </h2>
                    <p className="wow fadeInUp">
                      Our team of expert technicians is dedicated to providing
                      the highest quality repairs for all your gadgets. With
                      years of hands-on experience and advanced certifications,
                      our professionals are skilled in diagnosing and fixing a
                      wide range of issues, from simple repairs to complex
                      problems.
                    </p>
                    <div className="spacer-10"></div>
                    <a
                      className="btn-main fx-slide wow fadeInUp"
                      href="book-repair.html"
                    >
                      <span>Book a Repair</span>
                    </a>
                  </div>
                  <div className="spacer-single sm-hide"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-dark bg-dark-2 text-light">
          <div className="container">
            <div className="row g-4 mb-4">
              <div className="col-lg-6 offset-lg-3 text-center">
                <div className="subtitle wow fadeInUp">Testimonials</div>
                <h2 className="wow fadeInUp !mb-0" data-wow-delay=".2s">
                  Our Happy Customers
                </h2>
                <div className="wow fadeInUp !mb-8" data-wow-delay=".3s">
                  <span className="fs-20 text-[#C6E76C] italic font-bold">Trusted by 2000+ happy customers</span>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div
                className="owl-carousel owl-theme wow fadeInUp"
                id="testimonial-carousel"
              >
                {reviews.map((review, index) => (
                  <div key={index} className="item">
                    <div className="relative p-2">
                      <div className="relative flex items-center gap-x-4">
                        <img src={review.profile_pic} className="w-14 h-14 rounded-full bg-green-200" alt="profile_pic" />
                        <div className="flex-grow">
                          <div className="fw-600">{review.name}</div>
                          <div className="d-stars -mt-2">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fa fa-star " style={{ color: 'yellow' }}></i>
                            ))}
                          </div>
                        </div>
                        <a 
                          href={review.review_link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center rounded-full w-10 h-10 bg-[#C6E76C]"
                        >
                          <IconBrandFacebook size={20} color="#333" />
                        </a>
                      </div>

                      <p>{review.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-dark no-top no-bottom overflow-hidden">
          <div className="container-fluid relative half-fluid">
            <div className="container">
              <div className="row">
                {/* Image */}
                <div className="col-lg-6 position-lg-absolute left-half h-100 overflow-hidden rounded-bottom-end-60">
                  <div
                    className="image"
                    data-bgimage="url(images/misc/faq.webp) center"
                  ></div>
                </div>
                {/* Text */}
                <div className="col-lg-6 offset-lg-6 relative z-2">
                  <div className="spacer-double"></div>
                  <div className="ps-lg-5">
                    <div className="subtitle s2 wow fadeInUp mb-2">
                      Questions
                    </div>
                    <h2 className="wow fadeInUp mb-2" data-wow-delay=".2s">
                      Frequently asked questions
                    </h2>
                    <div className="accordion s2 wow fadeInUp">
                      <div className="accordion-section">
                        {[
                          {
                            question: "What is Fix It Jerry?",
                            answer: [
                              "Fix It Jerry is your trusted repair service for smartphones, laptops, tablets, and more.",
                              "We specialize in high-quality repairs with fast turnaround times.",
                              "From screen replacements to motherboard fixes, we've got you covered.",
                            ],
                          },
                          {
                            question: "What devices do you repair?",
                            answer: [
                              "We repair smartphones, tablets, laptops, desktop computers, gaming consoles, and more.",
                              "Whether it's an iPhone, Android, MacBook, or Nintendo Switch, we can fix it.",
                              "If you're unsure, contact us for a free assessment.",
                            ],
                          },
                          {
                            question: "How long does a repair take?",
                            answer: [
                              "Repair times vary depending on the issue.",
                              "Screen replacements and battery swaps can be done within an hour.",
                              "More complex repairs, like motherboard fixes, may take 1-3 days.",
                            ],
                          },
                          {
                            question: "Do you use original parts?",
                            answer: [
                              "We use high-quality parts that match or exceed OEM standards.",
                              "Original and aftermarket options are available based on your budget and preference.",
                              "Every part we use is tested for performance and durability.",
                            ],
                          },
                          {
                            question: "How much do repairs cost?",
                            answer: [
                              "Repair costs depend on the issue and device model.",
                              "We offer transparent pricing with no hidden fees.",
                              "Get a free quote by contacting us.",
                            ],
                          },
                          {
                            question: "Do you offer data recovery?",
                            answer: [
                              "Yes! We specialize in data recovery for hard drives, SSDs, and mobile devices.",
                              "If your device isn’t powering on, we may still be able to retrieve your data.",
                              "Contact us for a diagnostic and recovery options.",
                            ],
                          },
                          {
                            question: "Can I upgrade my laptop or PC?",
                            answer: [
                              "Absolutely! We offer RAM, SSD, and GPU upgrades for better performance.",
                              "Upgrading to an SSD can make your device significantly faster.",
                              "Bring your computer in, and we’ll recommend the best upgrade options.",
                            ],
                          },
                          {
                            question:
                              "Is my personal data safe during repairs?",
                            answer: [
                              "Yes! Your privacy is a top priority.",
                              "We do not access or share personal files during repairs.",
                              "For added security, we recommend backing up your data before service.",
                            ],
                          },
                          {
                            question: "Where do will you repair the device?",
                            answer: [
                              "We do both onsite and offsite repairs.",
                              "We recommend contacting us and we'll come pickup the device.",
                            ],
                          },
                          {
                            question: "How do I book a repair?",
                            answer: [
                              "Booking a repair is easy! You can contact us via phone, WhatsApp, or our website.",
                              "Walk-ins are welcome, but scheduling an appointment ensures faster service.",
                              "Tell us the issue, and we’ll guide you through the next steps.",
                            ],
                          },
                        ].map((faq, index) => (
                          <div key={index}>
                            <div
                              className="accordion-section-title"
                              data-tab={`#accordion-a${index + 1}`}
                            >
                              {faq.question}
                            </div>
                            <div
                              className="accordion-section-content"
                              id={`accordion-a${index + 1}`}
                            >
                              <p className="mb-0">{faq.answer}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="spacer-single sm-hide"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hidden">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6 offset-lg-3 text-center">
                <div className="subtitle wow fadeInUp mb-3">Latest Post</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Stay update with us
                </h2>
              </div>
            </div>
            <div className="row g-4">
              {[20, 19, 18, 17].map((day, index) => (
                <div key={index} className="col-lg-3">
                  <div className="overflow-hidden">
                    <div className="hover relative rounded-1 overflow-hidden">
                      <div className="abs z-2 bg-blur text-white p-3 pb-2 m-4 text-center fw-600">
                        <h4 className="fs-36 mb-0 lh-1">{day}</h4>
                        <span>Jun</span>
                      </div>
                      <img
                        src={`images/news/${index + 1}.webp`}
                        className="w-100 hover-scale-1-1"
                        alt=""
                      />
                      <a
                        href="blog-single.html"
                        className="d-block abs w-100 h-100 top-0 start-0"
                      ></a>
                    </div>
                    <div className="pt-4 relative">
                      <h4>
                        <a className="text-dark" href="blog-single.html">
                          {`The Latest Innovations: Top Gadgets to Watch in 2024`}
                        </a>
                      </h4>
                      <p className="mb-0">
                        {`This month has been bustling with exciting developments
                        in the world of gadgets. From groundbreaking new devices
                        to innovative...`}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
              <img src="images/logo.webp" className="w-150px" alt="" />
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
          <img src="images/logo.webp" className="w-150px" alt="" />
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
};

export default GadgetFixPage;
