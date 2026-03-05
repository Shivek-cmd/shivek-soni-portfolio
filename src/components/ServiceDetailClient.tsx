"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceCategory } from "@/data/serviceCategories";
import { siteConfig } from "@/data/siteConfig";

interface Props {
  service: ServiceCategory;
  currentIndex: number;
  otherServices: ServiceCategory[];
}

export default function ServiceDetailClient({
  service,
  otherServices,
}: Props) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="text-sm text-text-secondary hover:text-gold transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-background hover:bg-gold-light transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-16">
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
                  <Link href="/#services" className="text-xs font-medium uppercase tracking-widest text-text-muted hover:text-gold transition-colors">
                    Services
                  </Link>
                  <span className="text-text-muted">/</span>
                  <span className="text-xs font-medium uppercase tracking-widest text-gold">
                    {service.shortTitle}
                  </span>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                  <span className="text-text-primary">{service.title.split(" & ")[0]}</span>
                  {service.title.includes(" & ") && (
                    <>
                      {" & "}
                      <span className="text-gradient-gold">
                        {service.title.split(" & ").slice(1).join(" & ")}
                      </span>
                    </>
                  )}
                </h1>

                <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
                  {service.heroDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#features"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-background hover:bg-gold-light transition-colors"
                  >
                    See What&apos;s Included
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-text-primary hover:border-gold/30 hover:text-gold transition-colors"
                  >
                    Contact Me
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl border border-border bg-card/50 p-8 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-full pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-24">
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
                  What&apos;s Included
                </span>
                <div className="h-px w-8 bg-gold" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
                Everything Under{" "}
                <span className="text-gradient-gold">{service.shortTitle}</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group rounded-xl border border-border bg-card/30 p-6 hover:border-gold/20 hover:bg-card/60 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-gold transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Value Section */}
        <section className="relative py-24 bg-surface/40">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
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
                    Business Impact
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                  Why This{" "}
                  <span className="text-gradient-gold">Matters</span>
                  <br />
                  for Your Business
                </h2>
                <div className="space-y-4">
                  {service.businessValue.map((value, index) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-text-secondary leading-relaxed">{value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="rounded-2xl border border-border bg-card/50 p-8">
                  <h3 className="font-heading text-2xl font-bold mb-6">
                    <span className="text-gradient-gold">Ideal For</span>
                  </h3>
                  <div className="space-y-4">
                    {service.idealFor.map((item, index) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center text-xs text-gold font-semibold mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                  How It Works
                </span>
                <div className="h-px w-8 bg-gold" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
                From Kickoff to{" "}
                <span className="text-gradient-gold">Launch</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-xl border border-border bg-card/30 p-6"
                >
                  <span className="text-5xl font-heading font-bold text-gold/10 absolute top-4 right-4">
                    {step.step}
                  </span>
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                      <span className="text-sm font-bold text-gold">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
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
              <span className="text-5xl mb-6 block" role="img" aria-label={service.title}>
                {service.icon}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {service.ctaText}
              </h2>
              <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
                Let&apos;s discuss your project and build a {service.shortTitle.toLowerCase()} solution
                that drives real results for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-background hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-200"
                >
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-base font-semibold text-text-primary hover:border-gold/30 hover:text-gold transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other Services */}
        <section className="relative py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold">
                Explore Other{" "}
                <span className="text-gradient-gold">Services</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {otherServices.map((other, index) => (
                <motion.div
                  key={other.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={`/services/${other.slug}`}
                    className="group flex flex-col items-center text-center p-5 rounded-xl border border-border bg-card/30 hover:border-gold/20 hover:bg-card/60 transition-all duration-300"
                  >
                    <span className="text-2xl mb-2">{other.icon}</span>
                    <span className="text-sm font-semibold text-text-primary group-hover:text-gold transition-colors">
                      {other.shortTitle}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xs text-text-muted hover:text-gold transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-xs text-text-muted hover:text-gold transition-colors">
                All Services
              </Link>
              <Link href="/#contact" className="text-xs text-text-muted hover:text-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
