import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
import ProjectDetailClient from "@/components/ProjectDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const ogImage = project.heroImage.startsWith("http")
    ? project.heroImage
    : `${siteConfig.url}${project.heroImage}`;

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    keywords: [
      `${project.client} GoHighLevel`,
      `${project.industry} CRM automation`,
      `GoHighLevel ${project.industry.toLowerCase().replace(/\//g, " ")}`,
      `GoHighLevel case study`,
      `${project.areaServed} business automation`,
      "GoHighLevel expert",
      "GHL automation results",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    alternates: { canonical: `${siteConfig.url}/my-work/${project.slug}` },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: `${siteConfig.url}/my-work/${project.slug}`,
      siteName: siteConfig.name,
      type: "article",
      locale: "en_US",
      publishedTime: `${project.yearBuilt}-01-01`,
      authors: [siteConfig.name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.client} — GoHighLevel Case Study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.metaTitle,
      description: project.metaDescription,
      images: [ogImage],
      creator: "@shiveksoni",
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((p) => p.slug !== slug);
  const canonicalUrl = `${siteConfig.url}/my-work/${project.slug}`;

  // Rich structured data
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": canonicalUrl,
    headline: project.metaTitle,
    description: project.metaDescription,
    image: {
      "@type": "ImageObject",
      url: project.heroImage.startsWith("http") ? project.heroImage : `${siteConfig.url}${project.heroImage}`,
      width: 1200,
      height: 630,
    },
    datePublished: `${project.yearBuilt}-01-01`,
    dateModified: `${project.yearBuilt}-12-31`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: "GoHighLevel Expert & Digital Automation Specialist",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    about: {
      "@type": "Organization",
      name: project.client,
      url: project.url,
      description: project.description,
    },
    keywords: `GoHighLevel, ${project.industry}, ${project.client}, CRM automation, ${project.tags.join(", ")}`,
  };

  // Service structured data
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${project.serviceType} — ${project.client}`,
    description: project.metaDescription,
    provider: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Place",
      name: project.areaServed,
    },
    serviceType: project.serviceType,
    url: canonicalUrl,
  };

  // BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "My Work", item: `${siteConfig.url}/#projects` },
      { "@type": "ListItem", position: 3, name: project.client, item: canonicalUrl },
    ],
  };

  // Review structured data (if testimonial exists)
  const reviewJsonLd = project.testimonial
    ? {
        "@context": "https://schema.org",
        "@type": "Review",
        reviewBody: project.testimonial.quote,
        author: {
          "@type": "Person",
          name: project.testimonial.author,
        },
        itemReviewed: {
          "@type": "Service",
          name: `GoHighLevel ${project.serviceType}`,
          provider: {
            "@type": "Person",
            name: siteConfig.name,
          },
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {reviewJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />
      )}
      <ProjectDetailClient project={project} otherProjects={otherProjects} />
    </>
  );
}
