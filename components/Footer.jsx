function Footer() {
    return (
              <footer className="section-dark">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-sm-6">
              <img src="images/logo.webp" className="w-24 h-24" alt="" />
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
                        <a href="/">Home</a>
                      </li>
                      <li>
                      </li>
                      <li>
                      </li>
                      <li>
                        <a href="/book-a-repair">Book a Repair</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="widget">
                    <a href="/devices">
                      <h5>Devices We Service</h5>
                    </a>
                    <ul>
                      <li>
                        <a href="/devices/smartphone">Smartphone</a>
                      </li>
                      <li>
                        <a href="/devices/tablet">Tablet</a>
                      </li>
                      <li>
                        <a href="/devices/laptop">Laptop</a>
                      </li>
                      <li>
                        <a href="/devices/desktop">Desktop</a>
                      </li>
                      <li>
                        <a href="/devices/nintendo_switch">Nintendo Switch</a>
                      </li>
                      <li>
                        <a href="/devices/airpods">AirPods</a>
                      </li>
                      <li>
                        <a href="/devices/apple_watch">Apple Watch</a>
                      </li>
                      <li>
                        <a href="/devices/ipod">iPod</a>
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
                Monday - Sunday 10AM - 6PM
                <div className="spacer-20"></div>
                <div className="fw-bold text-white">
                  <i className="icofont-location-pin me-2 id-color-2"></i>
                  Workshop Location
                </div>
                Desa Parkcity, Kuala Lumpur Malaysia
                <div className="spacer-20"></div>
                <div className="fw-bold text-white">
                  <i className="fa-brands fa-whatsapp me-2 id-color-2"></i>Send a
                  Whatsapp
                </div>
                <a href="https://wa.me/+60183646909?text=Hello%20from%20fixitjerry.com!">+60183646909</a>
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
    )
}

export default Footer
