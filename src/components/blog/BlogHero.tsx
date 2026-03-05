"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-16 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-widest text-gold mb-4"
        >
          Automate with Level Blog
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
        >
          GoHighLevel Insights, Guides &amp; Strategies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-text-secondary max-w-2xl mx-auto"
        >
          Expert articles on CRM automation, sales funnels, AI tools, and
          everything GoHighLevel — written to help USA businesses grow faster
          with smarter systems.
        </motion.p>
      </div>
    </section>
  );
}
