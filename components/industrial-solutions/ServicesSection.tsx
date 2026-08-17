type ServiceCard = {
  icon: string; // flaticon icon class, e.g. "flaticon-house"
  title: string;
  description: string;
  href: string;
};

type ServicesSectionProps = {
  sectionLabel?: string;
  heading?: string;
  services?: ServiceCard[];
  learnMoreLabel?: string;
};

const defaultServices: ServiceCard[] = [
  {
    icon: "flaticon-house",
    title: "Factory Scrap",
    description:
      "Organized purchasing and collection of production scrap, metal offcuts, and factory equipment from manufacturing facilities.",
    href: "/industrial-solutions-scrap",
  },
  {
    icon: "flaticon-mortgage",
    title: "Machinery & Equipment",
    description:
      "Assessment and purchase of decommissioned machines, motors, compressors and production line equipment.",
    href: "/scrap/machinery-scrap",
  },
  {
    icon: "flaticon-operator",
    title: "Bulk Metal Scrap",
    description:
      "Handling of large volumes of ferrous and non-ferrous metal scrap from industrial operations.",
    href: "/scrap/metal-scrap",
  },
  {
    icon: "flaticon-house-1",
    title: "Electrical Equipment",
    description:
      "Purchase of electrical panels, switchgear, cables and electrical components from industrial upgrades or shutdowns.",
    href: "/scrap/cable-wire-scrap",
  },
  {
    icon: "flaticon-house-3",
    title: "Warehouse Clearance",
    description:
      "Support for commercial and industrial facilities clearing redundant stock, equipment and materials.",
    href: "/industrial-solutions",
  },
  {
    icon: "flaticon-official-documents",
    title: "Construction Scrap",
    description:
      "Purchase of metal scrap generated from construction, MEP, renovation, and demolition projects, with reliable collection and competitive pricing for all types of metal waste.",
    href: "/scrap/construction",
  },
];

export default function ServicesSection({
  sectionLabel = "Our Services",
  heading = "Industrial Scrap Services",
  services = defaultServices,
  learnMoreLabel = "Learn More",
}: ServicesSectionProps) {
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

        {/* service cards */}
        <div className="service-cards flex flex-wrap justify-center items-center text-center -mx-[15px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card basis-full sm:basis-1/2 lg:basis-1/3 px-[15px] mb-[30px]"
            >
              <div className="group border border-border-color-1 shadow-box-shadow-1 bg-white relative py-10 pb-[35px] px-[30px] transition-all duration-300">
                <div className="text-center mb-5 text-6xl">
                  <i className={`${service.icon} leading-[1] text-secondary-color`} />
                </div>

                <h6 className="text-lg md:text-xl lg:text-[22px] xl:text-2xl text-heading-color font-bold mb-1">
                  <a
                    href={service.href}
                    className="hover:text-secondary-color leading-[1.3] transition-colors duration-300"
                  >
                    {service.title}
                  </a>
                </h6>

                <p className="text-sm mb-25px ">
                  <span className="leading-[1.8] line-clamp-3">{service.description}</span>
                </p>

                <a
                  href={service.href}
                  className="text-sm font-semibold text-secondary-color inline-flex items-center gap-1 hover:gap-2 transition-all duration-300"
                >
                  {learnMoreLabel}
                  <span className="rtl:rotate-180 inline-block transition-transform duration-300">→</span>
                </a>

                <span className="hover-line absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-0 group-hover:w-full h-1 bg-secondary-color transition-all duration-300 block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}