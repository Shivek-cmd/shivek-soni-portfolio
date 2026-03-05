"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/data/projects";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              Projects
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            Systems That{" "}
            <span className="text-gradient-gold">Drive Results</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-text-secondary text-lg">
            Real automation builds. Real business outcomes. Here&apos;s a look
            at what I&apos;ve delivered for clients across industries.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map((cat) => (
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
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              layout
              className="group rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-border-hover hover:bg-card transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] bg-surface overflow-hidden">
                {/* PLACEHOLDER: Replace with actual project screenshot */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-surface">
                  <div className="text-center">
                    <span className="text-4xl">
                      {project.tags[0] === "CRM"
                        ? "📊"
                        : project.tags[0] === "White-Label"
                          ? "🏢"
                          : project.tags[0] === "Conversation AI"
                            ? "🤖"
                            : project.tags[0] === "Reviews"
                              ? "⭐"
                              : project.tags[0] === "Funnels"
                                ? "🚀"
                                : "💬"}
                    </span>
                    <p className="text-xs text-text-muted mt-2">
                      [Screenshot Placeholder]
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Results */}
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                    Key Results
                  </p>
                  <ul className="space-y-2">
                    {project.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
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
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-surface text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
