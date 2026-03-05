"use client";

import BlogCard from "./BlogCard";
import type { BlogPostMeta } from "@/lib/blog";

export default function RelatedPosts({ posts }: { posts: BlogPostMeta[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-20 pt-12 border-t border-border">
      <h2 className="font-heading text-2xl font-bold text-text-primary mb-8">
        Related Articles
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
