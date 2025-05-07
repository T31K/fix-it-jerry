import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { IconPhone, IconMail, IconMapPin, IconBrandFacebook, IconBrandTwitter, IconArrowDown, IconBrandInstagram } from "@tabler/icons-react"

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
                <h1 className="md:whitespace-nowrap">Contact Us</h1>
                <p className="text-gray-700 max-w-3xl text-sm md:text-base text-center mt-3">
                  Have questions or need assistance? We're here to help. Reach out to our team for prompt and friendly service.
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
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sw-overlay"></div>
        </section>
        {/* section close */}

        <section className="bg-gray-100">
          <div className="container">
            <div className="row g-5">
              {/* Contact Information */}
              <div className="col-lg-4">
                <h3 className="mb-4">Get in Touch</h3>
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-dark-2 p-3 rounded-1 me-3">
                      <IconPhone className="text-light" size={24} />
                    </div>
                    <div>
                      <h5 className="mb-0">Phone</h5>
                      <p className="mb-0">+60183646909</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-dark-2 p-3 rounded-1 me-3">
                      <IconMail className="text-light" size={24} />
                    </div>
                    <div>
                      <h5 className="mb-0">Email</h5>
                      <p className="mb-0">hello@fixitjerry.com</p>
                    </div>
                  </div>
                </div>

                <h4 className="mb-3">Follow Us</h4>
                <div className="d-flex">
                  <a href="#" className="bg-dark-2 p-3 rounded-1 me-2">
                    <IconBrandFacebook className="text-light" size={24} />
                  </a>
                  <a href="#" className="bg-dark-2 p-3 rounded-1 me-2">
                    <IconBrandTwitter className="text-light" size={24} />
                  </a>
                  <a href="#" className="bg-dark-2 p-3 rounded-1 me-2">
                    <IconBrandInstagram className="text-light" size={24} />
                  </a>
                </div>

                <h4 className="mt-6">Business Hours</h4>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Monday - Friday:</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Saturday - Sunday:</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                    <a href="#branches" className="text-decoration-none">

                  <div className="bg-dark-2 p-3 rounded-1 me-3">
                    <IconArrowDown className="text-light" size={24} />
                  </div>
                  </a>
                  <div>
                    <a href="#branches" className="text-decoration-none">
                      <h5 className="mb-0">View All Branches</h5>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-lg-8">
                <div className="bg-white p-4 p-md-5 rounded-1 shadow-sm">
                  <h3 className="mb-4">Send Us a Message</h3>
                  <form id="contact-form">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="field-set">
                          <label>Name</label>
                          <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="field-set">
                          <label>Email</label>
                          <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="field-set">
                          <label>Phone</label>
                          <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="field-set">
                          <label>Subject</label>
                          <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" required />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="field-set">
                          <label>Message</label>
                          <textarea name="message" id="message" className="form-control" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div id="submit" className="mt-3">
                          <button type="submit" className="btn-main">Send Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section id="branches">
          <div className="container">
            <div className="row g-4 mb-5 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle s2 wow fadeInUp mb-2">Our Locations</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Visit Our Branches
                </h2>
                <p className="text-gray-700 max-w-3xl text-center mt-3">
                  We have multiple branches across the Kuala Lumpur and Selangor area to serve you better.
                </p>
              </div>
            </div>

            <div className="row g-5">
              {/* Desa Parkcity Branch */}
              <div className="col-lg-6">
                <div className="bg-white p-4 rounded-1 shadow-sm h-100 border">
                  <h3 className="mb-3">Desa Parkcity</h3>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-dark-2 p-3 rounded-1 me-3 flex-shrink-0">
                      <IconMapPin className="text-light" size={24} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="mb-0 text-wrap">7, Jalan Residen Utama, Desa Parkcity, <br/>52200 Wilayah Persekutuan, Kuala Lumpur</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-dark-2 p-3 rounded-1 me-3 flex-shrink-0">
                      <IconPhone className="text-light" size={24} />
                    </div>
                    <div>
                      <p className="mb-0">018-3646909 (Jerry)</p>
                    </div>
                  </div>
                  <div className="rounded-1 overflow-hidden mb-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7572351241654!2d101.63374!3d3.1865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4fdc72066f57%3A0xde2f95452a83dcce!2sDesa%20ParkCity!5e0!3m2!1sen!2smy!4v1620841858816!5m2!1sen!2smy"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy">
                    </iframe>
                  </div>
                </div>
              </div>

              {/* Subang Jaya Branch */}
              <div className="col-lg-6">
                <div className="bg-white p-4 rounded-1 shadow-sm h-100 border">
                  <h3 className="mb-3">Subang Jaya</h3>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-dark-2 p-3 rounded-1 me-3 flex-shrink-0">
                      <IconMapPin className="text-light" size={24} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="mb-0 text-wrap">22-1, Jalan SS 15/8, SS 15,<br/> 47500 Subang Jaya, Selangor</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-dark-2 p-3 rounded-1 me-3 flex-shrink-0">
                      <IconPhone className="text-light" size={24} />
                    </div>
                    <div>
                      <p className="mb-0">018-3646909 (Jack)</p>
                    </div>
                  </div>
                  <div className="rounded-1 overflow-hidden mb-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0982963348787!2d101.58246!3d3.0741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d0922875bfd%3A0x55f0d42d4b6244f9!2sSS%2015%2C%20Subang%20Jaya%2C%20Selangor!5e0!3m2!1sen!2smy!4v1620841858816!5m2!1sen!2smy"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy">
                    </iframe>
                  </div>
                </div>
              </div>

              {/* Bukit Jalil Branch */}
              <div className="col-lg-6">
                <div className="bg-white p-4 rounded-1 shadow-sm h-100 border">
                  <h3 className="mb-3">Bukit Jalil</h3>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-dark-2 p-3 rounded-1 me-3 flex-shrink-0">
                      <IconMapPin className="text-light" size={24} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="mb-0 text-wrap">1-10, Jalan Bukit Jalil indah 4B, <br/>Bukit Jalil, Taman Ltat, 57000 Kuala Lumpur</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-dark-2 p-3 rounded-1 me-3 flex-shrink-0">
                      <IconPhone className="text-light" size={24} />
                    </div>
                    <div>
                      <p className="mb-0">018-3101909 (John)</p>
                    </div>
                  </div>
                  <div className="rounded-1 overflow-hidden mb-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1778030745256!2d101.6729!3d3.0536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc35c1d6c0ca93%3A0x74e7dad01e42a97b!2sBukit%20Jalil%2C%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1620841858816!5m2!1sen!2smy"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy">
                    </iframe>
                  </div>
                </div>
              </div>

              {/* Puchong Branch */}
              <div className="col-lg-6">
                <div className="bg-white p-4 rounded-1 shadow-sm h-100 border">
                  <h3 className="mb-3">Puchong</h3>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-dark-2 p-3 rounded-1 me-3 flex-shrink-0">
                      <IconMapPin className="text-light" size={24} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="mb-0 text-wrap">23A, Jalan Sri Manja 10, Taman Sri Manja, <br/>46000 Petaling Jaya, Selangor</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-dark-2 p-3 rounded-1 me-3 flex-shrink-0">
                      <IconPhone className="text-light" size={24} />
                    </div>
                    <div>
                      <p className="mb-0">018-7673909 (Jason)</p>
                    </div>
                  </div>
                  <div className="rounded-1 overflow-hidden mb-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0982963348787!2d101.62!3d3.074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d73f035b72d%3A0x5023cfe2b6d5c3f4!2sTaman%20Sri%20Manja%2C%20Petaling%20Jaya%2C%20Selangor!5e0!3m2!1sen!2smy!4v1620841858816!5m2!1sen!2smy"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy">
                    </iframe>
                  </div>
                </div>
              </div>
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
  )
}

export default page
