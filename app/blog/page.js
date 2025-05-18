import BookingForm from "@/components/BookingForm"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
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
                <h1 className="md:whitespace-nowrap !text-[24px] md:!text-[48px]">Book a repair</h1>
                <p className="text-gray-700 max-w-3xl !text-[16px] md:!text-[20px] text-center mt-3">
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
                <a href="/book-a-repair">Book a repair</a>
              </li>
            </ul>
          </div>
          <div className="sw-overlay"></div>
        </section>
        {/* section close */}

        <section className="bg-green-200/20">
          <div className="container">
            <div className="row g-4">
              <section className="flex items-center justify-center">
                <BookingForm showTitle={false} />
              </section>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default page

