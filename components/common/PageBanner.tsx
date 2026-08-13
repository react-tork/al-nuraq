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
  secondaryCta = { label: "Contact Us", href: "/contact" },
}: PageBannerProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const localizedHref = (href: string) =>
    locale === "en" ? `/en${href}` : href;

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
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/40 to-white/10" />

        {/* decorative accent — soft gold circle, top-right */}
        <div className="absolute -right-50px -top-50px w-[220px] h-[220px] rounded-full bg-secondary-color/10 blur-2xl -z-1" />

        {/* decorative accent — thin gold line under content */}
        <div className="absolute left-0 bottom-0 w-full h-3px bg-gradient-to-r from-secondary-color via-secondary-color/40 to-transparent" />

        <div className="relative container py-110px">
          {/* breadcrumbs */}
          <nav className="mb-4 text-sm text-heading-color/70">
            {breadcrumbs.map((item, i) => (
              <span key={i}>
                {item.href ? (
                  <a href={localizedHref(item.href)} className="hover:text-secondary-color transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-heading-color font-medium">{item.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span className="mx-2 text-heading-color/40">/</span>}
              </span>
            ))}
          </nav>

          {/* subtitle */}
          <p className="animate__animated animate__fadeInUp text-secondary-color font-semibold uppercase tracking-wide text-sm mb-2">
            {subtitle}
          </p>

          <h1 className="animate__animated animate__fadeInUp text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-bold text-heading-color mb-0">
            <span className="relative inline-block leading-[1.2]">
              {title}
              <span className="absolute -bottom-4 left-0 w-20 h-[3px] rounded-full bg-secondary-color" />
              <span className="absolute -bottom-4 left-[84px] w-2 h-[3px] rounded-full bg-secondary-color/40" />
            </span>
          </h1>

          {/* description */}
          <p className="animate__animated animate__fadeInUp mt-8 max-w-2xl text-heading-color/80 text-base sm:text-lg">
            {description}
          </p>

          {/* CTAs */}
          <div className="animate__animated animate__fadeInUp mt-6 flex flex-wrap gap-4">
            <a
              href={localizedHref(primaryCta.href)}
              className="inline-flex items-center px-6 py-3 rounded-full bg-secondary-color text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {primaryCta.label}
            </a>
            <a
              href={localizedHref(secondaryCta.href)}
              className="inline-flex items-center px-6 py-3 rounded-full border border-secondary-color text-secondary-color font-semibold hover:bg-secondary-color/10 transition-colors"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}