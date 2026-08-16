"use client";

import { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

type BlogPost = {
  id: number;
  categoryKey: string;
  titleKey: string;
  descriptionKey: string;
  dateKey: string;
  readTimeKey: string;
  filter: string;
};

const posts: BlogPost[] = [
  {
    id: 1,
    categoryKey: "blog.posts.post1.category",
    titleKey: "blog.posts.post1.title",
    descriptionKey: "blog.posts.post1.description",
    dateKey: "blog.posts.post1.date",
    readTimeKey: "blog.posts.post1.readTime",
    filter: "all",
  },
  {
    id: 2,
    categoryKey: "blog.posts.post2.category",
    titleKey: "blog.posts.post2.title",
    descriptionKey: "blog.posts.post2.description",
    dateKey: "blog.posts.post2.date",
    readTimeKey: "blog.posts.post2.readTime",
    filter: "copper",
  },
  {
    id: 3,
    categoryKey: "blog.posts.post3.category",
    titleKey: "blog.posts.post3.title",
    descriptionKey: "blog.posts.post3.description",
    dateKey: "blog.posts.post3.date",
    readTimeKey: "blog.posts.post3.readTime",
    filter: "industrial",
  },
  {
    id: 4,
    categoryKey: "blog.posts.post4.category",
    titleKey: "blog.posts.post4.title",
    descriptionKey: "blog.posts.post4.description",
    dateKey: "blog.posts.post4.date",
    readTimeKey: "blog.posts.post4.readTime",
    filter: "aluminium",
  },
  {
    id: 5,
    categoryKey: "blog.posts.post5.category",
    titleKey: "blog.posts.post5.title",
    descriptionKey: "blog.posts.post5.description",
    dateKey: "blog.posts.post5.date",
    readTimeKey: "blog.posts.post5.readTime",
    filter: "all",
  },
  {
    id: 6,
    categoryKey: "blog.posts.post6.category",
    titleKey: "blog.posts.post6.title",
    descriptionKey: "blog.posts.post6.description",
    dateKey: "blog.posts.post6.date",
    readTimeKey: "blog.posts.post6.readTime",
    filter: "scrapMetal",
  },
  {
    id: 7,
    categoryKey: "blog.posts.post7.category",
    titleKey: "blog.posts.post7.title",
    descriptionKey: "blog.posts.post7.description",
    dateKey: "blog.posts.post7.date",
    readTimeKey: "blog.posts.post7.readTime",
    filter: "industrial",
  },
  {
    id: 8,
    categoryKey: "blog.posts.post8.category",
    titleKey: "blog.posts.post8.title",
    descriptionKey: "blog.posts.post8.description",
    dateKey: "blog.posts.post8.date",
    readTimeKey: "blog.posts.post8.readTime",
    filter: "all",
  },
];

const filters = [
  { key: "all", labelKey: "blog.filters.all" },
  { key: "scrapMetal", labelKey: "blog.filters.scrapMetal" },
  { key: "copper", labelKey: "blog.filters.copper" },
  { key: "aluminium", labelKey: "blog.filters.aluminium" },
  { key: "industrial", labelKey: "blog.filters.industrialScrap" },
  { key: "eWaste", labelKey: "blog.filters.eWaste" },
  { key: "construction", labelKey: "blog.filters.constructionScrap" },
];

export default function BlogPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter((post) => post.filter === activeFilter);

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("blog.banner.breadcrumbHome", locale), href: "/" },
          { label: getTranslation("blog.banner.breadcrumbBlog", locale) },
        ]}
        subtitle={getTranslation("blog.banner.subtitle", locale)}
        title={getTranslation("blog.banner.title", locale)}
        description={getTranslation("blog.banner.description", locale)}
      />

      {/* Blog listing */}
      <section className="bg-section-bg-1">
        <div className="container py-60px">
          {/* filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-50px">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2.5 text-sm md:text-base font-semibold rounded-full transition-all duration-300 border ${
                  activeFilter === filter.key
                    ? "bg-secondary-color text-white border-secondary-color"
                    : "bg-white text-heading-color border-border-color-1 hover:border-secondary-color hover:text-secondary-color"
                }`}
              >
                {getTranslation(filter.labelKey, locale)}
              </button>
            ))}
          </div>

          {/* blog cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30px">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white border border-border-color-1 shadow-box-shadow-1 hover:shadow-box-shadow-4 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* card body */}
                <div className="p-30px flex flex-col flex-1">
                  {/* category + read time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs md:text-sm font-semibold text-secondary-color bg-secondary-color/10 px-3 py-1 rounded-full">
                      {getTranslation(post.categoryKey, locale)}
                    </span>
                    <span className="text-xs md:text-sm text-body-color flex items-center gap-1.5">
                      <i className="far fa-clock text-secondary-color" />
                      {getTranslation(post.readTimeKey, locale)} {getTranslation("blog.readTime", locale)}
                    </span>
                  </div>

                  {/* title */}
                  <h3 className="text-lg md:text-xl lg:text-22px font-semibold text-heading-color mb-3">
                    <a
                      href="/blog-details"
                      className="hover:text-secondary-color leading-1.3 line-clamp-2 transition-colors duration-300"
                    >
                      {getTranslation(post.titleKey, locale)}
                    </a>
                  </h3>

                  {/* description */}
                  <p className="text-sm text-body-color leading-1.8 mb-5 line-clamp-3 flex-1">
                    {getTranslation(post.descriptionKey, locale)}
                  </p>

                  {/* footer */}
                  <div className="pt-5 mt-auto border-t border-border-color-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-sm font-semibold text-body-color flex items-center gap-1.5">
                        <i className="far fa-calendar-alt text-secondary-color" />
                        {getTranslation(post.dateKey, locale)}
                      </span>
                      <a
                        href="/blog-details"
                        className="text-xs md:text-sm font-semibold text-secondary-color uppercase hover:text-heading-color transition-colors duration-300"
                      >
                        {getTranslation("blog.read", locale)} <i className="fas fa-arrow-right rtl:rotate-180" />
                      </a>
                    </div>
                  </div>
                </div>

                <span className="hover-line absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-0 group-hover:w-full h-1 bg-secondary-color transition-all duration-300 block" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
