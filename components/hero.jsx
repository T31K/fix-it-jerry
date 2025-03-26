"use client";
import { reviews, features } from "@/data";
import Image from "next/image";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import BookingForm from "./BookingForm";

export default function Services() {
  return (
    <section className="section-dark text-light relative z-1000 min-h-screen">
      <div className="relative w-full">
        <div className="swiper h-full">
          <div className="swiper-wrapper">
            {[5].map((num, index) => (
              <div key={index} className="swiper-slide">
                <div
                  className="swiper-inner min-h-screen"
                  data-bgimage={`url(images/slider/hero.webp)`}
                >
                  <div className="sw-caption py-8 md:py-12">
                    <div className="container mx-auto px-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        <div className="w-full md:w-5/12 pt-20 md:pt-0">
                          <div className="subtitle s2 mb-4">
                            Number 1 Device Repair in KL
                          </div>
                          <h1 className="slider-title !font-bold text-3xl md:text-7xl">
                            Fast, Reliable Device Repairs Made
                            <LineShadowText
                              className="italic text-[#C6E76C]"
                              shadowColor={"white"}
                            >
                              Easy
                            </LineShadowText>
                          </h1>
                          <p className="slider-teaser">
                            {`We fix phones, tablets and laptop at an affordable
                            price with quality service guaranteed.`}
                          </p>
                          <div className="spacer-10"></div>
                        </div>
                        <div className="w-full md:w-6/12 pb-8 md:pb-0">
                          <BookingForm />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay op-7"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
}
