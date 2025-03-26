"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Wrench } from "lucide-react";

const deviceBrands = {
  phone: [
    "Apple iPhone",
    "Samsung Galaxy",
    "Google Pixel",
    "Huawei",
    "Xiaomi",
    "OPPO",
    "Vivo",
    "OnePlus",
    "Other",
  ],
  tablet: [
    "Apple iPad",
    "Samsung Galaxy Tab",
    "Microsoft Surface",
    "Lenovo Tab",
    "Huawei MatePad",
    "Other",
  ],
  laptop: [
    "Apple MacBook",
    "Dell",
    "HP",
    "Lenovo",
    "ASUS",
    "Acer",
    "Microsoft Surface",
    "MSI",
    "Other",
  ],
  airpods: [
    "AirPods 2nd Gen",
    "AirPods 3rd Gen",
    "AirPods Pro",
    "AirPods Pro 2nd Gen",
    "AirPods Max",
    "Other",
  ],
  switch: [
    "Nintendo Switch",
    "Nintendo Switch Lite",
    "Nintendo Switch OLED",
    "Other",
  ],
  tv: ["Samsung", "LG", "Sony", "TCL", "Philips", "Hisense", "Other"],
};

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    deviceBrand: "",
    issue: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Card className="w-full max-w-[500px] p-4 sm:p-6 bg-[#4d6c77] !rounded-2xl sm:!rounded-4xl relative font-manrope font-semibold text-white mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-x-2">
          <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 !m-0">
            Book a Repair
          </h2>
        </div>
        <p className="!m-0 flex items-center gap-1 text-xs md:text-sm whitespace-nowrap sm:text-base">
          {`We've fixed`}
          <span className="inline-block min-w-[4ch] text-right font-bold text-[#C6E76C]">
            <CountUp end={1491} duration={2.5} separator="," />
          </span>
          {`devices – let's make yours next!`}
        </p>

        <div className="space-y-1.5 sm:space-y-2">
          <Label htmlFor="name" className="font-bold text-sm sm:text-base">
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            className="bg-white !mt-0 text-slate-700 h-9 sm:h-10 text-sm sm:text-base"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label htmlFor="email" className="font-bold text-sm sm:text-base">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            className="bg-white !mt-0 text-slate-700 h-9 sm:h-10 text-sm sm:text-base"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label htmlFor="phone" className="font-bold text-sm sm:text-base">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="bg-white !mt-0 text-slate-700 h-9 sm:h-10 text-sm sm:text-base"
            value={formData.phone}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          <Label
            htmlFor="deviceType"
            className="font-bold text-sm sm:text-base"
          >
            Device Type
          </Label>
          <Select
            className="!text-slate-700"
            value={formData.deviceType}
            onValueChange={(value) =>
              setFormData({ ...formData, deviceType: value, deviceBrand: "" })
            }
          >
            <SelectTrigger className="bg-white !text-slate-700 h-9 sm:h-10 text-sm sm:text-base">
              <SelectValue placeholder="Select device type" />
            </SelectTrigger>
            <SelectContent className="bg-white z-[9999] text-sm sm:text-base">
              <SelectItem value="phone">Smartphone</SelectItem>
              <SelectItem value="tablet">Tablet</SelectItem>
              <SelectItem value="laptop">Laptop</SelectItem>
              <SelectItem value="airpods">Airpods</SelectItem>
              <SelectItem value="switch">Nintendo Switch</SelectItem>
              <SelectItem value="tv">TV</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {formData.deviceType && (
          <div className="space-y-1.5 sm:space-y-2">
            <Label
              htmlFor="deviceBrand"
              className="font-bold text-sm sm:text-base"
            >
              Device Brand & Model
            </Label>
            <Select
              value={formData.deviceBrand}
              onValueChange={(value) =>
                setFormData({ ...formData, deviceBrand: value })
              }
            >
              <SelectTrigger className="bg-white !text-slate-700 h-9 sm:h-10 text-sm sm:text-base">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent className="bg-white z-[9999] text-sm sm:text-base">
                {deviceBrands[formData.deviceType]?.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-1.5 sm:space-y-2">
          <Label htmlFor="issue" className="font-bold text-sm sm:text-base">
            Describe the Issue
          </Label>
          <Textarea
            id="issue"
            className="bg-white !mt-0 text-slate-700 resize-none min-h-[80px] text-sm sm:text-base"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            placeholder="Please describe the problem with your device"
            value={formData.issue}
            onChange={(e) =>
              setFormData({ ...formData, issue: e.target.value })
            }
            required
          />
        </div>

        <div className="flex justify-end pt-2">
          <Button
            type="submit"
            className="w-full sm:w-fit text-slate-800 font-semibold bg-[#C6E76C] hover:bg-[#C6E76C] rounded-full text-sm sm:text-base px-6"
          >
            Fix my device!
          </Button>
        </div>
      </form>
    </Card>
  );
}
