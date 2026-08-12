"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

/* Accordion item: label key + list of links */
type AccordionItem = {
  labelKey: string;
  links: { href: string; labelKey: string }[];
};

const accordionItems: AccordionItem[] = [
  {
    labelKey: "header.whatWeBuy",
    links: [
      { href: "/what-we-buy", labelKey: "header.allServices" },
      { href: "/what-we-buy/metal-scrap", labelKey: "header.metalScrap" },
      { href: "/what-we-buy/copper-scrap", labelKey: "header.copperScrap" },
      { href: "/what-we-buy/aluminium-scrap", labelKey: "header.aluminiumScrap" },
      { href: "/what-we-buy/iron-steel", labelKey: "header.ironSteel" },
      { href: "/what-we-buy/cable-wire", labelKey: "header.cableWire" },
      { href: "/what-we-buy/machinery-scrap", labelKey: "header.machineryScrap" },
      { href: "/what-we-buy/e-scrap", labelKey: "header.eScrap" },
      { href: "/what-we-buy/battery-scrap", labelKey: "header.batteryScrap" },
      { href: "/what-we-buy/industrial-scrap", labelKey: "header.industrialScrap" },
    ],
  },
];

/* Single accordion row with expand/collapse */
function AccordionRow({ item, locale }: { item: AccordionItem; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const content = contentRef.current;
    if (!content) return;
    if (open) {
      content.style.height = `${content.scrollHeight}px`;
      // force reflow then collapse
      requestAnimationFrame(() => {
        content.style.height = "0px";
      });
    } else {
      content.style.height = `${content.scrollHeight}px`;
      content.addEventListener(
        "transitionend",
        () => {
          content.style.height = "auto";
        },
        { once: true }
      );
    }
    setOpen(!open);
  };

  return (
    <li className={`accordion mt-4 ${open ? "active" : ""}`}>
      <div
        className="accordion-controller flex items-center justify-between cursor-pointer hover:text-secondary-color uppercase text-sm lg:text-base py-2 lg:py-2.5"
        onClick={toggle}
      >
        {getTranslation(item.labelKey, locale)}
        <button className="px-3 h-full" aria-label={`Toggle ${getTranslation(item.labelKey, locale)}`}>
          <span className="w-[10px] h-0.5 bg-gray1 block dark:bg-whiteColor bg-opacity-75"></span>
          <span
            className={`w-[10px] h-0.5 bg-gray1 block dark:bg-whiteColor bg-opacity-75 -mt-[2px] transition-all duration-500 ${
              open ? "rotate-0" : "rotate-90"
            }`}
          ></span>
        </button>
      </div>
      <div
        ref={contentRef}
        className="accordion-content h-0 overflow-hidden transition-all duration-500"
      >
        <div className="content-wrapper pr-15px">
          <ul>
            {item.links.map((link) => (
              <li key={link.href} className="mt-4">
                <Link
                  href={locale === 'en' ? `/en${link.href}` : link.href}
                  className="!leading-22px text-darkdeep1 text-sm lg:text-base hover:text-secondary-color"
                >
                  {getTranslation(link.labelKey, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  return (
    <div
      className={`drawer-container mobile-menu-container ${open ? "active" : ""}`}
    >
      <div
        className="drawer-overlay fixed top-0 left-0 w-full h-full bg-black -z-1 close-drawer opacity-0 transition-all duration-300 invisible cursor-zoom-out block xl:hidden"
        onClick={onClose}
      ></div>
      <div className="drawer mobile-menu fixed top-0 ltr:-left-[300px] ltr:xs:-left-[400px] rtl:-right-[300px] rtl:xs:-right-[400px] px-5 xs:px-10 py-50px w-300px xs:w-100 h-full transition-all duration-500 shadow-dropdown-secodary bg-whiteColor z-50 block xl:hidden bg-white">
        <div className="pl-15px overflow-auto h-full flex flex-col justify-between">
          {/* mobile menu wrapper */}
          <div>
            {/* mobile menu logo */}
            <div className="flex justify-between items-center mb-30px">
              <div>
                <Link href={locale === 'en' ? '/en' : '/'}>
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={125}
                    height={20}
                  />
                </Link>

              </div>
            </div>


            {/* mobile menu search */}
            <div className="mb-30px">
              <form action="#" className="relative">
                <input
                  type="text"
                  placeholder={getTranslation('mobileMenu.searchPlaceholder', locale)}
                  className="w-full h-50px border border-border-color-1 pl-15px pr-50px focus:outline-none focus:border-secondary-color transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 h-full w-50px bg-secondary-color text-white flex justify-center items-center"
                  aria-label="Search"
                >
                  <i className="icon-search"></i>
                </button>
              </form>
            </div>

            {/* mobile menu accordions */}
            <div className="accordion-container">
              <ul>
                <li className="mt-4">
                  <Link
                    href={locale === 'en' ? '/en/about' : '/about'}
                    className="accordion-controller flex items-center justify-between cursor-pointer hover:text-secondary-color uppercase text-sm lg:text-base py-2 lg:py-2.5"
                  >
                    {getTranslation('header.about', locale)}
                  </Link>
                </li>
                {accordionItems.map((item) => (
                  <AccordionRow key={item.labelKey} item={item} locale={locale} />
                ))}
                <li className="mt-4">
                  <Link
                    href={locale === 'en' ? '/en/service-areas' : '/service-areas'}
                    className="accordion-controller flex items-center justify-between cursor-pointer hover:text-secondary-color uppercase text-sm lg:text-base py-2 lg:py-2.5"
                  >
                    {getTranslation('header.serviceAreas', locale)}
                  </Link>
                </li>
                <li className="mt-4">
                  <Link
                    href={locale === 'en' ? '/en/contact' : '/contact'}
                    className="accordion-controller flex items-center justify-between cursor-pointer hover:text-secondary-color uppercase text-sm lg:text-base py-2 lg:py-2.5"
                  >
                    {getTranslation('header.contact', locale)}
                  </Link>
                </li>
              </ul>
            </div>


            {/* my account */}
            {/* <div>
              <ul className="mb-30px pb-5 pt-5px border-b border-border-primary">
                <li className="group mt-4">
                  <Link href="/account" className="text-sm lg:text-base">
                    <span className="inline-block h-50px w-50px border-2 border-border-color-1 text-center leading-50px rtl:ml-3">
                      <i className="far fa-user"></i>
                    </span>
                    My Account
                  </Link>
                </li>
                <li className="group mt-4">
                  <Link href="/wishlist" className="text-sm lg:text-base">
                    <span className="inline-block h-50px w-50px border-2 border-border-color-1 text-center leading-50px rtl:ml-3">
                      <i className="far fa-heart"></i>
                      <sup className="pl-0.5">3</sup>
                    </span>
                    Wishlist
                  </Link>
                </li>
                <li className="group mt-4">
                  <Link href="/cart" className="text-sm lg:text-base">
                    <span className="inline-block h-50px w-50px border-2 border-border-color-1 text-center leading-50px rtl:ml-3">
                      <i className="fas fa-shopping-cart"></i>
                      <sup>5</sup>
                    </span>
                    Shoping Cart
                  </Link>
                </li>
              </ul>
            </div> */}

          </div>
            {/* Mobile menu social area */}
            <div className="flex justify-center">
              <ul className="flex gap-3 items-center pt-4">
                <li>
                  <a
                    className="h-10 w-10 bg-section-bg-1 hover:bg-secondary-color hover:text-white text-center text-sm lg:text-base flex justify-center items-center"
                    href="https://www.facebook.com"
                  >
                    <i className="fab fa-facebook-f leading-10"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="h-10 w-10 bg-section-bg-1 hover:bg-secondary-color hover:text-white text-center text-sm lg:text-base flex justify-center items-center"
                    href="https://www.twiter.com"
                  >
                    <i className="fab fab fa-twitter leading-10"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="h-10 w-10 bg-section-bg-1 hover:bg-secondary-color hover:text-white text-center text-sm lg:text-base flex justify-center items-center"
                    href="https://www.linkedin.com"
                  >
                    <i className="fab fa-linkedin leading-10"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="h-10 w-10 bg-section-bg-1 hover:bg-secondary-color hover:text-white text-center text-sm lg:text-base flex justify-center items-center"
                    href="https://www.instagram.com"
                  >
                    <i className="fab fa-instagram leading-10"></i>
                  </a>
                </li>
              </ul>
            </div>

        </div>
      </div>
    </div>
  );
}
