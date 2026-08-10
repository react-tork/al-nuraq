"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CartDrawer from "./CartDrawer";
import MobileMenu from "./MobileMenu";

/* Home style thumbnails used in the "Home" dropdown */
const homeStyles = [
  { href: "/", img: "/images/home-demos/home-1.jpg", label: "Home Style 01" },
  { href: "/", img: "/images/home-demos/home-2.jpg", label: "Home Style 02" },
  { href: "/", img: "/images/home-demos/home-3.jpg", label: "Home Style 03" },
  { href: "/", img: "/images/home-demos/home-4.jpg", label: "Home Style 04" },
  {
    href: "/",
    img: "/images/home-demos/home-5.jpg",
    label: "Home Style 05",
    badge: "video",
  },
  { href: "/", img: "/images/home-demos/home-6.jpg", label: "Home Style 06" },
  { href: "/", img: "/images/home-demos/home-7.jpg", label: "Home Style 07" },
  { href: "/", img: "/images/home-demos/home-8.jpg", label: "Home Style 08" },
  { href: "/", img: "/images/home-demos/home-9.jpg", label: "Home Style 09" },
  {
    href: "/",
    img: "/images/home-demos/home-10.jpg",
    label: "Home Style 10",
    badge: "map",
  },
  { href: "/", img: "/images/home-demos/home-11.jpg", label: "Home Style 11" },
];

/* "About" dropdown links */
const aboutLinks = [
  { href: "/about", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/service-details", label: "Service Details" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/portfolio-2", label: "Portfolio - 02" },
  { href: "/portfolio-details", label: "Portfolio Details" },
  { href: "/team", label: "Team" },
  { href: "/team-details", label: "Team Details" },
  { href: "/faq", label: "FAQ" },
  { href: "/locations", label: "Google Map Locations" },
];

/* "Shop" dropdown: top-level links */
const shopLinks = [
  { href: "/shop", label: "Property Grid" },
  { href: "/shop-list", label: "Property List" },
  { href: "/shop-grid", label: "Property No Sidebar" },
  { href: "/shop-left-sidebar", label: "Property Left sidebar" },
  { href: "/shop-right-sidebar", label: "Property right sidebar" },
  { href: "/product-details", label: "Property details" },
];

