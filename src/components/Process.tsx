"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/data/process";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-32">
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
              Process
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            How I{" "}
            <span className="text-gradient-gold">Deliver Results</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-text-secondary text-lg">
            A proven, structured approach to building automation systems
            that work from day one.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                  {/* Step Number (center line marker) */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-2 border-gold/40 flex items-center justify-center z-10 hidden md:flex">
                    <span className="text-lg font-bold text-gold font-heading">
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content - alternating sides */}
                  <div
                    className={`${
                      isEven
                        ? "md:text-right md:pr-16"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 md:hidden">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full border border-gold/40 text-sm font-bold text-gold">
                        {String(step.step).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Details Card */}
                  <div
                    className={`${
                      isEven
                        ? "md:col-start-2 md:pl-16"
                        : "md:col-start-1 md:row-start-1 md:pr-16"
                    }`}
                  >
                    <div className="rounded-2xl border border-border bg-card/50 p-6">
                      <ul className="space-y-3">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-sm text-text-secondary"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
