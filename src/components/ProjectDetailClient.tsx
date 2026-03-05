"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
  otherProjects: Project[];
}

// Map feature keywords to appropriate icons
function getFeatureIcon(feature: string): string {
  const lower = feature.toLowerCase();
  if (lower.includes("crm") || lower.includes("pipeline")) return "pipeline";
  if (lower.includes("funnel") || lower.includes("landing")) return "funnel";
  if (lower.includes("ai") || lower.includes("chatbot") || lower.includes("assistant")) return "ai";
  if (lower.includes("email") || lower.includes("sms") || lower.includes("outreach") || lower.includes("multi-channel")) return "messaging";
  if (lower.includes("review") || lower.includes("reputation") || lower.includes("testimonial") || lower.includes("social proof")) return "reputation";
  if (lower.includes("booking") || lower.includes("calendar") || lower.includes("appointment") || lower.includes("consultation")) return "calendar";
  if (lower.includes("blog") || lower.includes("seo") || lower.includes("content")) return "content";
  if (lower.includes("e-commerce") || lower.includes("product") || lower.includes("checkout") || lower.includes("payment") || lower.includes("stripe") || lower.includes("order")) return "ecommerce";
  if (lower.includes("whatsapp") || lower.includes("click-to-call") || lower.includes("contact")) return "contact";
  if (lower.includes("sub-account") || lower.includes("member") || lower.includes("login") || lower.includes("portal")) return "portal";
  if (lower.includes("training") || lower.includes("knowledge") || lower.includes("enrollment")) return "training";
  if (lower.includes("automation") || lower.includes("workflow") || lower.includes("follow-up") || lower.includes("sequence")) return "automation";
  if (lower.includes("gallery") || lower.includes("photo") || lower.includes("before/after") || lower.includes("showcase")) return "gallery";
  if (lower.includes("property") || lower.includes("listing") || lower.includes("service page") || lower.includes("service area")) return "pages";
  if (lower.includes("lead") || lower.includes("capture") || lower.includes("intake") || lower.includes("form")) return "lead";
  if (lower.includes("language") || lower.includes("multi-language")) return "language";
  if (lower.includes("affiliate") || lower.includes("newsletter") || lower.includes("social media") || lower.includes("integration")) return "integration";
  if (lower.includes("scarcity") || lower.includes("urgency") || lower.includes("faq") || lower.includes("privacy") || lower.includes("legal") || lower.includes("terms")) return "misc";
  if (lower.includes("nri") || lower.includes("targeting") || lower.includes("routing") || lower.includes("qualification")) return "targeting";
  return "default";
}

function FeatureIconSvg({ type }: { type: string }) {
  const iconClass = "w-5 h-5 text-gold";
  switch (type) {
    case "pipeline":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      );
    case "funnel":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      );
    case "ai":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "messaging":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "reputation":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "content":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      );
    case "ecommerce":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      );
    case "contact":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      );
    case "portal":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    case "training":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case "automation":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    case "gallery":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "pages":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "lead":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "language":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      );
    case "integration":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
    case "targeting":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      );
  }
}

export default function ProjectDetailClient({ project, otherProjects }: Props) {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <Link
              href="/#projects"
              className="text-xs font-medium uppercase tracking-widest text-text-muted hover:text-gold transition-colors"
            >
              My Work
            </Link>
            <span className="text-text-muted">/</span>
            <span className="text-xs font-medium uppercase tracking-widest text-gold">
              {project.client}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Industry + Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                  {project.industry}
                </span>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-gold/5 border border-gold/10 text-gold/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                <span className="text-text-primary">{project.client}</span>
              </h1>

              {/* Outcome line */}
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
                {project.outcome}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-background hover:bg-gold-light transition-colors"
                >
                  Visit Live Site
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-text-primary hover:border-gold/30 hover:text-gold transition-colors"
                >
                  Read Case Study
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right - Project Cover Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl border border-border bg-card/50 overflow-hidden">
                {/* PLACEHOLDER: Replace with actual project screenshot */}
                <div className="aspect-[16/10] bg-gradient-to-br from-card via-surface to-card flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-20 h-20 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-text-muted font-medium">
                      Project Cover Image
                    </p>
                    <p className="text-xs text-text-muted/60 mt-1">
                      {project.client}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-full pointer-events-none" />
            </motion.div>
          </div>

          {/* Quick Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {project.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center rounded-xl border border-border bg-card/30 py-6 px-4"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-medium uppercase tracking-widest text-gold">
                Overview
              </span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              The <span className="text-gradient-gold">Challenge</span> &{" "}
              <span className="text-gradient-gold">Solution</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-border bg-card/30 p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  The Challenge
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-gold/20 bg-gold/5 p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  The Solution
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Was Built - Features Grid */}
      <section className="relative py-24 bg-surface/40">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-medium uppercase tracking-widest text-gold">
                What Was Built
              </span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              GHL Features{" "}
              <span className="text-gradient-gold">Implemented</span>
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
              Every GoHighLevel tool and integration built for{" "}
              {project.client}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature, index) => {
              const iconType = getFeatureIcon(feature);
              return (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="group rounded-xl border border-border bg-card/30 p-5 hover:border-gold/20 hover:bg-card/60 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <FeatureIconSvg type={iconType} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-text-primary group-hover:text-gold transition-colors leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Feature count badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-text-muted bg-card/50 border border-border rounded-full px-5 py-2">
              <svg
                className="w-4 h-4 text-gold"
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
              {project.features.length} GHL features and tools implemented
            </span>
          </motion.div>
        </div>
      </section>

      {/* Key Results */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-medium uppercase tracking-widest text-gold">
                Results
              </span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Key <span className="text-gradient-gold">Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {project.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center rounded-2xl border border-border bg-card/50 py-10 px-6 hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gold mb-3">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-text-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="relative py-24 bg-surface/40">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-medium uppercase tracking-widest text-gold">
                Screenshots
              </span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Project <span className="text-gradient-gold">Gallery</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card/50 overflow-hidden group"
              >
                {/* PLACEHOLDER: Replace with actual screenshot */}
                <div className="aspect-[16/10] bg-gradient-to-br from-card via-surface to-card flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors">
                      <svg
                        className="w-8 h-8 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-text-muted font-medium">
                      {screenshot.label}
                    </p>
                    <p className="text-xs text-text-muted/60 mt-1">
                      Screenshot Placeholder
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Have a Similar Project{" "}
              <span className="text-gradient-gold">in Mind?</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              I&apos;ve built systems just like this for businesses across
              different industries. Let&apos;s talk about what GoHighLevel can
              do for yours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-background hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-200"
              >
                Start Your Project
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
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-base font-semibold text-text-primary hover:border-gold/30 hover:text-gold transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="relative py-24 bg-surface/40">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-medium uppercase tracking-widest text-gold">
                More Projects
              </span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold">
              Explore Other{" "}
              <span className="text-gradient-gold">Case Studies</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.slice(0, 3).map((other, index) => (
              <motion.div
                key={other.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/my-work/${other.slug}`}
                  className="group relative flex flex-col h-full rounded-2xl border border-border bg-card/50 hover:border-gold/30 hover:bg-card hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden"
                >
                  {/* Image placeholder */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-card via-surface to-card flex items-center justify-center overflow-hidden">
                    <div className="text-center px-6">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-2">
                        <svg
                          className="w-6 h-6 text-gold"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-text-muted">
                        {other.client}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-gold bg-gold/10 px-2.5 py-0.5 rounded-full">
                        {other.industry}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-gold transition-colors duration-300 mb-2">
                      {other.client}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-2">
                      {other.outcome}
                    </p>
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

                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-gold/20" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
