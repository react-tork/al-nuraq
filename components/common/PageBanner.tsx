type PageBannerProps = {
  title: string;
  bgImage?: string; // defaults to the shared banner background
};

export default function PageBanner({
  title,
  bgImage = "/images/bg/test.png",
}: PageBannerProps) {
  return (
    <section>
      <div
        className="relative w-full bg-no-repeat bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* gradient overlay — darker at bottom for text contrast, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/40 to-white/10" />

        {/* decorative accent — soft gold circle, top-right */}
        <div className="absolute -right-50px -top-50px w-[220px] h-[220px] rounded-full bg-secondary-color/10 blur-2xl -z-1" />

        {/* decorative accent — thin gold line under content */}
        <div className="absolute left-0 bottom-0 w-full h-3px bg-gradient-to-r from-secondary-color via-secondary-color/40 to-transparent" />

        <div className="relative container py-110px">
          <h1 className="animate__animated animate__fadeInUp text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-bold text-heading-color mb-0">
            <span className="relative inline-block leading-[1.2] text-center">
              {title}
              <span className="absolute -bottom-4 left-0 w-20 h-[3px] rounded-full bg-secondary-color" />
              <span className="absolute -bottom-4 left-[84px] w-2 h-[3px] rounded-full bg-secondary-color/40" />
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
