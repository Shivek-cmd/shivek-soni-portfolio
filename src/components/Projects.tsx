"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { projects, projectCategories } from "@/data/projects";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
              onClick={() => {
                setActiveCategory(cat);
                setExpandedId(null);
              }}
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
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedId === project.id;
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  layout
                  className="group rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-gold/20 hover:bg-card hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
                >
                  {/* Project Image Placeholder */}
                  <div className="relative aspect-[16/10] bg-surface overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card via-surface to-card">
                      <div className="text-center px-6">
                        <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-xs text-text-muted">
                          Screenshot Placeholder
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Industry & Client */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                        {project.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-gold transition-colors">
                      {project.client}
                    </h3>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Outcome */}
                    <div className="mt-4 flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      <p className="text-sm font-medium text-text-primary">
                        {project.outcome}
                      </p>
                    </div>

                    {/* GHL Feature Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-gold/5 border border-gold/10 text-gold/80 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Features */}
                    <button
                      onClick={() =>
                        setExpandedId(isExpanded ? null : project.id)
                      }
                      className="mt-4 text-xs font-medium text-text-muted hover:text-gold transition-colors flex items-center gap-1"
                    >
                      {isExpanded ? "Hide" : "Show"} GHL Features Built ({project.features.length})
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-3 space-y-1.5 border-t border-border pt-3">
                            {project.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-xs text-text-secondary"
                              >
                                <svg
                                  className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Visit Site Button */}
                    <div className="mt-5 pt-4 border-t border-border">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors group/link"
                      >
                        Visit Site
                        <svg
                          className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
