import ReviewBlock from "@/components/ReviewBlock";

const services = [
  {
    name: "smartphone",
    title: "Smartphone",
    icon: "/images/services/phone.webp",
    link: "/devices/smartphone",
  },
  {
    name: "tablet",
    title: "Tablet",
    icon: "/images/services/ipad.webp",
    link: "/devices/tablet",
  },
  {
    name: "laptop",
    title: "Laptop",
    icon: "/images/services/macbook.webp",
    link: "/devices/laptop",
  },
    {
    name: "desktop",
    title: "Desktop",
    icon: "/images/services/desktop.webp",
    link: "/devices/desktop",
  },
  {
    name: "switch",
    title: "Nintendo Switch",
    icon: "/images/services/nintendo_switch.webp",
    link: "/devices/nintendo_switch",
  },
  {
    name: "airpods",
    title: "Airpods",
    icon: "/images/services/airpods.webp",
    link: "/devices/airpods",
  },
  {
    name: "apple_watch",
    title: "Apple Watch",
    icon: "/images/services/apple_watch.webp",
    link: "/devices/apple_watch",
  },
  {
    name: "ipod",
    title: "iPod",
    icon: "/images/services/ipod.webp",
    link: "/devices/ipod",
  },
];

function InnerSideBar({ activeLink }) {
  return (
    <div className="col-lg-3 hidden md:block">
      <div className="me-lg-3">
        {/* navigation begin */}
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className={`${
              service.name === activeLink ? "bg-[#C6E76C]" : "bg-gray-200"
            } d-block p-3 py-4 rounded-2 mb-3 d-flex align-items-center`}
          >
            <img src={service.icon} className="w-[40px] me-3" alt="" />
            <h4 className="mb-0 flex-grow-1">{service.title}</h4>
            <i
              className={`icofont-long-arrow-right ${
                service.name === activeLink ? "text-light" : "text-dark"
              } fs-24`}
            ></i>
          </a>
        ))}
        {/* navigation end */}

        <div className="spacer-double"></div>

        {/* testimonials end */}
        <ReviewBlock />

        <div className="spacer-double"></div>

        {/* cta banner begin */}
        <div className="p-40 rounded-2 overflow-hidden position-relative jarallax text-light">
          <img
            src="/images/background/1.webp"
            className="jarallax-img"
            alt=""
          />
          <div className="row align-items-center relative z-2">
            <div className="col-lg-12 text-center">
              <div className="subtitle s2 wow fadeInUp mb-3">
                {`#1 Phone Repair in KL`}
              </div>
              <h2 className="mb20 wow fadeInUp" data-wow-delay=".2s">
                {`Don't worry, send your smartphone to us`}{" "}
              </h2>
              <p>
                {`Let’s get your phone working like new again—visit us
                            today or contact us to schedule your repair!`}
              </p>
              <a
                className="btn-main bg-color-2 fx-slide text-dark"
                href="book-repair.html"
              >
                <span>Book a Repair</span>
              </a>
            </div>
          </div>
          <div className="sw-overlay"></div>
        </div>
        {/* cta banner end  */}

        <div className="spacer-double"></div>
      </div>
    </div>
  );
}

export default InnerSideBar;
