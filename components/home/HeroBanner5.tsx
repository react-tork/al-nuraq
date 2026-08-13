// components/home/HeroBanner5.tsx
"use client";

import { useEffect, useRef } from "react";
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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Lazy-load the background video: only start playing when it enters
  // the viewport, and pause when it scrolls out of view.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              /* autoplay may be blocked; ignore */
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

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
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={slide.posterSrc}
                id="herobanner"
                className="w-screen max-w-full h-full absolute left-0 top-0 -z-1 object-cover"
              >

                <source src={slide.videoSrc} type="video/mp4" />
              </video>

              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 -z-1 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

              <div className="container w-full sm:w-[880px] px-5 sm:px-0 relative z-xl">
                <div className="slide-animation flex flex-col justify-center items-center text-center mt-2">
                  <p className="text-xs sm:text-sm md:text-15px lg:text-base font-bold mb-15px text-white animated [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
                    <i className="fas fa-recycle text-secondary-color me-1 md:me-3" />
                    {getTranslation("home.hero.tagline", locale)}
                    <i className="fas fa-recycle text-secondary-color ms-1 md:ms-3" />
                  </p>

                  <h1 className="text-2xl sm:text-3xl md:text-40px lg:text-6xl xl:text-50px 4xl:text-90px font-bold mb-5 animated uppercase hyphens-none [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
                    <span className="leading-1 md:leading-1 lg:leading-1 xl:leading-1 4xl:leading-1 text-white">
                      {getTranslation("home.hero.titleLine1", locale)}
                      <br className="leading-[0]" />
                      {getTranslation("home.hero.titleLine2", locale)}{" "}
                      <span className="text-secondary-color">
                        {getTranslation("home.hero.titleHighlight", locale)}
                      </span>
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-white/90 max-w-[640px] mb-30px animated [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
                    {getTranslation("home.hero.description", locale)}
                  </p>
                  {/* sample button design */}
                  {/* <div
                          class="tab-links flex justify-center gap-x-10px items-center mb-10px"
                        >
                          <div
                            class="active text-sm lg:text-base text-secondary-color relative group whitespace-nowrap transition-all duration-300 bg-section-bg-1 inline-block font-bold"
                          >
                            <button
                              class="relative z-10 px-25px lg:px-10 py-15px whitespace-normal leading-1.8 lg:leading-1.8 uppercase"
                            >
                              <i class="fas fa-home ml-10px"></i> Rent Home
                            </button>
                          </div>
                          <div
                            class="text-sm lg:text-base text-secondary-color relative group whitespace-nowrap transition-all duration-300 bg-section-bg-1 inline-block font-bold"
                          >
                            <button
                              class="relative z-10 px-25px lg:px-10 py-15px whitespace-normal leading-1.8 lg:leading-1.8 uppercase"
                            >
                              <i class="fas fa-home ml-10px"></i> Sale Home
                            </button>
                          </div>
                        </div> */}
                  <div className="tab-links flex justify-center gap-x-10px items-center mb-4 md:mb-6 animated">
                    <div className="active text-sm lg:text-base text-secondary-color relative group whitespace-nowrap transition-all duration-300 bg-section-bg-1 inline-block font-bold">
                      <a
                        href="tel:+966510679737"
                        className="relative z-10 px-25px lg:px-10 py-15px whitespace-normal leading-1.8 lg:leading-1.8 uppercase inline-flex items-center gap-2"
                      >
                        <i className="fas fa-phone-alt transition-transform duration-300 group-hover:rotate-12" />
                        {getTranslation("home.hero.callNow", locale)}
                      </a>
                    </div>

                    <div className="text-sm lg:text-base text-white relative group whitespace-nowrap transition-all duration-300 inline-block font-bold bg-secondary-color">
                      <a
                        href="https://wa.me/966510679737?text=Hi%2C%20I%20want%20to%20sell%20my%20scrap.%20Can%20you%20share%20more%20details%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 px-25px lg:px-10 py-15px whitespace-normal leading-1.8 lg:leading-1.8 uppercase inline-flex items-center gap-2"
                      >
                        <i className="fab fa-whatsapp text-lg transition-transform duration-300 group-hover:rotate-12" />
                        {getTranslation("home.hero.whatsapp", locale)}
                      </a>
                    </div>
                  </div>

                  <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/80 animated">
                    <li>{getTranslation("home.hero.feature1", locale)}</li>
                    <li className="opacity-50">•</li>
                    <li>{getTranslation("home.hero.feature2", locale)}</li>
                    <li className="opacity-50">•</li>
                    <li>{getTranslation("home.hero.feature3", locale)}</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
