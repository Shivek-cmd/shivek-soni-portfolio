import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@shiveksoni",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "geo.region": "US",
    "geo.country": "US",
    "content-language": "en-US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              url: siteConfig.url,
              email: siteConfig.email,
              jobTitle: "GoHighLevel Expert & Digital Automation Specialist",
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                addressLocality: siteConfig.location,
              },
              sameAs: [
                siteConfig.social.linkedin,
                siteConfig.social.twitter,
                siteConfig.social.github,
                siteConfig.social.instagram,
              ],
              knowsAbout: [
                "GoHighLevel",
                "CRM Automation",
                "Marketing Automation",
                "Sales Funnel Development",
                "AI-Powered Workflows",
                "White-Label SaaS",
                "Digital Marketing",
                "Business Process Automation",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: `${siteConfig.name} - GoHighLevel Services`,
              url: siteConfig.url,
              description: siteConfig.description,
              provider: {
                "@type": "Person",
                name: siteConfig.name,
              },
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              serviceType: [
                "GoHighLevel CRM Setup",
                "Workflow Automation",
                "Funnel Building",
                "AI Chatbot Configuration",
                "White-Label SaaS Development",
                "API Integration",
                "Reputation Management",
                "Marketing Automation",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
