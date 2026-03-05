"use client";

import { siteConfig, navigation } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="font-heading text-xl font-bold">
              <span className="text-gradient-gold">Automate</span>
              <span className="text-text-primary"> with Level</span>
            </a>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-xs">
              GoHighLevel Expert &amp; Digital Automation Specialist. Building
              systems that scale businesses through intelligent automation.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { name: "LinkedIn", url: siteConfig.social.linkedin },
                { name: "Twitter/X", url: siteConfig.social.twitter },
                { name: "GitHub", url: siteConfig.social.github },
                { name: "Instagram", url: siteConfig.social.instagram },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-border text-text-muted hover:text-gold hover:border-gold/30 transition-all duration-200 text-xs"
                >
                  {social.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-sm text-text-secondary hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4">
              Top Services
            </h4>
            <ul className="space-y-3">
              {[
                "CRM & Pipeline Management",
                "Workflow Automation",
                "Funnel & Website Building",
                "AI-Powered Tools",
                "White-Label SaaS",
                "API Integrations",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#services");
                    }}
                    className="text-sm text-text-secondary hover:text-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built with precision. Powered by GoHighLevel expertise.
          </p>
        </div>
      </div>
    </footer>
  );
}
