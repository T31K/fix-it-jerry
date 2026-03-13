"use client";
import { repairItems } from "@/data";
import {
  IconWreckingBall,
  IconRefresh,
  IconArrowUp,
  IconDownload,
  IconChevronRight,
} from "@tabler/icons-react";
import Image from "next/image";
import { HyperText } from "@/components/magicui/hyper-text";
import { useState, useEffect } from "react";

const WORDS = ["Repair", "Replace", "Upgrade", "Install"];

function CyclingHyperText({ className }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <HyperText
      key={index}
      className={className}
      animateOnHover={false}
      startOnView={false}
      duration={600}
    >
      {WORDS[index]}
    </HyperText>
  );
}

// Mapping of service types to Tabler icons
const serviceTypeIcons = {
  repair: IconWreckingBall,
  replacement: IconRefresh,
  upgrade: IconArrowUp,
  installation: IconDownload,
};
export default function Services() {
  return (
    <section className="py-12">
      <div className="container">
        {/* Section Header */}
        <div className="row g-4 mb-2 justify-content-center">
          <div className="col-lg-5 text-center">
            <div className="subtitle s2 wow fadeInUp mb-2">Top Reasons</div>
            <div className="flex flex-col items-center w-full">
              <h2
                className="wow fadeInUp text-center mb-0 mt-2"
                data-wow-delay=".2s"
              >
                Devices We
              </h2>
              <CyclingHyperText className="text-[#C6E76C] text-center mb-6" />
            </div>
          </div>
        </div>

        {/* Devices Grid */}
        <div className="row g-4 md:px-4">
          {repairItems.map((item, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-3 !my-1 md:mb-4 px-1 md:px-4"
              data-wow-delay={`${index * 0.2}s`}
            >
              <div className="bg-green-100/20 border-2 border-gray-800/20 rounded-2xl p-2 md:p-4 text-center">
                {/* Device Icon and Title */}
                <Image
                  src={item.imgSrc}
                  width={240}
                  height={240}
                  className="mb-0 mx-auto md:mb-3 w-16 h-16 md:w-36 md:h-36"
                  alt={item.title}
                />
                <div className="flex flex-col items-center mb-3 md:mb-4">
                  <a href={`/devices/${item.title.toLowerCase().replace(/\s/g, '_')}`} className="fw-bold !m-0 !mr-2 text-sm md:text-xl text-green-600 whitespace-nowrap hover:underline">
                    {item.title}
                  </a>
                </div>
                {/* List all services with their respective icons */}
                <ul className="mb-0 !p-0 min-h-[70px] md:min-h-24 list-none text-left mx-auto w-fit">
                  {item.services.slice(0, 5).map((srv, i) => {
                    const IconComponent = serviceTypeIcons[srv.service_type];
                    return (
                      <li key={i} className="flex items-center mb-2">
                        {IconComponent && (
                          <IconComponent size={16} className="mr-2" />
                        )}
                        <a
                          href={srv.slug || `/devices/${item.title.toLowerCase().replace(/\s/g, '_')}/${srv.hash}`}
                          className="hover:underline text-gray-700 text-sm md:text-lg truncate sm:overflow-visible sm:whitespace-normal sm:text-clip"
                          title={srv.service}
                        >
                          {srv.service.split(/&|\//)[0]}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                {/* Read More Link */}
                <div className="flex justify-end mt-6 gap-2 flex-wrap">
                  <a
                    href={`/devices/${item.title.toLowerCase().replace(/\s/g, '_')}`}
                    className="hover:underline text-gray-700 text-sm md:text-lg flex items-center rounded-full bg-green-500/70 text-white px-3 py-1"
                  >
                    See All
                    <IconChevronRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
