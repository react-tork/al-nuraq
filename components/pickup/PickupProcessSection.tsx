type ProcessStep = {
  number: string; // "01", "02"...
  title: string;
  description: string;
};

type PickupProcessSectionProps = {
  sectionLabel?: string;
  heading?: string;
  steps?: ProcessStep[];
};

const defaultSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Contact Al Nuraq",
    description:
      "Call, WhatsApp or complete the contact form to get in touch with our team.",
  },
  {
    number: "02",
    title: "Share Material & Location",
    description:
      "Describe the scrap material you have, the approximate quantity and your location in Dammam, Riyadh or surrounding areas.",
  },
  {
    number: "03",
    title: "Discuss Evaluation",
    description:
      "Our team reviews the details and provides an initial assessment based on material type and quantity.",
  },
  {
    number: "04",
    title: "Arrange Collection",
    description:
      "If eligible, we arrange a convenient time for collection at your location.",
  },
  {
    number: "05",
    title: "Material is Weighed & Evaluated",
    description:
      "At the point of collection, materials are accurately weighed and assessed.",
  },
  {
    number: "06",
    title: "Final Payment",
    description:
      "Payment is completed according to the agreed process after final evaluation and weighing.",
  },
];

export default function PickupProcessSection({
  sectionLabel = "How Collection Works",
  heading = "The Pickup Process",
  steps = defaultSteps,
}: PickupProcessSectionProps) {
  return (
    <section className="bg-section-bg-1">
      <div className="container pt-[30px] pb-[70px]">
        {/* section heading */}
        <div className="text-center mb-[50px]">
          <p className="text-sm md:text-[15px] lg:text-base text-secondary-color bg-secondary-color/10 uppercase mb-[15px] py-0.5 px-5 rounded-full inline-block font-semibold">
            <span className="leading-[1.3]">{sectionLabel}</span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[26px] lg:text-3xl xl:text-[44px] text-heading-color font-bold">
            <span className="leading-[1.3]">{heading}</span>
          </h2>
        </div>

        {/* process cards */}
        <div className="process-cards flex flex-wrap justify-center items-stretch text-center -mx-[15px]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="process-card basis-full sm:basis-1/2 lg:basis-1/3 px-[15px] mb-[30px]"
            >
              <div className="group h-full border border-border-color-1 shadow-box-shadow-1 bg-white relative py-10 pb-[35px] px-[30px] transition-all duration-300">
                <div className="text-center mb-5">
                  <span className="inline-flex items-center justify-center w-[70px] h-[70px] rounded-full bg-secondary-color/10 border-2 border-secondary-color text-xl text-secondary-color font-bold">
                    {step.number}
                  </span>
                </div>

                <h6 className="text-lg md:text-xl lg:text-[22px] xl:text-2xl text-heading-color font-bold mb-1">
                  {step.title}
                </h6>

                <p className="text-sm">
                  <span className="leading-[1.8]">{step.description}</span>
                </p>

                <span className="hover-line absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-0 group-hover:w-full h-1 bg-secondary-color transition-all duration-300 block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}