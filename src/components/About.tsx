"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/data/siteConfig";

const expertise = [
  "CRM Architecture & Pipeline Design",
  "Workflow Automation & AI Integration",
  "Funnel & Website Development",
  "White-Label SaaS Builds",
  "Multi-Channel Campaign Systems",
  "API Integrations & Custom Development",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,rgba(200,165,92,0.04)_0%,transparent_60%)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface">
              {/* PLACEHOLDER: Replace with actual profile photo */}
              <div className="absolute inset-0 flex items-center justify-center bg-card">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gold/10 border-2 border-gold/20 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-5xl text-gold font-heading font-bold">
                      SS
                    </span>
                  </div>
                  <p className="text-text-muted text-sm">
                    [Profile Photo Placeholder]
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-surface p-5 shadow-2xl glow-gold"
            >
              <div className="text-3xl font-bold text-gradient-gold font-heading">
                5+
              </div>
              <div className="text-sm text-text-muted mt-1">
                Years Mastering
                <br />
                GoHighLevel
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-medium uppercase tracking-widest text-gold">
                About
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              The GHL Expert
              <br />
              <span className="text-gradient-gold">Behind the Systems</span>
            </h2>

            <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
              <p>
                I&apos;m {siteConfig.name} — a GoHighLevel specialist who lives
                and breathes automation. I don&apos;t just &quot;set up
                CRMs.&quot; I architect complete business operating systems that
                eliminate manual work, accelerate revenue, and scale without
                adding headcount.
              </p>
              <p>
                Based in {siteConfig.location}, I&apos;ve spent over five years
                deep inside the GoHighLevel ecosystem, working with businesses
                ranging from solo operators to multi-location enterprises. Every
                workflow, funnel, pipeline, and integration I build is designed
                with one goal: measurable business impact.
              </p>
              <p>
                I don&apos;t believe in cookie-cutter solutions. Every business
                has unique processes, and my job is to translate those into
                automated systems that actually work — reliably, at scale, and
                without constant maintenance.
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4">
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                    className="flex items-center gap-3 text-sm text-text-secondary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
