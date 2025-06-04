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
import { Card } from "@/components/ui/card";

function ServiceContent({ service }) {
  return (
    <div className="px-4 pb-6 h-[70vh] overflow-y-auto special-scrollbar">
      <Image
        src={service.image}
        width={200}
        height={200}
        alt={service.service}
        className="rounded mb-4 w-full hidden md:block object-cover"
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

export default function SmartphoneServicesClient({ smartphoneItem }) {
  const [openDrawer, setOpenDrawer] = useState(null);
  const [openDialog, setOpenDialog] = useState(null);

  const handleDrawerOpenChange = (isOpen) => {
    if (!isOpen) {
      setOpenDrawer(null);
    }
  };

  const handleDialogOpenChange = (isOpen) => {
    if (!isOpen) {
      setOpenDialog(null);
    }
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
                alt={service.service} // Use service.service for alt text
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
                alt={service.service} // Use service.service for alt text
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
    <>
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

      <Drawer open={!!openDrawer} onOpenChange={handleDrawerOpenChange}>
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

      <Dialog open={!!openDialog} onOpenChange={handleDialogOpenChange}>
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
    </>
  );
}
