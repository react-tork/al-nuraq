import Image from "next/image";

type InfoListSectionProps = {
  title: string;
  subtitle: string;
  items: string[];
  image?: { src: string; alt: string };
  imagePosition?: "start" | "end";
  className?: string;
};

/**
 * Reusable "Info List Section" (e.g. "What We Buy", "Who We Serve").
 *
 * Pure presentational component — all text comes via props (the parent is
 * responsible for passing translated strings through the project's i18n
 * setup). RTL/LTR is handled purely with Tailwind logical properties and
 * DOM ordering inside a `flex-row`, so the image side auto-flips with the
 * document's writing direction — no left/right logic anywhere.
 *
 * The section is full-width so a background can be applied via `className`
 * (e.g. `bg-section-bg-1`) for alternating section separation; the inner
 * content is constrained by the `container` class.
 */
export default function InfoListSection({
  title,
  subtitle,
  items,
  image,
  imagePosition = "start",
  className = "",
}: InfoListSectionProps) {
  const imageBlock = image ? (
    <div className="w-full lg:w-1/2">
      <div className="relative group h-full">
        {/* decorative offset shape behind the image */}
        <div className="absolute inset-0 bg-secondary-color/10 rounded-10px translate-x-2 translate-y-2" />
        <div className="relative overflow-hidden rounded-10px border border-black/5 shadow-lg h-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={1000}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  ) : null;

  const contentBlock = (
    <div className="w-full lg:w-1/2">
      <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 ps-5 pe-5 rounded-full inline-flex items-center font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary-color inline-block me-2" />
        <span className="leading-1.3">{subtitle}</span>
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold mb-15px">
        <span className="leading-1.3">{title}</span>
      </h2>
      <span className="block w-12 h-1 rounded-full bg-secondary-color mb-30px" />
      <ul className="flex flex-col gap-y-15px">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-white hover:shadow-md rounded-10px px-4 py-3.5 border border-black/5 flex items-start gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary-color/5"
          >
            <span className="w-7 h-7 rounded-full bg-secondary-color flex items-center justify-center flex-shrink-0">
              <i className="fas fa-check text-white text-sm" />
            </span>
            <span className="text-sm lg:text-base text-paragraph-color leading-1.8 pt-1">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className={`py-60px ${className}`}>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-stretch gap-30px">
          {imagePosition === "start" ? (
            <>
              {imageBlock}
              {contentBlock}
            </>
          ) : (
            <>
              {contentBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
