"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import CartDrawer from "./CartDrawer";
import MobileMenu from "./MobileMenu";
import { getLocaleFromPathname, getPathnameWithLocale, getPathnameWithoutLocale, type Locale } from "@/lib/i18n";

import arTranslations from "@/messages/ar.json";
import enTranslations from "@/messages/en.json";

/* Navigation menu items */
const navigation = [
  { label: "About", slug: "/about", key: "header.about" },
  {
    label: "What We Buy",
    key: "header.whatWeBuy",
    children: [
      { label: "All Services", slug: "/what-we-buy", key: "header.allServices" },
      { label: "Metal Scrap", slug: "/scrap/metal-scrap", key: "header.metalScrap" },
      { label: "Copper Scrap", slug: "/scrap/copper-scrap", key: "header.copperScrap" },
      { label: "Aluminium Scrap", slug: "/scrap/aluminium-scrap", key: "header.aluminiumScrap" },
      { label: "Iron & Steel", slug: "/scrap/iron-steel-scrap", key: "header.ironSteelScrap" },
      { label: "Cable & Wire", slug: "/scrap/cable-wire-scrap", key: "header.cableWireScrap" },
      { label: "Machinery Scrap", slug: "/scrap/machinery-scrap", key: "header.machineryScrap" },
      { label: "E-Scrap", slug: "/scrap/e-scrap", key: "header.eScrap" },
      { label: "Battery Scrap", slug: "/scrap/battery-scrap", key: "header.batteryScrap" },
      { label: "Industrial Scrap", slug: "/scrap/industrial-scrap", key: "header.industrialScrap" },
    ],
  },
  { label: "Service Areas", slug: "/service-areas", key: "header.serviceAreas" },
  { label: "Contact", slug: "/contact", key: "header.contact" },
];

function getTranslation(key: string, locale: Locale): string {
  const translations = locale === 'ar' ? arTranslations : enTranslations;
  const keys = key.split('.');
  let value: any = translations;
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}

export default function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;
  const isHome = pathname === "/" || pathname === "/en";
  const activeHref = getPathnameWithoutLocale(pathname);


  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    const newPathname = getPathnameWithLocale(pathname, newLocale);
    window.location.href = newPathname;
  };

  const stickyActive = scrollY > 300;
  const stickyHiding = scrollY > 200 && scrollY <= 300;

  /* Home page: initial state overlays the hero video (absolute,
     transparent). Other pages: initial state sits in normal flow
     with a solid bg, exactly like the original template. */
  const stickyStyle = stickyActive
    ? { position: "fixed" as const, top: 0, left: 0, right: 0 }
    : stickyHiding
      ? {
        position: "fixed" as const,
        top: -(stickyRef.current?.offsetHeight ?? 0),
        left: 0,
        right: 0,
      }
      : isHome
        ? { position: "absolute" as const, top: 0, left: 0, right: 0 }
        : undefined;

  /* Overlay (white text/logo) only applies on home page before scroll */
  const isOverlay = isHome && !stickyActive;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCartOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const anyOpen = cartOpen || mobileOpen;
    document.body.style.overflow = anyOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen, mobileOpen]);

  return (
    <header className="relative z-xl">

      {/* navbar main */}
      <div
        ref={stickyRef}
        style={stickyStyle}
        className={`sticky-header z-sm transition-all duration-700 ${stickyActive ? "active" : ""
          } ${!isHome || stickyActive ? "bg-white" : "bg-gradient-color-2"}`}

      >
        <div className="container flex md:flex-row md:justify-between items-center relative py-21px">
          {/* logo area */}
          <div className="mt-10px mb-22px md:mt-0 md:mb-0 leading-1 flex-1">
            <Link href={locale === 'en' ? '/en' : '/'}>
              <Image
                src={!isHome || stickyActive ? "/images/logo.png" : "/images/logo-white.png"}
                alt=""
                width={170}
                height={43}
                priority
                className="w-[125px] md:w-[150px] h-auto"
              />

            </Link>
          </div>

          <nav className="flex-grow hidden xl:block">
            <ul className="flex items-center justify-center gap-15px xl:gap-5">
              {navigation.map((item) => {
                const isParentActive =
                  item.children &&
                  (activeHref === item.children[0].slug ||
                    activeHref.startsWith(item.children[0].slug + "/"));
                return item.children ? (
                  <li key={item.label} className="relative group">
                    <a
                      href="#"
                      className={`text-lg xl:text-15px 2xl:text-lg font-semibold whitespace-nowrap ps-10px py-22px hover:text-secondary-color ${isOverlay
                          ? "text-white"
                          : isParentActive
                            ? "text-secondary-color"
                            : "text-heading-color"
                        }`}
                    >
                      {getTranslation(item.key, locale)}{" "}
                      <i
                        className={`fas fa-chevron-down text-xs  transition-all duration-300 group-hover:rotate-180 ${isOverlay ? "text-white" : ""
                          }`}
                      ></i>
                    </a>

                    <ul className="py-15px border-t-[5px] border-secondary-color bg-white w-dropdown shadow-box-shadow-4 absolute start-0 top-full opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-xl">
                      {item.children.map((child) => {
                        const isChildActive = activeHref === child.slug;
                        return (
                          <li key={child.slug}>
                            <Link
                              className={`whitespace-nowrap px-30px py-2 hover:text-secondary-color ${isChildActive
                                  ? "text-secondary-color font-semibold"
                                  : "text-heading-color"
                                }`}
                              href={locale === 'en' ? `/en${child.slug}` : child.slug}
                            >
                              {getTranslation(child.key, locale)}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label} className="relative group">
                    <Link
                      href={locale === 'en' ? `/en${item.slug}` : item.slug}
                      className={`text-lg xl:text-15px 2xl:text-lg font-semibold whitespace-nowrap ps-10px py-22px hover:text-secondary-color ${isOverlay
                          ? "text-white"
                          : activeHref === item.slug
                            ? "text-secondary-color"
                            : "text-heading-color"
                        }`}
                    >
                      {getTranslation(item.key, locale)}
                    </Link>
                  </li>
                );
              })}

            </ul>
          </nav>

          {/* header right */}
          <div>
            <ul className="flex gap-10px items-center">
              <li>
                <button
                  onClick={() => switchLocale(locale === 'ar' ? 'en' : 'ar')}
                  className={`px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-md ${isOverlay ? "text-white bg-white/10" : "text-heading-color bg-heading-color/5"
                    }`}
                  aria-label="Switch language"
                >
                  {getTranslation('header.languageSwitcher', locale)}
                </button>
              </li>
              <li className="block xl:hidden">
                <button
                  className={`show-drawer h-50px w-50px shadow-box-shadow-1 flex justify-center items-center transition-all duration-300 relative ${isOverlay ? "bg-white" : "text-heading-color"
                    }`}
                  onClick={() => setMobileOpen((prev) => !prev)}
                  aria-label="Toggle menu"

                >
                  <span
                    className={`utilize-toggle ${mobileOpen ? "close" : ""
                      }`}
                  >
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      ></path>
                      <path d="M300,320 L540,320" id="middle"></path>
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
                      ></path>
                    </svg>
                  </span>
                </button>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}