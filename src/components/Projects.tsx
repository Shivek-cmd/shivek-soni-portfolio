"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, projectCategories } from "@/data/projects";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeCategory));

  return (
    <section id="projects" className="relative py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/30" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium uppercase tracking-widest text-gold">
              My Work
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            Real Builds.{" "}
            <span className="text-gradient-gold">Real Results.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-text-secondary text-lg">
            Every project below is a live GoHighLevel system I&apos;ve built from scratch —
            CRM pipelines, funnels, AI automations, e-commerce stores, and more.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gold text-background"
                  : "border border-border text-text-secondary hover:border-border-hover hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                layout
                className="group"
              >
                <Link
                  href={`/my-work/${project.slug}`}
                  className="flex flex-col h-full rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-gold/30 hover:bg-card hover:shadow-xl hover:shadow-gold/5 transition-all duration-500"
                  aria-label={`View case study: ${project.client} — ${project.industry}`}
                >
                  {/* Real project hero image */}
                  <div className="relative h-48 overflow-hidden bg-card">
                    <Image
                      src={project.heroImage}
                      alt={`${project.client} — GoHighLevel ${project.industry} project`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                    {/* Industry badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-block rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold text-background">
                        {project.industry}
                      </span>
                    </div>
                    {/* Location badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-2.5 py-1 text-xs text-white/80">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location.split(",")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-gold transition-colors mb-2">
                      {project.client}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                      {project.shortDescription}
                    </p>

                    {/* Key stats */}
                    <div className="flex gap-5 mb-4 pt-3 border-t border-border">
                      {project.stats.slice(0, 2).map((stat, si) => (
                        <div key={si}>
                          <div className="text-base font-bold text-gold">{stat.value}</div>
                          <div className="text-[11px] text-text-muted mt-0.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-gold/5 border border-gold/10 text-gold/80 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-gold group-hover:gap-3 transition-all duration-300">
                      View Case Study
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-background hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-200"
          >
            Build Something Like This
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
