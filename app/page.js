import React from "react";
import { reviews, features, repairItems } from "@/data";

import Hero from "@/components/hero";
import Services from "@/components/services";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IconBrandFacebook, IconCheck } from "@tabler/icons-react";
const GadgetFixPage = () => {
  return (
    <div id="wrapper">
      <Navbar />
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
            <div className="row g-4 mt-2 md:mt-0">
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
                  estimated_days: "1 - 2 days",
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
                  className={`col-6 col-md-3 wow fadeInRight hover p-2 !m-0`}
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
                    <div className="p-3 md:p-8">
                      <h4 className="border-bottom-1-light pb-3 text-sm md:text-base">
                        {issue.title}
                      </h4>
                      <p className="mb-0 text-sm md:text-sm">
                        {issue.desc}
                      </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 items-stretch px-3 md:px-0 !h-auto">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex h-full items-start gap-4 md:p-4 p-1"
                >
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-800 rounded-full shrink-0">
                    <IconCheck className="text-gray-800 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.feature}</p>
                  </div>
                </div>
              ))}
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
                      href="/book-a-repair"
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
                    <div className="relative px-3 md:p-2">
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
                  <Image
                    src="/images/misc/faq.webp"
                    alt="faq"
                    className="image"
                    fill
                    objectFit="cover"
                    objectPosition="center"
                    loading="lazy"
                  />
                </div>
                {/* Text */}
                <div className="col-lg-6 offset-lg-6 relative z-2">
                  <div className="spacer-double"></div>
                  <div className="px-3 md:px-0">
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
                              className="accordion-section-title text-sm md:text-base !text-green-700"
                              data-tab={`#accordion-a${index + 1}`}
                            >
                              {faq.question}
                            </div>
                            <div
                              className="accordion-section-content text-sm md:text-md"
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
                <a className="btn-main" href="/book-a-repair">
                  Book a Repair
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default GadgetFixPage;
