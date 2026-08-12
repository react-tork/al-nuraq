"use client";

import PageBanner from "@/components/common/PageBanner";
import ContactIcons from "@/components/contact/ContactIcons";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

export default function ContactPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;
  const homeHref = locale === "en" ? "/en" : "/";

  return (
    <main>
      <PageBanner
        title={getTranslation("contact.pageTitle", locale)}
        breadcrumbs={[{ label: getTranslation("contact.breadcrumb", locale) }]}
        homeLabel={getTranslation("common.home", locale)}
        homeHref={homeHref}
      />
      <ContactIcons />
      <ContactForm />
      <ContactMap />
    </main>
  );
}
