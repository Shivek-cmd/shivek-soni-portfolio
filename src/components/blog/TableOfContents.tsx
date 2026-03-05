"use client";

import { useState, useEffect, useCallback } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "-80px 0px -70% 0px",
      threshold: 0,
    });
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings, handleObserver]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm font-semibold text-text-muted uppercase tracking-widest"
        >
          <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          In This Article
        </button>
        {isOpen && (
          <nav className="mt-3 pl-4 border-l border-border">
            {headings.map((h) => (
              <button
                key={h.id}
                onClick={() => scrollTo(h.id)}
                className={`block w-full text-left py-1.5 text-sm transition-colors ${
                  h.level === 3 ? "pl-4" : ""
                } ${activeId === h.id ? "text-gold font-medium" : "text-text-secondary hover:text-text-primary"}`}
              >
                {h.text}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop sticky sidebar */}
      <aside className="hidden lg:block sticky top-28">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
          In This Article
        </p>
        <nav className="border-l border-border">
          {headings.map((h) => (
            <button
              key={h.id}
              onClick={() => scrollTo(h.id)}
              className={`block w-full text-left py-1.5 text-sm transition-all duration-200 ${
                h.level === 3 ? "pl-8" : "pl-4"
              } ${
                activeId === h.id
                  ? "text-gold font-medium border-l-2 border-gold -ml-px"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {h.text}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
