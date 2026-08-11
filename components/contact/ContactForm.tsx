"use client";

import { useState } from "react";
import NiceSelectField from "@/components/common/NiceSelectField";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

export default function ContactForm() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    serviceType: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up actual submit handler (API route / email service)
    console.log(form);
  };

  const serviceOptions = [
    { value: "Metal Scrap", label: getTranslation('contact.form.serviceMetalScrap', locale) },
    { value: "Copper Scrap", label: getTranslation('contact.form.serviceCopperScrap', locale) },
    { value: "Aluminium Scrap", label: getTranslation('contact.form.serviceAluminiumScrap', locale) },
    { value: "Iron & Steel", label: getTranslation('contact.form.serviceIronSteel', locale) },
    { value: "Cable & Wire", label: getTranslation('contact.form.serviceCableWire', locale) },
    { value: "Machinery Scrap", label: getTranslation('contact.form.serviceMachineryScrap', locale) },
    { value: "E-Scrap", label: getTranslation('contact.form.serviceEScrap', locale) },
    { value: "Battery Scrap", label: getTranslation('contact.form.serviceBatteryScrap', locale) },
    { value: "Industrial Scrap", label: getTranslation('contact.form.serviceIndustrialScrap', locale) },
  ];


  return (
    <section>
      <div className="container">
        <div className="relative -bottom-[100px] z-10">
          <form
            onSubmit={handleSubmit}
            className="form-primary bg-white shadow-box-shadow-2 px-25px pt-10 pb-50px md:p-50px md:pt-10"
          >
            <h4 className="text-22px font-semibold leading-1.3 pe-10px border-e-2 border-secondary-color text-heading-color mb-30px rtl:ps-10px rtl:pe-0 rtl:border-s-2 rtl:border-e-0">
              {getTranslation('contact.form.title', locale)}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-30px">
              {/* name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={getTranslation('contact.form.namePlaceholder', locale)}
                  className="text-paragraph-color pe-5 ps-50px outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block w-full rounded-none placeholder:opacity-60 placeholder:text-sm placeholder:text-paragraph-color rtl:ps-5 rtl:pe-50px"
                />
                <span className="absolute top-1/2 -translate-y-1/2 start-4 rtl:end-4 rtl:start-auto">
                  <i className="fas fa-user text-sm lg:text-base text-secondary-color font-bold" />
                </span>
              </div>
              {/* email */}
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={getTranslation('contact.form.emailPlaceholder', locale)}
                  className="text-paragraph-color pe-5 ps-50px outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block w-full rounded-none placeholder:opacity-60 placeholder:text-sm placeholder:text-paragraph-color rtl:ps-5 rtl:pe-50px"
                />
                <span className="absolute top-1/2 -translate-y-1/2 start-4 rtl:end-4 rtl:start-auto">
                  <i className="fas fa-envelope text-sm lg:text-base text-secondary-color font-bold" />
                </span>
              </div>
              {/* type select */}
              <div className="relative">
                <NiceSelectField
                  name="serviceType"
                  value={form.serviceType}
                  onChange={(val) => setForm((prev) => ({ ...prev, serviceType: val }))}
                  placeholder={getTranslation('contact.form.servicePlaceholder', locale)}
                  options={serviceOptions}
                />
              </div>
              {/* number */}
              <div className="relative">
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={getTranslation('contact.form.phonePlaceholder', locale)}
                  className="text-paragraph-color pe-5 ps-50px outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block w-full rounded-none placeholder:opacity-60 placeholder:text-sm placeholder:text-paragraph-color rtl:ps-5 rtl:pe-50px"
                />
                <span className="absolute top-1/2 -translate-y-1/2 start-4 rtl:end-4 rtl:start-auto">
                  <i className="fas fa-phone text-sm lg:text-base text-secondary-color font-bold" />
                </span>
              </div>
              {/* message */}
              <div className="relative md:col-start-1 md:col-span-2 mb-35px">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={getTranslation('contact.form.messagePlaceholder', locale)}
                  className="min-h-[150px] text-paragraph-color pe-5 ps-50px py-15px outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block w-full rounded-none placeholder:opacity-60 placeholder:text-sm placeholder:text-paragraph-color rtl:ps-5 rtl:pe-50px"
                />
                <span className="absolute top-[30px] -translate-y-1/2 start-4 rtl:end-4 rtl:start-auto">
                  <i className="fas fa-pencil text-sm lg:text-base text-secondary-color font-bold" />
                </span>
              </div>
            </div>
            {/* agree */}
            <div className="text-sm flex items-center mb-30px">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree" className="text-sm ms-1 rtl:me-1 rtl:ms-0">
                {getTranslation('contact.form.agreeLabel', locale)}
              </label>
            </div>

            {/* submit button */}
            <div className="pb-5">
              <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block z-0">
                <span className="inline-block absolute top-0 end-0 w-full h-full bg-secondary-color group-hover:bg-black -z-1 group-hover:w-0 transition-all duration-300 rtl:start-0 rtl:end-auto" />
                <button
                  type="submit"
                  className="relative z-1 px-5 md:px-25px lg:px-10 py-10px md:py-15px lg:py-17px group-hover:text-heading-color leading-23px uppercase"
                >
                  {getTranslation('contact.form.submitButtonText', locale)}
                </button>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}