"use client";
import { repairItems } from "@/data";
import {
  IconWreckingBall,
  IconRefresh,
  IconArrowUp,
  IconDownload,
} from "@tabler/icons-react";
import Image from "next/image";
import { WordRotate } from "@/components/magicui/word-rotate";
import { IconPlus } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";

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
                className="wow fadeInUp text-center !-mb-1"
                data-wow-delay=".2s"
              >
                Devices We
              </h2>
              <WordRotate
                className="leading-[30px] text-[#C6E76C] -400 text-center"
                words={["Repair", "Replace", "Upgrade", "Install"]}
              />
            </div>
          </div>
        </div>

        {/* Devices Grid */}
        <div className="row g-4 px-4">
          {repairItems.map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-4 col-lg-3 mb-4"
              data-wow-delay={`${index * 0.2}s`}
            >
              <div className="bg-green-100/20 border-2 border-gray-800/20 rounded-2xl p-4 h-100 text-center">
                {/* Device Icon and Title */}
                <Image
                  src={item.imgSrc}
                  width={138}
                  height={138}
                  className="mb-3 mx-auto"
                  alt={item.title}
                />
                <div className="flex flex-col items-center mb-2 md:mb-4">
                  <p className="fw-bold !m-0 !mr-2 text-lg md:text-xl text-green-600">
                    {item.title}
                  </p>
                </div>
                {/* List all services with their respective icons */}
                <ul className="mb-0 !p-0 min-h-24 list-none text-left mx-auto w-fit">
                  {item.services.filter(srv => srv.popular).map((srv, i) => {
                    const IconComponent = serviceTypeIcons[srv.service_type];
                    return (
                      <li key={i} className="flex items-center mb-2">
                        {IconComponent && (
                          <IconComponent size={16} className="mr-2" />
                        )}
                        <a
                          href={srv.slug || `/devices/${item.title.toLowerCase()}?hash=${srv.hash}`}
                          className="hover:underline text-gray-700 text-md md:text-lg truncate sm:overflow-visible sm:whitespace-normal sm:text-clip"
                          title={srv.service}
                        >
                          {srv.service.split("/")[0]}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                {/* Read More Link */}
                <div className="flex justify-end mt-6">
                  <a
                    href={`/devices/${item.title.toLowerCase().replace(/\s/g, '_')}`}
                    className="hover:underline text-gray-700 text-md md:text-lg flex items-center rounded-full bg-green-500/70 text-white px-3 py-1"
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
