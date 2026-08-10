"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";

// Swiper base + module styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// yet-another-react-lightbox styles
import "yet-another-react-lightbox/styles.css";

/* ------------------------------------------------------------------ */
/*  NiceSelect — reproduces the original template's nice-select2       */
/*  behavior (dropdown list, arrow rotation, selected state) using     */
/*  React state + the `.nice-select` CSS already added to globals.css. */
/* ------------------------------------------------------------------ */
interface NiceSelectProps {
  options: string[];
  placeholder?: string;
}

function NiceSelect({ options, placeholder }: NiceSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div
      className={`nice-select ${open ? "open" : ""}`}
      onClick={() => setOpen((o) => !o)}
    >
      <span className="current">{selected || placeholder}</span>
      <div className="nice-select-dropdown">
        <ul className="list">
          {options.map((opt) => (
            <li
              key={opt}
              className={`option ${selected === opt ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelected(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Banner — homepage hero slider + pinned select area                 */
/*  Reproduced from quarter-rtl/index.html (banner section).           */
/* ------------------------------------------------------------------ */
export default function Banner() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      {/* ==================== banner section ==================== */}
      <section>
        <div className="hero hero-primary overflow-hidden relative z-10">
          {/* Swiper */}
          <div className="hero-slider-container swiper-container relative">
            <Swiper
              className="primary-slider"
              modules={[Navigation, Pagination, EffectFade]}
              slidesPerView={1}
              effect="fade"
              loop
              speed={800}
              navigation
              pagination={{ clickable: true }}
            >
              {/* Hero 1 */}
              <SwiperSlide>
                <div className="relative z-0 py-100px 4xl:min-h-[780px] overflow-hidden flex items-center bg-section-bg-1">
                  <div className="container w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-30px">
                      {/* banner Left */}
                      <div className="slide-animation">
                        <p className="text-sm md:text-15px lg:text-base text-heading-color font-bold mb-5 animate__animated">
                          <i className="fas fa-home text-secondary-color ml-1" />
                          وكالة عقارات
                        </p>
                        <h1 className="text-3xl md:text-40px lg:text-50px 4xl:text-65px leading-30px md:leading-10 lg:leading-50px 4xl:leading-65px font-bold mb-5 animate__animated">
                          <span className="leading-30px md:leading-10 lg:leading-50px 4xl:leading-65px">
                            ابحث عن حلمك <br />
                            البيت من قبلنا
                          </span>
                        </h1>
                        <p className="text-sm lg:text-base mb-5 max-w-450px rtl:pr-15px rtl:xl:pr-30px ltr:border-l rtl:border-r border-border-color-14 animate__animated">
                          <span className="leading-25px lg:leading-1.8">
                            لوريم إيبسوم جزر معزز الخصومات. النوم والألم؟لوريم
                            إيبسوم جزر معزز الخصومات. النوم والألم؟
                          </span>
                        </p>
                        <div className="mt-5 lg:mt-10 mb-30px xl:mb-0 animate__animated">

                          <h5 className="capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block ml-15px">
                            <span className="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-primary-color z-1 group-hover:w-0 transition-all duration-300" />
                            <a
                              href="about.html"
                              className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
                            >
                              استفسر
                            </a>
                          </h5>
                          <div className="inline-block">
                            <div>
                              <a
                                className="glightbox w-60px h-60px text-center text-sm lg:text-base text-secondary-color shadow-box-shadow-2 rounded-full bg-white flex items-center justify-center"
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setLightboxOpen(true);
                                }}
                              >
                                <i className="icon-play ltn__secondary-color" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* banner right */}
                      <div className="4xl:absolute left-[60px] xl:left-[150px] bottom-[100px] 4xl:h-[70%] 4xl:w-[45%]">
                        <Image
                          className="4xl:h-full 4xl:mr-auto"
                          src="/images/slider/21.png"
                          alt=""
                          width={600}
                          height={600}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Hero 2 */}
              <SwiperSlide>
                <div className="relative z-0 py-100px 4xl:min-h-[780px] overflow-hidden flex items-center bg-section-bg-1">
                  <div className="container w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* banner Left */}
                      <div className="lg:col-start-2 lg:col-span-1 flex flex-col items-end text-end slide-animation">
                        <p className="text-sm md:text-15px lg:text-base text-heading-color font-bold mb-5 animate__animated">
                          <i className="fas fa-home text-secondary-color ml-1" />
                          وكالة عقارات
                        </p>
                        <h1 className="text-3xl md:text-40px lg:text-50px 4xl:text-65px leading-30px md:leading-10 lg:leading-50px 4xl:leading-65px font-bold mb-5 animate__animated">
                          <span className="leading-30px md:leading-10 lg:leading-50px 4xl:leading-65px">
                            المكان الصحيح <br />
                            العثور على المنزل
                          </span>
                        </h1>
                        <p className="text-sm lg:text-base mb-5 max-w-450px rtl:pl-15px rtl:xl:pl-30px rtl:border-l border-border-color-14 animate__animated">
                          <span className="leading-25px lg:leading-1.8">
                            لوريم إيبسوم جزر معزز الخصومات. النوم والألم؟لوريم
                            إيبسوم جزر معزز الخصومات. النوم والألم؟
                          </span>
                        </p>
                        <div className="lg:mt-5 mb-30px xl:mb-0 animate__animated">

                          <h5 className="capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block ml-15px">
                            <span className="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-primary-color z-1 group-hover:w-0 transition-all duration-300" />
                            <a
                              href="service.html"
                              className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
                            >
                              خدماتنا
                            </a>
                          </h5>
                          <h5 className="capitalize inline-block text-sm md:text-base text-primary-color hover:text-white hover:bg-primary-color relative group whitespace-nowrap font-normal transition-all duration-300 shadow-box-shadow-3">
                            <span className="inline-block absolute top-0 right-0 w-full h-full bg-white group-hover:bg-secondary-color z-1 group-hover:w-0 transition-all duration-300" />
                            <a
                              href="about.html"
                              className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-white leading-23px"
                            >
                              يتعلم أكثر
                            </a>
                          </h5>
                        </div>
                      </div>
                      {/* banner right */}
                      <div className="lg:row-start-1 lg:row-span-1 lg:col-start-1 lg:col-span-1">
                        <div className="4xl:absolute rtl:right-[60px] rtl:xl:right-[150px] bottom-[100px] 4xl:h-[70%] 4xl:w-[45%]">
                          <Image
                            className="4xl:h-full 4xl:ml-auto"
                            src="/images/slider/21.png"
                            alt=""
                            width={600}
                            height={600}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* pinned select area */}
        <div className="container mt-30 4xl:-mt-65px relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30px lg:gap-4 xl:gap-30px py-10 px-25px md:p-10 shadow-box-shadow-1 border border-border-color-1 bg-white">
            <div>
              <NiceSelect
                placeholder="Select"
                options={[
                  "Chicago",
                  "London",
                  "Los Angeles",
                  "New York",
                  "New Jersey",
                ]}
              />
            </div>
            <div>
              <NiceSelect
                placeholder="Select"
                options={["Open house", "Rent", "Sale", "Sold"]}
              />
            </div>
            <div>
              <NiceSelect
                placeholder="Select"
                options={["Apartment", "Co-op", "Condo", "Single Family Home"]}
              />
            </div>

            <div className="text-center">
              <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                <span className="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                <a
                  href="shop-right-sidebar.html"
                  className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
                >
                  Find Now
                </a>
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* video lightbox (replaces GLightbox) */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        plugins={[Video]}
        slides={[
          {
            type: "video",
            sources: [
              {
                src: "https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0&controls=1",
                type: "video/youtube",
              },
            ],
          },
        ]}
      />
    </>
  );
}
