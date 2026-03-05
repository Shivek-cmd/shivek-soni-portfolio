"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { serviceCategories } from "@/data/services";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
            Every feature. Every tool. Every integration. I work across the
            entire GHL ecosystem to build solutions that drive real results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`group relative rounded-2xl border transition-all duration-300 cursor-pointer ${
                expandedId === service.id
                  ? "border-gold/30 bg-card shadow-lg shadow-gold/5"
                  : "border-border bg-card/50 hover:border-border-hover hover:bg-card"
              }`}
              onClick={() =>
                setExpandedId(expandedId === service.id ? null : service.id)
              }
            >
              <div className="p-7">
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-3xl" role="img" aria-label={service.title}>
                      {service.icon}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-text-primary group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <motion.svg
                    animate={{ rotate: expandedId === service.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-text-muted mt-1 flex-shrink-0"
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
                  </motion.svg>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Expanded Features */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedId === service.id ? "auto" : 0,
                    opacity: expandedId === service.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-5 mt-5 border-t border-border">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                      What&apos;s Included
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
