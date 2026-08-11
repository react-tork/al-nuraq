"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type NewsPost = {
  id: number;
  image: string;
  category: string;
  title: string;
  date: string;
};

const posts: NewsPost[] = [
  {
    id: 1,
    image: "/images/blog/1.jpg",
    category: "Room",
    title: "10 Brilliant Ways To Decorate Your Home",
    date: "June 24, 2024",
  },
  {
    id: 2,
    image: "/images/blog/2.jpg",
    category: "Interior",
    title: "The Most Inspiring Interior Design Of 2024",
    date: "June 21, 2024",
  },
  {
    id: 3,
    image: "/images/blog/3.jpg",
    category: "Estate",
    title: "Recent Commercial Real Estate Transactions",
    date: "June 22, 2024",
  },
  {
    id: 4,
    image: "/images/blog/4.jpg",
    category: "Room",
    title: "Renovating a Living Room? Experts Share Their Secrets",
    date: "June 24, 2024",
  },
  {
    id: 5,
    image: "/images/blog/5.jpg",
    category: "Trends",
    title: "7 home trends that will shape your house in 2024",
    date: "June 24, 2024",
  },
];

export default function NewsBlog() {
  return (
    <section>
      <div className="container pb-70px">
        {/* section heading */}
        <div className="text-center mb-50px">
          <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
            <span className="leading-1.3">News & Blogs</span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
            <span className="leading-1.3">Leatest News Feeds </span>
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
                        alt={post.title}
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
                          by: Admin
                        </a>
                      </li>
                      <li className="text-xs md:text-sm font-semibold">
                        <a
                          href="#"
                          className="leading-1.8 hover:text-secondary-color flex gap-5px items-center"
                        >
                          <i className="fas fa-tags text-secondary-color" />
                          {post.category}
                        </a>
                      </li>
                    </ul>
                    <h4 className="text-lg md:text-xl lg:text-22px font-semibold text-heading-color">
                      <a
                        href="/blog-details"
                        className="hover:text-secondary-color leading-1.3"
                      >
                        {post.title}
                      </a>
                    </h4>
                    <div className="pt-5 mt-5 lg:pt-5 border-t border-border-color-1">
                      <ul className="flex justify-between items-center">
                        <li className="text-xs md:text-sm font-semibold">
                          <p className="leading-1.8 flex gap-5px items-center">
                            <i className="far fa-calendar-alt text-secondary-color" />
                            {post.date}
                          </p>
                        </li>
                        <li className="text-xs md:text-sm font-semibold">
                          <a
                            href="/blog-details"
                            className="leading-1.8 text-secondary-color uppercase"
                          >
                            Read more
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