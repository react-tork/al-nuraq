"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


/* "Company" footer link column */
const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/shop", label: "All Products" },
  { href: "/locations", label: "Locations Map" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact us" },
];

/* "Services" footer link column */
const servicesLinks = [
  { href: "/order-tracking", label: "Order tracking" },
  { href: "/wishlist", label: "Wish List" },
  { href: "/login", label: "Login" },
  { href: "/account", label: "My account" },
  { href: "/about", label: "Terms & Conditions" },
  { href: "/about", label: "Promotional Offers" },
];

/* "Customer Care" footer link column */
const customerCareLinks = [
  { href: "/login", label: "Login" },
  { href: "/account", label: "My account" },
  { href: "/wishlist", label: "Wish List" },
  { href: "/order-tracking", label: "Order tracking" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact us" },
];

/* Footer social icons */
const socialLinks = [
  { href: "https://www.facebook.com", icon: "fab fa-facebook-f", label: "Facebook" },
  { href: "https://x.com", icon: "fab fa-twitter", label: "Twitter" },
  { href: "https://www.linkedin.com", icon: "fab fa-linkedin", label: "LinkedIn" },
  { href: "https://www.youtube.com", icon: "fab fa-youtube", label: "YouTube" },
];

/* Footer link column renderer (shared markup for Company/Services/Customer Care) */
function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="xl:col-span-2 mb-60px">
      <h3 className="text-22px font-bold mb-25px text-white">
        <span className="leading-1.3"> {title} </span>
      </h3>
      <ul className="space-y-[15px]">
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="hover:text-secondary-color translate-x-5 hover:translate-x-0 group leading-1.8"
            >
              <span className="text-secondary-color pr-15px opacity-0 group-hover:opacity-100 transition-all duration-300">
                //
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
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
                  <span className="leading-1.3">Looking for a dream home?</span>
                </h5>
                <p className="text-white leading-1.8">
                  We can help you realize your dream of a new home
                </p>
              </div>
              <div>
                <h5 className="capitalize inline-block text-sm md:text-base text-primary-color hover:text-white hover:bg-primary-color relative group whitespace-nowrap font-normal transition-all duration-300 shadow-box-shadow-3 mb-0">
                  <span className="inline-block absolute top-0 right-0 w-full h-full bg-white group-hover:bg-secondary-color z-1 group-hover:w-0 transition-all duration-300"></span>
                  <a
                    href="/contact"
                    className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-white leading-23px"
                  >
                    Explore Properties <i className="icon-next"></i>
                  </a>
                </h5>
              </div>
            </div>
          </div>

          {/* footer main */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-x-30px text-sm lg:text-base text-white">
            {/* footer about */}
            <div className="xl:col-start-1 xl:col-span-3 mb-60px lg:pl-35px">
              <div className="mb-15px">
                <Link href="/">
                  <Image
                    src="/images/logo-2.png"
                    alt=""
                    width={170}
                    height={43}
                  />
                </Link>

                <p className="leading-1.8 mb-5 lg:mb-25px text-white">
                  Lorem Ipsum is simply dummy text of the and typesetting
                  industry. Lorem Ipsum is dummy text of the printing.
                </p>

                <ul className="space-y-2">
                  <li>
                    <p className="leading-1.8 text-white flex">
                      <i className="icon-placeholder ml-15px mt-1"></i>
                      <span>Brooklyn, New York, United States</span>
                    </p>
                  </li>
                  <li>
                    <a href="tel:+0123-456789" className="leading-1.8 flex">
                      <i className="icon-call ml-15px mt-1"></i>
                      <span>+0123-456789</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:example@example.com"
                      className="leading-1.8 flex"
                    >
                      <i className="icon-mail ml-15px mt-1"></i>
                      <span>example@example.com</span>
                    </a>
                  </li>
                </ul>
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
            <FooterLinkColumn title="Company" links={companyLinks} />
            {/* footer services */}
            <FooterLinkColumn title="Services" links={servicesLinks} />
            {/* footer customer care */}
            <FooterLinkColumn title="Customer Care" links={customerCareLinks} />
            {/* footer newsletter */}
            <div className="xl:col-start-10 xl:col-span-3 mb-60px">
              <h3 className="text-22px font-bold mb-25px text-white">
                <span className="leading-1.3"> Newsletter </span>
              </h3>
              <p className="leading-1.8 mb-5 lg:mb-25px text-white">
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>

              {/* subscription input */}
              <div>
                <form className="w-full relative">
                  <input
                    type="text"
                    placeholder="Email*"
                    className="w-full text-sm text-paragraph-color pr-5 pl-50px placeholder:text-paragraph-color outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block rounded-none"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 left-0 h-full px-18px text-white bg-secondary-color hover:bg-primary-color"
                  >
                    <i className="fas fa-location-arrow text-lg font-bold"></i>
                  </button>
                </form>
              </div>
              {/* payment methods */}
              <div>
                <h3 className="text-base lg:text-lg font-bold mt-30px mb-15px text-white">
                  <span className="leading-1.3"> We Accept </span>
                </h3>
                <Image
                  src="/images/icons/payment-4.png"
                  alt="Payment Image"
                  width={370}
                  height={42}
                />

              </div>
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
                All Rights Reserved @ Company 2024
              </p>
            </div>

            <ul className="flex gap-x-25px items-center justify-center lg:justify-end capitalize font-semibold font-poppins text-sm">
              <li>
                <a href="#" className="leading-1.8">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="leading-1.8">
                  {" "}
                  Claim
                </a>
              </li>
              <li>
                <a href="#" className="leading-1.8">
                  {" "}
                  Privacy & Policy
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


