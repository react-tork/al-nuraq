type AboutSectionProps = {
  image?: string;
  imageAlt?: string;
  sectionLabel?: string;
  heading?: string;
  paragraphOne?: string;
  paragraphTwo?: string;
  paragraphThree?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function AboutSection({
  image = "https://images.unsplash.com/photo-1722842895153-ba7bf9d53dfb?w=900&h=600&fit=crop&auto=format",
  imageAlt = "",
  sectionLabel = "Long-Term Relationships",
  heading = "Regular & Scheduled Collections",
  paragraphOne = "For facilities with ongoing scrap generation, Al Nuraq can discuss regular or scheduled collection arrangements based on your material volumes and operational requirements.",
  paragraphTwo = "This is particularly relevant for factories, logistics operations and commercial facilities that produce consistent volumes of metal, cable or equipment scrap on a recurring basis.",
  paragraphThree= "",
  buttonLabel = "Discuss Your Requirements",
  buttonHref = "/contact",
}: AboutSectionProps) {
  return (
    <section>
      <div className="container pt-[30px] pb-[115px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-[30px]">
          {/* about left */}
          <div
            className="lg:col-start-1 lg:col-span-5 lg:mr-[30px] relative pr-[30px] rtl:pr-0 rtl:pl-[30px] mb-10 lg:mb-0 after:w-[30px] after:h-[85%] after:absolute after:top-1/2 after:right-0 rtl:after:right-auto rtl:after:left-0 after:-translate-y-1/2 after:bg-secondary-color"
          >
            <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
          </div>

          {/* about right */}
          <div className="lg:col-start-6 lg:col-span-7">
            <div className="mb-10">
              <p className="text-sm md:text-[15px] lg:text-base text-secondary-color bg-secondary-color/10 uppercase mb-[15px] py-[1px] px-5 rounded-full inline-block font-semibold">
                <span className="leading-[1.3]">{sectionLabel}</span>
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-[26px] lg:text-3xl xl:text-[44px] text-heading-color font-bold mb-[15px]">
                <span className="leading-[1.3]">
                  {heading}
                  <span className="text-secondary-color">.</span>
                </span>
              </h2>

              <p className="text-sm lg:text-base max-w-[500px] mb-5">
                <span className="leading-[1.8]">{paragraphOne}</span>
              </p>

              <p className="text-sm lg:text-base">
                <span className="leading-[1.8]">{paragraphTwo}</span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="leading-[1.8]">{paragraphThree}</span>
              </p>
            </div>

            <div>
              <h5 className="uppercase text-sm md:text-base relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                <span className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-full h-full bg-secondary-color group-hover:bg-black z-[1] group-hover:w-0 transition-all duration-300" />
                <a
                  href={buttonHref}
                  className="relative z-10 block px-5 md:px-[25px] lg:px-10 py-[10px] md:py-3 lg:py-[17px] text-white group-hover:text-heading-color leading-[23px] uppercase"
                >
                  {buttonLabel}
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}