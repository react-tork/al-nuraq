"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { type BlogPost } from "@/lib/blog";
import { getTranslation } from "@/lib/translations";
import { type Locale } from "@/lib/i18n";
import { socialLinks } from "@/lib/social";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface BlogDetailsProps {
  post: BlogPost; // current blog post
  relatedPosts: BlogPost[]; // 2-4 posts from the same category/tag
  recentPosts: BlogPost[]; // for the sidebar "Popular Blog" widget
  locale: Locale;
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function BlogDetails({
  post,
  relatedPosts,
  recentPosts,
  locale,
}: BlogDetailsProps) {
  const t = (key: string) => getTranslation(key, locale);

  // Format the raw date from post data using the active locale.
  const formatDate = (dateKey: string) => {
    const raw = t(dateKey);
    const parsed = new Date(raw);
    if (Number.isNaN(parsed.getTime())) return raw;
    return new Intl.DateTimeFormat(locale === "ar" ? "ar-SA" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(parsed);
  };

  const postDate = formatDate(post.dateKey);
  const postContent = t(post.contentKey);

  // Split content into paragraphs for a simple rich-text render.
  const paragraphs = postContent
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section>
      <div className="container modal-container property-tab pt-30 pb-140px lg:pb-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-30px">
          {/* news main content */}
          <div className="lg:col-start-1 lg:col-span-8">
            <div className="px-5 md:px-50px py-50px border-2 border-border-color-11">
              <div>
                {/* category badge */}
                <ul className="mb-5">
                  <li>
                    <span className="text-xs md:text-sm uppercase text-white px-15px pt-5px pb-0.5 bg-secondary-color hover:bg-primary-color hover:text-white font-semibold">
                      <span className="leading-1.8 md:leading-1.8">
                        {t(post.categoryKey)}
                      </span>
                    </span>
                  </li>
                </ul>

                {/* title */}
                <h1 className="text-2xl md:text-3xl font-semibold text-heading-color mb-5">
                  <span className="leading-1.3 md:leading-1.3 xl:leading-1.3">
                    {t(post.titleKey)}
                  </span>
                </h1>

                {/* meta: author, date, comments */}
                <ul className="flex gap-x-15px md:gap-x-30px items-center mb-5 flex-wrap">
                  <li>
                    <div className="flex items-center gap-10px text-xs md:text-sm font-semibold">
                      <Image
                        src={post.author.avatar}
                        alt={t(post.author.nameKey)}
                        width={30}
                        height={30}
                        className="flex-shrink-0 w-30px h-30px rounded-100% object-cover"
                      />
                      <span>
                        {t("blog.blogDetails.writtenBy")}: {t(post.author.nameKey)}
                      </span>
                    </div>
                  </li>

                  <li>
                    <p className="text-xs md:text-sm font-semibold">
                      <span className="leading-1.8 md:leading-1.8">
                        <i className="far fa-calendar-alt text-secondary-color me-5px" />
                        {postDate}
                      </span>
                    </p>
                  </li>
                </ul>

                {/* hero thumbnail */}
                <div className="leading1 relative w-full aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={t(post.titleKey)}
                    fill
                    className="object-cover -mb-1"
                  />
                </div>

                {/* main body rendered from post.content */}
                <div className="mt-30px">
                  {paragraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-sm lg:text-base my-5 lg:my-6"
                    >
                      <span className="leading-1.8 lg:leading-1.8">
                        {paragraph}
                      </span>
                    </p>
                  ))}
                </div>

                {/* tags and social */}
                <div className="flex flex-col lg:flex-row lg:justify-between mt-20">
                  <div>
                    <h4 className="text-17px md:text-lg lg:text-xl font-bold text-heading-color mb-15px">
                      <span className="leading-1.3 md:leading-1.3 xl:leading-1.3">
                        {t("blog.blogDetails.relatedTags")}
                      </span>
                    </h4>
                    <ul className="flex gap-10px flex-wrap items-center font-poppins">
                      {post.tags.map((tagKey) => (
                        <li key={tagKey}>
                          <span className="text-13px px-6 py-2 leading-1.8 bg-section-bg-1 hover:bg-secondary-color hover:text-white flex items-center justify-center font-bold">
                            {t(tagKey)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-17px md:text-lg lg:text-xl font-bold text-heading-color mb-15px mt-30px lg:mt-0">
                      <span className="leading-1.3 md:leading-1.3 xl:leading-1.3">
                        {t("blog.blogDetails.socialShare")}
                      </span>
                    </h4>
                    <ul className="text-sm lg:text-base flex gap-18px justify-center items-center text-color-1">
                      {(() => {
                        const shareBase = locale === "en" ? `/en/blog/${post.slug}` : `/blog/${post.slug}`;
                        const shareUrl = typeof window !== 'undefined' 
                          ? `${window.location.origin}${shareBase}`
                          : shareBase;
                        const shareTitle = t(post.titleKey);
                        
                        const shareTargets = [
                          {
                            platform: "facebook",
                            icon: "fab fa-facebook-f",
                            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                          },
                          {
                            platform: "twitter",
                            icon: "fab fa-twitter",
                            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
                          },
                          {
                            platform: "linkedin",
                            icon: "fab fa-linkedin",
                            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
                          },
                          {
                            platform: "whatsapp",
                            icon: "fab fa-whatsapp",
                            href: `https://wa.me/?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}`,
                          },
                        ];
                        
                        return shareTargets.map((target) => (
                          <li key={target.platform} className="leading-1.8 lg:leading-1.8">
                            <a
                              href={target.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className={target.icon} />
                            </a>
                          </li>
                        ));
                      })()}
                    </ul>
                  </div>
                </div>

                <hr className="my-50px border-b border-border-color-12 opacity-25" />

                {/* prev / next navigation */}
                <div className="grid grid-cols-1 lg:grid-cols-2 relative z-0 after:content-['\e958'] after:absolute after:start-1/2 after:top-1/2 after:-translate-x-1/2 rtl:after:translate-x-1/2 after:-translate-y-1/2 after:text-3xl after:font-icomoon after:z-1 after:text-secondary-color">
                  <div>
                    <h4 className="text-sm md:text-15px lg:text-base font-bold text-secondary-color mb-3">
                      <span className="leading-1.3 md:leading-1.3 xl:leading-1.3">
                        {t("blog.blogDetails.prevPost")}
                      </span>
                    </h4>
                    <h4 className="text-lg lg:text-2xl font-semibold text-heading-color">
                      <Link
                        href={locale === "en" ? `/en/blog/${relatedPosts[0]?.slug ?? post.slug}` : `/blog/${relatedPosts[0]?.slug ?? post.slug}`}
                        className="leading-1.3 md:leading-1.3 xl:leading-1.3"
                      >
                        {relatedPosts[0]
                          ? t(relatedPosts[0].titleKey)
                          : t(post.titleKey)}
                      </Link>
                    </h4>
                  </div>
                  <div className="text-end">
                    <h4 className="text-sm md:text-15px lg:text-base font-bold text-secondary-color mb-3">
                      <span className="leading-1.3 md:leading-1.3 xl:leading-1.3">
                        {t("blog.blogDetails.nextPost")}
                      </span>
                    </h4>
                    <h4 className="text-lg lg:text-2xl font-semibold text-heading-color">
                      <Link
                        href={locale === "en" ? `/en/blog/${relatedPosts[1]?.slug ?? post.slug}` : `/blog/${relatedPosts[1]?.slug ?? post.slug}`}
                        className="leading-1.3 md:leading-1.3 xl:leading-1.3"
                      >
                        {relatedPosts[1]
                          ? t(relatedPosts[1].titleKey)
                          : t(post.titleKey)}
                      </Link>
                    </h4>
                  </div>
                </div>
                <hr className="my-50px border-0 border-b border-border-color-12 opacity-25" />

                {/* related blogs */}
                <div className="mt-50px">
                  <h4 className="text-22px font-semibold leading-1.3 ps-10px border-s-2 border-secondary-color text-heading-color mb-30px">
                    {t("blog.blogDetails.relatedPost")}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-30px mb-20">
                    {relatedPosts.map((related) => (
                      <div key={related.id} className="group shadow-box-shadow-5">
                        <div className="leading-1 aspect-[4/3]">
                          <Link
                            href={locale === "en" ? `/en/blog/${related.slug}` : `/blog/${related.slug}`}
                            className="relative overflow-hidden block h-full"
                          >
                            <Image
                              src={related.image}
                              alt={t(related.titleKey)}
                              fill
                              className="w-full object-cover transition-all duration-700"
                            />
                          </Link>
                        </div>
                        <div className="px-5 md:ps-35px md:pe-30px pt-35px pb-30px">
                          <p className="text-xs md:text-sm mb-5 text-secondary-color">
                            <span className="leading-1.8 md:leading-1.8">
                              <i className="far fa-calendar-alt text-secondary-color me-5px" />
                              {formatDate(related.dateKey)}
                            </span>
                          </p>
                          <h4 className="text-xl font-semibold text-heading-color mb-5">
                            <Link
                              href={locale === "en" ? `/en/blog/${related.slug}` : `/blog/${related.slug}`}
                              className="hover:text-secondary-color leading-1.3"
                            >
                              {t(related.titleKey)}
                            </Link>
                          </h4>
                          <p className="text-sm">
                            <span className="leading-1.8 lg:leading-1.8">
                              {t(related.descriptionKey)}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* sidebar */}
          <div className="lg:col-start-9 lg:col-span-4 pt-100px lg:pt-0">
            {/* Popular Blog */}
            <div className="px-5 pt-35px pb-10 xl:ps-35px xl:pe-30px mb-10 border-2 border-border-color-11">
              <h4 className="text-lg font-semibold text-heading-color mb-25px">
                <span className="leading-1.3 ps-10px border-s-2 border-secondary-color">
                  {t("blog.blogDetails.popularBlog")}
                </span>
              </h4>

              <div className="news-slider-container swiper-container relative -mx-15px">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  slidesPerView={1}
                  className="popular-properties-slider static"
                >
                  {recentPosts.map((recent) => (
                    <SwiperSlide key={recent.id} className="mb-50px cursor-default">
                      <div className="px-15px">
                        <div className="group border border-border-color-13 shadow-box-shadow-4">
                          <div className="leading-1 aspect-[4/3]">
                            <Link
                              href={locale === "en" ? `/en/blog/${recent.slug}` : `/blog/${recent.slug}`}
                              className="relative overflow-hidden block h-full"
                            >
                              <Image
                                src={recent.image}
                                alt={t(recent.titleKey)}
                                fill
                                className="w-full object-cover group-hover:scale-110 transition-all duration-700"
                              />
                            </Link>
                          </div>

                          <div className="p-25px">
                            <p className="text-xs md:text-sm mb-5 text-secondary-color">
                              <span className="leading-1.8 md:leading-1.8">
                                <i className="far fa-calendar-alt text-secondary-color me-5px" />
                                {formatDate(recent.dateKey)}
                              </span>
                            </p>
                            <h4 className="text-base font-semibold text-heading-color mb-15px">
                              <Link
                                href={locale === "en" ? `/en/blog/${recent.slug}` : `/blog/${recent.slug}`}
                                className="hover:text-secondary-color leading-1.3"
                              >
                                {t(recent.titleKey)}
                              </Link>
                            </h4>
                            <p className="text-sm text-body-color leading-1.8 line-clamp-2">
                              {t(recent.descriptionKey)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Latest Blogs */}
            <div className="px-5 pt-35px pb-10 xl:ps-35px xl:pe-30px mb-10 border-2 border-border-color-11">
              <h4 className="text-lg font-semibold text-heading-color mb-25px">
                <span className="leading-1.3 ps-10px border-s-2 border-secondary-color">
                  {t("blog.blogDetails.latestBlogs")}
                </span>
              </h4>
              <ul>
                {recentPosts.map((recent, idx) => (
                  <li
                    key={recent.id}
                    className={
                      idx < recentPosts.length - 1
                        ? "pb-5 mb-30px border-b border-border-color-1"
                        : ""
                    }
                  >
                    <div className="flex gap-x-5">
                      <div className="w-20 flex-shrink-0 aspect-square">
                        <Link href={locale === "en" ? `/en/blog/${recent.slug}` : `/blog/${recent.slug}`} className="relative block h-full">
                          <Image
                            src={recent.image}
                            alt={t(recent.titleKey)}
                            fill
                            className="object-cover"
                          />
                        </Link>
                      </div>
                      <div>
                        <h6 className="text-sm font-medium mb-5px">
                          <Link
                            href={locale === "en" ? `/en/blog/${recent.slug}` : `/blog/${recent.slug}`}
                            className="leading-1.3"
                          >
                            {t(recent.titleKey)}
                          </Link>
                        </h6>
                        <div className="text-xs md:text-sm font-semibold text-secondary-color">
                          <span className="leading-1.8 md:leading-1.8">
                            <i className="far fa-calendar-alt" />{" "}
                            {formatDate(recent.dateKey)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="px-5 pt-35px pb-10 xl:ps-35px xl:pe-30px mb-10 border-2 border-border-color-11">
              <h4 className="text-lg font-semibold text-heading-color mb-25px">
                <span className="leading-1.3 ps-10px border-s-2 border-secondary-color">
                  {t("blog.blogDetails.followUs")}
                </span>
              </h4>
              <ul className="flex gap-x-15px pt-4">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm lg:text-base w-10 h-10 bg-section-bg-1 hover:bg-secondary-color hover:text-white flex items-center justify-center"
                    >
                      <i className={link.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="px-5 pt-35px pb-10 xl:ps-35px xl:pe-30px border-2 border-border-color-11">
              <h4 className="text-lg font-semibold text-heading-color mb-30px">
                <span className="leading-1.3 ps-10px border-s-2 border-secondary-color">
                  {t("blog.blogDetails.popularTags")}
                </span>
              </h4>
              <ul className="flex gap-10px flex-wrap items-center font-poppins">
                {post.tags.map((tagKey) => (
                  <li key={tagKey}>
                    <span className="text-13px px-6 py-2 leading-1.8 bg-section-bg-1 hover:bg-secondary-color hover:text-white flex items-center justify-center font-bold">
                      {t(tagKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
