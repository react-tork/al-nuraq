"use client";

type Amenity = {
  id: number;
  icon: string;
  key: string;
};

const amenities: Amenity[] = [
  { id: 1, icon: "flaticon-car", key: "home.amenities.amenity1" },
  { id: 2, icon: "flaticon-swimming", key: "home.amenities.amenity2" },
  { id: 3, icon: "flaticon-secure-shield", key: "home.amenities.amenity3" },
  { id: 4, icon: "flaticon-stethoscope", key: "home.amenities.amenity4" },
  { id: 5, icon: "flaticon-book", key: "home.amenities.amenity5" },
  { id: 6, icon: "flaticon-bed-1", key: "home.amenities.amenity6" },
  { id: 7, icon: "flaticon-home-2", key: "home.amenities.amenity7" },
  { id: 8, icon: "flaticon-slider", key: "home.amenities.amenity8" },
  { id: 9, icon: "", key: "home.amenities.amenity9" },
  { id: 10, icon: "", key: "home.amenities.amenity10" },
];

import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

export default function Amenities() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;
  return (
    <section className="container pt-20 md:pt-24 pb-16 md:pb-20">
      {/* section heading */}
      <div className="text-center mb-50px">
        <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
          <span className="leading-1.3">{getTranslation('home.amenities.subtitle', locale)}</span>
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
          <span className="leading-1.3">{getTranslation('home.amenities.title', locale)}</span>
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center -mx-15px px-7px md:px-0">
        {amenities.map((item) => (
          <div
            key={item.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 md:px-15px mb-50px"
          >
            <a
              href="/shop"
              className="pt-10 pb-35px px-15px md:px-5 xl:px-30px bg-white hover:bg-secondary-color transition-all duration-300 shadow-box-shadow-4 rounded-10px flex flex-col items-center group relative"
            >
              <span className="block w-60px md:w-20 xl:w-100px h-60px md:h-20 xl:h-100px text-25px md:text-3xl xl:text-45px bg-section-bg-5 rounded-100% transition-all duration-300 group-hover:bg-white text-secondary-color mb-5 text-center leading-1">
                <i className={`${item.icon} leading-65px md:leading-90px xl:leading-110px`} />
              </span>
              <span className="block text-13px md:text-lg xl:text-22px transition-all duration-300 text-heading-color group-hover:text-white mb-10px font-poppins font-semibold leading-1.8 capitalize">
                {getTranslation(item.key, locale)}
              </span>

              <span className="text-lg w-45px h-45px border border-border-color-8 shadow-box-shadow-2 rounded-100% bg-white group-hover:text-secondary-color transition-all duration-300 text-center block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <i className="flaticon-right-arrow leading-12" />
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}