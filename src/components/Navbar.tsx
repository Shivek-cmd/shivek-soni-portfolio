"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/siteConfig";
import { serviceCategories } from "@/data/serviceCategories";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navigation.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.assign(`/${href}`);
    }
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage ? "glass border-b border-border" : ""
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            {isHomePage ? (
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#home");
                }}
                className="font-heading text-xl font-bold tracking-tight"
              >
                <Logo className="h-9 w-auto" />
              </a>
            ) : (
              <Link href="/" className="font-heading text-xl font-bold tracking-tight">
                <Logo className="h-9 w-auto" />
              </Link>
            )}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = isHomePage && activeSection === sectionId;

                if (sectionId === "services") {
                  return (
                    <div
                      key={item.href}
                      ref={servicesRef}
                      className="relative"
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full inline-flex items-center gap-1 ${
                          isActive || (!isHomePage && pathname.startsWith("/services"))
                            ? "text-gold"
                            : "text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
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
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute inset-0 rounded-full bg-gold/10 border border-gold/20"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </a>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
                          >
                            <div className="py-2 max-h-[70vh] overflow-y-auto">
                              {serviceCategories.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.slug}`}
                                  onClick={() => {
                                    setIsServicesOpen(false);
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className="w-full text-left px-4 py-2.5 text-sm text-text-secondary hover:text-gold hover:bg-surface/60 transition-colors flex items-center gap-3"
                                >
                                  <span className="text-lg flex-shrink-0">{service.icon}</span>
                                  <span>{service.title}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={isHomePage ? item.href : `/${item.href}`}
                    onClick={(e) => {
                      if (isHomePage) {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                      isActive
                        ? "text-gold"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full bg-gold/10 border border-gold/20"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Blog Link - Desktop */}
            <Link
              href="/blog"
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                pathname.startsWith("/blog")
                  ? "text-gold"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Blog
              {pathname.startsWith("/blog") && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-gold/10 border border-gold/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* CTA Button - Desktop */}
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  handleNavClick("#contact");
                }
              }}
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 5 }
                      : { rotate: 0, y: 0 }
                  }
                  className="block h-0.5 w-6 bg-text-primary"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 w-6 bg-text-primary"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -7 }
                      : { rotate: 0, y: 0 }
                  }
                  className="block h-0.5 w-6 bg-text-primary"
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {navigation.map((item, index) => {
                const sectionId = item.href.replace("#", "");

                if (sectionId === "services") {
                  return (
                    <div key={item.href} className="flex flex-col items-center">
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`text-2xl font-heading font-semibold transition-colors inline-flex items-center gap-2 ${
                          (isHomePage && activeSection === sectionId) || (!isHomePage && pathname.startsWith("/services"))
                            ? "text-gold"
                            : "text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
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
                      </motion.button>

                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-2"
                          >
                            <div className="flex flex-col items-center gap-2 py-2">
                              {serviceCategories.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.slug}`}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsMobileServicesOpen(false);
                                  }}
                                  className="text-sm text-text-secondary hover:text-gold transition-colors flex items-center gap-2 py-1"
                                >
                                  <span>{service.icon}</span>
                                  <span>{service.shortTitle}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.a
                    key={item.href}
                    href={isHomePage ? item.href : `/${item.href}`}
                    onClick={(e) => {
                      if (isHomePage) {
                        e.preventDefault();
                        handleNavClick(item.href);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className={`text-2xl font-heading font-semibold transition-colors ${
                      isHomePage && activeSection === item.href.replace("#", "")
                        ? "text-gold"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <Link
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-heading font-semibold transition-colors ${
                    pathname.startsWith("/blog")
                      ? "text-gold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  Blog
                </Link>
              </motion.div>
              <motion.a
                href={isHomePage ? "#contact" : "/#contact"}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    handleNavClick("#contact");
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-lg font-semibold text-background"
              >
                Let&apos;s Talk
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
