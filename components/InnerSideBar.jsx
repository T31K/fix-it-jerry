import ReviewBlock from "@/components/ReviewBlock";
import {
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  Gamepad,
  Gamepad2,
  Ear,
  Watch,
  Music,
  BookOpen,
  Camera,
  Headphones,
  Speaker,
  Luggage,
} from "lucide-react";

const services = [
  {
    name: "smartphone",
    title: "Smartphone",
    Icon: Smartphone,
    link: "/devices/smartphone",
  },
  {
    name: "tablet",
    title: "Tablet",
    Icon: Tablet,
    link: "/devices/tablet",
  },
  {
    name: "laptop",
    title: "Laptop",
    Icon: Laptop,
    link: "/devices/laptop",
  },
  {
    name: "desktop",
    title: "Desktop",
    Icon: Monitor,
    link: "/devices/desktop",
  },
  {
    name: "switch",
    title: "Nintendo Switch",
    Icon: Gamepad,
    link: "/devices/nintendo_switch",
  },
  {
    name: "airpods",
    title: "Airpods",
    Icon: Ear,
    link: "/devices/airpods",
  },
  {
    name: "apple_watch",
    title: "Apple Watch",
    Icon: Watch,
    link: "/devices/apple_watch",
  },
  {
    name: "ipod",
    title: "iPod",
    Icon: Music,
    link: "/devices/ipod",
  },
  {
    name: "ebook",
    title: "Ebook",
    Icon: BookOpen,
    link: "/devices/ebook",
  },
  {
    name: "ps5",
    title: "PS5",
    Icon: Gamepad2,
    link: "/devices/ps5",
  },
  {
    name: "camera",
    title: "Camera",
    Icon: Camera,
    link: "/devices/camera",
  },
  {
    name: "headphone",
    title: "Headphone",
    Icon: Headphones,
    link: "/devices/headphone",
  },
  {
    name: "speaker",
    title: "Speaker",
    Icon: Speaker,
    link: "/devices/speaker",
  },
  {
    name: "luggage",
    title: "Luggage",
    Icon: Luggage,
    link: "/devices/luggage",
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
            <service.Icon
              className={`w-[28px] h-[28px] me-3 shrink-0 ${
                service.name === activeLink ? "text-[#4d6c77]" : "text-gray-700"
              }`}
              strokeWidth={1.5}
            />
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
                {`Don't worry, send your device to us`}{" "}
              </h2>
              <p>
                {`Let’s get your phone working like new again—visit us
                            today or contact us to schedule your repair!`}
              </p>
              <a
                className="btn-main bg-color-2 fx-slide text-dark"
                href="/book-a-repair"
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
