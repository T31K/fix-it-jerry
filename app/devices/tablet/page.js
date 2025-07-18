"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import InnerSideBar from "@/components/InnerSideBar";
import { repairItems } from "@/data";
import { Card } from "@/components/ui/card";

export default function Page() {
  const tabletItem = repairItems.find((item) => item.title === "Tablet");

  const renderGrid = (type) => {
    const filtered = tabletItem?.services.filter((s) => s.service_type === type) || [];

    return (
      <>
        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {filtered.map((service, idx) => (
            <Link key={idx} href={`/devices/tablet/${service.hash}`}>
              <Card className="cursor-pointer rounded-lg p-2 hover:shadow transition">
                <Image
                  src={service.image}
                  width={400}
                  height={400}
                  alt={service.title}
                  className="rounded mb-2 object-cover"
                />
                <p className="text-xs font-semibold text-brand-700 text-center !m-0">
                  {service.service}
                </p>
                {service.popular && (
                  <div className="inline-block bg-brand-600 text-white px-2 py-1 rounded-full text-xs font-medium mt-1">
                    Popular
                  </div>
                )}
              </Card>
            </Link>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {filtered.map((service, idx) => (
            <Link key={idx} href={`/devices/tablet/${service.hash}`}>
              <div className="cursor-pointer border rounded-xl p-3 hover:shadow-lg transition">
                <Image
                  src={service.image}
                  width={400}
                  height={400}
                  alt={service.title}
                  className="rounded mb-3 object-cover"
                />
                <p className="text-base font-semibold text-brand-700 text-center">
                  {service.service}
                </p>
                {service.popular && (
                  <div className="inline-block bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
                    Popular Service
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

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
              <li><a href="/devices/tablet">Tablet</a></li>
            </ul>
          </div>
          <div className="sw-overlay"></div>
        </section>

        <section className="py-8 h-[100vh]">
          <div className="container">
            <div className="row g-4">
              <InnerSideBar activeLink="tablet" />
              <div className="col-lg-9">
                <Tabs defaultValue="repair" className="w-full">
                  <TabsList className="mb-6 flex whitespace-nowrap">
                    <TabsTrigger value="repair">Repairs</TabsTrigger>
                    <TabsTrigger value="replacement">Replacement</TabsTrigger>
                    <TabsTrigger value="upgrade">Upgrades</TabsTrigger>
                  </TabsList>

                  <TabsContent value="repair">{renderGrid("repair")}</TabsContent>
                  <TabsContent value="replacement">{renderGrid("replacement")}</TabsContent>
                  <TabsContent value="upgrade">{renderGrid("upgrade")}</TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
