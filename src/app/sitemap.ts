import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { serviceCategories } from "@/data/serviceCategories";
import { getAllPosts } from "@/lib/blog";
import { blogCategories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/#services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/#projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/#process`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/#testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...serviceCategories.map((service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    // Blog index
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Blog category pages
    ...blogCategories.map((cat) => ({
      url: `${siteConfig.url}/blog/category/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    // Blog posts
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
