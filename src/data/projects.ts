export interface Project {
  id: string;
  client: string;
  url: string;
  industry: string;
  description: string;
  features: string[];
  tags: string[];
  outcome: string;
  image: string; // PLACEHOLDER: Replace with actual project screenshot
}

export const projectCategories = [
  "All",
  "Funnels",
  "CRM & Automation",
  "E-Commerce",
  "Reputation",
  "AI & Chatbots",
  "Booking & Calendars",
] as const;

export const projects: Project[] = [
  {
    id: "mybusinessautomated",
    client: "MyBusinessAutomated",
    url: "https://mybusinessautomated.com",
    industry: "Marketing Automation Agency",
    description:
      "Full GHL-powered business automation platform serving multiple businesses with done-for-you automation setups, AI-powered sales assistants, and multi-channel outreach — all managed through sub-account provisioning and a custom training hub.",
    features: [
      "CRM + pipeline management for lead tracking",
      "Funnel & website builder implementation",
      "AI-powered sales assistant and workflows",
      "Automated review & reputation management",
      "Multi-channel outreach automation",
      "Done-for-you automation setup for clients",
      "AI content generation integration",
      "Training platform and knowledge hub",
      "Email marketing sequences",
      "Affiliate marketing system integration",
      "Sub-account management for client onboarding",
    ],
    tags: ["CRM & Automation", "AI & Chatbots", "Funnels", "Reputation"],
    outcome:
      "Platform now serves multiple businesses with fully automated sales and marketing systems",
    image: "/images/project-mybusinessautomated.jpg",
  },
  {
    id: "trevoxa-wealth",
    client: "Trevoxa Wealth",
    url: "https://trevoxawealth.com",
    industry: "Financial Services / Wealth Coordination",
    description:
      "Fiduciary financial coordination platform with multi-language support, qualified intent routing that matches leads to verified professionals based on intake answers, and dedicated service lane funnels for Insurance, Investments, Estate, and Automation.",
    features: [
      "Full GHL website with multi-language support (EN/FR/ES)",
      "Lead intake funnel (2-minute intake form \u2192 routing)",
      "Qualified intent routing system",
      "Service lane pages with dedicated funnels",
      "Appointment booking system (Book Intro Call)",
      "Event management and clinic registration flows",
      "Blog setup with SEO structure",
      "Contact and lead capture forms",
      "Automated follow-up sequences post-intake",
      "Privacy-first lead management workflows",
    ],
    tags: ["Funnels", "CRM & Automation", "Booking & Calendars"],
    outcome:
      "Fiduciary platform connecting clients to verified professionals automatically",
    image: "/images/project-trevoxa-wealth.jpg",
  },
  {
    id: "synexum-labs",
    client: "Synexum Labs",
    url: "https://synexumlabs.com",
    industry: "Enterprise AI & Digital Transformation",
    description:
      "Enterprise-grade B2B digital presence with multi-language site, dynamic case studies, lead magnet funnels for capability briefs, and automated qualification workflows for institutional clients \u2014 designed to position Synexum as an enterprise AI leader.",
    features: [
      "High-end GHL website for enterprise B2B positioning",
      "Multi-language site (EN/FR/ES)",
      "Case studies section with dynamic pages",
      "Lead capture and discovery call booking funnel",
      "Capability brief download (lead magnet funnel)",
      "Contact and consultation request workflows",
      "Automated email follow-up after form submission",
      "Blog/insights section with SEO structure",
      "CRM pipeline for enterprise lead management",
      "Newsletter subscription and nurture sequences",
    ],
    tags: ["Funnels", "CRM & Automation", "AI & Chatbots"],
    outcome:
      "Enterprise-grade digital presence with automated lead qualification for institutional clients",
    image: "/images/project-synexum-labs.jpg",
  },
  {
    id: "mg-pressure-cleaning",
    client: "MG Pressure Cleaning",
    url: "https://mgpressurecleaning.com",
    industry: "Home Services / Pressure Washing",
    description:
      "Local service business with fully automated booking, review generation, and customer follow-up. Includes 10 service pages for local SEO, before/after gallery, and an SMS follow-up system that drives a 4.9-star Google reputation.",
    features: [
      "Full GHL website for local service business",
      "Online booking/calendar system for service scheduling",
      "Review generation automation system",
      "4.9-star reputation management workflow",
      "Before/after gallery showcase pages",
      "Service area pages for local SEO",
      "Multiple service pages (10 services)",
      "Lead capture and quote request forms",
      "Automated appointment reminders and confirmations",
      "SMS follow-up after service completion",
      "Contact and customer care workflows",
    ],
    tags: ["Reputation", "Booking & Calendars", "CRM & Automation"],
    outcome:
      "4.9 stars on Google, 300+ homes cleaned with fully automated booking and review system",
    image: "/images/project-mg-pressure-cleaning.jpg",
  },
  {
    id: "happy-people-ai",
    client: "Happy People AI",
    url: "https://jgp.happypeopleai.com/job-guarantee-program",
    industry: "Career Training / EdTech",
    description:
      "High-converting enrollment funnel with scarcity elements (25 slots per cohort), free 1:1 consultation booking, transformation storytelling, and a full cohort management pipeline tracking applicants from enrollment through placement.",
    features: [
      "High-converting sales funnel (program landing page)",
      "Scarcity/urgency elements (25 slots per cohort)",
      "Free 1:1 consultation booking funnel",
      "Lead capture and nurture sequence for applicants",
      "Before/after transformation storytelling funnel",
      "Testimonials and social proof automation",
      "FAQ section with engagement tracking",
      "Email + SMS follow-up after booking",
      "Enrollment workflow automation",
      "CRM pipeline for cohort management",
    ],
    tags: ["Funnels", "Booking & Calendars", "CRM & Automation", "AI & Chatbots"],
    outcome:
      "Automated enrollment funnel with cohort management pipeline. 2,500+ placements",
    image: "/images/project-happy-people-ai.jpg",
  },
  {
    id: "all-cleaning-equipment",
    client: "All Cleaning Equipment",
    url: "https://allcleaningequipment.com",
    industry: "E-Commerce / Cleaning Equipment",
    description:
      "Full GHL e-commerce marketplace for cleaning professionals with product catalog, instant order checkout, a \u2018Sell Equipment\u2019 listing funnel for private sellers, truck mount consultation booking, AI marketing tools, and Stripe-powered payments.",
    features: [
      "Full e-commerce store built inside GHL",
      "Product catalog (chemicals, truck mounts, equipment)",
      "Product detail pages with pricing and discount display",
      "Instant Order system and checkout flow",
      "Sell Equipment listing funnel for private sellers",
      "Appointment/call booking for truck mount consultations",
      "AI marketing tools for equipment sellers",
      "Automated delivery and order follow-up sequences",
      "Testimonials and social proof system",
      "FAQ and customer support workflows",
      "Login/signup member portal",
      "Stripe payment integration",
      "Social media integration across all platforms",
      "Newsletter and re-engagement email sequences",
    ],
    tags: ["E-Commerce", "Funnels", "Booking & Calendars", "AI & Chatbots"],
    outcome:
      "Full GHL e-commerce marketplace. 10,000+ businesses served, 5,000+ machines delivered",
    image: "/images/project-all-cleaning-equipment.jpg",
  },
];
