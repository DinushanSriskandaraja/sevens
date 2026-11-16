import type { Metadata } from "next";
import { getAllBlogPosts, getFeaturedBlogPosts } from "@/lib/blogs";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog — Web Design, Development & Digital Product Insights | Sevens",
  description:
    "Explore the latest insights on web development, mobile app design, e-commerce strategies, dark mode trends, and design systems from the Sevens engineering team.",
  openGraph: {
    title: "Blog — Insights & Digital Strategy | Sevens",
    description:
      "Explore the latest insights on web development, mobile app design, e-commerce strategies, and design systems from Sevens.",
    type: "website",
    siteName: "Sevens",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Insights & Digital Strategy | Sevens",
    description:
      "Explore the latest insights on web development, mobile app design, and digital products from Sevens.",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featuredPosts = getFeaturedBlogPosts();

  return <BlogClient posts={posts} featuredPosts={featuredPosts} />;
}
