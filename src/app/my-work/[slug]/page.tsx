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

  return {
    title: `${project.metaTitle} | ${siteConfig.name}`,
    description: project.metaDescription,
    openGraph: {
      title: `${project.metaTitle} | ${siteConfig.name}`,
      description: project.metaDescription,
      url: `${siteConfig.url}/my-work/${project.slug}`,
      siteName: siteConfig.name,
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.metaTitle} | ${siteConfig.name}`,
      description: project.metaDescription,
    },
    alternates: {
      canonical: `${siteConfig.url}/my-work/${project.slug}`,
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

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.metaTitle,
            description: project.metaDescription,
            author: {
              "@type": "Person",
              name: "Shivek Soni",
              url: siteConfig.url,
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${siteConfig.url}/my-work/${project.slug}`,
            },
            about: {
              "@type": "CreativeWork",
              name: project.client,
              url: project.url,
              description: project.description,
            },
          }),
        }}
      />
      <ProjectDetailClient project={project} otherProjects={otherProjects} />
    </>
  );
}
