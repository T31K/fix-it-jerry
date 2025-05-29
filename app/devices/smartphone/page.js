"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import InnerSideBar from "@/components/InnerSideBar";
import { repairItems } from "@/data";
import { Card } from "@/components/ui/card";

export default function Page() {
  const smartphoneItem = repairItems.find((item) => item.title === "Smartphone");
  const [openDrawer, setOpenDrawer] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = () => {
    setOpenDrawer(null);
    setOpenDialog(false);
  };

  const renderGrid = (type) => {
    const filtered = smartphoneItem?.services.filter((s) => s.service_type === type) || [];

    return (
      <>
        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {filtered.map((service, idx) => (
            <Card
              key={idx}
              className="cursor-pointer rounded-lg p-2 hover:shadow transition"
              onClick={() => setOpenDrawer(service)}
            >
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
            </Card>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {filtered.map((service, idx) => (
            <div
              key={idx}
              className="cursor-pointer border rounded-xl p-3 hover:shadow-lg transition"
              onClick={() => setOpenDialog(service)}
            >
              <Image
                src={service.image}
                width={400}
                height={400}
                alt={service.title}
                className="rounded mb-3 object-cover "
              />
              <p className="text-base font-semibold text-brand-700 text-center">
                {service.service}
              </p>
            </div>
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
          <img
            src="/images/background/4.webp"
            className="jarallax-img"
            alt=""
          />
          <div className="container relative z-2">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle">Fix It Jerry</div>
                <h1 className="md:whitespace-nowrap !text-[24px] md:!text-[48px]">
                  Smartphone Services
                </h1>
                <p className="text-gray-700 max-w-3xl !text-[16px] md:!text-[20px] text-center mt-3">
                  {smartphoneItem?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="crumb-wrapper">
            <ul className="crumb">
              <li><a href="/">Home</a></li>
              <li><a href="/devices">Devices</a></li>
              <li><a href="/services/smartphone">Smartphone</a></li>
            </ul>
          </div>
          <div className="sw-overlay"></div>
        </section>

        <section className="py-8">
          <div className="container">
            <div className="row g-4">
              <InnerSideBar activeLink="smartphone" />
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

      {/* Mobile Drawer */}
      <Drawer open={!!openDrawer} onOpenChange={handleClose}>
        <DrawerContent>
          {openDrawer && (
            <>
              <DrawerHeader>
                <DrawerTitle>{openDrawer.service}</DrawerTitle>
              </DrawerHeader>
              <ServiceContent service={openDrawer} />
            </>
          )}
        </DrawerContent>
      </Drawer>

      <Dialog open={!!openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-3xl">
          {openDialog && (
            <>
              <DialogHeader>
                <DialogTitle>{openDialog.service}</DialogTitle>
              </DialogHeader>
              <ServiceContent service={openDialog} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ServiceContent({ service }) {
  return (
    <div className="px-4 pb-6 h-[70vh] overflow-y-auto special-scrollbar">
      <Image
        src={service.image}
        width={200}
        height={200}
        alt={service.title}
        className="rounded mb-4 w-full hidden md:block"
      />
      {service.sections?.map((section, idx) => (
        <div key={idx} className="mb-4">
          <h4 className="text-xs font-semibold mb-2 text-brand-700 border-b border-brand-100 pb-2">
            {section.heading}
          </h4>
          {Array.isArray(section.content) ? (
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-700">{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}
