import { Metadata } from "next";
import About from "@/components/About";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}, a GoHighLevel expert and digital automation specialist helping USA businesses scale with CRM, AI workflows, and marketing automation.`,
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <About />
    </main>
  );
}
