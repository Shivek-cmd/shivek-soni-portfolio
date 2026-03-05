import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { siteConfig } from "@/data/siteConfig";
import Breadcrumb from "@/components/blog/Breadcrumb";
import MdxContent from "@/components/blog/MdxContent";
import AuthorCard from "@/components/blog/AuthorCard";
import ShareButtons from "@/components/blog/ShareButtons";
import FeedbackButtons from "@/components/blog/FeedbackButtons";
import RelatedPosts from "@/components/blog/RelatedPosts";
import BlogPostSidebar from "@/components/blog/BlogPostSidebar";

export const revalidate = 3600;

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function extractHeadings(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TocItem[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].replace(/\*\*/g, "").replace(/`/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    headings.push({ id, text, level: match[1].length });
  }
  return headings;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `${siteConfig.url}${post.thumbnail}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${siteConfig.url}${post.thumbnail}`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const relatedPosts = getRelatedPosts(post.slug, post.category, post.tags, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${siteConfig.url}${post.thumbnail}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/favicon.svg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category.replace(/-/g, " "),
        item: `${siteConfig.url}/blog/category/${post.category}`,
      },
      { "@type": "ListItem", position: 4, name: post.title },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.category.replace(/-/g, " "), href: `/blog/category/${post.category}` },
              { label: post.title },
            ]}
          />

          {/* Post header */}
          <header className="max-w-3xl mb-10">
            <Link
              href={`/blog/category/${post.category}`}
              className="inline-block rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-semibold text-gold capitalize mb-4 hover:bg-gold/20 transition-colors"
            >
              {post.category.replace(/-/g, " ")}
            </Link>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-text-secondary mb-6">{post.description}</p>
            <div className="flex items-center gap-4 text-sm text-text-muted flex-wrap">
              <span className="font-medium text-text-secondary">{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-text-muted" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span className="w-1 h-1 rounded-full bg-text-muted" />
              <span>{post.readingTime}</span>
            </div>
          </header>

          {/* Thumbnail */}
          <div className="relative w-full max-w-4xl h-64 md:h-96 rounded-2xl overflow-hidden mb-12 bg-surface">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 900px"
            />
          </div>

          {/* Mobile TOC */}
          <BlogPostSidebar headings={headings} mobile />

          {/* Two column layout */}
          <div className="flex gap-12 max-w-7xl">
            {/* Main content — 70% */}
            <article className="w-full lg:w-[70%] min-w-0">
              <MdxContent content={post.content} />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-10">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-surface border border-border px-3 py-1 text-xs text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <FeedbackButtons />
              <ShareButtons title={post.title} slug={post.slug} />
              <AuthorCard />
              <RelatedPosts posts={relatedPosts} />
            </article>

            {/* Sidebar — 30% */}
            <div className="hidden lg:block w-[30%] flex-shrink-0">
              <BlogPostSidebar headings={headings} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
