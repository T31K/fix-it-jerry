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
        <div className="row g-0 grid-divider dark gapy-2 md:gap-y-12">
          {repairItems.map((item, index) => (
            <div
              key={index}
              className="col-6 col-lg-3"
              data-wow-delay={`${index * 0.2}s`}
            >
              <div className="px-2 md:p-40 py-0 h-100 mb-sm-30">
                {/* Device Icon and Title */}
                <Image
                  src={item.imgSrc}
                  width={138}
                  height={138}
                  className="mb-3 "
                  alt={item.title}
                />
                <div className="flex flex-col items-center md:items-start mb-2 md:mb-4">
                  <p className="fw-bold !m-0 !mr-2 text-xl text-green-600">
                    {item.title}
                  </p>
                </div>
                {/* List all services with their respective icons */}
                <ul className="mb-0 !p-0 ">
                  {item.services.map((srv, i) => {
                    const IconComponent = serviceTypeIcons[srv.service_type];
                    return (
                      <li key={i} className="d-flex align-items-center">
                        {IconComponent && (
                          <IconComponent size={20} className="me-2" />
                        )}
                        <a
                          href={srv.slug || "#"}
                          className="hover:underline text-gray-700 text-md md:text-lg md:mb-0"
                        >
                          {srv.service}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                {/* Read More Link */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
