import { notFound } from "next/navigation";
import BlogDetails from "@/components/blog/BlogDetails";
import {
  getPostBySlug,
  getRelatedPosts,
  getRecentPosts,
} from "@/lib/blog";
import { type Locale } from "@/lib/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale: Locale = "en";
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
