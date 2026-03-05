"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { BlogPostMeta } from "@/lib/blog";

export default function BlogCard({ post, index = 0 }: { post: BlogPostMeta; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block rounded-2xl border border-border bg-card/60 overflow-hidden hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
      >
        {/* Thumbnail */}
        <div className="relative h-48 bg-surface overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold text-background capitalize">
              {post.category.replace(/-/g, " ")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="w-1 h-1 rounded-full bg-text-muted" />
            <span>{post.readingTime}</span>
          </div>

          <h3 className="text-lg font-heading font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-gold transition-colors">
            {post.title}
          </h3>

          <p className="text-sm text-text-secondary line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-text-muted">{post.author}</span>
            <span className="text-xs font-medium text-gold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Read more
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
