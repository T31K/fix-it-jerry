"use client"
import { Menu } from "lucide-react";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [branchIndex, setBranchIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const branches = [
    "Desa Parkcity, Kuala Lumpur",
    "Subang Jaya, Selangor",
    "Bukit Jalil, Kuala Lumpur",
    "Puchong, Selangor"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Rotate through branches every 3 seconds
    const branchRotationInterval = setInterval(() => {
      setBranchIndex((prevIndex) => (prevIndex + 1) % branches.length);
    }, 1400);

    // Setup menu toggle handlers
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('btn-close');
    const extraWrap = document.getElementById('extra-wrap');

    if (menuBtn && closeBtn && extraWrap) {
      menuBtn.addEventListener('click', () => {
        extraWrap.classList.add('active');
        setMenuOpen(true);
      });

      closeBtn.addEventListener('click', () => {
        extraWrap.classList.remove('active');
        setMenuOpen(false);
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(branchRotationInterval);

      // Clean up event listeners
      if (menuBtn && closeBtn) {
        menuBtn.removeEventListener('click', () => {});
        closeBtn.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
      <div>
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
                        <div className="topbar-widget me-5 w-[360px]">
                        <a href="/contact#branches">
                            <i className="icofont-location-pin"></i>Our Workshops:{" "}
                            {branches[branchIndex]}
                        </a>
                        </div>
                        <div className="topbar-widget me-5">
                        <a href="#">
                            <i className="icofont-clock-time"></i>Monday - Friday
                            10AM - 6PM
                        </a>
                        </div>
                        <div className="topbar-widget me-5">
                        <a href="#">
                            <i className="icofont-clock-time"></i>Saturday - Sunday
                            10AM - 3PM
                        </a>
                        </div>
                        <div className="topbar-widget me-5">
                        <a href="#">
                            <i className="icofont-phone"></i>Contact Number
                            +60183646909
                        </a>
                        </div>
                    </div>
                    <div className="d-flex">
                        <a
                        className="btn-topbar bg-color me-3"
                        href="/"
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
                        <a href="/">
                        <img
                            className="logo-main w-12 h-12"
                            src="/images/logo.webp"
                            alt=""

                        />
                        <img
                            className="logo-scroll"
                            src="/images/logo-black.webp"
                            alt=""
                        />
                        <img
                            className="logo-mobile w-12 h-12"
                            src="/images/logo.webp"
                            alt=""
                        />
                        </a>
                    </div>
                    </div>
                    <div className="de-flex-col header-col-mid">
                    <ul id="mainmenu">
                        <li>
                        <a className="menu-item" href="/devices">
                            Devices
                        </a>
                        <ul>
                            <li>
                                <a className="menu-item" href="/devices/smartphone">
                                    Smartphone
                                </a>
                            </li>
                            <li>
                                <a className="menu-item" href="/devices/tablet">
                                    Tablet
                                </a>
                            </li>
                            <li>
                                <a className="menu-item" href="/devices/laptop">
                                    Laptop
                                </a>
                            </li>
                            <li>
                                <a className="menu-item" href="/devices/desktop">
                                    Desktop
                                </a>
                            </li>
                            <li>
                                <a className="menu-item" href="/devices/nintendo_switch">
                                    Nintendo Switch
                                </a>
                            </li>
                            <li>
                                <a className="menu-item" href="/devices/airpods">
                                    Airpods
                                </a>
                            </li>
                            <li>
                                <a className="menu-item" href="/devices/apple_watch">
                                    Apple Watch
                                </a>
                            </li>
                            <li>
                                <a className="menu-item" href="/devices/ipod">
                                    iPod
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
                        <a className="menu-item" href="blog.html">
                            Blog
                        </a>
                        </li>
                        <li>
                        <a className="menu-item" href="/contact">
                            Contact
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="de-flex-col">
                    <div className="menu_side_area">
                        <Menu
                          id="menu-btn"
                          className="cursor-pointer"
                          onClick={() => {
                            const extraWrap = document.getElementById('extra-wrap');
                            if (extraWrap) {
                              extraWrap.classList.add('active');
                              setMenuOpen(true);
                            }
                          }}
                        />
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

        <div id="extra-wrap" className="text-light">
        <div id="btn-close" onClick={() => {
          const extraWrap = document.getElementById('extra-wrap');
          if (extraWrap) {
            extraWrap.classList.remove('active');
            setMenuOpen(false);
          }
        }}>
          <span></span>
          <span></span>
        </div>
        <div id="extra-content">
          <img src="images/logo.webp" className="w-150px" alt="" />
          <h5 className="mt-12">Visit Us</h5>
          <div>
            <i className="icofont-clock-time me-2 op-5"></i>Monday - Sunday
            10AM - 6PM
          </div>
          <h5 className="mt-4">Our Branches</h5>
          <div className="mb-4">
            <strong>Desa Parkcity:</strong><br/>
            <span className="ps-1">
            <i className="icofont-location-pin me-2 op-5"></i>7, Jalan Residen Utama, Desa Parkcity</span><br/>
            <span className="ps-1"><i className="icofont-phone me-1"></i>018-3646909 (Jerry)</span>
          </div>
          <div className="mb-4">
            <strong>Subang Jaya:</strong><br/>
            <span className="ps-1"><i className="icofont-location-pin me-2 op-5"></i>   22-1, Jalan SS 15/8, SS 15</span><br/>
            <span className="ps-1"><i className="icofont-phone me-1"></i>018-3267909 (Jack)</span>
          </div>
          <div className="mb-4">
            <strong>Bukit Jalil:</strong><br/>
            <span className="ps-1"><i className="icofont-location-pin me-2 op-5"></i>1-10, Jalan Bukit Jalil indah 4B</span><br/>
            <span className="ps-1"><i className="icofont-phone me-1"></i>018-3101909 (John)</span>
          </div>
          <div className="mb-4">
            <strong>Puchong:</strong><br/>
            <span className="ps-1"><i className="icofont-location-pin me-2 op-5"></i>23A, Jalan Sri Manja 10, Taman Sri Manja</span><br/>
            <span className="ps-1"><i className="icofont-phone me-1"></i>018-7673909 (Jason)</span>
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

export default Navbar;
