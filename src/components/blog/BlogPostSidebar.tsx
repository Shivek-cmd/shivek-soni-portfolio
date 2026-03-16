"use client";

import Link from "next/link";
import TableOfContents from "./TableOfContents";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function BlogPostSidebar({ headings, mobile }: { headings: TocItem[]; mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="lg:hidden mb-8">
        <TableOfContents headings={headings} />
      </div>
    );
  }
  return (
    <div className="space-y-6">
      <TableOfContents headings={headings} />
      <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
        <p className="text-sm font-semibold text-text-primary mb-2">Need help with GHL?</p>
        <p className="text-xs text-text-secondary mb-3 leading-relaxed">
          Book a free 30-minute consultation to discuss your GoHighLevel project.
        </p>
        <Link
          href="/lets-talk"
          className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-background hover:bg-gold-light transition-colors w-full justify-center"
        >
          Book a Free Call
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
