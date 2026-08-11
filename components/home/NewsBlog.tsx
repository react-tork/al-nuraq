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

type NewsPost = {
  id: number;
  image: string;
  categoryKey: string;
  titleKey: string;
  dateKey: string;
};

const posts: NewsPost[] = [
  {
    id: 1,
    image: "/images/blog/1.jpg",
    categoryKey: "home.newsBlog.category1",
    titleKey: "home.newsBlog.title1",
    dateKey: "home.newsBlog.category1",
  },
  {
    id: 2,
    image: "/images/blog/2.jpg",
    categoryKey: "home.newsBlog.category2",
    titleKey: "home.newsBlog.title2",
    dateKey: "home.newsBlog.category2",
  },
  {
    id: 3,
    image: "/images/blog/3.jpg",
    categoryKey: "home.newsBlog.category3",
    titleKey: "home.newsBlog.title3",
    dateKey: "home.newsBlog.category3",
  },
  {
    id: 4,
    image: "/images/blog/4.jpg",
    categoryKey: "home.newsBlog.category4",
    titleKey: "home.newsBlog.title4",
    dateKey: "home.newsBlog.category4",
  },
  {
    id: 5,
    image: "/images/blog/5.jpg",
    categoryKey: "home.newsBlog.category5",
    titleKey: "home.newsBlog.title5",
    dateKey: "home.newsBlog.category5",
  },
  {
    id: 6,
    image: "/images/blog/6.jpg",
    categoryKey: "home.newsBlog.category6",
    titleKey: "home.newsBlog.title6",
    dateKey: "home.newsBlog.category6",
  },
  {
    id: 7,
    image: "/images/blog/7.jpg",
    categoryKey: "home.newsBlog.category7",
    titleKey: "home.newsBlog.title7",
    dateKey: "home.newsBlog.category7",
  },
  {
    id: 8,
    image: "/images/blog/8.jpg",
    categoryKey: "home.newsBlog.category8",
    titleKey: "home.newsBlog.title8",
    dateKey: "home.newsBlog.category8",
  },
  {
    id: 9,
    image: "/images/blog/9.jpg",
    categoryKey: "home.newsBlog.category9",
    titleKey: "home.newsBlog.title9",
    dateKey: "home.newsBlog.category9",
  },
  {
    id: 10,
    image: "/images/blog/10.jpg",
    categoryKey: "home.newsBlog.category10",
    titleKey: "home.newsBlog.title10",
    dateKey: "home.newsBlog.category10",
  },
  {
    id: 11,
    image: "/images/blog/11.jpg",
    categoryKey: "home.newsBlog.category11",
    titleKey: "home.newsBlog.title11",
    dateKey: "home.newsBlog.category11",
  },
  {
    id: 12,
    image: "/images/blog/12.jpg",
    categoryKey: "home.newsBlog.category12",
    titleKey: "home.newsBlog.title12",
    dateKey: "home.newsBlog.category12",
  },
  {
    id: 13,
    image: "/images/blog/13.jpg",
    categoryKey: "home.newsBlog.category13",
    titleKey: "home.newsBlog.title13",
    dateKey: "home.newsBlog.category13",
  },
  {
    id: 14,
    image: "/images/blog/14.jpg",
    categoryKey: "home.newsBlog.category14",
    titleKey: "home.newsBlog.title14",
    dateKey: "home.newsBlog.category14",
  },
];

export default function NewsBlog() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;
  return (
    <section>
      <div className="container pb-70px">
        {/* section heading */}
        <div className="text-center mb-50px">
          <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
            <span className="leading-1.3">{getTranslation('home.newsBlog.subtitle', locale)}</span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
            <span className="leading-1.3">{getTranslation('home.newsBlog.title', locale)}</span>
          </h2>
        </div>

        <div className="news-slider-container swiper-container relative -mx-15px">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            speed={800}
            loop
            navigation={{
              nextEl: ".news-slider-container .swiper-button-next",
              prevEl: ".news-slider-container .swiper-button-prev",
            }}
            pagination={{
              el: ".news-slider-container .swiper-pagination",
              clickable: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1600: { slidesPerView: 3 },
            }}
            className="news-slider static"
          >
            {posts.map((post) => (
              <SwiperSlide
                key={post.id}
                className="mb-65px xl:mb-50px px-15px cursor-default"
              >
                <div className="group">
                  {/* card thumb */}
                  <div className="relative leading-1">
                    <a href="/blog-details" className="overflow-hidden block">
                      <Image
                        src={post.image}
                        alt={getTranslation(post.titleKey, locale)}
                        width={470}
                        height={340}
                        className="w-full h-auto group-hover:scale-110 transition-all duration-700"
                      />
                    </a>
                  </div>
                  {/* card body */}
                  <div className="p-30px shadow-box-shadow-4">
                    <ul className="mb-15px flex gap-x-25px items-center">
                      <li className="text-xs md:text-sm font-semibold">
                        <a
                          href="#"
                          className="leading-1.8 hover:text-secondary-color flex gap-5px items-center"
                        >
                          <i className="far fa-user text-secondary-color" />
                          {getTranslation('home.newsBlog.byAdmin', locale)}
                        </a>
                      </li>
                      <li className="text-xs md:text-sm font-semibold">
                        <a
                          href="#"
                          className="leading-1.8 hover:text-secondary-color flex gap-5px items-center"
                        >
                          <i className="fas fa-tags text-secondary-color" />
                          {getTranslation(post.categoryKey, locale)}
                        </a>
                      </li>
                    </ul>
                    <h4 className="text-lg md:text-xl lg:text-22px font-semibold text-heading-color">
                      <a
                        href="/blog-details"
                        className="hover:text-secondary-color leading-1.3"
                      >
                        {getTranslation(post.titleKey, locale)}
                      </a>
                    </h4>
                    <div className="pt-5 mt-5 lg:pt-5 border-t border-border-color-1">
                      <ul className="flex justify-between items-center">
                        <li className="text-xs md:text-sm font-semibold">
                          <p className="leading-1.8 flex gap-5px items-center">
                            <i className="far fa-calendar-alt text-secondary-color" />
                            {getTranslation(post.dateKey, locale)}
                          </p>
                        </li>
                        <li className="text-xs md:text-sm font-semibold">
                          <a
                            href="/blog-details"
                            className="leading-1.8 text-secondary-color uppercase"
                          >
                            {getTranslation('home.newsBlog.readMore', locale)}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal !-bottom-[6px] block xl:hidden" />
            <div className="hidden xl:block">
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
    </section>
  );
}