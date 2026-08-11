type BreadcrumbItem = {
  label: string;
  href?: string; // omit for the current/active page (last item)
};

type PageBannerProps = {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string; // defaults to the shared banner background
};

export default function PageBanner({
  title,
  breadcrumbs,
  bgImage = "/images/bg/14.jpg",
}: PageBannerProps) {
  return (
    <section>
      <div
        className="relative w-full bg-no-repeat bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* white overlay — sits above the background image, below the content */}
        <div className="absolute inset-0 bg-white/30 " />

        <div className="relative container py-110px">
          <h1 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-4xl font-bold text-heading-color mb-15px">
            <span className="leading-1.3 md:leading-1.3 lg:leading-1.3 xl:leading-1.3">
              {title}
            </span>
          </h1>
          <ul className="breadcrumb flex gap-30px items-center text-sm lg:text-base font-bold pt-4">
            <li className="home relative leading-1.8 lg:leading-1.8">
              <a href="/">
                <i className="fas fa-home text-secondary-color pr-1.5" /> Home
              </a>
            </li>
            {breadcrumbs.map((item, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li
                  key={item.label}
                  className={
                    isLast
                      ? "leading-1.8 lg:leading-1.8 text-heading-color"
                      : "home relative leading-1.8 lg:leading-1.8"
                  }
                >
                  {item.href && !isLast ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    item.label
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
