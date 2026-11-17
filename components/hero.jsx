"use client";
import { useEffect, useState } from "react";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import BookingForm from "./BookingForm";

// Desktop (Tailwind lg) and no reduced-motion preference.
const VIDEO_QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

export default function Services() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(VIDEO_QUERY);
    const update = () => setShowVideo(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="hero-container min-h-screen relative overflow-hidden bg-[url('/images/slider/hero_2.webp')] bg-cover bg-center bg-no-repeat">
      {/* Looping clip of the figurines fixing the board. Desktop only: the <video> is
          never rendered on smaller screens, so mobile doesn't download it and keeps the still. */}
      {showVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          poster="/images/slider/hero_2.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 container mx-auto px-4 md:py-10 py-8 main-hero">
        <div className="grid lg:grid-cols-2 md:gap-8 gap-4 items-start lg:items-center !h-auto">
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
