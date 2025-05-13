"use client";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import BookingForm from "./BookingForm";

export default function Services() {
  return (
    <section className="hero-container min-h-screen relative bg-[url('/images/slider/hero.webp')] bg-cover bg-center bg-no-repeat">
      <div className="relative z-10 container mx-auto px-4 md:py-24 py-8 main-hero">
        <div className="grid lg:grid-cols-2 md:gap-8 gap-4 items-start lg:items-center">
          <div className="">
            <div className="text-sm sm:text-base text-white mb-2 sm:mb-4">
              Number 1 Device Repair in KL
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-3 sm:mb-4">
              Fast, Reliable Device Repairs Made
              <LineShadowText
                className="italic text-[#C6E76C]"
                shadowColor={"white"}
              >
                Easy
              </LineShadowText>
            </h1>
            <p className="text-white text-sm sm:text-lg max-w-xl m-0 md:mb-2">
              We fix phones, tablets and laptop at an affordable price with
              quality service guaranteed.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
