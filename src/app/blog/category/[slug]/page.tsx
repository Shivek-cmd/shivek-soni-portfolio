import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsByCategory } from "@/lib/blog";
import { blogCategories, getCategoryBySlug } from "@/data/categories";
import { siteConfig } from "@/data/siteConfig";
import CategoryPageClient from "./CategoryPageClient";

export const revalidate = 3600;

export function generateStaticParams() {
  return blogCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: `${siteConfig.url}/blog/category/${slug}` },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `${siteConfig.url}/blog/category/${slug}`,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: category.metaTitle,
      description: category.metaDescription,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const posts = getPostsByCategory(slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: category.name },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CategoryPageClient category={category} posts={posts} />
    </>
  );
}
