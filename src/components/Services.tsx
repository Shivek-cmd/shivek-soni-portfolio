"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { serviceCategories } from "@/data/serviceCategories";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/30" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="text-sm font-medium uppercase tracking-widest text-gold">
              Services
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            Full-Stack{" "}
            <span className="text-gradient-gold">GoHighLevel</span>
            <br />
            Expertise
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-text-secondary text-lg">
            Six comprehensive service categories covering every feature, tool,
            and integration GoHighLevel offers. Click any category to explore
            everything included.
          </p>
        </motion.div>

        {/* Services Grid — 3x2 layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-${service.id}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex flex-col h-full rounded-2xl border border-border bg-card/50 hover:border-gold/30 hover:bg-card hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden"
              >
                {/* Image area */}
                <div className="relative w-full h-48 overflow-hidden bg-gradient-to-b from-surface/80 to-card/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-2xl"
                      role="img"
                      aria-label={service.title}
                    >
                      {service.icon}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-gold transition-colors duration-300">
                      {service.shortTitle}
                    </h3>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-gold/80 font-medium mb-3 italic">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-text-muted"
                      >
                        <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-gold group-hover:gap-3 transition-all duration-300">
                    Explore This Service
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
  );
}
