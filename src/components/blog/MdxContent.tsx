import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Image from "next/image";

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href ?? "";
  if (href.startsWith("/")) {
    return <Link href={href} className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors" {...props}>{props.children}</Link>;
  }
  if (href.startsWith("#")) {
    return <a {...props} className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors" />;
  }
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="text-text-primary hover:text-gold underline underline-offset-2 decoration-text-muted/40 hover:decoration-gold transition-colors"
    />
  );
}

function CustomImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const src = typeof props.src === "string" ? props.src : "";
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={props.alt ?? ""}
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />
      {props.alt && (
        <figcaption className="mt-2 text-center text-sm text-text-muted">
          {props.alt}
        </figcaption>
      )}
    </figure>
  );
}

function Heading2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const id = props.id ?? "";
  return (
    <h2 id={id} className="group relative font-heading text-2xl font-bold text-text-primary mt-12 mb-4 scroll-mt-24">
      <a href={`#${id}`} className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-text-muted hover:text-gold">
        #
      </a>
      {props.children}
    </h2>
  );
}

function Heading3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const id = props.id ?? "";
  return (
    <h3 id={id} className="group relative font-heading text-xl font-semibold text-text-primary mt-8 mb-3 scroll-mt-24">
      <a href={`#${id}`} className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-text-muted hover:text-gold text-sm">
        #
      </a>
      {props.children}
    </h3>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const mdxComponents: Record<string, any> = {
  a: CustomLink,
  img: CustomImage,
  h2: Heading2,
  h3: Heading3,
  p: (props: any) => <p className="text-text-secondary leading-relaxed mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2 text-text-secondary" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-text-secondary" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gold pl-4 py-2 my-6 italic text-text-secondary bg-surface/40 rounded-r-lg pr-4" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-surface border border-border rounded-xl p-4 overflow-x-auto my-6 text-sm" {...props} />
  ),
  code: (props: any) => {
    const isInline = typeof props.children === "string" && !props.className;
    if (isInline) {
      return <code className="bg-surface px-1.5 py-0.5 rounded text-sm text-gold font-mono" {...props} />;
    }
    return <code {...props} />;
  },
  strong: (props: any) => <strong className="font-semibold text-text-primary" {...props} />,
  hr: () => <hr className="border-border my-8" />,
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export default function MdxContent({ content }: { content: string }) {
  return (
    <div className="prose-custom">
      <MDXRemote
        source={content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
          },
        }}
      />
    </div>
  );
}
