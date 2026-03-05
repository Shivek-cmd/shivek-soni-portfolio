"use client";

import { useState } from "react";
import type { BlogPostMeta } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import CategoryFilter from "@/components/blog/CategoryFilter";
import BlogCard from "@/components/blog/BlogCard";

const POSTS_PER_PAGE = 10;

export default function BlogIndexClient({ posts }: { posts: BlogPostMeta[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginated = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <BlogHero />
        <section className="px-6 lg:px-8 pb-20">
          <div className="mx-auto max-w-7xl">
            <CategoryFilter />
            {paginated.length === 0 ? (
              <p className="text-center text-text-muted py-20">No posts yet. Check back soon!</p>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {paginated.map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav aria-label="Blog pagination" className="flex justify-center items-center gap-2 mt-16">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
