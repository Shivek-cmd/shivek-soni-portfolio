export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  results: string[];
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: "real-estate-crm",
    title: "Real Estate Agency CRM Overhaul",
    category: "CRM & Automation",
    description:
      "Complete GHL migration and automation build for a 20-agent real estate firm. Designed custom pipelines for buyer and seller journeys, automated follow-up sequences, and built a lead distribution system with round-robin assignment.",
    results: [
      "68% reduction in lead response time",
      "3x increase in pipeline conversion rate",
      "40+ hours saved per week across the team",
    ],
    tags: ["CRM", "Workflows", "Lead Distribution", "Pipelines"],
    image: "/images/project-placeholder-1.jpg", // PLACEHOLDER: Replace with actual screenshot
  },
  {
    id: "saas-whitelabel",
    title: "White-Label SaaS Platform Launch",
    category: "SaaS & Agency",
    description:
      "Built and launched a fully branded SaaS platform on GHL's white-label infrastructure for a marketing agency. Included custom onboarding flows, tiered pricing plans, snapshot templates, and automated client provisioning.",
    results: [
      "Launched with 50+ paying subscribers in month one",
      "Automated 90% of client onboarding",
      "Recurring revenue model generating $15K/mo",
    ],
    tags: ["White-Label", "SaaS", "Stripe", "Snapshots"],
    image: "/images/project-placeholder-2.jpg", // PLACEHOLDER: Replace with actual screenshot
  },
  {
    id: "ai-booking-system",
    title: "AI-Powered Booking & Follow-Up System",
    category: "AI & Scheduling",
    description:
      "Deployed Conversation AI as the first point of contact for a medical spa. The AI bot qualifies leads, answers FAQs, and books appointments directly into the GHL calendar — with automated reminders and no-show recovery workflows.",
    results: [
      "85% of inquiries handled without human intervention",
      "42% increase in booked appointments",
      "No-show rate dropped from 30% to 8%",
    ],
    tags: ["Conversation AI", "Calendars", "Workflows", "SMS"],
    image: "/images/project-placeholder-3.jpg", // PLACEHOLDER: Replace with actual screenshot
  },
  {
    id: "reputation-engine",
    title: "Automated Reputation Engine",
    category: "Reputation Management",
    description:
      "Built a multi-location reputation management system for a dental group. Automated review requests post-appointment, set up AI-powered review responses, and created executive dashboards tracking ratings across all locations.",
    results: [
      "Google rating improved from 3.8 to 4.7 stars",
      "200+ new 5-star reviews in 90 days",
      "Negative review response time under 2 hours",
    ],
    tags: ["Reviews", "AI Responses", "Multi-Location", "Dashboards"],
    image: "/images/project-placeholder-4.jpg", // PLACEHOLDER: Replace with actual screenshot
  },
  {
    id: "ecommerce-funnel",
    title: "High-Converting E-Commerce Funnel",
    category: "Funnels & Sales",
    description:
      "Designed and built a multi-step sales funnel for a coaching business inside GHL. Included lead magnet opt-in, tripwire offer, core product upsell, and order bump — all with pixel tracking and automation sequences.",
    results: [
      "12.4% opt-in to purchase conversion rate",
      "Average order value increased by 45%",
      "Fully automated fulfillment & onboarding",
    ],
    tags: ["Funnels", "E-Commerce", "Payments", "Upsells"],
    image: "/images/project-placeholder-5.jpg", // PLACEHOLDER: Replace with actual screenshot
  },
  {
    id: "multi-channel-outreach",
    title: "Multi-Channel Outreach Machine",
    category: "Messaging & Campaigns",
    description:
      "Architected a multi-channel outreach system combining SMS, email, voicemail drops, and Facebook DMs for a B2B lead generation agency. Every channel is sequenced with smart delays and behavioral triggers.",
    results: [
      "52% open rate on SMS campaigns",
      "3.2x ROI on outreach campaigns",
      "Booked 120+ qualified meetings in first quarter",
    ],
    tags: ["SMS", "Email", "Voicemail", "Multi-Channel"],
    image: "/images/project-placeholder-6.jpg", // PLACEHOLDER: Replace with actual screenshot
  },
];
