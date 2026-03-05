"use client";

import Link from "next/link";
import { blogCategories } from "@/data/categories";

export default function CategoryFilter({ active }: { active?: string }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      <Link
        href="/blog"
        className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
          !active
            ? "bg-gold text-background"
            : "bg-surface text-text-secondary hover:text-gold hover:bg-surface/80 border border-border"
        }`}
      >
        All Posts
      </Link>
      {blogCategories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/blog/category/${cat.slug}`}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
            active === cat.slug
              ? "bg-gold text-background"
              : "bg-surface text-text-secondary hover:text-gold hover:bg-surface/80 border border-border"
          }`}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
