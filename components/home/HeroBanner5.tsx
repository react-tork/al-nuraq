// components/home/HeroBanner5.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

interface HeroSlide {
  id: number;
  videoSrc: string;
  posterSrc?: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    videoSrc: "/media/3.mp4",
    posterSrc: "/images/hero/hero-poster.jpg",
  },
];

export default function HeroBanner5() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  return (
    <section className="hero hero-primary overflow-hidden relative z-0">
      <div className="hero hero-primary overflow-hidden relative z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={heroSlides.length > 1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="swiper primary-slider"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="relative z-0 pt-150px sm:pt-200px md:pt-50 pb-70px md:pb-100px min-h-[500px] sm:min-h-[550px] lg:min-h-[550px] xl:min-h-0 4xl:min-h-[800px] xl:h-screen h-auto overflow-hidden flex flex-col justify-center"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={slide.posterSrc}
                id="myVideo"
                className="w-screen max-w-full h-full absolute left-0 top-0 -z-1 object-cover"
              >
                <source src={slide.videoSrc} type="video/mp4" />
              </video>

              <div className="container w-full sm:w-[880px] px-5 sm:px-0 relative z-xl">
                <div className="slide-animation flex flex-col justify-center items-center text-center mt-2">
                  <p className="text-xs sm:text-sm md:text-15px lg:text-base font-bold mb-15px text-white animated">
                    <i className="fas fa-home text-secondary-color ms-1" />
                    {getTranslation('home.hero.tagline', locale)}
                  </p>
                  <h1 className="text-2xl sm:text-3xl md:text-40px lg:text-6xl xl:text-50px 4xl:text-90px text-white font-bold mb-5 animated uppercase hyphens-none">
                    <span className="leading-1 md:leading-1 lg:leading-1 xl:leading-1 4xl:leading-1">
                      {getTranslation('home.hero.titleLine1', locale)}
                      <br className=" leading-[0]" />
                      {getTranslation('home.hero.titleLine2', locale)}
                    </span>
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}