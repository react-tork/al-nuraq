"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

type Testimonial = {
  id: number;
  image: string;
  nameKey: string;
  roleKey: string;
  quoteKey: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/testimonial/1.jpg",
    nameKey: "home.testimonials.testimonial1Name",
    roleKey: "home.testimonials.testimonial1Role",
    quoteKey: "home.testimonials.testimonial1Quote",
  },
  {
    id: 2,
    image: "/images/testimonial/2.jpg",
    nameKey: "home.testimonials.testimonial2Name",
    roleKey: "home.testimonials.testimonial2Role",
    quoteKey: "home.testimonials.testimonial2Quote",
  },
  {
    id: 3,
    image: "/images/testimonial/3.jpg",
    nameKey: "home.testimonials.testimonial3Name",
    roleKey: "home.testimonials.testimonial3Role",
    quoteKey: "home.testimonials.testimonial3Quote",
  },
  {
    id: 4,
    image: "/images/testimonial/4.jpg",
    nameKey: "home.testimonials.testimonial4Name",
    roleKey: "home.testimonials.testimonial4Role",
    quoteKey: "home.testimonials.testimonial4Quote",
  },
];

export default function Testimonials() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;
  return (
    <section>
      <div className="bg-[url('/images/bg/20.jpg')] bg-top bg-no-repeat">
        <div className="container pt-115px pb-55px">
          {/* section heading */}
          <div className="text-center mb-50px">
            <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
                <span className="leading-1.3">{getTranslation('home.testimonials.subtitle', locale)}</span>
              </p>
            <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
              <span className="leading-1.3">{getTranslation('home.testimonials.title', locale)}</span>
            </h2>
          </div>

          <div className="testimonials-slider-container swiper-container relative -mx-15px">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={0}
              speed={800}
              loop
              navigation={{
                nextEl: ".testimonials-slider-container .swiper-button-next",
                prevEl: ".testimonials-slider-container .swiper-button-prev",
              }}
              pagination={{
                el: ".testimonials-slider-container .swiper-pagination",
                clickable: true,
              }}
              breakpoints={{
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="testimonials-slider static"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id} className="mb-65px lg:mb-50px px-15px">
                  <div className="pt-25px pb-10 px-35px group border border-border-color-13 shadow-box-shadow-4 rounded-10px bg-white cursor-default relative">
                    {/* card body */}
                    <div>
                      <p className="text-sm md:text-base mb-5 md:mb-6 xl:mb-27px">
                        <span className="text-3xl me-0.5 translate-y-2 inline-block">
                          <i className="flaticon-left-quote-1 group-hover:text-secondary-color transition-all duration-300" />
                        </span>
                        <span className="leading-1.8">{getTranslation(t.quoteKey, locale)}</span>
                      </p>
                    </div>
                    {/* card footer */}
                    <div className="flex flex-wrap md:flex-nowrap gap-x-15px gap-y-10px items-center">
                      <div className="w-60px h-60px flex-shrink-0">
                        <Image
                          src={t.image}
                          alt={getTranslation(t.nameKey, locale)}
                          width={60}
                          height={60}
                          className="w-full h-full rounded-100%"
                        />
                      </div>
                      <div>
                        <h4 className="text-base lg:text-lg font-semibold text-heading-color mb-0">
                          <span className="leading-1.3 hover:text-secondary-color">
                            {getTranslation(t.nameKey, locale)}
                          </span>
                        </h4>
                        <span className="text-sm uppercase">{getTranslation(t.roleKey, locale)}</span>
                      </div>
                    </div>
                    <span className="hover-line absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-secondary-color transition-all duration-300 block" />
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal !-bottom-[6px] block lg:hidden" />
              <div className="hidden lg:block">
                <div className="swiper-button-next bg-white z-1">
                  <i className="fas fa-arrow-left" />
                </div>
                <div className="swiper-button-prev bg-white z-1">
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}