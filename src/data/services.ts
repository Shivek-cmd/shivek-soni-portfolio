export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}

export const serviceCategories: Service[] = [
  {
    id: "crm-pipeline",
    title: "CRM & Pipeline Management",
    description:
      "Custom CRM architectures that mirror your exact sales process. From lead capture to close, every stage is mapped, automated, and optimized for conversion.",
    features: [
      "Custom pipeline design & multi-pipeline setups",
      "Smart contact segmentation & tagging logic",
      "Opportunity tracking with automated stage progression",
      "Custom fields, custom values & advanced filtering",
      "Team permissions & lead assignment rules",
    ],
    icon: "📊",
    image: "/services/crm-pipeline.svg",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation & Sequences",
    description:
      "Intelligent automation workflows that eliminate manual tasks and keep your business running on autopilot. Every trigger, condition, and action is precision-engineered.",
    features: [
      "Multi-branch conditional workflows",
      "If/else logic with custom field triggers",
      "Drip campaigns with behavioral triggers",
      "Internal notification & task assignment automations",
      "Webhook-based integrations with external tools",
      "Workflow AI for smart decision routing",
    ],
    icon: "⚡",
    image: "/services/workflow-automation.svg",
  },
  {
    id: "funnels-websites",
    title: "Funnels, Websites & Landing Pages",
    description:
      "High-converting funnels and websites built natively in GHL. Every page is designed for speed, mobile responsiveness, and maximum conversion.",
    features: [
      "Multi-step funnel builds with A/B testing",
      "Custom-coded landing pages within GHL",
      "Blog setup with SEO-optimized content structure",
      "Membership sites & gated content portals",
      "E-commerce storefronts with payment integration",
      "Form & survey builders with conditional logic",
    ],
    icon: "🚀",
    image: "/services/funnels-websites.svg",
  },
  {
    id: "ai-tools",
    title: "AI-Powered Tools & Conversation AI",
    description:
      "Harness GoHighLevel's full AI suite — from conversational chatbots to content generation and review management — all configured to match your brand voice.",
    features: [
      "Conversation AI setup with custom training prompts",
      "AI-powered appointment booking bots",
      "Content AI for email, SMS & social copy",
      "Reviews AI for automated reputation responses",
      "Workflow AI for intelligent routing decisions",
      "AI Agent configuration with intent recognition",
    ],
    icon: "🤖",
    image: "/services/ai-tools.svg",
  },
  {
    id: "messaging",
    title: "Multi-Channel Messaging & Communication",
    description:
      "Unified messaging across every channel your customers use. SMS, email, WhatsApp, social DMs, and live chat — all from one inbox, all automated.",
    features: [
      "Two-way SMS & email campaigns",
      "WhatsApp Business API integration",
      "Facebook & Instagram DM automation",
      "Google Business Messages",
      "Live chat widget with AI-assisted responses",
      "Unified conversation inbox management",
    ],
    icon: "💬",
    image: "/services/messaging.svg",
  },
  {
    id: "voice-phone",
    title: "Voice, Phone & Call Systems",
    description:
      "Full telephony solutions inside GHL — call tracking, IVR menus, power dialers, and voicemail drops that integrate seamlessly with your workflows.",
    features: [
      "Inbound/outbound call tracking & recording",
      "IVR phone tree setup & configuration",
      "Power dialer for sales team outreach",
      "Voicemail drop campaigns",
      "Call routing & ring groups",
      "Missed call text-back automation",
    ],
    icon: "📞",
    image: "/services/voice-phone.svg",
  },
  {
    id: "reputation",
    title: "Reputation & Review Management",
    description:
      "Automated review generation, monitoring, and response systems that build social proof and protect your online reputation across every platform.",
    features: [
      "Automated review request sequences",
      "Google & Facebook review funnels",
      "AI-powered review response automation",
      "Review widget embedding on websites",
      "Negative review alert & escalation workflows",
      "Reputation dashboard & analytics",
    ],
    icon: "⭐",
    image: "/services/reputation.svg",
  },
  {
    id: "calendars",
    title: "Appointment Scheduling & Calendars",
    description:
      "Sophisticated booking systems that eliminate no-shows and maximize your calendar. Group events, round-robin assignments, and automated reminders built in.",
    features: [
      "Custom calendar setups with availability rules",
      "Round-robin & class booking configurations",
      "Automated confirmation & reminder sequences",
      "No-show follow-up workflows",
      "Calendar sync (Google, Outlook, iCal)",
      "Embedded booking widgets for funnels & sites",
    ],
    icon: "📅",
    image: "/services/calendars.svg",
  },
  {
    id: "reporting",
    title: "Reporting, Dashboards & Analytics",
    description:
      "Custom dashboards and reporting views that give you real-time visibility into every metric that matters — from ad spend to revenue attribution.",
    features: [
      "Custom dashboard builds with KPI widgets",
      "Attribution reporting & source tracking",
      "Ad campaign performance dashboards",
      "Appointment & pipeline conversion reports",
      "Agency-level rollup reporting",
      "Call & conversation analytics",
    ],
    icon: "📈",
    image: "/services/reporting.svg",
  },
  {
    id: "whitelabel-saas",
    title: "White-Label SaaS & Agency Solutions",
    description:
      "Full SaaS product builds on GoHighLevel's white-label infrastructure. Launch your own branded platform, manage sub-accounts, and scale your agency.",
    features: [
      "White-label desktop & mobile app setup",
      "Custom domain & branding configuration",
      "SaaS pricing plan & billing setup (Stripe)",
      "Snapshot creation & marketplace publishing",
      "Sub-account provisioning & onboarding flows",
      "Agency dashboard & client management",
    ],
    icon: "🏢",
    image: "/services/whitelabel-saas.svg",
  },
  {
    id: "integrations",
    title: "Integrations & API Development",
    description:
      "Seamless connections between GHL and your entire tech stack. Custom API integrations, Zapier flows, and webhook architectures that keep everything in sync.",
    features: [
      "REST API custom integrations",
      "Zapier & Make (Integromat) workflow builds",
      "Webhook configuration & payload mapping",
      "Payment gateway integrations (Stripe, PayPal)",
      "Third-party CRM data migration",
      "Custom app marketplace integrations",
    ],
    icon: "🔗",
    image: "/services/integrations.svg",
  },
  {
    id: "social-media",
    title: "Social Media & Content Management",
    description:
      "Plan, schedule, and publish content across all social platforms directly from GHL. Unified social management with engagement tracking and analytics.",
    features: [
      "Social media calendar & scheduling",
      "Multi-platform publishing (FB, IG, LinkedIn, Google)",
      "Content AI for post generation",
      "Engagement tracking & response management",
      "Social media analytics dashboards",
      "GMB post management & optimization",
    ],
    icon: "📱",
    image: "/services/social-media.svg",
  },
];
