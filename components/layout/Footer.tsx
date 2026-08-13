"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, getPathnameWithLocale, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";


/* "Company" footer link column */
const companyLinks = [
  { href: "/about", key: "footer.about" },
  { href: "/what-we-buy", key: "footer.whatWeBuy" },
  { href: "/industrial-solutions", key: "footer.industrialSolutions" },
  { href: "/scrap-pickup", key: "footer.scrapPickup" },
  { href: "/service-areas", key: "footer.serviceAreas" },
  { href: "/how-it-works", key: "footer.howItWorks" },
];

/* "Resources" footer link column */
const resourcesLinks = [
  { href: "/blog", key: "footer.blog" },
  { href: "/faq", key: "footer.faq" },
];

/* Footer social icons */
const socialLinks = [
  { href: "https://www.facebook.com", icon: "fab fa-facebook-f", label: "Facebook" },
  { href: "https://x.com", icon: "fab fa-twitter", label: "Twitter" },
  { href: "https://www.linkedin.com", icon: "fab fa-linkedin", label: "LinkedIn" },
  { href: "https://www.youtube.com", icon: "fab fa-youtube", label: "YouTube" },
];

/* Footer link column renderer (shared markup for Company/Resources) */
function FooterLinkColumn({
  title,
  links,
  locale,
}: {
  title: string;
  links: { href: string; key: string }[];
  locale: Locale;
}) {
  return (
    <div className="xl:col-span-2 mb-60px">
      <h3 className="text-22px font-bold mb-25px text-white">
        <span className="leading-1.3"> {title} </span>
      </h3>
      <ul className="space-y-[15px]">
        {links.map((item) => {
          const label = getTranslation(item.key, locale);
          const href = locale === 'en' ? `/en${item.href}` : item.href;
          return (
            <li key={label}>
              <Link
                href={href}
                className="hover:text-secondary-color translate-x-5 hover:translate-x-0 group leading-1.8"
              >
                <span className="text-secondary-color pe-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
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

/* "Contact" footer column renderer (link + contact details) */
function FooterContactColumn({ locale }: { locale: Locale }) {
  return (
    <div className="xl:col-span-2 mb-60px">
      <h3 className="text-22px font-bold mb-25px text-white">
        <span className="leading-1.3"> {getTranslation('footer.contact', locale)} </span>
      </h3>
      <ul className="space-y-[15px]">
        <li>
          <Link
            href={locale === 'en' ? '/en/contact' : '/contact'}
            className="hover:text-secondary-color translate-x-5 hover:translate-x-0 group leading-1.8"
          >
            <span className="text-secondary-color pe-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
              //
            </span>
            {getTranslation('footer.contactUs', locale)}
          </Link>
        </li>
        <li>
          <p className="leading-1.8 text-white flex">
            <i className="icon-placeholder ml-15px mt-1"></i>
            <span>{getTranslation('footer.address', locale)}</span>
          </p>
        </li>
        <li>
          <a href="tel:+966510679737" className="leading-1.8 flex">
            <i className="icon-call ml-15px mt-1"></i>
            <span>{getTranslation('footer.phone', locale)}</span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/966510679737"
            className="leading-1.8 flex"
          >
            <i className="icon-whatsapp ml-15px mt-1"></i>
            <span>{getTranslation('footer.whatsapp', locale)}</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:mohishinhossen@gmail.com"
            className="leading-1.8 flex"
          >
            <i className="icon-mail ml-15px mt-1"></i>
            <span>{getTranslation('footer.email', locale)}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;
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
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const switchLocale = (newLocale: Locale) => {
    const newPathname = getPathnameWithLocale(pathname, newLocale);
    window.location.href = newPathname;
  };

  return (
    <>
    <footer>

      {/* footer start */}
      <div className="pt-187px pb-5 px-15px 3xl:px-[2%] 4xl:px-[5%] mt-95px bg-section-bg-2 text-sm lg:text-base text-white relative">
        <div className="px-15px">
          {/* footer top */}
          <div className="container w-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="px-25px lg:px-60px py-50px bg-secondary-color text-white flex justify-center lg:justify-between items-center flex-col lg:flex-row gap-y-30px lg:gap-0 sm:whitespace-nowrap">
              <div>
                <h5 className="text-xl md:text-26px lg:text-3xl xl:text-4xl text-white font-bold mb-15px">
                  <span className="leading-1.3">{getTranslation('footer.ctaTitle', locale)}</span>
                </h5>
                <p className="text-white leading-1.8">
                  {getTranslation('footer.ctaDescription', locale)}
                </p>
              </div>
              <div>
                <h5 className="capitalize inline-block text-sm md:text-base text-primary-color hover:text-white hover:bg-primary-color relative group whitespace-nowrap font-normal transition-all duration-300 shadow-box-shadow-3 mb-0">
                  <span className="inline-block absolute top-0 right-0 w-full h-full bg-white group-hover:bg-secondary-color z-1 group-hover:w-0 transition-all duration-300"></span>
                  <Link
                    href={locale === 'en' ? '/en/contact' : '/contact'}
                    className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-white leading-23px"
                  >
                    {getTranslation('footer.exploreProperties', locale)} <i className="icon-next"></i>
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          {/* footer main */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-x-30px text-sm lg:text-base text-white">
            {/* footer about */}
            <div className="xl:col-start-1 xl:col-span-3 mb-60px lg:pl-35px">
              <div className="mb-15px">
                <Link href={locale === 'en' ? '/en' : '/'}>
                  <Image
                    src="/images/logo-white.png"
                    alt=""
                    width={170}
                    height={43}
                  />
                </Link>

                <p className="leading-1.8 mb-5 lg:mb-25px text-white">
                  {getTranslation('footer.aboutDescription', locale)}
                </p>

                <ul className="flex items-center gap-x-5 mt-5">
                  {socialLinks.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="leading-1.8">
                        <i className={item.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* footer company */}
            <FooterLinkColumn title={getTranslation('footer.company', locale)} links={companyLinks} locale={locale} />
            {/* footer resources */}
            <FooterLinkColumn title={getTranslation('footer.resources', locale)} links={resourcesLinks} locale={locale} />
            {/* footer contact */}
            <FooterContactColumn locale={locale} />
            {/* footer newsletter */}
            <div className="xl:col-start-10 xl:col-span-3 mb-60px">
              {/* <h3 className="text-22px font-bold mb-25px text-white">
                <span className="leading-1.3"> {getTranslation('footer.newsletter', locale)} </span>
              </h3>
              <p className="leading-1.8 mb-5 lg:mb-25px text-white">
                {getTranslation('footer.newsletterDescription', locale)}
              </p> */}

              {/* subscription input */}
              {/* <div>
                <form className="w-full relative">
                  <input
                    type="text"
                    placeholder={getTranslation('footer.emailPlaceholder', locale)}
                    className="w-full text-sm text-paragraph-color pr-5 pl-50px placeholder:text-paragraph-color outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block rounded-none"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 left-0 h-full px-18px text-white bg-secondary-color hover:bg-primary-color"
                  >
                    <i className="fas fa-location-arrow text-lg font-bold"></i>
                  </button>
                </form>
              </div> */}
              {/* payment methods */}
              {/* <div>
                <h3 className="text-base lg:text-lg font-bold mt-30px mb-15px text-white">
                  <span className="leading-1.3"> {getTranslation('footer.weAccept', locale)} </span>
                </h3>
                <Image
                  src="/images/icons/payment-4.png"
                  alt="Payment Image"
                  width={370}
                  height={42}
                />

              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* footer copyright */}
      <div className="py-25px px-15px 3xl:px-[2%] 4xl:px-[5%] bg-section-bg-7 text-sm lg:text-base text-white">
        <div className="px-15px">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <p className="leading-1.8 text-center lg:text-start text-white">
                {getTranslation('footer.allRightsReserved', locale)} @ {getTranslation('footer.companyName', locale)} 2024
              </p>
            </div>

            <ul className="flex gap-x-25px items-center justify-center lg:justify-end capitalize font-semibold font-poppins text-sm">
              <li>
                <a href="#" className="leading-1.8">
                  {getTranslation('footer.termsAndConditions', locale)}
                </a>
              </li>
              <li>
                <a href="#" className="leading-1.8">
                  {" "}
                  {getTranslation('footer.claim', locale)}
                </a>
              </li>
              <li>
                <a href="#" className="leading-1.8">
                  {" "}
                  {getTranslation('footer.privacyAndPolicy', locale)}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    {/* scroll top */}
    <button
      className={`scroll-up w-30px h-30px lg:w-10 lg:h-10 lg:text-xl bg-section-bg-1 text-heading-color hover:bg-secondary-color hover:text-white rotate-[45deg] shadow-box-shadow-3 fixed bottom-[50px] lg:bottom-[70px] left-[3%] flex justify-center items-center z-xl ${
        showScrollUp ? "active" : ""
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="fa fa-angle-up leading-1 -rotate-[45deg] inline-block"></i>
    </button>
    </>
  );
}
