import { Metadata } from "next";
import { notFound } from "next/navigation";
import { niches } from "@/data/niches";
import { siteConfig } from "@/data/siteConfig";
import NichePageClient from "@/components/NichePageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return niches.map((niche) => ({
    slug: niche.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const niche = niches.find((n) => n.slug === slug);
  if (!niche) return {};

  return {
    title: niche.metaTitle,
    description: niche.metaDescription,
    keywords: niche.keywords,
    openGraph: {
      title: `${niche.metaTitle} | ${siteConfig.name}`,
      description: niche.metaDescription,
      url: `${siteConfig.url}/for/${niche.slug}`,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${niche.metaTitle} | ${siteConfig.name}`,
      description: niche.metaDescription,
    },
    alternates: {
      canonical: `${siteConfig.url}/for/${niche.slug}`,
    },
  };
}

export default async function NichePage({ params }: Props) {
  const { slug } = await params;
  const niche = niches.find((n) => n.slug === slug);

  if (!niche) {
    notFound();
  }

  const otherNiches = niches.filter((n) => n.slug !== slug);

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `GoHighLevel Automation for ${niche.industry}`,
            description: niche.metaDescription,
            provider: {
              "@type": "Person",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            audience: {
              "@type": "Audience",
              audienceType: niche.industry,
            },
            url: `${siteConfig.url}/for/${niche.slug}`,
          }),
        }}
      />
      <NichePageClient niche={niche} otherNiches={otherNiches} />
    </>
  );
}
