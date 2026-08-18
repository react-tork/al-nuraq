"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Apartment = {
  id: number;
  image: string;
  title: string;
  badgeColor: "green" | "secondary";
  price: string;
};

const apartments: Apartment[] = [
  { id: 1, image: "/images/product-3/1.jpg", title: "New Apartment Nice View", badgeColor: "green", price: "$34,900" },
  { id: 2, image: "/images/product-3/2.jpg", title: "Modern Apartments", badgeColor: "secondary", price: "$34,900" },
  { id: 3, image: "/images/product-3/3.jpg", title: "Comfortable Apartment", badgeColor: "green", price: "$34,900" },
  { id: 4, image: "/images/product-3/4.jpg", title: "Luxury villa in Rego Park", badgeColor: "green", price: "$34,900" },
  { id: 5, image: "/images/product-3/5.jpg", title: "Beautiful Flat in Manhattan", badgeColor: "green", price: "$34,900" },
];

export default function FeaturedApartments() {
  const [activeModal, setActiveModal] = useState<1 | 2 | null>(null);

  return (
    <section>
      <div className="container-3 pt-115px pb-[75px]">
        {/* section heading */}
        <div className="text-center mb-50px">
          <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
            <span className="leading-1.3">Properties</span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
            <span className="leading-1.3">Featured Listings</span>
          </h2>
        </div>

        <div className="featured-apartments swiper-container relative">
          <Swiper
            modules={[Navigation, Pagination]}
            dir="rtl"
            slidesPerView={1}
            spaceBetween={0}
            speed={800}
            loop
            navigation={{
              nextEl: ".featured-apartments .swiper-button-next",
              prevEl: ".featured-apartments .swiper-button-prev",
            }}
            pagination={{
              el: ".featured-apartments .swiper-pagination",
              clickable: true,
            }}
            breakpoints={{
              576: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1800: { slidesPerView: 4 },
            }}
            className="featured-apartments-slider static"
          >
            {apartments.map((apt) => (
              <SwiperSlide key={apt.id} className="mb-65px px-15px">
                <div className="group border border-border-color-13 shadow-box-shadow-4">
                  {/* card thumb */}
                  <div className="relative leading-1">
                    <a href="/product-details" className="overflow-hidden block">
                      <Image
                        src={apt.image}
                        alt={apt.title}
                        width={850}
                        height={650}
                        className="w-full h-auto group-hover:scale-110 transition-all duration-700"
                      />
                    </a>
                    <div className="absolute w-full left-0 bottom-0 px-15px pb-15px lg:px-30px bg-transparent bg-gradient-color-5">
                      <div className="text-sm text-white flex justify-between items-center">
                        <a href="/locations" className="hover:text-secondary-color">
                          <i className="flaticon-pin" /> Belmont Gardens, Chicago
                        </a>
                        <ul className="flex gap-10px">
                          <li>
                            <a
                              href="/product-details"
                              className="w-30px lg:w-[42px] h-30px flex justify-center items-center bg-transparent lg:bg-white/35 hover:text-secondary-color"
                            >
                              <i className="fas fa-camera pr-1 leading-1" /> 4
                            </a>
                          </li>
                          <li>
                            <a
                              href="/product-details"
                              className="w-30px lg:w-[42px] h-30px flex justify-center items-center bg-transparent lg:bg-white/35 hover:text-secondary-color"
                            >
                              <i className="fas fa-film pr-1 leading-1" /> 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className={`text-xs sm:text-13px text-white px-10px py-1 sm:px-15px sm:pt-3px sm:pb-0 uppercase font-semibold absolute top-[15px] left-[18px] ${
                        apt.badgeColor === "green" ? "bg-green" : "bg-secondary-color"
                      }`}
                    >
                      <span className="leading-5 sm:leading-25px block">for rent</span>
                    </div>
                  </div>

                  {/* card body */}
                  <div className="px-5 pt-4 lg:px-30px lg:pt-5">
                    <h5 className="text-lg text-secondary-color font-semibold mb-5px">
                      <span className="leading-1.8">{apt.price}</span>
                      <label className="text-sm font-normal">/Month</label>
                    </h5>
                    <h4 className="text-lg md:text-xl lg:text-22px font-semibold text-heading-color mb-15px">
                      <a href="/product-details" className="hover:text-secondary-color leading-1.3">
                        {apt.title}
                      </a>
                    </h4>
                    <p className="text-sm mb-15px">
                      <span className="leading-1.8">
                        Beautiful Huge 1 Family House In Heart Of
                        <br /> Westbury. Newly Renovated With New Wood
                      </span>
                    </p>

                    <ul className="flex flex-wrap gap-15px py-4">
                      <li className="text-sm pr-4 border-r border-primary-color/20">
                        <p className="leading-1.8 font-bold">
                          3<i className="flaticon-bed me-1" />
                        </p>
                        <p className="leading-1.8">Bedrooms</p>
                      </li>
                      <li className="text-sm pr-4 border-r border-primary-color/20">
                        <p className="leading-1.8 font-bold">
                          2<i className="flaticon-clean me-1" />
                        </p>
                        <p className="leading-1.8">Bedrooms</p>
                      </li>
                      <li className="text-sm">
                        <p className="leading-1.8 font-bold">
                          3450<i className="flaticon-square-shape-design-interface-tool-symbol me-1" />
                        </p>
                        <p className="leading-1.8">square Ft</p>
                      </li>
                    </ul>
                  </div>

                  {/* card footer */}
                  <div className="p-5 lg:p-30px lg:pt-5 border-t border-border-color-1">
                    <div className="flex flex-wrap-reverse items-center justify-between gap-y-5">
                      <div className="flex gap-x-3">
                        <a href="/team-details" className="w-10 h-10">
                          <Image
                            src="/images/blog/author.jpg"
                            alt=""
                            width={40}
                            height={40}
                            className="w-full h-full rounded-full"
                          />
                        </a>
                        <div>
                          <h4 className="text-sm font-semibold text-heading-color mb-0">
                            <a className="leading-1.3 hover:text-secondary-color" href="/team-details">
                              William Seklo
                            </a>
                          </h4>
                          <span className="text-xs">Estate Agents</span>
                        </div>
                      </div>
                      <ul className="flex gap-x-2">
                        <li>
                          <button
                            className="w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                            onClick={() => setActiveModal(1)}
                            aria-label="View details"
                          >
                            <i className="flaticon-expand leading-1" />
                          </button>
                        </li>
                        <li>
                          <button
                            className="w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                            onClick={() => setActiveModal(2)}
                            aria-label="Add to wishlist"
                          >
                            <i className="flaticon-heart-1 leading-1" />
                          </button>
                        </li>
                        <li>
                          <a
                            href="/product-details"
                            className="w-9 h-9 flex items-center justify-center bg-section-bg-1 text-center hover:bg-secondary-color hover:text-white font-bold"
                          >
                            <i className="flaticon-add leading-1" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination !-bottom-[6px]" />
            <div className="hidden 3xl:block">
              <div className="swiper-button-next z-1">
                <i className="fas fa-arrow-left" />
              </div>
              <div className="swiper-button-prev z-1">
                <i className="fas fa-arrow-right" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>

      {/* modal: apartment details */}
      {activeModal === 1 && (
        <div className="modal fixed top-0 left-0 w-full h-full z-xxl bg-lightBlack overflow-y-auto">
          <div
            className="modal-close fixed md:absolute top-0 left-0 w-full h-full z-xsmall cursor-zoom-out"
            onClick={() => setActiveModal(null)}
          />
          <div className="modal-content sm:max-w-[500px] lg:max-w-[980px] m-2 mt-150px sm:mx-auto relative z-small rounded-lg bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px p-30px bg-white relative">
              <div>
                <Image src="/images/product/4.png" alt="" width={854} height={614} className="w-full h-auto" />
              </div>
              <div className="pr-25px">
                <div className="absolute left-4 top-4">
                  <button
                    className="w-10 h-10 leading-10 text-center bg-section-bg-1 text-black text-25px inline-block"
                    onClick={() => setActiveModal(null)}
                    aria-label="Close"
                  >
                    <span>×</span>
                  </button>
                </div>
                <ul className="flex items-center mb-5px">
                  {["star", "star", "star", "star-half-alt"].map((s, i) => (
                    <li key={i}>
                      <a href="#" className="text-xs text-ratings hover:text-secondary-color">
                        <i className={`fas fa-${s} leading-1.8`} />
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#" className="text-xs text-ratings hover:text-secondary-color">
                      <i className="far fa-star leading-1.8" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-xs text-ratings hover:text-secondary-color">
                      ( 95 Reviews )
                    </a>
                  </li>
                </ul>

                <h4 className="text-22px md:text-2xl font-bold text-heading-color mb-0">
                  <a href="/product-details" className="leading-1.3 hover:text-secondary-color">
                    3 Rooms Manhattan
                  </a>
                </h4>
                <p className="text-34px md:text-50px text-secondary-color font-semibold mb-5 pb-0 border-b border-border-color-12/25 leading-1.2">
                  <span>$34,900</span>
                  <del className="text-26px md:text-40px leading-1.2 opacity-60 pl-1">$36,500</del>
                </p>
                <p className="text-sm lg:text-base mb-9 md:mb-10">
                  <span className="leading-1.8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repellendus
                    repudiandae incidunt quidem pariatur expedita, quo quis modi tempore non.
                  </span>
                </p>

                <ul className="flex flex-wrap gap-5 pb-5 mb-5 border-b border-border-color-12/25">
                  <li className="text-sm">
                    <button
                      className="leading-1.8 font-semibold hover:text-secondary-color transition-all duration-300"
                      onClick={() => setActiveModal(2)}
                    >
                      <i className="far fa-heart px-0.5" /> Add to Wishlist
                    </button>
                  </li>
                  <li className="text-sm">
                    <button className="leading-1.8 font-semibold hover:text-secondary-color transition-all duration-300">
                      <i className="fas fa-exchange-alt px-0.5" /> Compare
                    </button>
                  </li>
                </ul>

                <ul className="flex gap-x-[18px] items-center">
                  <li>
                    <p className="text-sm lg:text-base">
                      <span className="leading-1.8">Share: </span>
                    </p>
                  </li>
                  {[
                    { icon: "facebook-f", href: "https://www.facebook.com/" },
                    { icon: "twitter", href: "https://x.com/" },
                    { icon: "linkedin", href: "https://www.linkedin.com/" },
                    { icon: "instagram", href: "https://www.instagram.com/" },
                  ].map((s) => (
                    <li key={s.icon}>
                      <a href={s.href} className="text-sm lg:text-base hover:text-secondary-color">
                        <i className={`fab fa-${s.icon} leading-1.8`} />
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="text-end mt-4">
                  <a href="/product-details" className="text-xs hover:text-secondary-color underline hover:underline">
                    <span className="leading-1.8">View Details</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* modal: wishlist success */}
      {activeModal === 2 && (
        <div className="modal fixed top-0 left-0 w-full h-full z-xxl bg-lightBlack overflow-y-auto">
          <div
            className="modal-close fixed md:absolute top-0 left-0 w-full h-full z-xsmall cursor-zoom-out"
            onClick={() => setActiveModal(null)}
          />
          <div className="modal-content max-w-[500px] m-2 mt-150px sm:mx-auto relative z-small p-30px bg-white">
            <div className="flex">
              <div className="w-[125px] me5 flex-shrink-0">
                <Image src="/images/product/4.png" alt="" width={854} height={614} className="w-full h-auto" />
              </div>
              <div className="pl-25px relative">
                <div className="absolute left-4 top-4">
                  <button
                    className="w-10 h-10 leading-10 text-center bg-black/5 text-black text-25px inline-block"
                    onClick={() => setActiveModal(null)}
                    aria-label="Close"
                  >
                    <span>×</span>
                  </button>
                </div>
                <h4 className="text-base lg:text-lg font-bold text-heading-color mb-10px">
                  <a href="/product-details" className="leading-1.3 hover:text-secondary-color">
                    3 Rooms Manhattan
                  </a>
                </h4>
                <p className="text-sm lg:text-base mb-5 md:mb-6">
                  <i className="fa fa-check-circle leading-1 text-green float-right clear-both pl-1.5 mt-1.5" />
                  Successfully added to your Wishlist
                </p>
                <div>
                  <h5 className="capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                    <span className="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-black z-1 group-hover:w-0 transition-all duration-300" />
                    <a
                      href="/wishlist"
                      className="relative z-10 px-5 py-5px group-hover:text-heading-color leading-23px"
                    >
                      View Wishlist
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}