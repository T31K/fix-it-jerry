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
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Page({ searchParams }) {
  const tabletItem = repairItems.find((item) => item.title === "Tablet");
  const hash = searchParams?.hash || "";
  const targetService = tabletItem?.services.find((service) => service.hash === hash);
  const activeTab = targetService?.service_type || "repair";

  const renderAccordionItems = (type) => (
    <Accordion type="single" collapsible defaultValue={`${type}-${hash}`}>
      {tabletItem?.services
        .filter((service) => service.service_type === type)
        .map((service, index) => (
          <AccordionItem key={index} value={`${type}-${service.hash}`}>
            <AccordionTrigger>{service.service}</AccordionTrigger>
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
                    {service.sections?.map((section, secIndex) => (
                      <div key={secIndex} className="mb-4">
                        <h4 className="text-lg font-semibold mb-3 text-brand-700 border-b border-brand-100 pb-2">
                          {section.heading}
                        </h4>
                        {Array.isArray(section.content) ? (
                          <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm md:text-base">
                            {section.content.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-700 text-sm md:text-base">
                            {section.content}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );

  return (
    <div id="wrapper">
      <Navbar />
      <div id="content" className="no-top no-bottom">
        <div id="top"></div>
        <section id="subheader" className="relative jarallax text-light">
          <div className="de-gradient-edge-top"></div>
          <img src="/images/background/4.webp" className="jarallax-img" alt="" />
          <div className="container relative z-2">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle">Fix It Jerry</div>
                <h1 className="md:whitespace-nowrap !text-[24px] md:!text-[48px]">Tablet Services</h1>
                <p className="text-gray-700 max-w-3xl !text-[16px] md:!text-[20px] text-center mt-3">
                  {tabletItem?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/devices">Devices</a></li>
              <li><a href="/services/tablet">Tablet</a></li>
            </ul>
          </div>
          <div className="sw-overlay"></div>
        </section>

        <section>
          <div className="container">
            <div className="row g-4">
              <InnerSideBar activeLink="tablet" />
              <section className="col-lg-9 !py-0">
                <Tabs defaultValue={activeTab} className="w-full">
                  <TabsList className="mb-6 md:mb-8 flex whitespace-nowrap">
                    <TabsTrigger value="repair">Repairs</TabsTrigger>
                    <TabsTrigger value="replacement">Replace</TabsTrigger>
                    <TabsTrigger value="upgrade">Upgrades</TabsTrigger>
                  </TabsList>

                  <TabsContent value="repair">
                    {renderAccordionItems("repair")}
                  </TabsContent>
                  <TabsContent value="replacement">
                    {renderAccordionItems("replacement")}
                  </TabsContent>
                  <TabsContent value="upgrade">
                    {renderAccordionItems("upgrade")}
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
