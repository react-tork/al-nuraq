import HeroBanner5 from "@/components/home/HeroBanner5";
import About from "@/components/home/About";
// import Counter from "@/components/home/Counter";
import WhatWeBuy from "@/components/home/WhatWeBuy";
import About2 from "@/components/home/About2";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
// import FeaturedApartments from "@/components/home/FeaturedApartments";
// import VideoCta from "@/components/home/VideoCta";
// import ApartmentsPlan from "@/components/home/ApartmentsPlan";
import Amenities from "@/components/home/Amenities";
import Testimonials from "@/components/home/Testimonials";
import FaqAccordion from "@/components/faq/FaqAccordion";
import LocationArea from "@/components/service-areas/LocationArea";
import NewsBlog from "@/components/home/NewsBlog";
import { getTranslation } from "@/lib/translations";

const locale = "ar" as const;

export default function Home() {
  return (
    <main>
      <HeroBanner5 />
      {/* <Services /> */}
      <About />
      <WhatWeBuy />
      <HowItWorks />
      {/* <Counter /> */}
      <About2 />
      {/* <FeaturedApartments /> */}
      {/* <ApartmentsPlan /> */}
      {/* <VideoCta /> */}
      {/* <Amenities /> */}

      <Testimonials />
      <section className="container pt-16 md:pt-20 pb-12 md:pb-18">
        {/* section heading */}
        <div className="text-center mb-50px">
          <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
            <span className="leading-1.3">{getTranslation("home.locations.subtitle", locale)}</span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
            <span className="leading-1.3">{getTranslation("home.locations.title", locale)}</span>
          </h2>
        </div>
        <LocationArea />
      </section>
      <NewsBlog />
      <section className="container pt-16 md:pt-20 pb-12 md:pb-18">
        {/* section heading */}
        <div className="text-center mb-50px">
          <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
            <span className="leading-1.3">{getTranslation("home.faq.subtitle", locale)}</span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
            <span className="leading-1.3">{getTranslation("home.faq.title", locale)}</span>
          </h2>
        </div>
        <FaqAccordion />
      </section>

    </main>
  );
}
