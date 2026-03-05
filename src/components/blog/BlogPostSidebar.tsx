"use client";

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
  return <TableOfContents headings={headings} />;
}
