import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import LetsTalkClient from "@/components/LetsTalkClient";

export const metadata: Metadata = {
  title: "Let's Talk — Book a Free Consultation",
  description: `Book a free 30-minute consultation with ${siteConfig.name}. Discuss your GoHighLevel CRM setup, automation workflows, funnels, and business scaling strategy. Pick a time that works for you.`,
  keywords: [
    "book GoHighLevel consultation",
    "free GHL strategy call",
    "GoHighLevel expert consultation",
    "schedule automation consultation",
    "book a meeting GoHighLevel",
  ],
  alternates: { canonical: `${siteConfig.url}/lets-talk` },
  openGraph: {
    title: `Let's Talk — Book a Free Consultation | ${siteConfig.name}`,
    description: `Book a free 30-minute consultation to discuss your GoHighLevel project. CRM, automation, funnels, AI workflows — let's map out your growth strategy.`,
    url: `${siteConfig.url}/lets-talk`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function LetsTalkPage() {
  return <LetsTalkClient />;
}
