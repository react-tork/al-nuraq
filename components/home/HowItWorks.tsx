type TimelineStep = {
  number: string; // "01", "02"...
  title: string;
  description: string;
};

type HowItWorksProps = {
  sectionLabel?: string; // "HOW IT WORKS"
  heading?: string; // "A Simple Way to Sell Scrap"
  intro?: string;
  steps?: TimelineStep[];
};

const defaultSteps: TimelineStep[] = [
  {
    number: "01",
    title: "Contact Us",
    description: "Reach out by phone, WhatsApp or the contact form.",
  },
  {
    number: "02",
    title: "Share Scrap Details",
    description: "Tell us what materials you have, approximate quantity and your location.",
  },
  {
    number: "03",
    title: "Evaluation & Quote",
    description: "Our team reviews the details and provides an initial assessment.",
  },
  {
    number: "04",
    title: "Collection & Weighing",
    description: "Collection is arranged where applicable and materials are accurately weighed.",
  },
  {
    number: "05",
    title: "Final Payment",
    description: "Payment is completed according to the agreed terms after final evaluation.",
  },
];

export default function HowItWorks({
  sectionLabel = "HOW IT WORKS",
  heading = "A Simple Way to Sell Scrap",
  intro = "Tell us what you have and where it is located. We'll review the details, arrange collection where applicable, and confirm the final value after evaluation and weighing.",
  steps = defaultSteps,
}: HowItWorksProps) {
  return (
    <section className="container pt-20 md:pt-24 pb-16 md:pb-20">
      {/* section heading */}
      <div className="text-center mb-[50px]">
        <p className="animate__animated animate__fadeInUp text-sm md:text-[15px] lg:text-base text-secondary-color bg-secondary-color/10 uppercase mb-[15px] py-0.5 px-5 rounded-full inline-block font-semibold tracking-wide">
          {sectionLabel}
        </p>
        <h2 className="animate__animated animate__fadeInUp text-2xl sm:text-3xl md:text-[26px] lg:text-3xl xl:text-[44px] text-heading-color font-bold">
          <span className="leading-[1.3]">{heading}</span>
        </h2>
        <p className="animate__animated animate__fadeInUp text-sm lg:text-base text-paragraph-color leading-[1.8] max-w-2xl text-center mx-auto">
          {intro}
        </p>
      </div>

      {/* timeline row — horizontal on all breakpoints; scrolls on mobile */}
      <div className="scrollbar-hide overflow-x-auto snap-x snap-mandatory md:overflow-visible">
        <div className="flex items-start gap-[30px] md:gap-0 md:justify-between min-w-max md:min-w-0 w-full">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="animate__animated animate__fadeInUp snap-center md:snap-none flex-1 md:flex-none md:w-1/5 min-w-[220px] md:min-w-0 text-center px-[15px]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* circle + connecting line */}
              <div className="relative flex items-center justify-center mb-[25px]">
                {/* connecting line + arrowhead behind the circle */}
                {index < steps.length - 1 && (
                  <span className="absolute top-1/2 left-1/2 w-full -translate-y-1/2 rtl:-translate-x-full -z-1 hidden md:flex items-center">
                    <span className="flex-1 h-[3px] bg-gradient-to-r rtl:bg-gradient-to-l from-secondary-color via-secondary-color/40 to-secondary-color/40" />
                    <svg
                      className="w-[14px] h-[14px] text-secondary-color/50 flex-shrink-0 rtl:rotate-180"
                      viewBox="0 0 14 14"
                      fill="currentColor"
                    >
                      <path d="M0 0 L14 7 L0 14 Z" />
                    </svg>
                  </span>
                )}
                <span className="relative z-10 w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-secondary-color/10 border-2 border-secondary-color" />
                  <span className="relative text-xl md:text-[22px] text-secondary-color font-bold">
                    {step.number}
                  </span>
                </span>
              </div>

              {/* title + description */}
              <h3 className="text-lg md:text-xl text-heading-color font-bold mb-[10px] min-h-[56px] md:min-h-[64px] flex items-center justify-center">
                {step.title}
              </h3>
              <p className="text-sm text-paragraph-color leading-[1.8]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
