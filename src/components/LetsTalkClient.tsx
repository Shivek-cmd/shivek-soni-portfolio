"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";

const benefits = [
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    title: "Free Strategy Session",
    description: "No cost, no commitment. We'll map out your automation needs together.",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "30 Minutes, Zero Fluff",
    description: "Focused conversation about your business goals and how GHL can get you there.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Actionable Recommendations",
    description: "Walk away with a clear picture of what to build, automate, and prioritize.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Built for Business Owners",
    description: "Whether you're a solo operator or running a team — I've helped businesses like yours.",
  },
];

export default function LetsTalkClient() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,165,92,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-medium uppercase tracking-widest text-gold">
                Book a Consultation
              </span>
              <div className="h-px w-8 bg-gold" />
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Let&apos;s Talk About{" "}
              <span className="text-gradient-gold">Your Business</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Pick a time that works for you. In 30 minutes, we&apos;ll discuss
              your GoHighLevel needs, map out an automation strategy, and figure
              out the best path to scale your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendar Embed Section */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/20"
          >
            <div className="p-2 md:p-4">
              <Cal
                namespace="30min"
                calLink="shivek-soni-j5rgl2/30min"
                style={{ width: "100%", height: "100%", overflow: "scroll", minHeight: "600px" }}
                config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="relative py-20 md:py-24">
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
                What to Expect
              </span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Why Book a{" "}
              <span className="text-gradient-gold">Free Consultation?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card/30 p-6 hover:border-gold/20 hover:bg-card/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prefer Email CTA */}
      <section className="relative py-20 bg-surface/40">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Prefer to{" "}
              <span className="text-gradient-gold">Send a Message?</span>
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              No problem. Fill out the contact form with your project details
              and I&apos;ll get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-base font-semibold text-text-primary hover:border-gold/30 hover:text-gold transition-colors"
            >
              Go to Contact Page
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
