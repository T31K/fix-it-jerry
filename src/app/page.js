import Faq from "@/components/Faq";
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
        {/* <div className="infobar transparent bottom-separator xs-hidden">
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
                  <a href="index.html">Services</a>
                  <span className="toggle-icon">
                    <i className="fas fa-chevron-down" aria-hidden="true"></i>
                  </span>
                  <ul>
                    <li>
                      <a href="/services/smartphone-repair">
                        Smartphone Repair
                      </a>
                    </li>
                    <li>
                      <a href="/services/tablet-repair">Tablet Repair</a>
                    </li>
                    <li>
                      <a href="/services/laptop-repair">Laptop Repair</a>
                    </li>
                    <li>
                      <a href="/services/computer-repair">Computer Repair</a>
                    </li>
                    <li>
                      <a href="/services/nintendo-switch-repair">
                        Nintendo Switch Repair
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="projects.html">Reviews</a>
                </li>
                <li>
                  <a href="/price">Price</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
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
                  Fast, Reliable Device <br />
                  Repairs Made Easy
                </div>
                <div className="banner-subtitle res-text-md w-4/5 md:w-2/5 mx-auto">
                  Quick turnarounds with convenient pickup and return, clear and
                  honest diagnostics, and exceptional service at a value you can
                  trust. Experience hassle-free repairs every step of the way.
                  <br />
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

                      <div className="price-title">
                        Smartphone <br /> Repair
                      </div>
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
                          src="/images/icons/notebook-dark.png"
                          alt=""
                        />
                      </div>

                      <div className="price-title">
                        Tablet <br /> Repair
                      </div>
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
                          src="/images/icons/notebook-dark.png"
                          alt=""
                        />
                      </div>

                      <div className="price-title">
                        Laptop <br /> Repair
                      </div>
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
                          src="/images/icons/notebook-dark.png"
                          alt=""
                        />
                      </div>

                      <div className="price-title">
                        Nintendo Switch <br /> Repair
                      </div>
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
              {/*
              <p data-inview-showup="showup-translate-left">
                Some Of Our Features
              </p> */}
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
                        Quick turnaround
                      </div>
                      <div className="feature-text">
                        Get your devices repaired fast without compromising
                        quality.
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
                        Convenient Service
                      </div>
                      <div className="feature-text">
                        Enjoy pickup and return options at your convenience
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
                        Trusted Expertise
                      </div>
                      <div className="feature-text">
                        Rely on experienced professionals who prioritize your
                        satisfaction.
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
                        Execeptional Value
                      </div>
                      <div className="feature-text">
                        High-quality repairs at prices that deliver real value.
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
              How we work
            </h2>
            <p data-inview-showup="showup-translate-left">
              Easy and hassle free way to get your device!
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
            <div className="step text-blue-400">
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
                      src="/images/service/smartphone-repair.jpg"
                      alt="smartphone repair in kl"
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
                    <a href="/services/smartphone-repair">{`Smartphone repair`}</a>
                  </div>
                  <div className="item-text">
                    Cracked screen? Battery draining too fast? We fix iPhones &
                    Androids with high-quality parts and expert precision. Fast,
                    affordable, and reliable smartphone repair services.
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
                      src="/images/service/tablet-repair.jpg"
                      alt="ipad/tablet repair in kl, malaysia"
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
                    <a href="/services/tabler-repair">{`Tablet repair`}</a>
                  </div>
                  <div className="item-text">
                    Broken screen or charging issues? Get your iPad or Android
                    tablet fixed quickly with premium repairs. Touchscreen,
                    battery, and software solutions at great prices!
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
                      src="/images/service/computer-repair.jpg"
                      alt="computer repair in kl"
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
                    <a href="/services/tablet-repair">{`Computer repair`}</a>
                  </div>
                  <div className="item-text">
                    Slow PC or hardware failure? We repair desktops & laptops
                    with SSD upgrades, virus removal, and expert diagnostics.
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
                      src="/images/service/laptop-repair.jpg"
                      alt="laptop repair in kl"
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
                    <a href="/services/laptop-repair">{`Laptop repair`}</a>
                  </div>
                  <div className="item-text">
                    Dead pixels? Keyboard unresponsive? From battery
                    replacements to overheating fixes, we provide fast and
                    affordable laptop repair services for Mac & Windows.
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
                      src="/images/service/nintendo-switch-repair.jpg"
                      alt="nintendo switch repair in kl"
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
                    <a href="/services/nintendo-switch-repair">{`Nintendo Switch repair`}</a>
                  </div>
                  <div className="item-text">
                    Joy-Con drift? Console won’t turn on? We repair Nintendo
                    Switch screens, batteries, and internal components.
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
                      src="/images/service/hard-drive-upgrade.jpg"
                      alt="hard drive upgrade service in kl"
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
                    <a href="/services/hard-drive-upgrade">{`Hard Drive Upgrade`}</a>
                  </div>
                  <div className="item-text">
                    Boost your speed with an SSD upgrade! We replace slow hard
                    drives with high-performance SSDs for faster boot times.
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
            <div className="sm-col-4">
              <div className="counter">
                <div className="counter-title text-upper">
                  Satisfied clients
                </div>
                <div className="counter-value" data-waypoint-counter="232">
                  200
                </div>
              </div>
            </div>
            <div className="sm-col-4">
              <div className="counter">
                <div className="counter-title text-upper">Phones fixed</div>
                <div className="counter-value" data-waypoint-counter="194">
                  194
                </div>
              </div>
            </div>
            <div className="sm-col-4">
              <div className="counter">
                <div className="counter-title text-upper">
                  Computer serviced
                </div>
                <div className="counter-value" data-waypoint-counter="93">
                  93
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="container">
          <div className="section-head text-center container-md mb-5">
            <h2
              className="section-title text-upper text-lg"
              data-inview-showup="showup-translate-right"
            >
              What people say
            </h2>
            {/* <p data-inview-showup="showup-translate-left">
              Real customers reviews
            </p> */}
          </div>

          <div
            className="owl-carousel"
            data-inview-showup="showup-translate-up"
            data-owl-dots="true"
          >
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title !mb-2">Friend & knowledgable</div>
                <div className="tt-rating flex justify-center items-center mb-1">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  Superb service! Friendly, great advises and fair price. Took
                  less than 6 hours to solve my iPhone problem (including
                  pick-up and delivering back to me); while the A-official
                  service center can’t even get me an appointment to send the
                  phone in for inspection in next 6 days.
                </div>
                <div className="pexx-tt-user-title">Steve Chan </div>
              </div>
            </div>
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title !mb-2">
                  Excellent and Prompt Service
                </div>
                <div className="tt-rating flex justify-center items-center mb-1">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  Jerry changed the battery of our iPad and iPhone, and
                  reprogrammed our MacBook. His prices are very reasonable. Very
                  prompt. Picks up from you and drop them back to you either on
                  the same day or day after. Highly recommended!
                </div>
                <div className="pexx-tt-user-title">Lim Lee</div>
              </div>
            </div>
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title !mb-2">Reliable & Accommodating</div>
                <div className="tt-rating flex justify-center items-center mb-1">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  Good customer service and very reliable. Jerry is also very
                  accommodating and work within my schedule to get my phone
                  fixed despite being late at night and returned my phone within
                  half an hour. Highly recommended
                </div>
                <div className="pexx-tt-user-title">Yuri Lye</div>
              </div>
            </div>
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title !mb-2">Fast & Professional</div>
                <div className="tt-rating flex justify-center items-center mb-1">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  {`Jerry fixed the faulty charging port of my son's iPad. He
                  picked it up and sent it back within a day. The joy on my
                  son's face is priceless! He also gave us valuable tips on
                  device care.`}
                  <br />
                  <br />
                  Will be back very soon to upgrade my MacBook! Thanks, Jerry!
                </div>
                <div className="pexx-tt-user-title">Cassie Chong</div>
              </div>
            </div>
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title !mb-2">
                  Highly Recommended & Reasonable Price
                </div>
                <div className="tt-rating flex justify-center items-center mb-1">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  Highly recommended and very reasonably priced. Had a cracked
                  iPhone XR (back panel) and it was replaced in just half a day,
                  for half the cost that was quoted to me by another phone
                  repair shop.
                  <br />
                  <br />
                  Great aftersales service as well, with some handy tips on how
                  to care for my phone better.
                </div>
                <div className="pexx-tt-user-title">Karen Lim</div>
              </div>
            </div>
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title !mb-2">
                  Excellent Service & Hassle-Free
                </div>
                <div className="tt-rating flex justify-center items-center mb-1">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  Excellent service! Free pick-up and return within a day!
                  Hassle-free 👍👍👍 My iPad Air gained a new life now after
                  changing a charging port and new screen!
                  <br />
                  <br />
                  Very reasonable price which you can’t find in other repair
                  stores out there! Highly recommended 👍
                </div>
                <div className="pexx-tt-user-title">Pauline Yee</div>
              </div>
            </div>
            <div className="item">
              <div className="simple-testimonial text-center">
                <div className="tt-title !mb-2">
                  Detailed & Excellent Service
                </div>
                <div className="tt-rating flex justify-center items-center mb-1">
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                  <i className="tt-star fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="tt-content">
                  Thanks so much for fixing the Apple Watch as well as Samsung
                  phones. Excellent service and so detailed!
                </div>
                <div className="pexx-tt-user-title">Su Ong</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-bg" data-inview-showup="showup-translate-up">
        <div className="container">
          <div className="contact-table only-xs-text-center">
            <div className="contact-icon xs-hidden">
              <i className="fas fa-phone" aria-hidden="true"></i>
            </div>
            <div className="contact-content">
              <div className="contact-title">Need a repair or upgrade?</div>
              <div className="text-justify only-xs-text-justify-center">
                {`Tell us your issue, and we'll send you a free quote—no strings
                attached!`}
              </div>
            </div>
            <div className="contact-btn">
              <a href="/contact" className="btn btns-white text-upper">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center content-section hidden">
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
        className="map-section hidden"
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
      <section className="text-center content-section max-w-3xl mx-auto">
        \
        <div className="container">
          <div className="section-head text-center container-md mb-5">
            <h2
              className="section-title text-upper text-lg"
              data-inview-showup="showup-translate-right"
            >
              Frequently Asked Questions
            </h2>
            <Faq />
          </div>
        </div>
      </section>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between px-2">
            <div>
              <Image src="/logo.png" alt="logo" width="150" height="0" />
            </div>

            <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
              <li>
                <a
                  href="https://facebook.com/fixitjerry"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/fixitjerry"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
            <div>
              <p className="font-medium text-gray-900">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {`Smartphone Repair`}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {`Tablet Repair`}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {`Laptop Repair`}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {`Computer Repair`}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {`Nintendo Switch Repair`}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Customers Reviews
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Partners</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:opacity-75"
                    href="https://getharmonize.app/"
                  ></a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:opacity-75"
                    href="https://calorieasy.app/"
                  >
                    Track calories with AI
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:opacity-75"
                    href="https://taroternity.com/"
                  >
                    AI Tarot Cards
                  </a>
                </li>
                <li className="absolute opacity-0">
                  <a
                    className="text-gray-700 transition hover:opacity-75"
                    href="https://hackapura.com/"
                  >
                    Hackapura
                  </a>
                </li>{" "}
                <li className="absolute opacity-0">
                  <a
                    className="text-gray-700 transition hover:opacity-75"
                    href="https://hackalumpur.com/"
                  >
                    Hackalumpur
                  </a>
                </li>{" "}
                <li>
                  <a
                    className="text-gray-700 transition hover:opacity-75"
                    href="https://clemanteemusic.com/"
                  >
                    Clemantee Music
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:opacity-75"
                    href="https://mirabelledecoupage.com/"
                  >
                    Mirabelle Decoupage
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition hover:opacity-75"
                    href="https://earthinterior.sg/"
                  >
                    Earth Interior Design SG
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition absolute opacity-0"
                    href="https://getharmonize.app/"
                  >
                    Harmonize
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition absolute opacity-0"
                    href="https://hackapura.com/"
                  >
                    Hackapura
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition absolute opacity-0"
                    href="https://hackalumpmur.com/"
                  >
                    Hacka Lumpur
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 transition absolute opacity-0"
                    href="https://ugcgenai.com/"
                  >
                    UGC Gen AI
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Repair Warranty Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Refund Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Data Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-gray-500">
            {new Date().getFullYear()} Fix It Jerry Sdn Bhd. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
