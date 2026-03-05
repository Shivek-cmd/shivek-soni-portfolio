export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectScreenshot {
  label: string;
  image: string; // PLACEHOLDER: Replace with actual screenshot
}

export interface Project {
  id: string;
  slug: string;
  client: string;
  url: string;
  industry: string;
  description: string;
  features: string[];
  tags: string[];
  outcome: string;
  image: string; // PLACEHOLDER: Replace with actual project screenshot
  challenge: string;
  solution: string;
  stats: ProjectStat[];
  screenshots: ProjectScreenshot[];
  metaTitle: string;
  metaDescription: string;
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
    slug: "mybusinessautomated",
    client: "MyBusinessAutomated",
    url: "https://mybusinessautomated.com",
    industry: "Marketing Automation Agency",
    description:
      "Full GHL-powered business automation platform serving multiple businesses with done-for-you automation setups, AI-powered sales assistants, and multi-channel outreach \u2014 all managed through sub-account provisioning and a custom training hub.",
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
    challenge:
      "MyBusinessAutomated needed a scalable platform to deliver done-for-you automation services to multiple clients simultaneously. Each client required unique CRM pipelines, AI-powered workflows, and multi-channel marketing \u2014 all without manual intervention. The challenge was building a system that could onboard new businesses quickly while maintaining quality and personalization across every sub-account.",
    solution:
      "I built a comprehensive GHL-powered automation platform with sub-account provisioning that lets MyBusinessAutomated spin up fully configured client environments in minutes. The system includes AI-powered sales assistants, automated review management, multi-channel outreach sequences, and a training hub \u2014 creating a true done-for-you automation agency infrastructure that scales effortlessly.",
    stats: [
      { value: "11+", label: "GHL Features Implemented" },
      { value: "100%", label: "Automated Client Onboarding" },
      { value: "Multi", label: "Businesses Served" },
      { value: "24/7", label: "AI Sales Assistant Active" },
    ],
    screenshots: [
      { label: "Homepage", image: "/images/screenshots/mybusinessautomated-homepage.jpg" },
      { label: "CRM Dashboard", image: "/images/screenshots/mybusinessautomated-crm.jpg" },
      { label: "Automation Workflows", image: "/images/screenshots/mybusinessautomated-workflows.jpg" },
      { label: "Training Hub", image: "/images/screenshots/mybusinessautomated-training.jpg" },
    ],
    metaTitle: "MyBusinessAutomated - GHL Automation Platform Case Study",
    metaDescription:
      "How I built a full GHL-powered business automation platform with AI sales assistants, CRM pipelines, multi-channel outreach, and sub-account management for a marketing automation agency.",
  },
  {
    id: "trevoxa-wealth",
    slug: "trevoxa-wealth",
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
    challenge:
      "Trevoxa Wealth needed a sophisticated platform to coordinate fiduciary financial services across multiple service lanes \u2014 Insurance, Investments, Estate Planning, and Automation. The critical requirement was a qualified intent routing system that could match potential clients to the right verified professional based on their specific financial needs, all while supporting English, French, and Spanish-speaking audiences.",
    solution:
      "I designed and built a multi-language GHL platform with a 2-minute intake funnel that captures client intent and automatically routes them to the appropriate service lane and verified professional. Each service lane has its own dedicated funnel, booking flow, and follow-up sequence. The privacy-first lead management system ensures sensitive financial data is handled correctly throughout the entire client journey.",
    stats: [
      { value: "3", label: "Languages Supported" },
      { value: "4", label: "Service Lane Funnels" },
      { value: "2 min", label: "Intake to Match Time" },
      { value: "100%", label: "Automated Lead Routing" },
    ],
    screenshots: [
      { label: "Homepage", image: "/images/screenshots/trevoxa-homepage.jpg" },
      { label: "Intake Funnel", image: "/images/screenshots/trevoxa-intake.jpg" },
      { label: "Service Lanes", image: "/images/screenshots/trevoxa-services.jpg" },
      { label: "Booking System", image: "/images/screenshots/trevoxa-booking.jpg" },
    ],
    metaTitle: "Trevoxa Wealth - Multi-Language Financial Platform Case Study",
    metaDescription:
      "How I built a multi-language GHL financial coordination platform with qualified intent routing, service lane funnels, and automated lead matching for wealth management.",
  },
  {
    id: "synexum-labs",
    slug: "synexum-labs",
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
    challenge:
      "Synexum Labs required an enterprise-grade digital presence that would position them as a credible AI and digital transformation partner for institutional clients. The website needed to convey authority and sophistication while functioning as a lead generation machine \u2014 capturing, qualifying, and nurturing enterprise leads through long B2B sales cycles across multiple languages.",
    solution:
      "I built a high-end GHL website with enterprise B2B positioning, featuring dynamic case study pages, a capability brief lead magnet funnel, and discovery call booking. The multi-language implementation (EN/FR/ES) expands their reach to international institutional clients. The CRM pipeline tracks enterprise leads through qualification stages, while automated nurture sequences keep prospects engaged throughout the extended B2B decision-making process.",
    stats: [
      { value: "3", label: "Languages Supported" },
      { value: "10", label: "GHL Features Built" },
      { value: "B2B", label: "Enterprise Positioning" },
      { value: "100%", label: "Automated Follow-ups" },
    ],
    screenshots: [
      { label: "Homepage", image: "/images/screenshots/synexum-homepage.jpg" },
      { label: "Case Studies", image: "/images/screenshots/synexum-cases.jpg" },
      { label: "Lead Magnet Funnel", image: "/images/screenshots/synexum-funnel.jpg" },
      { label: "Blog / Insights", image: "/images/screenshots/synexum-blog.jpg" },
    ],
    metaTitle: "Synexum Labs - Enterprise AI Platform Case Study",
    metaDescription:
      "How I built an enterprise-grade GHL website with multi-language support, lead magnet funnels, dynamic case studies, and automated qualification workflows for a B2B AI company.",
  },
  {
    id: "mg-pressure-cleaning",
    slug: "mg-pressure-cleaning",
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
    challenge:
      "MG Pressure Cleaning was a growing local service business losing leads due to slow response times and manual scheduling. They needed a system that could handle bookings, send reminders, follow up after service completion, and systematically generate Google reviews \u2014 all without adding administrative overhead.",
    solution:
      "I built a complete GHL system with online booking, automated appointment reminders, and SMS follow-ups that trigger review requests after every completed job. The before/after gallery builds visual trust, while 10 dedicated service pages and service area pages dominate local SEO. The result is a fully automated customer lifecycle \u2014 from first inquiry to 5-star review \u2014 that runs on autopilot.",
    stats: [
      { value: "4.9\u2605", label: "Google Rating" },
      { value: "300+", label: "Homes Cleaned" },
      { value: "10", label: "Service Pages for SEO" },
      { value: "85%", label: "Automated Follow-ups" },
    ],
    screenshots: [
      { label: "Homepage", image: "/images/screenshots/mg-homepage.jpg" },
      { label: "Booking System", image: "/images/screenshots/mg-booking.jpg" },
      { label: "Before & After Gallery", image: "/images/screenshots/mg-gallery.jpg" },
      { label: "Service Pages", image: "/images/screenshots/mg-services.jpg" },
    ],
    metaTitle: "MG Pressure Cleaning - Local Service Business Automation Case Study",
    metaDescription:
      "How I built a fully automated GHL system with online booking, review generation, and SMS follow-ups for a pressure washing business \u2014 achieving 4.9 stars and 300+ homes cleaned.",
  },
  {
    id: "happy-people-ai",
    slug: "happy-people-ai",
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
    challenge:
      "Happy People AI needed a high-converting enrollment system for their Job Guarantee Program that could create urgency (25 slots per cohort), capture qualified leads, book consultations, and manage the full student lifecycle from application through job placement. Manual tracking of cohorts and placements was becoming unsustainable as the program scaled.",
    solution:
      "I built a high-converting GHL funnel with built-in scarcity elements, transformation storytelling, and social proof that drives consultation bookings. The backend CRM pipeline tracks every applicant through stages \u2014 from initial inquiry to enrolled, active, completed, and placed. Automated email and SMS sequences nurture leads pre-enrollment and keep students engaged throughout the program, while the cohort management system provides visibility into placement outcomes.",
    stats: [
      { value: "2,500+", label: "Successful Placements" },
      { value: "25", label: "Slots Per Cohort" },
      { value: "10", label: "GHL Features Built" },
      { value: "100%", label: "Automated Enrollment" },
    ],
    screenshots: [
      { label: "Program Landing Page", image: "/images/screenshots/happypeople-landing.jpg" },
      { label: "Enrollment Funnel", image: "/images/screenshots/happypeople-funnel.jpg" },
      { label: "Consultation Booking", image: "/images/screenshots/happypeople-booking.jpg" },
      { label: "Testimonials Section", image: "/images/screenshots/happypeople-testimonials.jpg" },
    ],
    metaTitle: "Happy People AI - EdTech Enrollment Funnel Case Study",
    metaDescription:
      "How I built a high-converting GHL enrollment funnel with cohort management, consultation booking, and placement tracking \u2014 resulting in 2,500+ successful job placements.",
  },
  {
    id: "all-cleaning-equipment",
    slug: "all-cleaning-equipment",
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
    challenge:
      "All Cleaning Equipment needed a full e-commerce marketplace built entirely within GoHighLevel \u2014 not a Shopify or WooCommerce bolt-on. They required product catalog management, instant ordering, a seller listing funnel for private equipment sales, truck mount consultation booking, and Stripe payment processing \u2014 all integrated into one platform with member accounts and automated order follow-ups.",
    solution:
      "I built a complete GHL-native e-commerce marketplace with product catalog pages, pricing and discount display, instant checkout with Stripe integration, and a unique \u2018Sell Equipment\u2019 listing funnel that lets private sellers list their machines. The platform includes a member portal, AI marketing tools for sellers, consultation booking for high-value truck mount purchases, and automated delivery tracking and re-engagement sequences that drive repeat business.",
    stats: [
      { value: "10,000+", label: "Businesses Served" },
      { value: "5,000+", label: "Machines Delivered" },
      { value: "14", label: "GHL Features Built" },
      { value: "Stripe", label: "Payment Integration" },
    ],
    screenshots: [
      { label: "Store Homepage", image: "/images/screenshots/allcleaning-homepage.jpg" },
      { label: "Product Catalog", image: "/images/screenshots/allcleaning-catalog.jpg" },
      { label: "Checkout Flow", image: "/images/screenshots/allcleaning-checkout.jpg" },
      { label: "Sell Equipment Funnel", image: "/images/screenshots/allcleaning-sell.jpg" },
    ],
    metaTitle: "All Cleaning Equipment - GHL E-Commerce Marketplace Case Study",
    metaDescription:
      "How I built a full e-commerce marketplace inside GoHighLevel with product catalog, Stripe payments, seller listing funnel, and AI marketing tools \u2014 serving 10,000+ businesses.",
  },
  {
    id: "redstar-huts",
    slug: "redstar-huts",
    client: "RedStar Huts",
    url: "https://redstarhuts.com",
    industry: "Luxury Real Estate & Consulting",
    description:
      "Premium real estate advisory website serving luxury property buyers and investors across Punjab\u2019s tri-city region (Mohali, Zirakpur, Chandigarh). Features property listings with detailed cards, consultation booking, WhatsApp and click-to-call integration, NRI buyer targeting, and automated follow-up workflows.",
    features: [
      "Full Next.js website with GHL backend integration",
      "Property listings pages with detailed property cards (BHK, beds, baths, sq ft, location)",
      "Individual property detail pages with photo galleries",
      "Service pages for Property Sales, Buyer Advisory, Investment Consulting, Market Analysis",
      "Consultation booking funnel (Schedule a Consultation)",
      "WhatsApp integration for instant lead contact",
      "Click-to-call integration",
      "Blog with SEO structure and author pages",
      "Client testimonials system",
      "Builder/developer showcase (marquee ticker)",
      "FAQ section for lead qualification",
      "CRM pipeline for property inquiry management",
      "Lead capture forms on every service page",
      "NRI buyer targeting and dedicated flow",
      "Contact and inquiry management workflows",
      "Automated follow-up after consultation booking",
      "Privacy policy, terms, legal pages",
    ],
    tags: ["Funnels", "CRM & Automation", "Booking & Calendars"],
    outcome:
      "Premium real estate advisory serving luxury buyers. 50+ families served, 7+ premium properties across 3 cities",
    image: "/images/project-redstar-huts.jpg",
    challenge:
      "RedStar Huts needed a premium digital presence to serve luxury property buyers and NRI investors across Chandigarh\u2019s tri-city region. The key challenge was building a sophisticated property listing system with detailed cards, photo galleries, and multi-service pages \u2014 while integrating WhatsApp and click-to-call for instant lead engagement in a market where response speed determines deal closure.",
    solution:
      "I built a Next.js frontend with GHL backend integration, featuring property listing pages with detailed BHK/beds/baths/sq ft cards, individual property pages with photo galleries, and four dedicated service pages. The consultation booking funnel, WhatsApp integration, and click-to-call functionality ensure instant lead engagement. A dedicated NRI buyer flow targets overseas investors, while the CRM pipeline tracks every property inquiry from initial contact through closing.",
    stats: [
      { value: "50+", label: "Families Served" },
      { value: "7+", label: "Premium Properties" },
      { value: "3", label: "Cities Covered" },
      { value: "17", label: "GHL Features Built" },
    ],
    screenshots: [
      { label: "Homepage", image: "/images/screenshots/redstar-homepage.jpg" },
      { label: "Property Listings", image: "/images/screenshots/redstar-listings.jpg" },
      { label: "Property Detail", image: "/images/screenshots/redstar-detail.jpg" },
      { label: "Consultation Booking", image: "/images/screenshots/redstar-booking.jpg" },
    ],
    metaTitle: "RedStar Huts - Luxury Real Estate Platform Case Study",
    metaDescription:
      "How I built a premium real estate advisory website with GHL integration, property listings, WhatsApp lead capture, NRI buyer targeting, and consultation booking \u2014 serving 50+ families across 3 cities.",
  },
];
