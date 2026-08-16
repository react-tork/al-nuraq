"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, getPathnameWithLocale, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

/* Scrap items mapped to translation keys */
const scrapItems = [
  {
    key: "1",
    img: "https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=600&h=400&fit=crop&auto=format",
    link: "/scrap/metal-scrap",
  },
  {
    key: "2",
    img: "https://images.unsplash.com/photo-1717667745852-a5bd6876c1de?w=600&h=400&fit=crop&auto=format",
    link: "/scrap/copper-scrap",
  },
  {
    key: "3",
    img: "https://images.unsplash.com/photo-1561503412-852800622772?w=600&h=400&fit=crop&auto=format",
    link: "/scrap/aluminium-scrap",
  },
  {
    key: "4",
    img: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=900&h=600&fit=crop&auto=format",
    link: "/scrap/iron-steel",
  },
  {
    key: "5",
    img: "https://images.unsplash.com/photo-1687038520563-2310e8b06ed2?w=600&h=400&fit=crop&auto=format",
    link: "/scrap/cable-wire",
  },
  {
    key: "6",
    img: "https://images.unsplash.com/photo-1720036236855-9a1a2e4d3f26?w=600&h=400&fit=crop&auto=format",
    link: "/scrap/machinery-scrap",
  },
  // {
  //   key: "7",
  //   img: "https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=600&h=400&fit=crop&auto=format",
  //   link: "/scrap/e-scrap",
  // },
  {
    key: "8",
    img: "https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=600&h=400&fit=crop&auto=format",
    link: "/scrap/battery-scrap",
  },
  {
    key: "9",
    img: "https://images.unsplash.com/photo-1722842895153-ba7bf9d53dfb?w=600&h=400&fit=crop&auto=format",
    link: "/scrap/industrial-scrap",
  },
  {
    key: "10",
    img: "https://images.unsplash.com/photo-1720036236855-9a1a2e4d3f26?w=600&h=400&fit=crop&auto=format",
    link: "/scrap/electrical-panels",
  },
  // {
  //   key: "11",
  //   img: "https://images.unsplash.com/photo-1720036236855-9a1a2e4d3f26?w=600&h=400&fit=crop&auto=format",
  //   link: "/scrap/compressors",
  // },
  {
    key: "12",
    img: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=900&h=600&fit=crop&auto=format",
    link: "/scrap/construction",
  },
  {
    key: "13",
    img: "https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=600&h=400&fit=crop&auto=format",
    link: "/scrap/cars",
  },
  {
    key: "14",
    img: "https://images.unsplash.com/photo-1561503412-852800622772?w=600&h=400&fit=crop&auto=format",
    link: "/scrap/household",
  },
];

export default function WhatWeBuy() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const localizedHref = (href: string) =>
    locale === "en" ? `/en${href}` : href;

  return (
    <section className="container pt-20 md:pt-24 pb-16 md:pb-20">
      <div className="text-center mb-50px">
        <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
          <span className="leading-1.3">{getTranslation("home.newsBlog.subtitle", locale)}</span>
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
          <span className="leading-1.3">{getTranslation("home.newsBlog.title", locale)}</span>
        </h2>
        <p>{getTranslation("home.newsBlog.description", locale)}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-30px">
        {scrapItems.map((item) => (
          <div
            key={item.key}
            className="group p-15px shadow-box-shadow-4 bg-white"
          >
            {/* Card Thumb */}
            <div className="relative leading-1 overflow-hidden">
              <Link href={localizedHref(item.link)} className="block">
                <img
                  src={item.img}
                  className="w-full group-hover:scale-110 transition-all duration-700"
                  alt={getTranslation(`home.newsBlog.category${item.key}`, locale)}
                />
              </Link>

              {/* Badge */}
              <div className="text-13px leading-1.8 px-15px pt-1 text-white uppercase font-semibold absolute top-2 inset-e-3 bg-secondary-color rounded-full">
                {getTranslation(`home.newsBlog.badge${item.key}`, locale)}
              </div>
            </div>

            {/* Card Body */}
            <div className="pt-25px px-5px pb-10px">
              <h4 className="text-17px md:text-lg lg:text-xl font-semibold text-heading-color mb-3">
                <Link
                  href={localizedHref(item.link)}
                  className="hover:text-secondary-color leading-1.3"
                >
                  {getTranslation(`home.newsBlog.category${item.key}`, locale)}
                </Link>
              </h4>

              <p className="text-sm lg:text-base leading-1.8 text-content-color mb-4">
                {getTranslation(`home.newsBlog.title${item.key}`, locale)}
              </p>

              <Link
                href={localizedHref(item.link)}
                className="text-sm lg:text-base text-secondary-color"
              >
                <span className="leading-1.8">
                  {getTranslation("home.newsBlog.learnMore", locale)}{" "}
                  <i className="flaticon-right-arrow"></i>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
