import { features, repairItems } from "@/data";
import InnerSideBar from "@/components/InnerSideBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
export default function Page({ searchParams }) {
  const nintendoSwitchItems = repairItems.find(
    (item) => item.title === "Nintendo Switch"
  );

  // Extract hash from search params
  const hash = searchParams?.hash || "";

  // Find the service that matches the hash
  const targetService = nintendoSwitchItems?.services.find(
    (service) => service.hash === hash
  );

  // Determine which tab should be active based on the service type
  const activeTab = targetService?.service_type || "repair";

  return (
    <div id="wrapper">
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
                      href="book-repair.html"
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
                    <a href="index.html">
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
                      <a className="menu-item" href="services.html">
                        Services
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="/services/nintendo_switch">
                            Nintendo Switch
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
                <h1 className="md:whitespace-nowrap">Laptop Services</h1>
                <p className="text-gray-700 max-w-3xl text-sm md:text-base text-center mt-3">
                  {nintendoSwitchItems?.description}
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
              <li>
                <a href="/services/nintendo_switch">Nintendo Switch</a>
              </li>
            </ul>
          </div>
          <div className="sw-overlay"></div>
        </section>
        {/* section close */}

        <section>
          <div className="container">
            <div className="row g-4">
              <InnerSideBar activeLink="switch" />

              <section className="col-lg-9 !py-0">

                <Tabs defaultValue={activeTab} className="w-full">


                  {/* Repairs Tab Content */}
                  <TabsContent value="repair">
                    {nintendoSwitchItems?.services
                      .filter((service) => service.service_type === "repair")
                      .map((service, index) => (
                        <Accordion
                          key={index}
                          type="single"
                          collapsible
                          defaultValue={
                            service.hash === hash
                              ? `repair-${service.hash}`
                              : undefined
                          }
                        >
                          <AccordionItem value={`repair-${service.hash}`}>
                            <AccordionTrigger>
                              {service.service}
                            </AccordionTrigger>
                            <AccordionContent>
                              <Card>
                                <CardContent>

                                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    <Image
                                      src={service.image}
                                      width={400}
                                      height={400}
                                      className="mb-3 border rounded-lg"
                                      alt={service.title}
                                    />
                                    {service.sections?.map(
                                      (section, secIndex) => (
                                        <div key={secIndex} className="mb-4">
                                          <h4 className="text-lg font-semibold mb-3 text-brand-700 border-b border-brand-100 pb-2">
                                            {section.heading}
                                          </h4>
                                          {Array.isArray(section.content) ? (
                                            <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm md:text-base">
                                              {section.content.map(
                                                (item, i) => (
                                                  <li key={i}>{item}</li>
                                                )
                                              )}
                                            </ul>
                                          ) : (
                                            <p className="text-gray-700 text-sm md:text-base">
                                              {section.content}
                                            </p>
                                          )}
                                        </div>
                                      )
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ))}
                  </TabsContent>

                  {/* Replacements Tab Content */}
                  <TabsContent value="replacement">
                    {nintendoSwitchItems?.services
                      .filter(
                        (service) => service.service_type === "replacement"
                      )
                      .map((service, index) => (
                        <Accordion
                          key={index}
                          type="single"
                          collapsible
                          defaultValue={
                            service.hash === hash
                              ? `replacement-${service.hash}`
                              : undefined
                          }
                        >
                          <AccordionItem value={`replacement-${service.hash}`}>
                            <AccordionTrigger>
                              {service.service}
                            </AccordionTrigger>
                            <AccordionContent>
                              <Card>
                                <CardContent>
                                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    <Image
                                      src={service.image}
                                      width={400}
                                      height={400}
                                      className="mb-3 border rounded-lg"
                                      alt={service.title}
                                    />
                                    {service.sections?.map(
                                      (section, secIndex) => (
                                        <div key={secIndex} className="mb-4">
                                          <h4 className="text-lg font-semibold mb-3 text-brand-700 border-b border-brand-100 pb-2">
                                            {section.heading}
                                          </h4>
                                          {Array.isArray(section.content) ? (
                                            <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm md:text-base">
                                              {section.content.map(
                                                (item, i) => (
                                                  <li key={i}>{item}</li>
                                                )
                                              )}
                                            </ul>
                                          ) : (
                                            <p className="text-gray-700 text-sm md:text-base">
                                              {section.content}
                                            </p>
                                          )}
                                        </div>
                                      )
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ))}
                  </TabsContent>

                  {/* Upgrades Tab Content */}
                  <TabsContent value="upgrade">
                    {nintendoSwitchItems?.services
                      .filter((service) => service.service_type === "upgrade")
                      .map((service, index) => (
                        <Accordion
                          key={index}
                          type="single"
                          collapsible
                          defaultValue={
                            service.hash === hash
                              ? `upgrade-${service.hash}`
                              : undefined
                          }
                        >
                          <AccordionItem value={`upgrade-${service.hash}`}>
                            <AccordionTrigger>
                              {service.service}
                            </AccordionTrigger>
                            <AccordionContent>
                              <Card>
                                <CardContent>
                                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    <Image
                                      src={service.image}
                                      width={400}
                                      height={400}
                                      className="mb-3 border rounded-lg"
                                      alt={service.title}
                                    />
                                    {service.sections?.map(
                                      (section, secIndex) => (
                                        <div key={secIndex} className="mb-4">
                                          <h4 className="text-lg font-semibold mb-3 text-brand-700 border-b border-brand-100 pb-2">
                                            {section.heading}
                                          </h4>
                                          {Array.isArray(section.content) ? (
                                            <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm md:text-base">
                                              {section.content.map(
                                                (item, i) => (
                                                  <li key={i}>{item}</li>
                                                )
                                              )}
                                            </ul>
                                          ) : (
                                            <p className="text-gray-700 text-sm md:text-base">
                                              {section.content}
                                            </p>
                                          )}
                                        </div>
                                      )
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ))}
                  </TabsContent>
                </Tabs>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
