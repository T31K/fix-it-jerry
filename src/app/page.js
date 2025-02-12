import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="header header-over">
        <input
          id="header-default"
          type="radio"
          className="collapse"
          defaultChecked
          name="siteheader"
        />
        <input
          id="header-shown"
          type="radio"
          className="collapse"
          name="siteheader"
        />
        <input
          id="header-hidden"
          type="radio"
          className="collapse"
          name="siteheader"
        />
        {/*
        <div className="infobar transparent bottom-separator xs-hidden">
          <div className="container">
            <div className="cols-list pull-left cols-md">
              <div className="list-item">
                <span className="info-icon">
                  <i className="fas fa-home" aria-hidden="true"></i>
                </span>
                Sidestate NSW 4132, Australia
              </div>

              <div className="list-item">
                <span className="info-icon">
                  <i className="fas fa-phone"></i>
                </span>
                Help: + 88 018 4113 6251
              </div>
            </div>
            <div className="cols-list pull-right cols-md socials">
              <div className="list-item">
                <a href="#">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </div>

              <div className="list-item">
                <a href="#">
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                </a>
              </div>

              <div className="list-item">
                <a href="#">
                  <i className="fab fa-pinterest" aria-hidden="true"></i>
                </a>
              </div>

              <div className="list-item">
                <a href="#">
                  <i className="fab fa-google-plus-g" aria-hidden="true"></i>
                </a>
              </div>

              <div className="list-item">
                <a href="#">
                  <i className="fab fa-dribbble" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}

        <nav className="stick-menu menu-wrap simple line transparent">
          <div className="menu-container menu-row">
            <div className="logo">
              <a href="index.html">
                {/* <img src="http://placehold.co/210x60" alt="ProFix" /> */}
              </a>
            </div>
            <div className="header-toggler pull-right xs-shown">
              <label className="header-shown-sign" htmlFor="header-hidden">
                <i className="fas fa-times" aria-hidden="true"></i>
              </label>
              <label className="header-hidden-sign" htmlFor="header-shown">
                <i className="fas fa-bars" aria-hidden="true"></i>
              </label>
            </div>
            <div className="clearfix xs-shown"></div>
            <div className="menu">
              <ul className="menu-items">
                <li>
                  <a href="index.html">Home</a>
                  <span className="toggle-icon">
                    <i className="fas fa-chevron-down" aria-hidden="true"></i>
                  </span>
                  <ul>
                    <li>
                      <a href="index.html">Home 1</a>
                    </li>
                    <li>
                      <a href="homepage-2.html">Home 2</a>
                    </li>
                    <li>
                      <a href="homepage-3.html">Home 3</a>
                    </li>
                    <li>
                      <a href="homepage-4.html">Home 4</a>
                    </li>
                    <li>
                      <a href="homepage-shop-1.html">Home shop 1</a>
                    </li>
                    <li>
                      <a href="homepage-shop-2.html">Home shop 2</a>
                    </li>
                    <li>
                      <a href="homepage-shop-3.html">Home shop 3</a>
                    </li>
                    <li>
                      <a href="homepage-mobile-1.html">Home mobile 1</a>
                    </li>
                    <li>
                      <a href="homepage-mobile-2.html">Home mobile 2</a>
                    </li>
                    <li>
                      <a href="homepage-mobile-3.html">Home mobile 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="menu-item">Pages</span>
                  <span className="toggle-icon">
                    <i className="fas fa-chevron-down" aria-hidden="true"></i>
                  </span>
                  <ul>
                    <li>
                      <span className="menu-item">Content pages</span>
                      <span className="menu-sign-right">
                        <i
                          className="fas fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <ul>
                        <li>
                          <a href="about-us.html">About us</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="article.html">Article</a>
                        </li>
                        <li>
                          <a href="service.html">Service</a>
                        </li>
                        <li>
                          <a href="project.html">Project</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="menu-item">User pages</span>
                      <span className="menu-sign-right">
                        <i
                          className="fas fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <ul>
                        <li>
                          <a href="sign-in.html">Sign in</a>
                        </li>
                        <li>
                          <a href="sign-up.html">Sign up</a>
                        </li>
                        <li>
                          <a href="forgot-password.html">Forgot password</a>
                        </li>
                        <li>
                          <a href="dashboard.html">Dashboard</a>
                        </li>
                        <li>
                          <a href="profile.html">Profile</a>
                        </li>
                        <li>
                          <a href="orders.html">Orders</a>
                        </li>
                        <li>
                          <a href="tickets.html">Tickets</a>
                        </li>
                        <li>
                          <a href="new-ticket.html">New ticket</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="menu-item">Shop pages</span>
                      <span className="menu-sign-right">
                        <i
                          className="fas fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <ul>
                        <li>
                          <a href="shop-item.html">Shop item</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="order-confirmation.html">Confirmation</a>
                        </li>
                        <li>
                          <a href="terms-and-conditions.html">
                            Terms &amp; conditions
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="menu-item">Search pages</span>
                      <span className="menu-sign-right">
                        <i
                          className="fas fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <ul>
                        <li>
                          <a href="search.html">Search</a>
                        </li>
                        <li>
                          <a href="advanced-search.html">Advanced search</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="menu-item">Page sidebar</span>
                      <span className="menu-sign-right">
                        <i
                          className="fas fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <ul>
                        <li>
                          <a href="page-no-sidebar.html">Page no sidebar</a>
                        </li>
                        <li>
                          <a href="page-sidebar-left.html">Page sidebar left</a>
                        </li>
                        <li>
                          <a href="page-sidebar-right.html">
                            Page sidebar right
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="menu-item">Page header/footer</span>
                      <span className="menu-sign-right">
                        <i
                          className="fas fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <ul>
                        <li>
                          <a href="page-header-1.html">Header 1</a>
                        </li>
                        <li>
                          <a href="page-header-2.html">Header 2</a>
                        </li>
                        <li>
                          <a href="page-header-3.html">Header 3</a>
                        </li>
                        <li>
                          <a href="page-header-4.html">Header 4</a>
                        </li>
                        <li>
                          <a href="page-header-5.html">Header 5</a>
                        </li>
                        <li>
                          <a href="page-footer-1.html">Footer 1</a>
                        </li>
                        <li>
                          <a href="page-footer-2.html">Footer 2</a>
                        </li>
                        <li>
                          <a href="page-footer-3.html">Footer 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="menu-item">Status pages</span>
                      <span className="menu-sign-right">
                        <i
                          className="fas fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <ul>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                        <li>
                          <a href="404-2.html">404 - 2</a>
                        </li>
                        <li>
                          <a href="underconstruction.html">
                            Under construction
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="menu-item">Elements</span>
                      <span className="menu-sign-right">
                        <i
                          className="fas fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <ul>
                        <li>
                          <a href="typography.html">Typography</a>
                        </li>
                        <li>
                          <a href="form-elements.html">Form elements</a>
                        </li>
                        <li>
                          <a href="form-elements-required.html">
                            Form elements required
                          </a>
                        </li>
                        <li>
                          <a href="form-elements-disabled.html">
                            Form elements disabled
                          </a>
                        </li>
                        <li>
                          <a href="form-elements-error.html">
                            Form elements error
                          </a>
                        </li>
                        <li>
                          <a href="form-elements-valid.html">
                            Form elements valid
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-category.html">Shop</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact Us</a>
                  <span className="toggle-icon">
                    <i className="fas fa-chevron-down" aria-hidden="true"></i>
                  </span>
                  <ul className="left">
                    <li>
                      <a href="contact-us.html">Contact us</a>
                    </li>
                    <li>
                      <a href="contact-us-2.html">Contact us - 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" data-show-block="search">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="menu-item-stick-left">
                  <a href="#" data-show-block="cart">
                    <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                    <span className="item-label-sale item-label">3</span>
                  </a>
                </li>
              </ul>

              <div className="clearfix"></div>
              <div className="line-right xs-hidden"></div>
            </div>
          </div>
        </nav>
      </header>

      <section>
        <div className="flexslider screen-height">
          <div className="slides">
            <div className="slide">
              <img
                src="/images/service/motherboard-1.jpg"
                alt=""
                data-cover-image="true"
                layout="fill"
              />
              <div className="theme-back"></div>
              <div className="pos-center text-center col-12 text-white">
                <div className="banner-title res-text-xxl">
                  Fast & Quick Fix
                </div>
                <div className="banner-subtitle res-text-md">
                  Just send valuable laptop, PC, MAC, Mobile,
                  <br />
                  {` Gaming Device or Smartphone and we'll take care of it.`}
                </div>
              </div>
            </div>

            <div className="slide">
              <img
                src="/images/service/motherboard-2.jpg"
                alt=""
                data-cover-image="true"
                layout="fill"
              />
              <div className="theme-back"></div>
              <div className="pos-center text-center col-12 text-white">
                <div className="banner-title res-text-xxl">
                  Any Kind of Upgrades
                </div>
              </div>
            </div>

            <div className="slide">
              <img
                src="/images/service/motherboard-3.jpg"
                alt=""
                data-cover-image="true"
                layout="fill"
              />
              <div className="theme-back"></div>
              <div className="pos-center text-center col-12 text-white">
                <div className="banner-title res-text-xxl">Data Recovery</div>
                <div className="banner-subtitle res-text-md">
                  {`You Lose - We'll Find`}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-custom-navigation">
            {/* Arrow Navigator */}
            <a href="#" className="flex-prev">
              <i className="fas fa-angle-left" aria-hidden="true"></i>
            </a>
            <a href="#" className="flex-next">
              <i className="fas fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>

      <div className="clearfix muted-bg">
        <section className="md-stuck-top content-section">
          <div className="container hyped-block">
            <div className="row cols-md rows-md">
              <div className="md-col-6">
                <div className="row cols-md rows-md">
                  <div className="sm-col-6">
                    <div
                      className="price-block simple"
                      data-inview-showup="showup-translate-up"
                    >
                      <div className="price-back"></div>

                      <div className="price-image">
                        <img
                          className="image"
                          src="/images/icons/notebook-dark.png"
                          alt=""
                        />
                      </div>

                      <div className="price-title">Laptop Repair</div>
                      <div className="price-subtext">starting at...</div>
                      <div className="price">$20.00</div>
                      <a
                        className="btn-md btns-bordered btn text-upper"
                        href="#"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                  <div className="sm-col-6">
                    <div
                      className="price-block simple"
                      data-inview-showup="showup-translate-up"
                    >
                      <div className="price-back"></div>

                      <div className="price-image">
                        <img
                          className="image"
                          src="/images/icons/computer-dark.png"
                          alt=""
                        />
                      </div>

                      <div className="price-title">Computer Repair</div>
                      <div className="price-subtext">starting at...</div>
                      <div className="price">$20.00</div>
                      <a
                        className="btn-md btns-bordered btn text-upper"
                        href="#"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md-col-6">
                <div className="row cols-md rows-md">
                  <div className="sm-col-6">
                    <div
                      className="price-block simple"
                      data-inview-showup="showup-translate-up"
                    >
                      <div className="price-back"></div>

                      <div className="price-image">
                        <img
                          className="image"
                          src="images/icons/printer-dark.png"
                          alt=""
                        />
                      </div>

                      <div className="price-title">Printer Repair</div>
                      <div className="price-subtext">starting at...</div>
                      <div className="price">$110.00</div>
                      <a
                        className="btn-md btns-bordered btn text-upper"
                        href="#"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                  <div className="sm-col-6">
                    <div
                      className="price-block simple"
                      data-inview-showup="showup-translate-up"
                    >
                      <div className="price-back"></div>

                      <div className="price-image">
                        <img
                          className="image"
                          src="images/icons/mobile-dark.png"
                          alt=""
                        />
                      </div>

                      <div className="price-title">Smartphone Repair</div>
                      <div className="price-subtext">starting at...</div>
                      <div className="price">$45.00</div>
                      <a
                        className="btn-md btns-bordered btn text-upper"
                        href="#"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <div className="section-head text-center container-md">
              <h2
                className="section-title text-upper text-lg"
                data-inview-showup="showup-translate-right"
              >
                Why choose us
              </h2>

              <p data-inview-showup="showup-translate-left">
                Some Of Our Features
              </p>
            </div>
            <div className="row cols-md rows-lg text-center">
              <div className="md-col-6">
                <div className="row cols-md rows-lg">
                  <div className="sm-col-6">
                    <div
                      className="feature feature-side text-left"
                      data-inview-showup="showup-translate-up"
                    >
                      <div className="feature-icon">
                        <i className="fas fa-rocket" aria-hidden="true"></i>
                      </div>
                      <div className="feature-title text-upper">
                        We are fast
                      </div>
                      <div className="feature-text">
                        Qualified Workers Lorem Ipsum is simply dummy text of
                        the printing
                      </div>
                    </div>
                  </div>
                  <div className="sm-col-6">
                    <div
                      className="feature feature-side text-left"
                      data-inview-showup="showup-translate-up"
                    >
                      <div className="feature-icon">
                        <i
                          className="fas fa-dollar-sign"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="feature-title text-upper">
                        No fix, no fee
                      </div>
                      <div className="feature-text">
                        Repair on Demand Lorem Ipsum is simply dummy text of the
                        printing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md-col-6">
                <div className="row cols-md rows-lg">
                  <div className="sm-col-6">
                    <div
                      className="feature feature-side text-left"
                      data-inview-showup="showup-translate-up"
                    >
                      <div className="feature-icon">
                        <i
                          className="far fa-calendar-check"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="feature-title text-upper">
                        30 days warranty
                      </div>
                      <div className="feature-text">
                        Guaranteed Service Lorem Ipsum is simply dummy text of
                        the printing
                      </div>
                    </div>
                  </div>
                  <div className="sm-col-6">
                    <div
                      className="feature feature-side text-left"
                      data-inview-showup="showup-translate-up"
                    >
                      <div className="feature-icon">
                        <i className="fas fa-users" aria-hidden="true"></i>
                      </div>
                      <div className="feature-title text-upper">
                        Expert staff
                      </div>
                      <div className="feature-text">
                        Available Anytime Lorem Ipsum is simply dummy text of
                        the printing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <a href="#" className="scroll-top disabled">
        <i className="fas fa-angle-up" aria-hidden="true"></i>
      </a>
      <div
        className="singlepage-block collapse alt-bg"
        data-block="search"
        data-show-block-class="animation-scale-top-right"
        data-hide-block-class="animation-unscale-top-right"
      >
        <a href="#" className="close-link" data-close-block>
          <i className="fas fa-times" aria-hidden="true"></i>
        </a>
        <div className="pos-v-center col-12">
          <div className="container">
            <form action="#">
              <div className="row cols-md rows-md">
                <div className="lg-col-9 md-col-8 sm-col-12">
                  <div className="field-group">
                    <div className="field-wrap">
                      <input
                        className="field-control"
                        name="search"
                        placeholder="Search Tags"
                        required
                      />
                      <span className="field-back"></span>
                    </div>
                  </div>
                </div>
                <div className="lg-col-3 md-col-4 sm-col-6">
                  <button
                    className="btn btns-white-bordered text-upper"
                    type="submit"
                  >
                    search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section className="with-bg solid-section">
        <div
          className="fix-image-wrap"
          data-image-src="/images/service/motherboard-2.jpg"
          data-parallax="scroll"
        ></div>
        <div className="theme-back inner-shadow"></div>
        <div className="container text-center">
          <div className="section-head text-center container-md">
            <h2
              className="section-title text-upper text-lg"
              data-inview-showup="showup-translate-right"
            >
              Service process
            </h2>
            <p data-inview-showup="showup-translate-left">
              easy and effective way to get your device repaired
            </p>
          </div>
          <div
            className="service-steps text-upper"
            data-inview-showup="showup-scale"
          >
            <div className="step">
              <span className="step-number">1</span>damage device
            </div>
            <div className="step">
              <span className="step-number">2</span>send it to us
            </div>
            <div className="step">
              <span className="step-number active">3</span>fast fix
            </div>
            <div className="step">
              <span className="step-number">4</span>quick return
            </div>
          </div>
        </div>
      </section>
      <section className="muted-bg solid-section">
        <div className="container">
          <div className="section-head text-center container-md">
            <h2
              className="section-title text-upper text-lg"
              data-inview-showup="showup-translate-right"
            >
              Services
            </h2>
            <p data-inview-showup="showup-translate-left">
              We offer a full range of repair services provided by an
              experienced and specialized team
            </p>
          </div>
          <div className="row cols-md rows-md">
            <div className="md-col-4 sm-col-6">
              <div className="item" data-inview-showup="showup-translate-up">
                <a href="service.html" className="block-link text-center">
                  <span className="image-wrap">
                    <img
                      className="image"
                      src="/images/service/item-1.jpg"
                      alt=""
                    />
                  </span>
                  <span className="hover">
                    <span className="hover-show">
                      <span className="back"></span>
                      <span className="content">
                        <i className="fas fa-search" aria-hidden="true"></i>
                      </span>
                    </span>
                  </span>
                </a>
                <div className="item-content">
                  <div className="item-title text-upper">
                    <a href="service.html">Data backup &amp; recovery</a>
                  </div>
                  <div className="item-text">
                    We working hard to build a reputation of customer
                    satisfaction through technical excellence and friendly staff
                  </div>
                  <a
                    href="service.html"
                    className="btn btn-md btns-bordered pull-right text-upper"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="md-col-4 sm-col-6">
              <div className="item" data-inview-showup="showup-translate-up">
                <a href="service.html" className="block-link text-center">
                  <span className="image-wrap">
                    <img
                      className="image"
                      src="/images/service/item-2.jpg"
                      alt=""
                    />
                  </span>
                  <span className="hover">
                    <span className="hover-show">
                      <span className="back"></span>
                      <span className="content">
                        <i className="fas fa-search" aria-hidden="true"></i>
                      </span>
                    </span>
                  </span>
                </a>
                <div className="item-content">
                  <div className="item-title text-upper">
                    <a href="service.html">Laptop &amp; Mac Upgrade</a>
                  </div>
                  <div className="item-text">
                    We working hard to build a reputation of customer
                    satisfaction through technical excellence and friendly staff
                  </div>
                  <a
                    href="service.html"
                    className="btn btn-md btns-bordered pull-right text-upper"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="md-col-4 sm-col-6">
              <div className="item" data-inview-showup="showup-translate-up">
                <a href="service.html" className="block-link text-center">
                  <span className="image-wrap">
                    <img
                      className="image"
                      src="/images/service/item-3.jpg"
                      alt=""
                    />
                  </span>
                  <span className="hover">
                    <span className="hover-show">
                      <span className="back"></span>
                      <span className="content">
                        <i className="fas fa-search" aria-hidden="true"></i>
                      </span>
                    </span>
                  </span>
                </a>
                <div className="item-content">
                  <div className="item-title text-upper">
                    <a href="service.html">Repair Smartphone</a>
                  </div>
                  <div className="item-text">
                    We working hard to build a reputation of customer
                    satisfaction through technical excellence and friendly staff
                  </div>
                  <a
                    href="service.html"
                    className="btn btn-md btns-bordered pull-right text-upper"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="md-col-4 sm-col-6">
              <div className="item" data-inview-showup="showup-translate-up">
                <a href="service.html" className="block-link text-center">
                  <span className="image-wrap">
                    <img
                      className="image"
                      src="/images/service/item-4.jpg"
                      alt=""
                    />
                  </span>
                  <span className="hover">
                    <span className="hover-show">
                      <span className="back"></span>
                      <span className="content">
                        <i className="fas fa-search" aria-hidden="true"></i>
                      </span>
                    </span>
                  </span>
                </a>
                <div className="item-content">
                  <div className="item-title text-upper">
                    <a href="service.html">Tablet Repair</a>
                  </div>
                  <div className="item-text">
                    We working hard to build a reputation of customer
                    satisfaction through technical excellence and friendly staff
                  </div>
                  <a
                    href="service.html"
                    className="btn btn-md btns-bordered pull-right text-upper"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="md-col-4 sm-col-6">
              <div className="item" data-inview-showup="showup-translate-up">
                <a href="service.html" className="block-link text-center">
                  <span className="image-wrap">
                    <img
                      className="image"
                      src="/images/service/item-5.jpg"
                      alt=""
                    />
                  </span>
                  <span className="hover">
                    <span className="hover-show">
                      <span className="back"></span>
                      <span className="content">
                        <i className="fas fa-search" aria-hidden="true"></i>
                      </span>
                    </span>
                  </span>
                </a>
                <div className="item-content">
                  <div className="item-title text-upper">
                    <a href="service.html">Repair PC &amp; Laptop Hardware</a>
                  </div>
                  <div className="item-text">
                    We working hard to build a reputation of customer
                    satisfaction through technical excellence and friendly staff
                  </div>
                  <a
                    href="service.html"
                    className="btn btn-md btns-bordered pull-right text-upper"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="md-col-4 sm-col-6">
              <div className="item" data-inview-showup="showup-translate-up">
                <a href="service.html" className="block-link text-center">
                  <span className="image-wrap">
                    <img
                      className="image"
                      src="/images/service/item-6.jpg"
                      alt=""
                    />
                  </span>
                  <span className="hover">
                    <span className="hover-show">
                      <span className="back"></span>
                      <span className="content">
                        <i className="fas fa-search" aria-hidden="true"></i>
                      </span>
                    </span>
                  </span>
                </a>
                <div className="item-content">
                  <div className="item-title text-upper">
                    <a href="service.html">Network Solution</a>
                  </div>
                  <div className="item-text">
                    We working hard to build a reputation of customer
                    satisfaction through technical excellence and friendly staff
                  </div>
                  <a
                    href="service.html"
                    className="btn btn-md btns-bordered pull-right text-upper"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center shift-xl">
            <a
              className="btn text-upper"
              href="services.html"
              data-inview-showup="showup-translate-up"
            >
              <i className="fas fa-th-large" aria-hidden="true"></i>
              &nbsp;&nbsp;view all services
            </a>
          </div>
        </div>
      </section>
      <section className="main-bg decorated-bg text-center tight solid-section">
        <div className="container">
          <div
            className="row cols-md rows-xl"
            data-inview-showup="showup-translate-up"
          >
            <div className="sm-col-3">
              <div className="counter">
                <div className="counter-title text-upper">Happy client</div>
                <div className="counter-value" data-waypoint-counter="3720">
                  3720
                </div>
              </div>
            </div>
            <div className="sm-col-3">
              <div className="counter">
                <div className="counter-title text-upper">
                  Finished projects
                </div>
                <div className="counter-value" data-waypoint-counter="4170">
                  4170
                </div>
              </div>
            </div>
            <div className="sm-col-3">
              <div className="counter">
                <div className="counter-title text-upper">
                  Computer serviced
                </div>
                <div className="counter-value" data-waypoint-counter="2730">
                  2730
                </div>
              </div>
            </div>
            <div className="sm-col-3">
              <div className="counter">
                <div className="counter-title text-upper">Mobile serviced</div>
                <div className="counter-value" data-waypoint-counter="1510">
                  1510
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="container">
          <div className="section-head text-center container-md">
            <h2
              className="section-title text-upper text-lg"
              data-inview-showup="showup-translate-right"
            >
              What people say
            </h2>
            <p data-inview-showup="showup-translate-left">
              Real customers reviews
            </p>
          </div>
          <div
            className="owl-carousel"
            data-inview-showup="showup-translate-up"
            data-owl-dots="true"
          >
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title">Great customer support</div>
                <div className="tt-rating">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  <div className="tt-quote">&#8220;</div>
                  Thanks John, I was really pleased with Profix’s service. Would
                  definitely recommend you and have alredy given out some of
                  your business cards that were left with me. All the best for
                  future succes.
                </div>
                <div className="tt-icon">
                  <img src="/images/icons/notebook-sm.png" alt="" />
                </div>
                <div className="pexx-tt-user-title">Michale John</div>
                <div className="pexx-tt-user-subtitle">
                  Co-Founder, InfoLabs
                </div>
              </div>
            </div>
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title">Flexible services</div>
                <div className="tt-rating">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  <div className="tt-quote">&#8220;</div>
                  Profix did great job with fixing my laptop for a good price. I
                  recommend any body with laptop problems, they will give you
                  excellent service to all his customers.
                </div>
                <div className="tt-icon">
                  <img src="/images/icons/computer-sm.png" alt="" />
                </div>
                <div className="pexx-tt-user-title">Merry Smith</div>
                <div className="pexx-tt-user-subtitle">CFO, InfoTech</div>
              </div>
            </div>
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title">Excellent team</div>
                <div className="tt-rating">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  <div className="tt-quote">&#8220;</div>
                  Keep up the excellent work. Thank you so much for your help.
                  This is simply unbelievable!
                </div>
                <div className="tt-icon">
                  <img src="/images/icons/printer-sm.png" alt="" />
                </div>
                <div className="pexx-tt-user-title">Michale John</div>
                <div className="pexx-tt-user-subtitle">
                  Co-Founder, InfoLabs
                </div>
              </div>
            </div>
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title">Flexible services</div>
                <div className="tt-rating">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  <div className="tt-quote">&#8220;</div>
                  Profix did great job with fixing my laptop for a good price. I
                  recommend any body with laptop problems, they will give you
                  excellent service to all his customers.
                </div>
                <div className="tt-icon">
                  <img src="/images/icons/mobile-sm.png" alt="" />
                </div>
                <div className="pexx-tt-user-title">Merry Smith</div>
                <div className="pexx-tt-user-subtitle">CFO, InfoTech</div>
              </div>
            </div>
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title">Great customer support</div>
                <div className="tt-rating">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  <div className="tt-quote">&#8220;</div>
                  Thanks John, I was really pleased with Profix’s service. Would
                  definitely recommend you and have alredy given out some of
                  your business cards that were left with me. All the best for
                  future succes.
                </div>
                <div className="tt-icon">
                  <img src="/images/icons/computer-sm.png" alt="" />
                </div>
                <div className="pexx-tt-user-title">Michale John</div>
                <div className="pexx-tt-user-subtitle">
                  Co-Founder, InfoLabs
                </div>
              </div>
            </div>
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title">Excellent team</div>
                <div className="tt-rating">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  <div className="tt-quote">&#8220;</div>
                  Keep up the excellent work. Thank you so much for your help.
                  This is simply unbelievable!
                </div>
                <div className="tt-icon">
                  <img src="/images/icons/printer-sm.png" alt="" />
                </div>
                <div className="pexx-tt-user-title">Michale John</div>
                <div className="pexx-tt-user-subtitle">
                  Co-Founder, InfoLabs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-bg" data-inview-showup="showup-translate-up">
        <div className="container">
          <div className="contact-table only-xs-text-center">
            <div className="contact-icon xs-hidden">
              <i className="fas fa-bicycle" aria-hidden="true"></i>
            </div>
            <div className="contact-content">
              <div className="contact-title">Request free consultation</div>
              <div className="text-justify only-xs-text-justify-center">
                Get answers and advice from people you want it from.
              </div>
            </div>
            <div className="contact-btn">
              <a href="contact-us.html" className="btn btns-white text-upper">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center content-section">
        <div className="container">
          <div className="section-head text-center container-md">
            <h2
              className="section-title text-upper text-lg"
              data-inview-showup="showup-translate-right"
            >
              We are authorized
            </h2>
          </div>
          <div
            className="owl-carousel"
            data-inview-showup="showup-translate-up"
            data-owl-responsive="2;3;4;5"
            data-owl-items="5"
          >
            <div className="item">
              <a className="grayscale-link" href="#">
                <img
                  className="image"
                  src="http://placehold.co/720x405"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a className="grayscale-link" href="#">
                <img
                  className="image"
                  src="http://placehold.co/720x405"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a className="grayscale-link" href="#">
                <img
                  className="image"
                  src="http://placehold.co/720x405"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a className="grayscale-link" href="#">
                <img
                  className="image"
                  src="http://placehold.co/720x405"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a className="grayscale-link" href="#">
                <img
                  className="image"
                  src="http://placehold.co/720x405"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a className="grayscale-link" href="#">
                <img
                  className="image"
                  src="http://placehold.co/720x405"
                  alt=""
                />
              </a>
            </div>
            <div className="item">
              <a className="grayscale-link" href="#">
                <img
                  className="image"
                  src="http://placehold.co/720x405"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="map-section"
        data-inview-showup="showup-translate-right"
      >
        <div className="gmap" data-lat="-33.878897" data-lng="151.103737"></div>
        <div className="info-wrap">
          <div className="info-container">
            <div className="our-info side main-bg">
              <div className="info-block">
                <div className="info-title text-upper">Contact Us</div>
                <div className="info-line">
                  <span className="info-icon">
                    <i
                      className="fas fa-map-marker-alt fa-fw"
                      aria-hidden="true"
                    ></i>
                  </span>
                  Sidestate NSW 4132, Australia
                </div>
                <div className="info-line">
                  <span className="info-icon">
                    <i className="fas fa-phone fa-fw" aria-hidden="true"></i>
                  </span>
                  (555) 555-0312
                </div>
                <div className="info-line">
                  <span className="info-icon">
                    <i className="far fa-envelope fa-fw" aria-hidden="true"></i>
                  </span>
                  info@profix.com
                </div>
              </div>
              <div className="info-block">
                <div className="info-title text-upper">Opening Hours</div>
                <div className="info-line">
                  Monday-Friday<span className="pull-right">10:00 - 18:00</span>
                </div>
                <div className="info-line">
                  Saturday, Sunday<span className="pull-right">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="loader-block">
        <div className="loader-back alt-bg"></div>
        <div className="loader-image">
          <img className="image" src="/images/parts/loader.gif" alt="" />
        </div>
      </div> */}
      <footer className="footer">
        <div className="container only-xs-text-justify-center">
          <div className="solid-section">
            <div className="row cols-md">
              <div className="sm-col-3">
                <div className="footer-logo">
                  {/* <img src="http://placehold.co/180x50" alt="ProFix" /> */}
                </div>
                <div className="footer-text sm-text-justify">
                  Profix is a Premium PSD Template. Best choice for your online
                  store. Let purchase it to enjoy now
                </div>
              </div>
              <div className="sm-col-8 sm-push-1">
                <div className="row cols-md">
                  <div className="sm-col-4">
                    <div className="footer-title alt-color text-upper">
                      Partners
                    </div>
                    <div>
                      <a href="https://t31k.com/">T31K</a>
                    </div>
                    <div>
                      <a href="https://getharmonize.app/">Harmonize</a>
                    </div>
                    <div>
                      <a href="https://calorieasy.app/">Calorieasy</a>
                    </div>
                    <div>
                      <a href="https://taroternity.com/">Taroternity</a>
                    </div>
                    <div>
                      <a href="https://listskit.com/">Lists Kit</a>
                    </div>
                    <div>
                      <a href="https://hackapura.com/">Hackapura</a>
                    </div>{" "}
                    <div>
                      <a href="https://hackalumpur.com/">Hackalumpur</a>
                    </div>{" "}
                    <div>
                      <a href="https://clemanteemusic.com/">Clemantee Music</a>
                    </div>
                    <div>
                      <a href="https://mirabelledecoupage.com/">
                        Mirabelle Decoupage
                      </a>
                    </div>
                    <div>
                      <a href="https://earthinterior.sg/">
                        Earth Interior Design
                      </a>
                    </div>
                  </div>
                  <div className="sm-col-4">
                    <div className="footer-title alt-color text-upper">
                      Contacts
                    </div>
                    <div className="footer-text">
                      (555) 555-0312
                      <br />
                      info@profix.com
                    </div>
                  </div>
                  <div className="sm-col-4">
                    <div className="footer-title alt-color text-upper">
                      Socials
                    </div>
                    <div className="cols-list socials cols-sm inline-block">
                      <a href="#" className="list-item">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                      <a href="#" className="list-item">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="#" className="list-item">
                        <i className="fab fa-pinterest" aria-hidden="true"></i>
                      </a>
                      <a href="#" className="list-item">
                        <i
                          className="fab fa-google-plus-g"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a href="#" className="list-item">
                        <i className="fab fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyrights text-center top-separator ins-md">
            &copy; 2017 <b>ProFix</b>. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
