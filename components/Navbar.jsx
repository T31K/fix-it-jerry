
function Navbar() {
  return (
      <>
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
      </>
    );
}

export default Navbar;
