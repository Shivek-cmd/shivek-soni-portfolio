"use client";

import { useState } from "react";
import type { BlogCategory } from "@/data/categories";
import type { BlogPostMeta } from "@/lib/blog";
import Breadcrumb from "@/components/blog/Breadcrumb";
import CategoryFilter from "@/components/blog/CategoryFilter";
import BlogCard from "@/components/blog/BlogCard";
import { motion } from "framer-motion";

const POSTS_PER_PAGE = 10;

export default function CategoryPageClient({
  category,
  posts,
}: {
  category: BlogCategory;
  posts: BlogPostMeta[];
}) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginated = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: category.name },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              {category.description}
            </p>
          </motion.div>

          <CategoryFilter active={category.slug} />

          {paginated.length === 0 ? (
            <p className="text-center text-text-muted py-20">
              No posts in this category yet. Check back soon!
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {paginated.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav aria-label="Category pagination" className="flex justify-center items-center gap-2 mt-16">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg border border-border text-sm text-text-secondary hover:text-gold hover:border-gold/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    p === page
                      ? "bg-gold text-background"
                      : "border border-border text-text-secondary hover:text-gold hover:border-gold/40"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-lg border border-border text-sm text-text-secondary hover:text-gold hover:border-gold/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </nav>
          )}
        </div>
    </main>
  );
}
