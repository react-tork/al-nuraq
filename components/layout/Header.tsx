"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CartDrawer from "./CartDrawer";
import MobileMenu from "./MobileMenu";

/* Navigation menu items */
const navigation = [
  {
    label: "About",
    slug: "/about",
  },
  {
    label: "What We Buy",
    children: [
      {
        label: "All Services",
        slug: "/what-we-buy",
      },
      {
        label: "Metal Scrap",
        slug: "/what-we-buy/metal-scrap",
      },
      {
        label: "Copper Scrap",
        slug: "/what-we-buy/copper-scrap",
      },
      {
        label: "Aluminium Scrap",
        slug: "/what-we-buy/aluminium-scrap",
      },
      {
        label: "Iron & Steel",
        slug: "/what-we-buy/iron-steel",
      },
      {
        label: "Cable & Wire",
        slug: "/what-we-buy/cable-wire",
      },
      {
        label: "Machinery Scrap",
        slug: "/what-we-buy/machinery-scrap",
      },
      {
        label: "E-Scrap",
        slug: "/what-we-buy/e-scrap",
      },
      {
        label: "Battery Scrap",
        slug: "/what-we-buy/battery-scrap",
      },
      {
        label: "Industrial Scrap",
        slug: "/what-we-buy/industrial-scrap",
      },
    ],
  },
  {
    label: "Service Areas",
    slug: "/service-areas",
  },
  {
    label: "Contact",
    slug: "/contact",
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
        <div className="container flex md:flex-row md:justify-between items-center relative py-21px">
          {/* logo area */}
          <div className="mt-10px mb-22px md:mt-0 md:mb-0 leading-1 flex-1">
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
              {navigation.map((item) =>
                item.children ? (
                  /* item with dropdown */
                  <li key={item.label} className="relative group">
                    <a
                      href="#"
                      className="text-lg xl:text-15px 2xl:text-lg text-heading-color hover:text-secondary-color font-semibold whitespace-nowrap pl-10px py-22px"
                    >
                      {item.label}{" "}
                      <span className="text-sm font-extrabold -ml-0.5">+</span>
                    </a>
                    {/* dropdown */}
                    <ul className="py-15px border-t-[5px] border-secondary-color bg-white w-dropdown shadow-box-shadow-4 absolute left-0 top-full opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-xl">
                      {item.children.map((child) => (
                        <li key={child.slug}>
                          <a
                            className="whitespace-nowrap px-30px py-2"
                            href={child.slug}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  /* item with direct link */
                  <li key={item.label} className="relative group">
                    <a
                      href={item.slug}
                      className="text-lg xl:text-15px 2xl:text-lg text-heading-color hover:text-secondary-color font-semibold whitespace-nowrap pl-10px py-22px"
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* header right */}
          <div>
            <ul className="flex gap-10px">
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
