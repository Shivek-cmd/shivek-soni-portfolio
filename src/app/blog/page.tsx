import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/data/siteConfig";
import BlogIndexClient from "./BlogIndexClient";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "GoHighLevel Blog — Tips, Guides & Strategies | Automate with Level",
  description:
    "Expert articles on GoHighLevel CRM, automation, funnels, AI tools, and marketing strategies. Helping USA businesses grow with smarter systems.",
  keywords: [
    "GoHighLevel blog",
    "GHL tips",
    "GoHighLevel tutorials",
    "CRM automation articles",
    "marketing automation blog",
  ],
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "GoHighLevel Blog — Tips, Guides & Strategies",
    description:
      "Expert articles on GoHighLevel CRM, automation, funnels, AI tools, and marketing strategies for USA businesses.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel Blog — Tips, Guides & Strategies",
    description:
      "Expert articles on GoHighLevel CRM, automation, funnels, AI tools, and marketing strategies for USA businesses.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogIndexClient posts={posts} />;
}
