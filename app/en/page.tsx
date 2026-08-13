import HeroBanner5 from "@/components/home/HeroBanner5";
import About from "@/components/home/About";
import Counter from "@/components/home/Counter";
import WhatWeBuy from "@/components/home/WhatWeBuy";
import About2 from "@/components/home/About2";
import Services from "@/components/home/Services";
// import FeaturedApartments from "@/components/home/FeaturedApartments";
import VideoCta from "@/components/home/VideoCta";
import ApartmentsPlan from "@/components/home/ApartmentsPlan";
import Amenities from "@/components/home/Amenities";
import Testimonials from "@/components/home/Testimonials";
import NewsBlog from "@/components/home/NewsBlog";

export default function Home() {
  return (
    <main>
      <HeroBanner5 />
      <Services />
      <WhatWeBuy />
      <About />
      <Counter />
      <About2 />
      {/* <FeaturedApartments /> */}
      <ApartmentsPlan />
      <VideoCta />
      <Amenities />
      <Testimonials />
      <NewsBlog />
    </main>
  );
}
