// components/blog/BlogSidebar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function BlogSidebar() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    try {
      // TODO: replace with actual newsletter API endpoint
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="lg:col-start-9 lg:col-span-4 space-y-10 mt-[100px] lg:mt-0">
      {/* newsletter */}
      <div className="px-5 xl:px-35px pt-35px pb-10 xl:py-50px bg-primary-color relative z-0">
        <h4 className="text-sm md:text-15px lg:text-base text-secondary-color font-bold mb-5px">
          <span className="leading-1.3 md:leading-1.3 lg:leading-1.3">
            // subscribe
          </span>
        </h4>
        <h4 className="text-4xl text-white font-bold mb-25px">
          <span className="leading-1.3">Get Newsletter</span>
        </h4>

        <form
          onSubmit={handleSubmit}
          className="h-[70px] w-full leading-[70px] flex text-white"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="text-sm font-semibold h-full flex-grow pr-25px bg-primary-color-3 focus:outline-none outline-none px-15px"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="text-sm lg:text-base h-full w-[68px] flex items-center justify-center bg-secondary-color hover:bg-secondary-color-2 flex-shrink-0 disabled:opacity-60"
          >
            <i className="fas fa-envelope" />
          </button>
        </form>

        {status === "success" && (
          <p className="text-sm text-white mt-3">Subscribed successfully!</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-300 mt-3">
            Something went wrong. Please try again.
          </p>
        )}

        <div className="text-[120px] text-color-1 absolute right-5 top-[15%] -z-1 opacity-10 leading-1">
          <i className="fas fa-envelope-open-text" />
        </div>
      </div>

      {/* img */}
      <div>
        <Link href="/shop">
          <Image
            src="/images/banner/banner-3.jpg"
            alt=""
            width={370}
            height={480}
            className="w-full h-auto"
          />
        </Link>
      </div>
    </div>
  );
}