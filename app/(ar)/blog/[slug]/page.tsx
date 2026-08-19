import { notFound } from "next/navigation";
import BlogDetails from "@/components/blog/BlogDetails";
import {
  getPostBySlug,
  getRelatedPosts,
  getRecentPosts,
} from "@/lib/blog";
import { type Locale } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Al Nuraq Blog`,
    description: "Read about scrap metal recycling tips and industry insights from Al Nuraq experts.",
    alternates: {
      canonical: `https://alnuraqscrap.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Al Nuraq Blog`,
      description: "Read about scrap metal recycling tips and industry insights from Al Nuraq experts.",
      url: `https://alnuraqscrap.com/blog/${post.slug}`,
      siteName: "Al Nuraq",
      locale: "ar_SA",
      type: "article",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.slug.replace(/-/g, ' '),
        },
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale: Locale = "ar";
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 2);
  const recentPosts = getRecentPosts(post, 4);

  return (
    <BlogDetails
      post={post}
      relatedPosts={relatedPosts}
      recentPosts={recentPosts}
      locale={locale}
    />
  );
}
