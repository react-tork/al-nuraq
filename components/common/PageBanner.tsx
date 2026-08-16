"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPathname, getPathnameWithLocale, type Locale } from "@/lib/i18n";

type BreadcrumbItem = {
  label: string;
  href?: string; // no href = current page, not a link
};

type BannerCta = {
  label: string;
  href: string;
  isExternal?: boolean;
};

type PageBannerProps = {
  title?: string;
  bgImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  subtitle?: string;
  description?: string;
  primaryCta?: BannerCta;
  secondaryCta?: BannerCta;
};

export default function PageBanner({
  title = "Page Title",
  bgImage = "/images/bg/test.png",
  breadcrumbs = [{ label: "Home", href: "/" }, { label: "Page" }],
  subtitle = "Welcome",
  description = "Explore our services and discover how we can help you.",
  primaryCta = { label: "Get a Quote", href: "/contact" },
  secondaryCta = {
    label: "WhatsApp Us",
    href: "https://wa.me/966510679737?text=Hi%2C%20I%20want%20to%20sell%20my%20scrap.%20Can%20you%20share%20more%20details%3F",
    isExternal: true,
  },
}: PageBannerProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const localizedHref = (href: string) => {
    // External links (http, https, mailto, tel, wa.me) should not be localized
    if (/^(https?:|mailto:|tel:|wa\.me)/.test(href)) return href;
    return locale === "en" ? `/en${href}` : href;
  };

  const switchLocale = (newLocale: Locale) => {
    const newPathname = getPathnameWithLocale(pathname, newLocale);
    window.location.href = newPathname;
  };

  return (
    <section>
      <div
        className="relative w-full bg-no-repeat bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* gradient overlay — darker at bottom for text contrast, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

        {/* decorative accent — soft gold circle, top-right */}
        <div className="absolute -right-50px -top-50px w-[220px] h-[220px] rounded-full bg-secondary-color/10 blur-2xl" />

        {/* decorative accent — thin gold line under content */}
        <div className="absolute left-0 bottom-0 w-full h-3px bg-gradient-to-r from-secondary-color via-secondary-color/40 to-transparent" />

        <div className="relative container py-60px">
          {/* breadcrumbs */}
          <nav className="mb-4 text-sm text-secondary-color-light">
            {breadcrumbs.map((item, i) => (
              <span key={i}>
                {item.href ? (
                  <a href={localizedHref(item.href)} className="hover:text-secondary-color transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-secondary-color-light font-medium">{item.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span className="mx-2 text-secondary-color-light">/</span>}
              </span>
            ))}
          </nav>

          {/* subtitle */}
          <p className="animate__animated animate__fadeInUp text-secondary-color font-semibold uppercase tracking-wide text-sm mb-2">
            {subtitle}
          </p>

          <h1 className="animate__animated animate__fadeInUp text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-bold text-secondary-color mb-0">
            <span className="relative inline-block leading-[1.2]">
              {title}
              <span className="absolute -bottom-4 left-0 w-20 h-[3px] rounded-full bg-secondary-color" />
              <span className="absolute -bottom-4 left-[84px] w-2 h-[3px] rounded-full bg-secondary-color/40" />
            </span>
          </h1>

          {/* description */}
          <p className="animate__animated animate__fadeInUp mt-8 max-w-2xl text-secondary-color-light text-base sm:text-lg">
            {description}
          </p>

          {/* CTAs */}
          <div className="tab-links flex gap-x-10px mb-4 md:mb-6 animated mt-4 md:mt-6">
            <div className="active text-sm lg:text-base text-secondary-color relative group whitespace-nowrap transition-all duration-300 bg-section-bg-1 inline-block font-bold">
              <a
                href={localizedHref(primaryCta.href)}
                className="relative z-10 px-25px lg:px-10 py-15px whitespace-normal leading-1.8 lg:leading-1.8 uppercase inline-flex items-center gap-2"
              >
                <i className="fas fa-phone-alt transition-transform duration-300 group-hover:rotate-12" />
                {primaryCta.label}
              </a>
            </div>

            <div className="text-sm lg:text-base text-secondary-color-light relative group whitespace-nowrap transition-all duration-300 inline-block font-bold bg-secondary-color">
              <a
                href={localizedHref(secondaryCta.href)}
                target={secondaryCta.isExternal ? "_blank" : undefined}
                rel={secondaryCta.isExternal ? "noopener noreferrer" : undefined}
                className="relative z-10 px-25px lg:px-10 py-15px whitespace-normal leading-1.8 lg:leading-1.8 uppercase inline-flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-lg md:text-xl transition-transform duration-300 group-hover:rotate-12" />
                {secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}