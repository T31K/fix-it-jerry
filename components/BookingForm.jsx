"use client";
import axios from "axios";
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
import { IconBrandWhatsapp } from "@tabler/icons-react";

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
    "I don't know",
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
  desktop: [
    "Apple iMac",
    "Dell",
    "HP",
    "Lenovo",
    "ASUS",
    "Acer",
    "Custom Built",
    "Other",
  ],
  ipad: [
    "iPad Pro",
    "iPad Air",
    "iPad Mini",
    "iPad (Standard)",
    "Other",
  ],
  applewatch: [
    "Apple Watch Series 9",
    "Apple Watch Series 8",
    "Apple Watch SE",
    "Apple Watch Ultra",
    "Apple Watch Ultra 2",
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
  others: [
    "Others",
  ],
};

export default function BookingForm({showTitle = true, defaultColor = true}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    deviceBrand: "",
    issue: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/fij/booking`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        alert("Booking submitted!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          deviceType: "",
          deviceBrand: "",
          issue: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Failed to send booking.");
    }
  };

  return (
    <Card className={`w-full max-w-[500px] p-3 sm:p-6 ${defaultColor ? "bg-[#4d6c77]" : "bg-white"} !rounded-4xl relative font-manrope !border-[#4d6c77] font-semibold text-white`}>
      <form onSubmit={handleSubmit} className="space-y-4 !border-none">
      {showTitle && (
        <>
          <div className="flex items-center gap-x-2">
          <Wrench size={24} />
          <h2 className={`text-xl sm:text-2xl font-bold ${defaultColor ? "text-white" : "!text-slate-700"} !m-0`}>
            Book a repair now!
          </h2>
        </div>
        <p className="!m-0 flex items-center gap-1 text-xs md:text-sm">
          {`We've fixed`}
          <span className="inline-block min-w-[4ch] text-right font-bold">
            <CountUp end={3208} duration={1.5} separator="," />
          </span>
          {` devices – let's make yours next!`}
        </p>
        <p className={`text-xs ${defaultColor ? "text-white/70" : "text-slate-700"} !m-0`}>Get a free quote</p>
        </>
)}
        <div className="space-y-2">
          <Label  className={`font-bold ${defaultColor ? "text-white" : "!text-slate-700"}`}>
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            className="bg-white !mt-0 text-slate-700 text-sm md:text-md"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label className={`font-bold ${defaultColor ? "text-white" : "!text-slate-700"}`}>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            className="bg-white !mt-0 text-slate-700 text-sm md:text-md"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-2">
          <Label className={`font-bold ${defaultColor ? "text-white" : "!text-slate-700"}`}>
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="bg-white !mt-0 text-slate-700 text-sm md:text-md"
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

        <div className="space-y-2">
          <Label className={`font-bold ${defaultColor ? "text-white" : "!text-slate-700"}`}>
            Device Type
          </Label>
          <Select
            value={formData.deviceType}
            onValueChange={(value) =>
              setFormData({ ...formData, deviceType: value, deviceBrand: "" })
            }
            className="bg-white text-slate-700 text-sm md:text-md"
          >
            <SelectTrigger className="bg-white text-slate-700">
              <SelectValue placeholder="Select device type" />
            </SelectTrigger>
            <SelectContent className="bg-white z-[9999] text-slate-700  ">
              <SelectItem value="phone">Smartphone</SelectItem>
              <SelectItem value="tablet">Tablet</SelectItem>
              <SelectItem value="laptop">Laptop</SelectItem>
              <SelectItem value="desktop">Desktop</SelectItem>
              <SelectItem value="ipad">iPad</SelectItem>
              <SelectItem value="applewatch">Apple Watch</SelectItem>
              <SelectItem value="airpods">Airpods</SelectItem>
              <SelectItem value="switch">Nintendo Switch</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className={`font-bold ${defaultColor ? "text-white" : "!text-slate-700"}`}>
            Device Brand & Model
          </Label>
          <Select
            value={formData.deviceBrand}
            disabled={!formData.deviceType}
            onValueChange={(value) =>
              setFormData({ ...formData, deviceBrand: value })
            }
            className="bg-white text-slate-700"
          >
            <SelectTrigger className="bg-white text-slate-700">
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent className="bg-white z-[9999] text-slate-700">
              {deviceBrands[formData.deviceType]?.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className={`font-bold ${defaultColor ? "text-white" : "!text-slate-700"}`}>
            Describe the Issue
          </Label>
          <Textarea
            id="issue"
            className="bg-white !mt-0 text-slate-700 resize-none text-sm md:text-md"
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
        <div className="flex justify-end">
          <Button
            type="submit"
            className="w-fit text-slate-800 font-semibold bg-[#C6E76C] hover:bg-[#C6E76C] rounded-full"
          >
            <Wrench size={24} />
            Fix my device!
          </Button>
        </div>
      </form>
    </Card>
  );
}
