import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-text-muted flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {item.href ? (
              <Link href={item.href} className="hover:text-gold transition-colors" itemProp="item">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-text-secondary" itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
            {i < items.length - 1 && (
              <svg className="w-3 h-3 text-text-muted/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
