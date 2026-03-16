"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Niche } from "@/data/niches";

interface Props {
  niche: Niche;
  otherNiches: Niche[];
}

export default function NichePageClient({ niche, otherNiches }: Props) {
  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-surface/50" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Link
                    href="/#services"
                    className="text-xs font-medium uppercase tracking-widest text-text-muted hover:text-gold transition-colors"
                  >
                    Services
                  </Link>
                  <span className="text-text-muted">/</span>
                  <span className="text-xs font-medium uppercase tracking-widest text-gold">
                    {niche.shortIndustry}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-6">
                  <span className="text-lg">{niche.icon}</span>
                  <span className="text-sm font-medium text-gold">
                    {niche.industry} Specialist
                  </span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6">
                  <span className="text-text-primary">
                    {niche.headline.replace(niche.accentKeyword, "").trim()}
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gold font-heading font-semibold mb-4">
                  {niche.subheadline}
                </p>

                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
                  {niche.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/lets-talk"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-background hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-200"
                  >
                    Book a Free Consultation
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </Link>
                  <a
                    href="#pain-points"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-text-primary hover:border-gold/30 hover:text-gold transition-colors"
                  >
                    See How It Works
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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl border border-border bg-card/50 overflow-hidden">
                  <Image
                    src={niche.heroImage}
                    alt={`GoHighLevel automation for ${niche.industry}`}
                    width={1200}
                    height={630}
                    className="w-full h-64 md:h-80 object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-full pointer-events-none" />

                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {niche.stats.slice(0, 2).map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-lg bg-background/90 backdrop-blur-sm border border-border p-3 text-center"
                      >
                        <div className="text-xl font-bold text-gold font-heading">
                          {stat.value}
                        </div>
                        <div className="text-xs text-text-muted">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="relative py-12 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {niche.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gold font-heading mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section id="pain-points" className="relative py-24">
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
                  Your Challenges
                </span>
                <div className="h-px w-8 bg-gold" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Problems Every{" "}
                <span className="text-gradient-gold">
                  {niche.shortIndustry}
                </span>{" "}
                Business Faces
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Sound familiar? Here&apos;s how GoHighLevel automation solves
                each one.
              </p>
            </motion.div>

            <div className="space-y-6">
              {niche.painPoints.map((point, index) => (
                <motion.div
                  key={point.problem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group rounded-2xl border border-border bg-card/30 hover:border-gold/20 hover:bg-card/60 transition-all duration-300 overflow-hidden"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Problem */}
                    <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
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
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-medium uppercase tracking-widest text-red-400 mb-2 block">
                            The Problem
                          </span>
                          <p className="text-text-primary font-medium">
                            {point.problem}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-medium uppercase tracking-widest text-gold mb-2 block">
                            The GHL Solution
                          </span>
                          <p className="text-text-secondary leading-relaxed">
                            {point.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
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
                  What I Build
                </span>
                <div className="h-px w-8 bg-gold" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                GHL Features Built for{" "}
                <span className="text-gradient-gold">
                  {niche.shortIndustry}
                </span>
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Every feature is configured specifically for how{" "}
                {niche.industry.toLowerCase()} businesses operate.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {niche.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group rounded-xl border border-border bg-card/30 p-6 hover:border-gold/20 hover:bg-card/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What&apos;s Included Checklist */}
        <section className="relative py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-gold" />
                  <span className="text-sm font-medium uppercase tracking-widest text-gold">
                    Full Package
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Everything{" "}
                  <span className="text-gradient-gold">Included</span>
                  <br />
                  in Your Setup
                </h2>
                <p className="text-lg text-text-secondary mb-8 max-w-lg">
                  A complete GoHighLevel system built specifically for{" "}
                  {niche.industry.toLowerCase()} — not a generic template, but a
                  custom solution for your business.
                </p>

                <div className="space-y-3">
                  {niche.included.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3.5 h-3.5 text-gold"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8 md:p-10">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-text-primary leading-relaxed mb-6 font-medium italic">
                    &ldquo;{niche.quote.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-gold">
                        {niche.quote.role.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">
                        {niche.quote.role}
                      </p>
                      <p className="text-xs text-text-muted">
                        GoHighLevel Client
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Services */}
                <div className="mt-8 rounded-2xl border border-border bg-card/30 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4">
                    Related GHL Services
                  </h3>
                  <div className="space-y-3">
                    {niche.relatedServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-center justify-between group/link p-3 rounded-lg hover:bg-surface/60 transition-colors"
                      >
                        <span className="text-sm text-text-secondary group-hover/link:text-gold transition-colors">
                          {service.title}
                        </span>
                        <svg
                          className="w-4 h-4 text-text-muted group-hover/link:text-gold transition-colors"
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
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-surface/40">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="text-5xl mb-6 block"
                role="img"
                aria-label={niche.industry}
              >
                {niche.icon}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {niche.ctaHeadline}
              </h2>
              <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
                {niche.ctaSubtext}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/lets-talk"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-background hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-200"
                >
                  Book a Free Consultation
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-base font-semibold text-text-primary hover:border-gold/30 hover:text-gold transition-colors"
                >
                  Send a Message
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other Industries */}
        <section className="relative py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                  More Industries
                </span>
                <div className="h-px w-8 bg-gold" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold">
                GoHighLevel for{" "}
                <span className="text-gradient-gold">Every Industry</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherNiches.map((other, index) => (
                <motion.div
                  key={other.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={`/for/${other.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card/30 p-5 hover:border-gold/20 hover:bg-card/60 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <span className="text-2xl">{other.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-text-primary group-hover:text-gold transition-colors truncate">
                        {other.industry}
                      </h3>
                      <p className="text-xs text-text-muted truncate">
                        {other.subheadline}
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors flex-shrink-0"
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
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