/* "Shop" dropdown: nested "Other Pages" submenu */
const shopOtherPages = [
  { href: "/cart", label: "Cart" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/checkout", label: "Checkout" },
  { href: "/order-tracking", label: "Order Tracking" },
  { href: "/account", label: "My Account" },
  { href: "/login", label: "Sign in" },
  { href: "/register", label: "Register" },
];

/* "News" dropdown links */
const newsLinks = [
  { href: "/blog", label: "News" },
  { href: "/blog-grid", label: "News Grid" },
  { href: "/blog-left-sidebar", label: "News Left sidebar" },
  { href: "/blog-right-sidebar", label: "News Right sidebar" },
  { href: "/blog-details", label: "News details" },
];

/* "Pages" mega menu columns */
const pagesColumns = [
  {
    title: "Inner Pages",
    links: [
      { href: "/portfolio", label: "Portfolio" },
      { href: "/portfolio-2", label: "Portfolio - 02" },
      { href: "/portfolio-details", label: "Portfolio Details" },
      { href: "/team", label: "Team" },
      { href: "/team-details", label: "Team Details" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Inner Pages",
    links: [
      { href: "/history", label: "History" },
      { href: "/add-listing", label: "Add Listing" },
      { href: "/locations", label: "Google Map Locations" },
      { href: "/404", label: "404" },
      { href: "/contact", label: "Contact" },
      { href: "/coming-soon", label: "Coming Soon" },
    ],
  },
  {
    title: "Shop Pages",
    links: [
      { href: "/shop", label: "Shop" },
      { href: "/shop-left-sidebar", label: "Shop Left sidebar" },
      { href: "/shop-right-sidebar", label: "Shop right sidebar" },
      { href: "/shop-grid", label: "Shop Grid" },
      { href: "/product-details", label: "Shop details" },
      { href: "/cart", label: "Cart" },
    ],
  },
];

/* User dropdown links */
const userLinks = [
  { href: "/login", label: "Sign in" },
  { href: "/register", label: "Register" },
  { href: "/account", label: "My Account" },
  { href: "/wishlist", label: "Wishlist" },
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const stickyRef = useRef<HTMLDivElement>(null);

  /* Sticky header — reproduces the original template's behavior:
     scroll < 200 normal flow; 200-300 fixed and pushed up out of
     view; > 300 fixed at top with `.active` (shadow + reduced
     padding, hidden below lg via CSS). */
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stickyActive = scrollY > 300;
  const stickyHiding = scrollY > 200 && scrollY <= 300;
  const stickyStyle = stickyActive
    ? { position: "fixed" as const, top: 0, left: 0, right: 0 }
    : stickyHiding
      ? {
        position: "fixed" as const,
        top: -(stickyRef.current?.offsetHeight ?? 0),
        left: 0,
        right: 0,
      }
      : undefined;

  /* Close drawers on ESC */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setCartOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Lock body scroll while a drawer is open */
  useEffect(() => {
    const anyOpen = cartOpen || mobileOpen;
    if (anyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen, mobileOpen]);

  return (
    <header>
      {/* header area start */}
      {/* header top */}
      <div className="bg-section-bg-6">
        <div className="container text-white text-13px md:text-sm font-bold">
          <div className="flex justify-center md:justify-between items-center flex-wrap md:flex-nowrap">
            <div className="flex justify-center md:block pt-2 md:pt-0">
              <ul className="basis-full md:basis-auto flex gap-6 lg:gap-9 items-center">
                <li>
                  <a
                    className="hover:text-secondary-color"
                    href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"
                  >
                    <i className="icon-mail text-secondary-color font-bold mr-0.5"></i>
                    info@webmail.com
                  </a>
                </li>
                <li>
                  <a className="hover:text-secondary-color" href="/locations">
                    <i className="icon-placeholder text-secondary-color font-bold mr-0.5"></i>
                    15/A, Nest Tower, NYC
                  </a>
                </li>
              </ul>
            </div>

            <div className="basis-full md:basis-auto flex justify-center md:block py-5px md:py-0">
              <ul className="text flex items-center gap-15px">
                <li>
                  <a href="https://www.facebook.com" title="Facebook">
                    <i className="fab fa-facebook-f font-bold"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.x.com" title="Twitter">
                    <i className="fab fa-twitter font-bold"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" title="Instagram">
                    <i className="fab fa-instagram font-bold"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.dribbble.com" title="Dribbble">
                    <i className="fab fa-dribbble font-bold"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="/add-listing"
                    className="px-4 md:px-5 py-0.5 md:py-10px mr-2 lg:mr-5 bg-secondary-color inline-block bg-opacity-100 hover:bg-opacity-60 hover:text-white"
                  >
                    Add Listing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* navbar main */}
      <div
        ref={stickyRef}
        style={stickyStyle}
        className={`sticky-header z-xl bg-white transition-all duration-700 ${stickyActive ? "active" : ""
          }`}
      >
        <div className="container flex flex-col md:flex-row justify-center md:justify-between items-center relative py-21px">
          {/* logo area */}
          <div className="mt-10px mb-22px md:mt-0 md:mb-0 leading-1">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt=""
                width={170}
                height={43}
                priority
              />

            </Link>
          </div>
          <nav className="flex-grow hidden xl:block">
            <ul className="flex items-center justify-center gap-15px xl:gap-5">
              {/* item 1 - Home */}
              <li className="relative group">
                <a
                  href="#"
                  className="text-lg xl:text-15px 2xl:text-lg text-heading-color hover:text-secondary-color font-semibold whitespace-nowrap pl-10px py-22px"
                >
                  Home <span className="text-sm font-extrabold -ml-0.5">+</span>
                </a>
                {/* dropdown */}
                <ul className="py-15px border-t-[5px] border-secondary-color bg-white w-dropdown shadow-box-shadow-4 absolute left-0 top-full opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-xl">
                  {homeStyles.map((item) => (
                    <li key={item.label} className="group/nested relative">
                      <a
                        className={`whitespace-nowrap px-30px py-2 ${item.badge ? "relative" : ""
                          }`}
                        href={item.href}
                      >
                        {item.badge && (
                          <span className="text-10px uppercase text-white bg-secondary-color px-3px absolute rtl:right-5 -top-1 rounded-sm">
                            {item.badge}
                          </span>
                        )}
                        {item.label}
                      </a>
                      <Image
                        className="w-130px h-auto absolute -bottom-2 rtl:-left-3 shadow-box-shadow-3 opacity-0 translate-y-1 invisible transition-all duration-300 group-hover/nested:opacity-100 group-hover/nested:visible group-hover/nested:translate-y-0"
                        src={item.img}
                        alt={item.label}
                        width={480}
                        height={470}
                      />
                    </li>
                  ))}
                </ul>
              </li>
              {/* item 2 - About */}
              <li className="relative group">
                <a
                  href="#"
                  className="text-lg xl:text-15px 2xl:text-lg text-heading-color hover:text-secondary-color font-semibold whitespace-nowrap pl-10px py-22px"
                >
                  About <span className="text-sm font-extrabold -ml-0.5">+</span>
                </a>
                {/* dropdown */}
                <ul className="py-15px border-t-[5px] border-secondary-color bg-white w-dropdown shadow-box-shadow-4 absolute left-0 top-full opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-xl">
                  {aboutLinks.map((item) => (
                    <li key={item.label}>
                      <a className="whitespace-nowrap px-30px py-2" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              {/* item 3 - Shop */}
              <li className="relative group">
                <a
                  href="#"
                  className="text-lg xl:text-15px 2xl:text-lg text-heading-color hover:text-secondary-color font-semibold whitespace-nowrap pl-10px py-22px"
                >
                  Shop <span className="text-sm font-extrabold -ml-0.5">+</span>
                </a>
                {/* dropdown */}
                <ul className="py-15px border-t-[5px] border-secondary-color bg-white w-dropdown shadow-box-shadow-4 absolute left-0 top-full opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-xl">
                  {shopLinks.map((item) => (
                    <li key={item.label}>
                      <a className="whitespace-nowrap px-30px py-2" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                  {/* Other Pages nested submenu */}
                  <li className="relative group/nested">
                    <a className="whitespace-nowrap px-30px py-2" href="#">
                      Other Pages
                      <span className="absolute top-1/2 -translate-y-1/2 left-3 group-hover/nested:text-secondary-color">
                        &gt;&gt;
                      </span>
                    </a>
                    {/* dropdown */}
                    <ul className="py-15px border-t-[5px] border-secondary-color w-dropdown shadow-box-shadow-4 absolute right-full top-0 opacity-0 invisible translate-y-[5px] transition-all duration-300 group-hover/nested:opacity-100 group-hover/nested:visible group-hover/nested:translate-y-0 bg-white">
                      {shopOtherPages.map((item) => (
                        <li key={item.label}>
                          <a className="whitespace-nowrap px-30px py-2" href={item.href}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
              {/* item 4 - News */}
              <li className="relative group">
                <a
                  href="#"
                  className="text-lg xl:text-15px 2xl:text-lg text-heading-color hover:text-secondary-color font-semibold whitespace-nowrap pl-10px py-22px"
                >
                  News <span className="text-sm font-extrabold -ml-0.5">+</span>
                </a>
                {/* dropdown */}
                <ul className="py-15px border-t-[5px] border-secondary-color bg-white w-dropdown shadow-box-shadow-4 absolute left-0 top-full opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-xl">
                  {newsLinks.map((item) => (
                    <li key={item.label}>
                      <a className="whitespace-nowrap px-30px py-2" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              {/* item 5 - Pages (mega menu) */}
              <li className="group">
                <a
                  href="#"
                  className="text-lg xl:text-15px 2xl:text-lg text-heading-color hover:text-secondary-color font-semibold whitespace-nowrap pl-10px py-22px"
                >
                  Pages <span className="text-sm font-extrabold -ml-0.5">+</span>
                </a>
                {/* mega menu */}
                <ul className="container w-full px-0 py-15px border-t-[5px] border-secondary-color bg-white shadow-box-shadow-4 absolute left-0 top-full opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-4 grid grid-cols-4 z-xl">
                  {pagesColumns.map((col, idx) => (
                    <li key={idx} className="pr-3 pt-3 pl-30px">
                      <ul>
                        <li>
                          <a
                            className="whitespace-nowrap px-10px py-6px bg-section-bg-1 border-b !border-dashed border-border-dashed w-full"
                            href="#"
                          >
                            {col.title}
                          </a>
                        </li>
                        <li>
                          <ul className="py-15px">
                            {col.links.map((item) => (
                              <li key={item.label}>
                                <a
                                  className="whitespace-nowrap px-10px py-2"
                                  href={item.href}
                                >
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </li>
                  ))}
                  <li className="pr-3 pt-3 pl-30px">
                    <a
                      className="whitespace-nowrap p-10px bg-section-bg-1 border-b !border-dashed border-border-dashed w-full"
                      href="/shop"
                    >
                      <Image
                        src="/images/banner/menu-banner-1.jpg"
                        alt=""
                        width={600}
                        height={767}
                        className="w-full h-auto inline-block"
                      />
                    </a>
                  </li>
                </ul>
              </li>
              {/* item 6 - Contact */}
              <li className="relative group">
                <a
                  href="/contact"
                  className="text-lg xl:text-15px 2xl:text-lg text-heading-color hover:text-secondary-color font-semibold whitespace-nowrap pl-10px py-22px"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* header right */}
          <div>
            <ul className="flex items-center gap-10px">
              {/* search */}
              <li
                className={`relative search-form-container ${searchOpen ? "active" : ""
                  }`}
              >
                <button
                  className="search-toggle h-50px w-50px text-heading-color shadow-box-shadow-1 flex justify-center items-center hover:bg-secondary-color hover:text-white transition-all duration-300"
                  onClick={() => setSearchOpen((v) => !v)}
                  aria-label="Toggle search"
                >
                  <i className="icon-search for-search-show font-bold"></i>
                  <i className="icon-cancel for-search-close font-bold hidden"></i>
                </button>

                {/* search form */}
                <div className="search-form h-0 overflow-hidden absolute left-0 top-full mt-15px transition-all duration-300 shadow-box-shadow-3 z-xl bg-white">
                  <form className="w-80 p-15px relative">
                    <input
                      type="text"
                      placeholder="Search here..."
                      className="text-sm text-paragraph-color pr-5 pl-50px placeholder:text-paragraph-color outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-60px block w-full rounded-none"
                    />
                    <button
                      type="submit"
                      className="absolute top-1/2 -translate-y-1/2 left-7 text-heading-color"
                      aria-label="Search"
                    >
                      <i className="icon-search text-lg font-bold"></i>
                    </button>
                  </form>
                </div>
              </li>
              {/* user */}
              <li className="group relative">
                <a
                  href="#"
                  className="h-50px w-50px text-heading-color shadow-box-shadow-1 flex justify-center items-center hover:bg-secondary-color hover:text-white transition-all duration-300"
                >
                  <i className="icon-user font-bold text-lg"></i>
                </a>
                {/* dropdown */}
                <ul className="py-10px w-150px shadow-box-shadow-4 absolute right-0 top-full opacity-0 invisible translate-y-4 bg-white transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-xl">
                  {userLinks.map((item) => (
                    <li key={item.label}>
                      <a className="whitespace-nowrap px-15px py-5px" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              {/* cart */}
              <li>
                <button
                  className="show-drawer h-50px w-50px text-heading-color shadow-box-shadow-1 flex justify-center items-center hover:bg-secondary-color hover:text-white transition-all duration-300"
                  onClick={() => setCartOpen(true)}
                  aria-label="Open cart"
                >
                  <i className="icon-shopping-cart font-bold text-lg"></i>
                  <sup className="ml-1 text-sm font-semibold">2</sup>
                </button>
              </li>
              {/* hamburger */}
              <li className="block xl:hidden">
                <button
                  className="show-drawer h-50px w-50px text-heading-color shadow-box-shadow-1 flex justify-center items-center transition-all duration-300 relative"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                >
                  <a href="#ltn__utilize-drawer" className="utilize-toggle">
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
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* cart sidebar */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* mobile menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
