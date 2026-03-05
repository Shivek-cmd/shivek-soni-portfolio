import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { calculateReadingTime } from "./readingTime";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  title: string;
  description: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  thumbnail: string;
  featured: boolean;
  canonical: string;
  readingTime: string;
  excerpt: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      title: data.title ?? "",
      description: data.description ?? "",
      slug: data.slug ?? file.replace(/\.mdx$/, ""),
      date: data.date ?? "",
      category: data.category ?? "",
      tags: data.tags ?? [],
      author: data.author ?? "Shivek Soni",
      thumbnail: data.thumbnail ?? "/og-image.png",
      featured: data.featured ?? false,
      canonical: data.canonical ?? "",
      readingTime: calculateReadingTime(content),
      excerpt: data.description ?? content.slice(0, 160).replace(/[#*>\n]/g, "").trim(),
    } satisfies BlogPostMeta;
  });
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  if (!fs.existsSync(BLOG_DIR)) return undefined;
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const postSlug = data.slug ?? file.replace(/\.mdx$/, "");
    if (postSlug === slug) {
      return {
        title: data.title ?? "",
        description: data.description ?? "",
        slug: postSlug,
        date: data.date ?? "",
        category: data.category ?? "",
        tags: data.tags ?? [],
        author: data.author ?? "Shivek Soni",
        thumbnail: data.thumbnail ?? "/og-image.png",
        featured: data.featured ?? false,
        canonical: data.canonical ?? "",
        readingTime: calculateReadingTime(content),
        excerpt: data.description ?? content.slice(0, 160).replace(/[#*>\n]/g, "").trim(),
        content,
      };
    }
  }
  return undefined;
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(currentSlug: string, category: string, tags: string[], limit = 3): BlogPostMeta[] {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug);
  const sameCategory = all.filter((p) => p.category === category);
  const tagMatches = all
    .filter((p) => p.category !== category)
    .map((p) => ({
      ...p,
      matchCount: p.tags.filter((t) => tags.includes(t)).length,
    }))
    .filter((p) => p.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);
  const result = [...sameCategory, ...tagMatches].slice(0, limit);
  if (result.length < limit) {
    const remaining = all.filter((p) => !result.some((r) => r.slug === p.slug));
    result.push(...remaining.slice(0, limit - result.length));
  }
  return result.slice(0, limit);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}
