"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  getLocaleFromPathname,
  getPathnameWithLocale,
  type Locale,
} from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";
import { socialLinks } from "@/lib/social";

/* "Company" footer link column */
const companyLinks = [
  { href: "/about", key: "footer.about" },
  { href: "/contact", key: "footer.contactUs" },
  { href: "/services", key: "footer.whatWeBuy" },
  { href: "/industrial-solutions", key: "footer.industrialSolutions" },
  // { href: "/scrap-pickup", key: "footer.scrapPickup" },
  { href: "/service-areas", key: "footer.serviceAreas" },
  // { href: "/how-it-works", key: "footer.howItWorks" },
];

/* "Resources" footer link column */
const resourcesLinks = [
  { href: "/blog", key: "footer.blog" },
  { href: "/faq", key: "footer.faq" },
];

/* Footer link column renderer */
function FooterLinkColumn({
  title,
  links,
  locale,
}: {
  title: string;
  links: { href: string; key: string }[];
  locale: Locale;
}) {
  const isRTL = locale !== "en";

  return (
    <div className="xl:col-span-2 mb-60px">
      <h3 className="text-22px font-bold mb-25px text-white">
        <span className="leading-1.3">{title}</span>
      </h3>

      <ul className="space-y-[15px]">
        {links.map((item) => {
          const label = getTranslation(item.key, locale);
          const href = locale === "en" ? `/en${item.href}` : item.href;

          return (
            <li key={label}>
              <Link
                href={href}
                className={`hover:text-secondary-color group leading-1.8 inline-flex items-center transition-all duration-300 ${
                  isRTL
                    ? "translate-x-5 hover:translate-x-0"
                    : "-translate-x-5 hover:translate-x-0"
                }`}
              >
                <span
                  className={`text-secondary-color opacity-0 group-hover:opacity-100 transition-all duration-300 pe-15px`}
                >
                  //
                </span>

                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* Contact footer column */
function FooterContactColumn({ locale }: { locale: Locale }) {
  const isRTL = locale !== "en";

  return (
    <div className="xl:col-span-3  mb-60px">
      <h3 className="text-22px font-bold mb-25px text-white">
        <span className="leading-1.3">
          {getTranslation("footer.contact", locale)}
        </span>
      </h3>

      <ul className="space-y-[15px]">
        {/* Contact */}

        {/* Address */}
        <li>
          <p
            className={`leading-1.8 text-white flex items-start`}
          >
            <i
              className={`icon-placeholder mt-1 shrink-0 me-15px`}
            ></i>

            <span>{getTranslation("footer.address", locale)}</span>
          </p>
        </li>

        {/* Phone */}
        <li>
          <a href="tel:+966559679148" target="_blank" className="leading-1.8 flex items-start">
            <i
              className={`icon-call mt-1 shrink-0 me-15px`}
            ></i>

            <span>{getTranslation("footer.phone", locale)}</span>
          </a>
        </li>

        {/* WhatsApp */}
        <li>
          <a
            href="https://wa.me/966559679148"
            target="_blank"
            className="leading-1.8 flex items-start"
          >
            <i
              className={`icon-whatsapp mt-1 shrink-0 me-15px`}
            ></i>

            <span>{getTranslation("footer.whatsapp", locale)}</span>
          </a>
        </li>

        {/* Email */}
        <li>
          <a
            href="mailto:alnuraqscrap@gmail.com"
            className="leading-1.8 flex items-start"
          >
            <i
              className={`icon-mail mt-1 shrink-0 me-15px`}
            ></i>

            <span>{getTranslation("footer.email", locale)}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;
  const isRTL = locale !== "en";

  const [showScrollUp, setShowScrollUp] = useState(false);

  /* Show scroll-up button after scrolling past 300px */
  useEffect(() => {
    const onScroll = () => {
      setShowScrollUp(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const switchLocale = (newLocale: Locale) => {
    const newPathname = getPathnameWithLocale(pathname, newLocale);
    window.location.href = newPathname;
  };

  return (
    <>
      <footer>
        {/* Footer start */}
        <div className="pt-187px pb-5 px-15px 3xl:px-[2%] 4xl:px-[5%] mt-95px bg-section-bg-2 text-sm lg:text-base text-white relative">
          <div className="px-15px">
            {/* Footer CTA */}
            <div className="container w-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="px-25px lg:px-60px py-50px bg-secondary-color text-white flex justify-center lg:justify-between items-center flex-col lg:flex-row gap-y-30px lg:gap-0 sm:whitespace-nowrap">
                <div className="text-center lg:text-start">
                  <h5 className="text-xl md:text-26px lg:text-3xl xl:text-4xl text-white font-bold mb-15px">
                    <span className="leading-1.3">
                      {getTranslation("footer.ctaTitle", locale)}
                    </span>
                  </h5>

                  <p className="text-white leading-1.8">
                    {getTranslation("footer.ctaDescription", locale)}
                  </p>
                </div>

                <div>
                  <h5 className="capitalize inline-block text-sm md:text-base text-primary-color hover:text-white hover:bg-primary-color relative group whitespace-nowrap font-normal transition-all duration-300 shadow-box-shadow-3 mb-0">
                    <span
                      className={`inline-block absolute top-0 w-full h-full bg-white group-hover:bg-secondary-color z-1 group-hover:w-0 transition-all duration-300 ${
                        isRTL ? "right-0" : "left-0"
                      }`}
                    ></span>

                    <Link
                      href={locale === "en" ? "/en/contact" : "/contact"}
                      className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-white leading-23px inline-flex items-center gap-2"
                    >
                      {getTranslation("footer.exploreProperties", locale)}

                      <i
                        className={`icon-next ${isRTL ? "rotate-180" : ""}`}
                      ></i>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            {/* Footer main */}
            <div className="container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-x-30px text-sm lg:text-base text-white">
              {/* Footer about */}
              <div className="xl:col-start-1 xl:col-span-5 mb-60px">
                <div className="mb-15px">
                  <Link href={locale === "en" ? "/en" : "/"}>
                    <Image
                      src="/images/logo-white.png"
                      alt=""
                      width={170}
                      height={43}
                    />
                  </Link>

                  <p className="leading-1.8 mb-5 lg:mb-25px text-white">
                    {getTranslation("footer.aboutDescription", locale)}
                  </p>

                  <ul className={`flex items-center gap-x-5 mt-5`}>
                    {socialLinks.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} target="_blank" className="leading-1.8">
                          <i className={item.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer company */}
              <FooterLinkColumn
                title={getTranslation("footer.company", locale)}
                links={companyLinks}
                locale={locale}
              />

              {/* Footer resources */}
              <FooterLinkColumn
                title={getTranslation("footer.resources", locale)}
                links={resourcesLinks}
                locale={locale}
              />

              {/* Footer contact */}
              <FooterContactColumn locale={locale} />
            </div>
          </div>
        </div>

        {/* Footer copyright */}
        <div className=" py-25px bg-section-bg-7 text-sm lg:text-base text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-y-15px">
              <div>
                <p className="leading-1.8 text-center text-white">
                  {getTranslation("footer.allRightsReserved", locale)} @{" "}
                  {getTranslation("footer.companyName", locale)} 2026
                </p>
              </div>
{/* 
              <ul
                className={`flex gap-x-25px items-center justify-center lg:justify-end capitalize font-semibold font-poppins text-sm ${
                  isRTL ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <li>
                  <a href="#" className="leading-1.8">
                    {getTranslation("footer.termsAndConditions", locale)}
                  </a>
                </li>

                <li>
                  <a href="#" className="leading-1.8">
                    {getTranslation("footer.claim", locale)}
                  </a>
                </li>

                <li>
                  <a href="#" className="leading-1.8">
                    {getTranslation("footer.privacyAndPolicy", locale)}
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll top */}
      <button
        className={`scroll-up w-30px h-30px lg:w-10 lg:h-10 lg:text-xl bg-section-bg-1 text-heading-color hover:bg-secondary-color hover:text-white rotate-[45deg] shadow-box-shadow-3 fixed bottom-[50px] lg:bottom-[70px] flex justify-center items-center z-xl ${
          isRTL ? "right-[3%]" : "left-[3%]"
        } ${showScrollUp ? "active" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fa fa-angle-up leading-1 -rotate-[45deg] inline-block"></i>
      </button>
    </>
  );
}
