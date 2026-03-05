import { Metadata } from "next";
import Contact from "@/components/Contact";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for GoHighLevel CRM setup, workflow automation, funnel building, and digital marketing services for USA businesses.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Contact />
    </main>
  );
}
