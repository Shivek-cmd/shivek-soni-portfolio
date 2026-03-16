"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
  otherProjects: Project[];
}

const ICON_MAP: Record<string, string> = {
  "CRM": "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
  "funnel": "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
  "AI": "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "booking": "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  "review": "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  "email": "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "sms": "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
  "ecommerce": "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z",
  "default": "M5 13l4 4L19 7",
};

function getIcon(feature: string): string {
  const lower = feature.toLowerCase();
  if (lower.includes("crm") || lower.includes("pipeline")) return "CRM";
  if (lower.includes("funnel") || lower.includes("landing") || lower.includes("page")) return "funnel";
  if (lower.includes("ai") || lower.includes("chatbot") || lower.includes("conversation")) return "AI";
  if (lower.includes("booking") || lower.includes("calendar") || lower.includes("appointment")) return "booking";
  if (lower.includes("review") || lower.includes("reputation") || lower.includes("star")) return "review";
  if (lower.includes("email")) return "email";
  if (lower.includes("sms") || lower.includes("text") || lower.includes("whatsapp")) return "sms";
  if (lower.includes("ecommerce") || lower.includes("product") || lower.includes("checkout") || lower.includes("stripe") || lower.includes("payment") || lower.includes("order")) return "ecommerce";
  return "default";
}

function FeatureIcon({ feature }: { feature: string }) {
  const key = getIcon(feature);
  return (
    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICON_MAP[key]} />
    </svg>
  );
}

