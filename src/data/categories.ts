export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "crm-automation",
    name: "CRM & Automation",
    description:
      "Deep dives into GoHighLevel CRM setup, pipeline management, workflow automation, and lead nurturing strategies for growing businesses.",
    metaTitle: "CRM & Automation Articles | Automate with Level Blog",
    metaDescription:
      "Learn how to set up GoHighLevel CRM pipelines, automate follow-ups, score leads, and build workflows that close more deals for your business.",
  },
  {
    slug: "funnels-websites",
    name: "Funnels & Websites",
    description:
      "Guides on building high-converting sales funnels, landing pages, membership sites, and websites inside GoHighLevel.",
    metaTitle: "Funnels & Websites Articles | Automate with Level Blog",
    metaDescription:
      "Step-by-step guides on building GoHighLevel funnels, landing pages, websites, and membership portals that convert visitors into customers.",
  },
  {
    slug: "ai-tools",
    name: "AI & Smart Tools",
    description:
      "How to leverage GoHighLevel's AI features — conversation AI, chatbots, content generation, and intelligent workflow routing.",
    metaTitle: "AI & Smart Tools Articles | Automate with Level Blog",
    metaDescription:
      "Explore GoHighLevel AI chatbots, conversation AI, content generation, and smart automation tools that scale your business intelligently.",
  },
  {
    slug: "marketing-growth",
    name: "Marketing & Growth",
    description:
      "Strategies for email marketing, SMS campaigns, reputation management, social media, and scaling your business with GoHighLevel.",
    metaTitle: "Marketing & Growth Articles | Automate with Level Blog",
    metaDescription:
      "Marketing strategies using GoHighLevel — email campaigns, SMS marketing, reputation management, and growth tactics for USA businesses.",
  },
  {
    slug: "tutorials-guides",
    name: "Tutorials & Guides",
    description:
      "Step-by-step GoHighLevel tutorials, setup guides, best practices, and how-to walkthroughs for beginners and advanced users.",
    metaTitle: "GoHighLevel Tutorials & Guides | Automate with Level Blog",
    metaDescription:
      "Comprehensive GoHighLevel tutorials and step-by-step guides. Learn GHL setup, configuration, integrations, and advanced techniques.",
  },
  {
    slug: "case-studies",
    name: "Case Studies & Results",
    description:
      "Real-world results, client success stories, and data-driven case studies showing what GoHighLevel automation can achieve.",
    metaTitle: "Case Studies & Results | Automate with Level Blog",
    metaDescription:
      "Real GoHighLevel success stories and case studies. See how businesses use GHL automation to increase revenue and save time.",
  },
];

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}
