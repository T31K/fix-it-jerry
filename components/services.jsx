"use client";
import { repairItems } from "@/data";
import {
  IconWreckingBall,
  IconRefresh,
  IconArrowUp,
  IconDownload,
} from "@tabler/icons-react";
import Image from "next/image";

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
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Devices We Repair
            </h2>
          </div>
        </div>

        {/* Devices Grid */}
        <div className="row g-0 grid-divider dark gap-y-12">
          {repairItems.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 wow fadeInRight"
              data-wow-delay={`${index * 0.2}s`}
            >
              <div className="p-40 py-0 h-100 mb-sm-30">
                {/* Device Icon and Title */}
                <Image
                  src={item.imgSrc}
                  width={138}
                  height={138}
                  className="mb-3"
                  alt={item.title}
                />
                <p className="fw-bold mb-4">{item.title}</p>
                {/* List all services with their respective icons */}
                <ul className="mb-0 !p-0">
                  {item.services.map((srv, i) => {
                    const IconComponent = serviceTypeIcons[srv.service_type];
                    return (
                      <li key={i} className="d-flex align-items-center">
                        {IconComponent && (
                          <IconComponent size={20} className="me-2" />
                        )}
                        <span>{srv.service}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Read More Link */}
                <a
                  className="btn-plus mt-3 d-inline-block"
                  href="single-repair.html"
                >
                  <i className="fa fa-plus"></i>
                  <span>Read more</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
