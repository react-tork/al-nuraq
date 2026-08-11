"use client";

import { useState } from "react";
import NiceSelectField from "@/components/common/NiceSelectField";

export default function ContactForm() {
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

  return (
    <section>
      <div className="container">
        <div className="relative -bottom-[100px] z-10">
          <form
            onSubmit={handleSubmit}
            className="form-primary bg-white shadow-box-shadow-2 px-25px pt-10 pb-50px md:p-50px md:pt-10"
          >
            <h4 className="text-22px font-semibold leading-1.3 pr-10px border-r-2 border-secondary-color text-heading-color mb-30px">
              Get A Quote
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-30px">
              {/* name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="text-paragraph-color pr-5 pl-50px outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block w-full rounded-none placeholder:opacity-60 placeholder:text-sm placeholder:text-paragraph-color"
                />
                <span className="absolute top-1/2 -translate-y-1/2 left-4">
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
                  placeholder="Enter email address"
                  className="text-paragraph-color pr-5 pl-50px outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block w-full rounded-none placeholder:opacity-60 placeholder:text-sm placeholder:text-paragraph-color"
                />
                <span className="absolute top-1/2 -translate-y-1/2 left-4">
                  <i className="fas fa-envelope text-sm lg:text-base text-secondary-color font-bold" />
                </span>
              </div>
              {/* type select */}
              <div className="relative">
                <NiceSelectField
                  name="serviceType"
                  value={form.serviceType}
                  onChange={(val) => setForm((prev) => ({ ...prev, serviceType: val }))}
                  placeholder="Select Service Type"
                  options={[
                    { value: "Property Management", label: "Property Management" },
                    { value: "Mortgage Service", label: "Mortgage Service" },
                    { value: "Consulting Service", label: "Consulting Service" },
                    { value: "Home Buying", label: "Home Buying" },
                    { value: "Home Selling", label: "Home Selling" },
                    { value: "Escrow Services", label: "Escrow Services" },
                  ]}
                />
              </div>
              {/* number */}
              <div className="relative">
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="text-paragraph-color pr-5 pl-50px outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block w-full rounded-none placeholder:opacity-60 placeholder:text-sm placeholder:text-paragraph-color"
                />
                <span className="absolute top-1/2 -translate-y-1/2 left-4">
                  <i className="fas fa-phone text-sm lg:text-base text-secondary-color font-bold" />
                </span>
              </div>
              {/* message */}
              <div className="relative md:col-start-1 md:col-span-2 mb-35px">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter message"
                  className="min-h-[150px] text-paragraph-color pr-5 pl-50px py-15px outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block w-full rounded-none placeholder:opacity-60 placeholder:text-sm placeholder:text-paragraph-color"
                />
                <span className="absolute top-[30px] -translate-y-1/2 left-4">
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
              <label htmlFor="agree" className="text-sm mr-1">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

            {/* submit button */}
            <div className="pb-5">
              <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block z-0">
                <span className="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-black -z-1 group-hover:w-0 transition-all duration-300" />
                <button
                  type="submit"
                  className="relative z-1 px-5 md:px-25px lg:px-10 py-10px md:py-15px lg:py-17px group-hover:text-heading-color leading-23px uppercase"
                >
                  get an free service
                </button>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}