export default function ProjectDetailClient({ project, otherProjects }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [activeScreenshot, setActiveScreenshot] = useState(0);

  return (
    <main className="min-h-screen" itemScope itemType="https://schema.org/Article">
      {/* ───────────── HERO ───────────── */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-end overflow-hidden">
        {/* Parallax background */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src={project.heroImage}
            alt={`${project.client} — ${project.industry} built with GoHighLevel`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        </motion.div>

        {/* Breadcrumb top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-28 left-0 right-0 px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-muted">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#projects" className="hover:text-gold transition-colors">My Work</Link>
              <span>/</span>
              <span className="text-gold">{project.client}</span>
            </nav>
          </div>
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full pb-16 md:pb-24 px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              {/* Industry + location badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-2 mb-5"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 border border-gold/30 px-4 py-1.5 text-xs font-semibold text-gold">
                  {project.industry}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-text-secondary">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </span>
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-medium text-text-secondary">
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-text-primary mb-6"
                itemProp="headline"
              >
                {project.client}
              </motion.h1>

              {/* Short description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-8"
                itemProp="description"
              >
                {project.shortDescription}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-background hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25 transition-all duration-200"
                >
                  Visit Live Site
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-text-primary hover:border-gold/40 hover:text-gold transition-all duration-200"
                >
                  Read Case Study
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-gold/60" />
          </motion.div>
        </div>
      </section>

      {/* ───────────── STATS BAR ───────────── */}
      <section className="relative bg-surface/60 border-y border-border py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-border">
            {project.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center px-6"
              >
                <div className="text-3xl lg:text-4xl font-heading font-bold text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CHALLENGE & SOLUTION ───────────── */}
      <section id="overview" className="relative py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-16"
          >
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium uppercase tracking-widest text-gold">The Story</span>
            <div className="h-px w-8 bg-gold" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl border border-border bg-card/40 p-8 md:p-10 hover:border-red-500/20 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-red-500/30 to-transparent" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-red-400/70">The Challenge</p>
                  <h2 className="text-xl font-heading font-bold text-text-primary mt-0.5">What Was Broken</h2>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed text-[15px]">{project.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative rounded-3xl border border-gold/20 bg-gold/5 p-8 md:p-10 hover:border-gold/40 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-gold/60 to-transparent" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold/70">The Solution</p>
                  <h2 className="text-xl font-heading font-bold text-text-primary mt-0.5">What I Built</h2>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed text-[15px]">{project.solution}</p>
            </motion.div>
          </div>

          {/* Before/After Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 rounded-2xl border border-border bg-card/30 overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-border bg-surface/40">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">Before vs. After</p>
              </div>
              <div className="divide-y divide-border">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="grid grid-cols-3 items-center gap-4 px-6 py-4">
                    <div className="text-sm text-text-muted flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400/60 flex-shrink-0" />
                      {metric.before}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-center text-text-muted/60">
                      {metric.label}
                    </div>
                    <div className="text-sm font-semibold text-gold flex items-center justify-end gap-2">
                      {metric.after}
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ───────────── SCREENSHOT GALLERY ───────────── */}
      <section className="relative py-24 bg-surface/30">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium uppercase tracking-widest text-gold">Project Gallery</span>
            <div className="h-px w-8 bg-gold" />
          </motion.div>

          {/* Main screenshot display */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Thumbnail strip */}
            <div className="lg:col-span-1 flex lg:flex-col gap-3">
              {project.screenshots.map((shot, i) => (
                <button
                  key={i}
                  onClick={() => setActiveScreenshot(i)}
                  className={`group relative flex-1 lg:flex-none rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    activeScreenshot === i ? "border-gold shadow-lg shadow-gold/20" : "border-border hover:border-gold/30"
                  }`}
                >
                  <div className="aspect-video lg:aspect-[16/9] relative bg-card">
                    <Image
                      src={shot.image}
                      alt={shot.label}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      sizes="(max-width: 1024px) 25vw, 200px"
                    />
                    {activeScreenshot === i && (
                      <div className="absolute inset-0 bg-gold/10" />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-[10px] font-medium text-white/90 truncate">{shot.label}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Main display */}
            <motion.div
              key={activeScreenshot}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-4 rounded-2xl overflow-hidden border border-border bg-card/50 shadow-2xl"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.screenshots[activeScreenshot].image}
                  alt={project.screenshots[activeScreenshot].label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 75vw"
                />
                {/* Browser chrome overlay */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-background/80 backdrop-blur-sm flex items-center gap-2 px-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1 mx-4 h-4 rounded bg-surface/60 flex items-center px-3">
                    <span className="text-[9px] text-text-muted truncate">{project.url}</span>
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-border">
                <h3 className="font-semibold text-text-primary mb-1 text-sm">{project.screenshots[activeScreenshot].label}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{project.screenshots[activeScreenshot].description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────── FEATURES BUILT ───────────── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-medium uppercase tracking-widest text-gold">What Was Built</span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
              GoHighLevel Features <span className="text-gradient-gold">Implemented</span>
            </h2>
            <p className="mt-3 text-text-secondary max-w-xl mx-auto">
              Every tool, automation, and integration built for {project.client} — {project.features.length} features total.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card/30 p-4 hover:border-gold/25 hover:bg-card/60 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <FeatureIcon feature={feature} />
                </div>
                <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">Tech Stack:</span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold"
              >
                <span className="w-1 h-1 rounded-full bg-gold" />
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────── RESULTS ───────────── */}
      <section className="relative py-24 bg-surface/40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,165,92,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-medium uppercase tracking-widest text-gold">Results</span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
              The Numbers <span className="text-gradient-gold">Speak</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {project.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-card/50 p-8 text-center overflow-hidden group hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient-gold mb-3">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Outcome statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <div className="inline-block rounded-2xl border border-gold/20 bg-gold/5 px-8 py-5 max-w-2xl">
              <p className="text-base text-text-primary font-medium leading-relaxed">
                <span className="text-gold">Outcome: </span>
                {project.outcome}
              </p>
              <div className="flex items-center justify-center gap-4 mt-3 text-xs text-text-muted">
                <span>Delivered in {project.deliveryTime}</span>
                <span className="w-1 h-1 rounded-full bg-text-muted/40" />
                <span>Built {project.yearBuilt}</span>
                <span className="w-1 h-1 rounded-full bg-text-muted/40" />
                <span>{project.areaServed}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────── TESTIMONIAL ───────────── */}
      {project.testimonial && (
        <section className="relative py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 via-card to-card p-10 md:p-14 text-center"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Quote mark */}
              <div className="absolute top-6 left-10 text-8xl text-gold/15 font-heading leading-none select-none">
                &ldquo;
              </div>
              <div className="absolute bottom-2 right-10 text-8xl text-gold/15 font-heading leading-none select-none rotate-180">
                &ldquo;
              </div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote
                  className="text-lg md:text-xl text-text-primary leading-relaxed font-light mb-8"
                  itemProp="reviewBody"
                >
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <p className="font-semibold text-text-primary" itemProp="name">{project.testimonial.author}</p>
                  <p className="text-sm text-text-muted mt-1">{project.testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ───────────── CTA BAND ───────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-surface/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,165,92,0.08)_0%,transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Want Results Like{" "}
              <span className="text-gradient-gold">{project.client}?</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
              I&apos;ve built GoHighLevel systems across {project.industry} and beyond. Let&apos;s talk about what&apos;s possible for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/lets-talk"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-background hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25 transition-all duration-200"
              >
                Book a Free Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-semibold text-text-primary hover:border-gold/40 hover:text-gold transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────── MORE PROJECTS ───────────── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 bg-gold" />
                <span className="text-sm font-medium uppercase tracking-widest text-gold">More Work</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
                Other Case Studies
              </h2>
            </div>
            <Link
              href="/#projects"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-gold transition-colors"
            >
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.slice(0, 3).map((other, i) => (
              <motion.article
                key={other.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={`/my-work/${other.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500"
                  aria-label={`Case study: ${other.client} — ${other.industry}`}
                >
                  {/* Hero thumbnail */}
                  <div className="relative h-44 overflow-hidden bg-card">
                    <Image
                      src={other.heroImage}
                      alt={other.client}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="inline-block rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold text-background">
                        {other.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="text-xs text-text-muted mb-2 flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {other.location}
                    </div>
                    <h3 className="text-lg font-heading font-bold text-text-primary group-hover:text-gold transition-colors mb-2">
                      {other.client}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-2">
                      {other.shortDescription}
                    </p>

                    {/* Stats row */}
                    <div className="flex gap-4 mb-4 pt-3 border-t border-border">
                      {other.stats.slice(0, 2).map((stat, si) => (
                        <div key={si}>
                          <div className="text-sm font-bold text-gold">{stat.value}</div>
                          <div className="text-[10px] text-text-muted">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:gap-3 transition-all duration-300">
                      View Case Study
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
