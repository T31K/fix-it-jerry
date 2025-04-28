import { repairItems } from "@/data";
import Navbar from "@/components/Navbar";
import Services from "@/components/services";

export default function Page({ searchParams }) {
  const laptopItems = repairItems.find(
    (item) => item.title === "Laptop"
  );

  // Extract hash from search params
  const hash = searchParams?.hash || "";

  // Find the service that matches the hash
  const targetService = laptopItems?.services.find(
    (service) => service.hash === hash
  );

  // Determine which tab should be active based on the service type
  const activeTab = targetService?.service_type || "repair";

  return (
    <div id="wrapper">
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
                <h1 className="md:whitespace-nowrap">Devices We Service</h1>
                <p className="text-gray-700 max-w-3xl text-sm md:text-base text-center mt-3">
                  We offer a wide range of device repair services to help you get back to your daily routine.
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
                <a href="/devices">Devices</a>
              </li>

            </ul>
          </div>
          <div className="sw-overlay"></div>
        </section>
        {/* section close */}

        <section>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
            <Services />
          </div>
        </section>
      </div>
    </div>
  );
}
