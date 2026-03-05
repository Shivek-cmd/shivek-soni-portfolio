import { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceCategories } from "@/data/serviceCategories";
import { siteConfig } from "@/data/siteConfig";
import ServiceDetailClient from "@/components/ServiceDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceCategories.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceCategories.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: `${service.metaTitle} | ${siteConfig.name}`,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle} | ${siteConfig.name}`,
      description: service.metaDescription,
    },
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = serviceCategories.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const currentIndex = serviceCategories.findIndex((s) => s.slug === slug);
  const otherServices = serviceCategories.filter((s) => s.slug !== slug);

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            provider: {
              "@type": "Person",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            url: `${siteConfig.url}/services/${service.slug}`,
          }),
        }}
      />
      <ServiceDetailClient
        service={service}
        currentIndex={currentIndex}
        otherServices={otherServices}
      />
    </>
  );
}
