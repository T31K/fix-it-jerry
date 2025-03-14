"use client";
import { reviews, features } from "@/data";
import Image from "next/image";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

export default function Services() {
  return (
    <section className="section-dark text-light no-top no-bottom position-relative z-1000">
      <div className="v-center">
        <div className="swiper">
          <div className="swiper-wrapper">
            {[5].map((num, index) => (
              <div key={index} className="swiper-slide">
                <div
                  className="swiper-inner"
                  data-bgimage={`url(images/slider/hero.webp)`}
                >
                  <div className="sw-caption">
                    <div className="container">
                      <div className="row gx-5 align-items-center justify-content-between">
                        <div className="spacer-double"></div>
                        <div className="col-lg-5 mb-sm-30">
                          <div className="subtitle s2 mb-4">
                            Number 1 Device Repair in KL
                          </div>
                          <h1 className="slider-title !font-bold !text-7xl">
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
                          <a
                            className="btn-main btn-line fx-slide mb10 mb-3"
                            href="book-repair.html"
                          >
                            <span>Book a Repair</span>
                          </a>
                        </div>
                        <div className="col-lg-6 sm-hide">
                          <img
                            src={`images/slider/${
                              index === 0 ? "laptop" : "bulb"
                            }.webp`}
                            className="w-100 p-lg-5 p-0"
                            alt=""
                          />
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
