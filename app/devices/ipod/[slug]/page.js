import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import InnerSideBar from "@/components/InnerSideBar";
import BookingForm from "@/components/BookingForm";
import { repairItems } from "@/data";

export async function generateStaticParams() {
  const ipodItem = repairItems.find((item) => item.title === "iPod");

  return ipodItem?.services.map((service) => ({
    slug: service.hash,
  })) || [];
}

export async function generateMetadata({ params }) {
  const ipodItem = repairItems.find((item) => item.title === "iPod");
  const service = ipodItem?.services.find((s) => s.hash === params.slug);

  if (!service) {
    return {
      title: "Service Not Found | Fix It Jerry",
    };
  }

  return {
    title: service.title,
    description: service.meta_description,
  };
}

export default function IpodServicePage({ params }) {
  const ipodItem = repairItems.find((item) => item.title === "iPod");
  const service = ipodItem?.services.find((s) => s.hash === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div id="wrapper">
      <Navbar />
      <div id="content" className="no-top no-bottom">
        <div id="top"></div>
        <section
          id="subheader"
          className="relative text-white bg-fixed bg-cover bg-center bg-no-repeat min-h-[400px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/background/4.webp')`
          }}
        >
          <div className="container relative z-2">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="subtitle">Fix It Jerry</div>
                <h1 className="md:whitespace-nowrap !text-[24px] md:!text-[48px]">
                  {service.service}
                </h1>
                <p className="text-gray-200 max-w-3xl !text-[16px] md:!text-[20px] text-center mt-3">
                  Professional iPod {service.service.toLowerCase()} service
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/devices">Devices</a></li>
              <li><a href="/devices/ipod">iPod</a></li>
              <li><a href={`/devices/ipod/${service.hash}`}>{service.service}</a></li>
            </ul>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <div className="row g-4">
              <InnerSideBar activeLink="ipod" />
              <div className="col-lg-9">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex flex-col items-start gap-6">
                    <Image
                      src={service.image}
                      width={300}
                      height={300}
                      alt={service.service}
                      className="rounded-lg max-w-sm object-cover"
                    />
                    {service.popular && (
                      <div className="inline-block bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular Service
                      </div>
                    )}
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {service.service}
                    </h1>
                    <p className="text-gray-600 mb-6">
                      {service.meta_description}
                    </p>

                    <div className="space-y-6 w-full">
                      {service.sections?.map((section, idx) => (
                        <div key={idx} className="border-b border-gray-200 pb-4 last:border-b-0">
                          <h3 className="text-lg font-semibold mb-3 text-brand-700">
                            {section.heading}
                          </h3>
                          {Array.isArray(section.content) ? (
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                              {section.content.map((item, i) => (
                                <li key={i} className="leading-relaxed">{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-700 leading-relaxed">{section.content}</p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 w-full">
                      <BookingForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
