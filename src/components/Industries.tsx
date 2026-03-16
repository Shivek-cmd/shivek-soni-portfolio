"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { niches } from "@/data/niches";

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="relative py-24">
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
              Industries We Serve
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            GoHighLevel Built for{" "}
            <span className="text-gradient-gold">Your Industry</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary text-lg">
            Every business is different. I build GoHighLevel systems tailored to
            your industry&apos;s specific workflows, pain points, and growth
            opportunities.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {niches.map((niche, index) => (
            <motion.div
              key={niche.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                href={`/for/${niche.slug}`}
                className="group relative flex flex-col items-center text-center rounded-xl border border-border bg-card/30 p-5 hover:border-gold/20 hover:bg-card/60 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="relative w-full h-28 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={niche.heroImage}
                    alt={`GoHighLevel for ${niche.industry}`}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                    <span className="text-2xl">{niche.icon}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-text-primary group-hover:text-gold transition-colors mb-1">
                  {niche.shortIndustry}
                </h3>

                {/* Arrow */}
                <div className="flex items-center gap-1 text-xs text-text-muted group-hover:text-gold transition-colors mt-auto pt-2">
                  <span>Learn More</span>
                  <svg
                    className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
