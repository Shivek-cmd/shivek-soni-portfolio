export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ProjectScreenshot {
  label: string;
  image: string;
  description: string;
}

export interface ProjectMetric {
  before: string;
  after: string;
  label: string;
}

export interface Project {
  id: string;
  slug: string;
  client: string;
  url: string;
  industry: string;
  location: string;
  yearBuilt: string;
  description: string;
  shortDescription: string;
  features: string[];
  tags: string[];
  outcome: string;
  heroImage: string;
  accentColor: string;
  challenge: string;
  solution: string;
  stats: ProjectStat[];
  metrics: ProjectMetric[];
  screenshots: ProjectScreenshot[];
  testimonial?: ProjectTestimonial;
  techStack: string[];
  deliveryTime: string;
  metaTitle: string;
  metaDescription: string;
  // Schema.org structured data helpers
  serviceType: string;
  areaServed: string;
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
    location: "United States",
    yearBuilt: "2024",
    shortDescription: "All-in-one GHL-powered automation platform with AI sales assistants, DFY client onboarding, and multi-business sub-account management.",
    description:
      "Full GHL-powered business automation platform serving multiple businesses with done-for-you automation setups, AI-powered sales assistants, and multi-channel outreach — all managed through sub-account provisioning and a custom training hub.",
    features: [
      "CRM + pipeline management for lead tracking",
      "Funnel & website builder implementation",
      "AI-powered sales assistant and 24/7 workflows",
      "Automated review & reputation management",
      "Multi-channel outreach automation (SMS, email, social)",
      "Done-for-you automation setup for clients",
      "AI content generation integration",
      "Training platform and knowledge hub",
      "Email marketing sequences & drip campaigns",
      "Affiliate marketing system integration",
      "Sub-account management for client onboarding",
    ],
    tags: ["CRM & Automation", "AI & Chatbots", "Funnels", "Reputation"],
    outcome:
      "Platform now serves multiple businesses with fully automated sales and marketing systems, generating recurring SaaS revenue",
    heroImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/g6vh2PP4l327MMOXLm2Z/media/68fb3d52304c6e34dc7c1ac7.webp",
    accentColor: "#C8A55C",
    challenge:
      "MyBusinessAutomated needed a scalable platform to deliver done-for-you automation services to multiple clients simultaneously. Each client required unique CRM pipelines, AI-powered workflows, and multi-channel marketing — all without manual intervention. The founder, Jeff Egberg, had decades of experience but was bottlenecked by setup time per client. The challenge: build infrastructure that lets them spin up fully configured client environments in minutes, not weeks.",
    solution:
      "I built a comprehensive GHL-powered automation platform with sub-account provisioning, allowing MBA to spin up fully configured client environments in minutes. The system includes an AI-powered sales assistant active 24/7, automated review management, multi-channel outreach sequences, a dedicated training hub with courses, and an affiliate marketing system. The result: a true done-for-you automation agency that scales effortlessly and generates recurring SaaS revenue.",
    stats: [
      { value: "24/7", label: "AI Sales Assistant Active" },
      { value: "100%", label: "Automated Client Onboarding" },
      { value: "11+", label: "GHL Features Implemented" },
      { value: "Multiple", label: "Businesses Served" },
    ],
    metrics: [
      { before: "Days per client setup", after: "Minutes", label: "Client Onboarding Speed" },
      { before: "Manual follow-ups", after: "Fully automated", label: "Lead Follow-Up" },
      { before: "Single revenue stream", after: "Recurring SaaS", label: "Revenue Model" },
    ],
    screenshots: [
      {
        label: "AI Adoption & Team Enablement",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/g6vh2PP4l327MMOXLm2Z/media/68fb3d52304c6e34dc7c1ac7.webp",
        description: "AI enablement program helping marketing teams integrate GHL and automate client workflows confidently",
      },
      {
        label: "Unified Automation Ecosystem",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/g6vh2PP4l327MMOXLm2Z/media/68fb3d6154fb6217ce632911.webp",
        description: "Centralized marketing, sales, and reporting integrating GHL with AI workflows for national service franchises",
      },
      {
        label: "AI Sales Assistant & 24/7 Support",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/g6vh2PP4l327MMOXLm2Z/media/68fb3d7b54fb62e9f5632bc5.webp",
        description: "AI-powered sales assistants ensuring every lead gets a timely, personalized response around the clock",
      },
      {
        label: "Proving ROI on Automation",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/g6vh2PP4l327MMOXLm2Z/media/68fb3d8c304c6e94657c2066.webp",
        description: "ROI dashboards translating every workflow into data-backed savings, growth, and performance clarity",
      },
    ],
    testimonial: {
      quote: "MBA has been a game-changer for me. Instead of feeling stuck with scattered marketing efforts, I finally have a streamlined system that creates momentum and measurable growth. If you're serious about accelerating your business, MBA delivers the clarity, structure, and results you need.",
      author: "Thomas",
      role: "Business Owner",
    },
    techStack: ["GoHighLevel", "Sub-Accounts", "Conversation AI", "Workflow Automation", "Stripe Billing"],
    deliveryTime: "3 weeks",
    metaTitle: "MyBusinessAutomated GHL Case Study — Automation Agency Platform | Automate with Level",
    metaDescription:
      "How I built a full GoHighLevel-powered business automation agency platform with AI sales assistants, sub-account onboarding, multi-channel outreach, and recurring SaaS revenue model.",
    serviceType: "Marketing Automation Platform",
    areaServed: "United States",
  },
  {
    id: "mg-pressure-cleaning",
    slug: "mg-pressure-cleaning",
    client: "MG Professional Services",
    url: "https://mgpressurecleaning.com",
    industry: "Home Services / Pressure Washing",
    location: "Woodbridge, VA & DMV Area",
    yearBuilt: "2024",
    shortDescription: "Local home services platform with automated booking, review generation, 10 service pages for local SEO, and a 4.9-star Google reputation — all on autopilot.",
    description:
      "Local service business with fully automated booking, review generation, and customer follow-up. Includes 10 service pages for local SEO, before/after gallery, and an SMS follow-up system that drives a 4.9-star Google reputation.",
    features: [
      "Full GHL website for local service business",
      "Online booking/calendar system for service scheduling",
      "Review generation automation system",
      "4.9-star reputation management workflow",
      "Before/after gallery showcase pages (6 real comparisons)",
      "10 dedicated service area pages for local SEO",
      "10 service pages (Pressure Washing, House Cleaning, HVAC, Landscaping, Painting, Carpet, Move-In/Out, Stain & Seal, General Maintenance, Carpet & Vinyl Repairs)",
      "Lead capture and quote request forms",
      "Automated appointment reminders and confirmations",
      "SMS follow-up after service completion",
      "Contact and customer care workflows",
    ],
    tags: ["Reputation", "Booking & Calendars", "CRM & Automation"],
    outcome:
      "4.9 stars on Google, 300+ homes cleaned, 100% customer satisfaction — fully automated booking and review system",
    heroImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/L0UBnh0fr9xUdDrzaxEH/media/69203cd6d9b07db9ddf65b54.jpeg",
    accentColor: "#C8A55C",
    challenge:
      "MG Professional Services — founded by Marcus Griffin with 20+ years of experience — was getting jobs through word of mouth but losing leads due to slow response times and manual scheduling. They had zero system for collecting Google reviews despite completing 300+ jobs. With 10 different services spanning Woodbridge, Northern Virginia, the DMV, and Charlotte NC, managing inbound calls, scheduling, and follow-ups manually was unsustainable and costing them real revenue.",
    solution:
      "I built a complete GHL system with online booking, automated appointment reminders, and SMS follow-ups that trigger review requests after every completed job. The before/after gallery builds instant visual trust, while 10 dedicated service pages and service area pages target high-intent local search queries across the DMV region. Every stage of the customer lifecycle — from first Google search to 5-star review — now runs on autopilot.",
    stats: [
      { value: "4.9★", label: "Google Rating" },
      { value: "300+", label: "Homes Cleaned" },
      { value: "20+", label: "Years Experience Highlighted" },
      { value: "10", label: "Service Pages for SEO" },
    ],
    metrics: [
      { before: "4–6 hours", after: "Under 60 seconds", label: "Lead Response Time" },
      { before: "Word of mouth only", after: "Automated review funnel", label: "Review Generation" },
      { before: "Phone-only booking", after: "24/7 online booking", label: "Appointment Scheduling" },
    ],
    screenshots: [
      {
        label: "Homepage Hero",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/L0UBnh0fr9xUdDrzaxEH/media/69203cd6d9b07db9ddf65b54.jpeg",
        description: "Professional homepage showcasing 4.9-star rating, 300+ homes cleaned, and instant booking CTA",
      },
      {
        label: "Before & After Gallery",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/L0UBnh0fr9xUdDrzaxEH/media/1c785fc4-6206-42bb-a1fd-5d6a4169ed18.jpeg",
        description: "Real before/after transformations building instant visual trust with prospective clients",
      },
      {
        label: "Customer Testimonials",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/L0UBnh0fr9xUdDrzaxEH/media/1b614ceb-bd59-4dd8-9d74-35363fae0923.jpeg",
        description: "Real customer testimonials with photos from Sarah L., James P., and Alicia M. across the DMV area",
      },
      {
        label: "Team & Operations",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/L0UBnh0fr9xUdDrzaxEH/media/448ff440-7dba-4e25-8666-f86a06d393c3.webp",
        description: "Professional equipment and team showcasing licensed, insured operations since 2014",
      },
    ],
    testimonial: {
      quote: "Before MBA, we were juggling phone calls, quotes, and reviews with no system in place. Now, everything is streamlined — from lead capture to follow-up. We've seen a huge boost in customer reviews and steady growth in new installs. It feels like we finally have a marketing team working for us 24/7.",
      author: "Joli",
      role: "Customer",
    },
    techStack: ["GoHighLevel", "Calendar/Booking", "Review Automation", "Local SEO Pages", "SMS Automation"],
    deliveryTime: "2 weeks",
    metaTitle: "MG Professional Services GHL Case Study — Local Home Services Automation | Automate with Level",
    metaDescription:
      "How I built a GoHighLevel system for a Woodbridge VA home services business — automated booking, review generation achieving 4.9 stars, and 10 local SEO service pages.",
    serviceType: "Local Home Services Automation",
    areaServed: "Woodbridge, VA, DMV, Charlotte NC",
  },
  {
    id: "happy-people-ai",
    slug: "happy-people-ai",
    client: "Happy People AI",
    url: "https://jgp.happypeopleai.com/job-guarantee-program",
    industry: "Career Training / EdTech",
    location: "United States (Online)",
    yearBuilt: "2024",
    shortDescription: "High-converting enrollment funnel with scarcity mechanics, free 1:1 consultation booking, and a cohort management pipeline tracking 2,500+ successful job placements.",
    description:
      "High-converting enrollment funnel with scarcity elements (25 slots per cohort), free 1:1 consultation booking, transformation storytelling, and a full cohort management pipeline tracking applicants from enrollment through placement.",
    features: [
      "High-converting sales funnel (100-day program landing page)",
      "Scarcity/urgency elements (only 25 slots per cohort)",
      "Free 1:1 consultation booking funnel",
      "Lead capture and nurture sequence for applicants",
      "Before/after transformation storytelling section",
      "Real testimonials with photos (James, Ravi, Thanh)",
      "Mentor showcase section (250+ industry experts)",
      "Trusted company logos section (Google, Oracle, Deloitte, Accenture)",
      "FAQ section with engagement tracking",
      "Email + SMS follow-up after booking",
      "Enrollment workflow automation",
      "CRM pipeline for cohort management (Training → Support → Placed)",
    ],
    tags: ["Funnels", "Booking & Calendars", "CRM & Automation", "AI & Chatbots"],
    outcome:
      "2,500+ successful placements, 100% success rate, 10,000+ interviews conducted — fully automated from lead to placement",
    heroImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/xLhAnT1RxsoDEr4qtYlm/media/68f3818d6752d4f135533706.webp",
    accentColor: "#C8A55C",
    challenge:
      "Happy People AI had a powerful 100-Day Job Guarantee Program backed by 250+ industry expert mentors from Google, Oracle, Deloitte, and Accenture — but their enrollment system couldn't keep pace with demand. Manual tracking of 25-seat cohorts, consultation scheduling, and placement follow-ups was creating chaos. They needed a system that could create urgency around limited seats, book consultations automatically, and track every participant from first inquiry through job placement.",
    solution:
      "I built a high-converting GHL enrollment funnel with built-in scarcity (25 slots per cohort), a before/after transformation section, mentor credibility showcase, and consultation booking. The backend CRM pipeline tracks every applicant through stages: Applied → Enrolled → Training → Extended Support → Placed. Automated email and SMS sequences nurture leads pre-enrollment and keep participants accountable throughout the 200-day program, resulting in a 100% placement success rate.",
    stats: [
      { value: "2,500+", label: "Successful Placements" },
      { value: "100%", label: "Placement Success Rate" },
      { value: "10,000+", label: "Interviews Conducted" },
      { value: "25", label: "Exclusive Slots Per Cohort" },
    ],
    metrics: [
      { before: "Manual cohort tracking", after: "Automated pipeline", label: "Cohort Management" },
      { before: "Email-only outreach", after: "Multi-touch SMS + Email", label: "Applicant Nurturing" },
      { before: "No scarcity mechanism", after: "25-slot urgency system", label: "Conversion Driver" },
    ],
    screenshots: [
      {
        label: "Program Landing Page",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/xLhAnT1RxsoDEr4qtYlm/media/68f3818d6752d4f135533706.webp",
        description: "High-converting hero section with 100% Job Guarantee promise and 25-slot scarcity mechanic",
      },
      {
        label: "Transformation Journey",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/xLhAnT1RxsoDEr4qtYlm/media/68f0ea86535ff87a11fbfb0f.jpeg",
        description: "Data-driven mentorship section showing learner journey from career confusion to successful placement",
      },
      {
        label: "Learner Testimonials",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/xLhAnT1RxsoDEr4qtYlm/media/68f0eca24711d5679da07103.jpeg",
        description: "Real testimonials from James (Software Engineer), Ravi (Marketing Executive), and Thanh (HR Associate)",
      },
      {
        label: "Mentor Credibility Section",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/xLhAnT1RxsoDEr4qtYlm/media/68f0ebcf7fe71a88aa9459cf.jpeg",
        description: "250+ industry expert mentors from Google, Oracle, Deloitte, Accenture with hiring insights",
      },
    ],
    testimonial: {
      quote: "I started with zero clarity, and in 100 days I became interview-ready and confident. I received my offer during the support phase! The personalized mentorship kept me accountable every week.",
      author: "James",
      role: "Software Engineer — Program Graduate",
    },
    techStack: ["GoHighLevel", "Funnel Builder", "Calendar Booking", "CRM Pipeline", "Email & SMS Automation"],
    deliveryTime: "2 weeks",
    metaTitle: "Happy People AI GHL Case Study — Job Guarantee Program Funnel | Automate with Level",
    metaDescription:
      "How I built a GoHighLevel enrollment funnel with 25-slot scarcity, consultation booking, and cohort tracking pipeline for an EdTech company with 2,500+ successful job placements.",
    serviceType: "EdTech Enrollment Funnel",
    areaServed: "United States",
  },
  {
    id: "all-cleaning-equipment",
    slug: "all-cleaning-equipment",
    client: "All Cleaning Equipment",
    url: "https://allcleaningequipment.com",
    industry: "E-Commerce / Cleaning Equipment",
    location: "United States (National)",
    yearBuilt: "2024",
    shortDescription: "Full GHL e-commerce marketplace for cleaning professionals — product catalog, Stripe checkout, 'Sell Equipment' listing funnel, truck mount consultation booking, and member portal.",
    description:
      "Full GHL e-commerce marketplace for cleaning professionals with product catalog, instant order checkout, a 'Sell Equipment' listing funnel for private sellers, truck mount consultation booking, AI marketing tools, and Stripe-powered payments.",
    features: [
      "Full e-commerce store built inside GHL (no Shopify needed)",
      "Product catalog: chemicals, truck mounts, cleaning equipment",
      "Product detail pages with pricing, discount display (up to 68% off)",
      "Instant Order system and checkout flow",
      "'Sell Equipment' listing funnel for private sellers",
      "Appointment/call booking for truck mount consultations",
      "AI marketing tools for equipment sellers",
      "Automated delivery and order follow-up sequences",
      "Testimonials and social proof system (Emily, John, Michael)",
      "FAQ and customer support workflows",
      "Login/signup member portal",
      "Stripe payment integration",
      "Social media integration (Facebook, Instagram, LinkedIn, YouTube, TikTok)",
      "Newsletter and re-engagement email sequences",
    ],
    tags: ["E-Commerce", "Funnels", "Booking & Calendars", "AI & Chatbots"],
    outcome:
      "10,000+ businesses served, 5,000+ machines delivered, 50+ premium brands — GHL-native e-commerce replacing traditional platforms",
    heroImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/xXrAvIHBLaXiNLpkXiWG/media/68f0eac5ec764fc88192d2b5.png",
    accentColor: "#C8A55C",
    challenge:
      "All Cleaning Equipment needed a full e-commerce marketplace built entirely within GoHighLevel — not a Shopify or WooCommerce bolt-on. They serve four distinct buyer categories: contractors upgrading, new businesses entering the industry, companies seeking cost-effective equipment, and buyers wanting proven ready-to-work machines. Each segment needed different messaging, product discovery paths, and conversion flows. On top of that, they needed a 'Sell Equipment' funnel for private sellers wanting to list their machines.",
    solution:
      "I built a complete GHL-native e-commerce marketplace with product catalog pages for chemicals, truck mounts, and equipment (each with pricing and 30–68% discount displays), instant checkout with Stripe, and a unique 'Sell Equipment' listing funnel. The member portal handles login/signup, the truck mount consultation booking system manages high-value sales, and automated delivery sequences drive post-purchase re-engagement. AI marketing tools help sellers create listings — all inside one GHL ecosystem.",
    stats: [
      { value: "10,000+", label: "Businesses Served" },
      { value: "5,000+", label: "Machines Delivered" },
      { value: "50+", label: "Premium Brands" },
      { value: "14", label: "GHL Features Built" },
    ],
    metrics: [
      { before: "External platform needed", after: "GHL-native store", label: "E-Commerce Platform" },
      { before: "Sellers list elsewhere", after: "Built-in sell funnel", label: "Equipment Marketplace" },
      { before: "Manual consultations", after: "Automated booking", label: "Truck Mount Sales" },
    ],
    screenshots: [
      {
        label: "E-Commerce Homepage",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/xXrAvIHBLaXiNLpkXiWG/media/68f0eac5ec764fc88192d2b5.png",
        description: "Full marketplace homepage targeting 4 buyer categories with instant product discovery",
      },
      {
        label: "Professional Chemicals Catalog",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/xXrAvIHBLaXiNLpkXiWG/media/690c7bef6f6d4c5f604c0bbd.webp",
        description: "Power Gel, Extreme Clean, Firestorm — professional chemicals with discount pricing up to 68% off",
      },
      {
        label: "Truck Mount Products",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://storage.googleapis.com/msgsndr/xXrAvIHBLaXiNLpkXiWG/media/671d45c6e883f9ed3df44e4e.jpeg",
        description: "Sapphire 370 and refurbished truck mount listings with 38–50% off pricing and expert consultation CTAs",
      },
      {
        label: "Delivery & Logistics Showcase",
        image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/xXrAvIHBLaXiNLpkXiWG/media/68f77028924f1e56be2d0336.webp",
        description: "Warehouse-to-doorstep delivery system showcasing professional packing and handling standards",
      },
    ],
    testimonial: {
      quote: "The refurbished truck mount I bought from ACE runs like new. Excellent quality and great customer support. ACE made it easy to choose the right equipment for my business — honest guidance and fast delivery.",
      author: "Michael Johnson",
      role: "Cleaning Business Owner",
    },
    techStack: ["GoHighLevel", "E-Commerce", "Stripe Payments", "Member Portal", "Calendar Booking"],
    deliveryTime: "3 weeks",
    metaTitle: "All Cleaning Equipment GHL Case Study — E-Commerce Marketplace | Automate with Level",
    metaDescription:
      "How I built a full GoHighLevel e-commerce marketplace for cleaning equipment — product catalog, Stripe payments, seller listing funnel, and member portal serving 10,000+ businesses.",
    serviceType: "E-Commerce Marketplace",
    areaServed: "United States (National)",
  },
  {
    id: "redstar-huts",
    slug: "redstar-huts",
    client: "RedStar Huts",
    url: "https://redstarhuts.com",
    industry: "Luxury Real Estate & Consulting",
    location: "Mohali, Zirakpur & Chandigarh, Punjab",
    yearBuilt: "2024",
    shortDescription: "Premium luxury real estate advisory with property listings, NRI buyer targeting, WhatsApp & click-to-call integration, and a consultation booking system across Punjab's tri-city region.",
    description:
      "Premium real estate advisory website serving luxury property buyers and investors across Punjab's tri-city region (Mohali, Zirakpur, Chandigarh). Features property listings with detailed cards, consultation booking, WhatsApp and click-to-call integration, NRI buyer targeting, and automated follow-up workflows.",
    features: [
      "Full Next.js website with GHL backend integration",
      "Property listings: 3 & 4+1 BHK smart home ultra-luxury flats in Zirakpur",
      "Individual property detail pages with room photos, BHK/beds/baths/sq ft data",
      "Service pages: Property Sales, Buyer Advisory, Investment Consulting, Market Analysis",
      "Consultation booking funnel (Schedule a Consultation)",
      "WhatsApp Business integration (+91 889 434 3056)",
      "Click-to-call integration",
      "Blog with SEO structure and author pages",
      "Client testimonials (Amit & Priya Sharma, First-Time Homebuyers)",
      "Builder/developer showcase: Motiaz Royal, Janta Land, SBP Group, Hero Homes, Godrej Properties",
      "FAQ section covering NRI buyers, consultation process, property types",
      "CRM pipeline for property inquiry management",
      "Lead capture forms on every service page",
      "NRI buyer targeting and dedicated consultation flow",
      "Automated follow-up after consultation booking",
      "Privacy policy, terms, legal disclaimer pages",
    ],
    tags: ["Funnels", "CRM & Automation", "Booking & Calendars"],
    outcome:
      "50+ families served, 7+ premium properties listed, 3 cities covered — luxury real estate platform connecting NRI and local buyers to verified properties",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    accentColor: "#C8A55C",
    challenge:
      "RedStar Huts needed a premium digital presence to attract luxury property buyers and NRI investors across Chandigarh's tri-city region (Mohali, Zirakpur, Chandigarh). The key challenge was building a sophisticated property listing system with detailed BHK/beds/baths/sq ft cards and room photo galleries — while integrating WhatsApp and click-to-call for instant engagement in a market where response speed determines whether deals close. Additionally, a dedicated NRI buyer funnel was needed for overseas investors who require different trust signals and consultation processes.",
    solution:
      "I built a Next.js frontend with GHL backend integration, featuring property listing pages with luxury property cards (including 3 & 4+1 BHK smart home ultra-luxury flats in Zirakpur ranging 1,843–3,204 Sq Ft), individual property pages with room photos, and four dedicated service pages. WhatsApp integration, click-to-call, and a dedicated NRI consultation funnel ensure zero friction for both local and overseas buyers. The builder showcase (Motiaz Royal, Godrej, Hero Homes) builds instant credibility, while the CRM pipeline tracks every inquiry from initial contact through closing.",
    stats: [
      { value: "50+", label: "Families Served" },
      { value: "7+", label: "Premium Properties Listed" },
      { value: "3", label: "Cities Covered" },
      { value: "17", label: "GHL Features Built" },
    ],
    metrics: [
      { before: "No digital presence", after: "Full luxury platform", label: "Online Authority" },
      { before: "Phone inquiries only", after: "WhatsApp + click-to-call", label: "Lead Engagement" },
      { before: "No NRI strategy", after: "Dedicated NRI funnel", label: "Overseas Buyers" },
    ],
    screenshots: [
      {
        label: "Homepage Hero",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
        description: "Luxury real estate homepage with 'Where Vision Meets Value' positioning and dual CTA for consultation and properties",
      },
      {
        label: "Property Listings",
        image: "https://www.redstarhuts.com/_next/image?url=%2Fproperties%2FRSH-ZIR-003%2Fliving-room.jpg&w=3840&q=75",
        description: "3 & 4+1 BHK Smart Home Ultra Luxury Flats in Zirakpur — detailed property cards with specs and photos",
      },
      {
        label: "Four Service Pillars",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
        description: "Property Sales, Buyer Advisory, Investment Consulting, Market Analysis — each with dedicated pages",
      },
      {
        label: "Builder Partners",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
        description: "Motiaz Royal, Janta Land, SBP Group, Hero Homes, Godrej Properties — builder credibility showcase",
      },
    ],
    testimonial: {
      quote: "RedStar Huts guided us through every step of buying our first home in Mohali. Their transparency and patience made us feel completely confident in our decision.",
      author: "Amit & Priya Sharma",
      role: "First-Time Homebuyers, Mohali",
    },
    techStack: ["Next.js", "GoHighLevel Backend", "WhatsApp API", "Calendar Booking", "CRM Pipeline"],
    deliveryTime: "3 weeks",
    metaTitle: "RedStar Huts GHL Case Study — Luxury Real Estate Platform | Automate with Level",
    metaDescription:
      "How I built a luxury real estate advisory platform with GoHighLevel backend, property listings, WhatsApp integration, NRI buyer funnels, and consultation booking for Punjab's tri-city region.",
    serviceType: "Luxury Real Estate Platform",
    areaServed: "Mohali, Zirakpur, Chandigarh, Punjab, India",
  },
  {
    id: "mybusinessautomated-platform",
    slug: "trevoxa-wealth",
    client: "Trevoxa Wealth",
    url: "https://trevoxawealth.com",
    industry: "Financial Services / Wealth Coordination",
    location: "United States & Canada",
    yearBuilt: "2024",
    shortDescription: "Fiduciary financial coordination platform with 3-language support, qualified intent routing matching leads to verified professionals, and 4 dedicated service lane funnels.",
    description:
      "Fiduciary financial coordination platform with multi-language support, qualified intent routing that matches leads to verified professionals based on intake answers, and dedicated service lane funnels for Insurance, Investments, Estate, and Automation.",
    features: [
      "Full GHL website with multi-language support (EN/FR/ES)",
      "Lead intake funnel (2-minute intake form → routing)",
      "Qualified intent routing system (matches to right professional)",
      "Service lane pages: Insurance, Investments, Estate Planning, Automation",
      "Appointment booking system (Book Intro Call)",
      "Event management and clinic registration flows",
      "Blog setup with SEO structure",
      "Contact and lead capture forms on every page",
      "Automated follow-up sequences post-intake",
      "Privacy-first lead management workflows",
    ],
    tags: ["Funnels", "CRM & Automation", "Booking & Calendars"],
    outcome:
      "Fiduciary platform connecting clients to verified professionals automatically — serving English, French, and Spanish-speaking markets",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
    accentColor: "#C8A55C",
    challenge:
      "Trevoxa Wealth needed a sophisticated platform to coordinate fiduciary financial services across four service lanes — Insurance, Investments, Estate Planning, and Automation. The critical requirement was a qualified intent routing system that could match potential clients to the right verified professional based on their specific financial needs, all while supporting English, French, and Spanish-speaking audiences across the US and Canada.",
    solution:
      "I designed and built a multi-language GHL platform with a 2-minute intake funnel that captures client intent and automatically routes them to the appropriate service lane and verified professional. Each service lane has its own dedicated funnel, booking flow, and follow-up sequence. The privacy-first lead management system ensures sensitive financial data is handled correctly throughout the entire client journey across all three languages.",
    stats: [
      { value: "3", label: "Languages Supported" },
      { value: "4", label: "Service Lane Funnels" },
      { value: "2 min", label: "Intake to Match Time" },
      { value: "100%", label: "Automated Lead Routing" },
    ],
    metrics: [
      { before: "Manual lead assignment", after: "Automated intent routing", label: "Lead Matching" },
      { before: "English only", after: "EN / FR / ES", label: "Market Reach" },
      { before: "Single service page", after: "4 dedicated lane funnels", label: "Conversion Architecture" },
    ],
    screenshots: [
      {
        label: "Homepage",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
        description: "Premium financial advisory homepage with trust signals and 2-minute intake CTA",
      },
      {
        label: "Service Lane Funnels",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        description: "Insurance, Investments, Estate Planning, and Automation — each with dedicated conversion funnel",
      },
      {
        label: "Intake Qualification Flow",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        description: "2-minute intake form capturing client intent for automated routing to verified professionals",
      },
      {
        label: "Multilingual Support",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
        description: "Full platform available in English, French, and Spanish for North American market coverage",
      },
    ],
    techStack: ["GoHighLevel", "Multi-Language", "Intake Routing", "Calendar Booking", "CRM Pipeline"],
    deliveryTime: "3 weeks",
    metaTitle: "Trevoxa Wealth GHL Case Study — Multi-Language Financial Platform | Automate with Level",
    metaDescription:
      "How I built a multi-language GoHighLevel financial coordination platform with qualified intent routing, 4 service lane funnels, and automated lead matching for a fiduciary wealth advisory firm.",
    serviceType: "Financial Services Platform",
    areaServed: "United States, Canada",
  },
  {
    id: "synexum-labs",
    slug: "synexum-labs",
    client: "Synexum Labs",
    url: "https://synexumlabs.com",
    industry: "Enterprise AI & Digital Transformation",
    location: "United States (Global)",
    yearBuilt: "2024",
    shortDescription: "Enterprise B2B AI platform with multi-language site, dynamic case studies, capability brief lead magnets, and automated qualification workflows for institutional clients.",
    description:
      "Enterprise-grade B2B digital presence with multi-language site, dynamic case studies, lead magnet funnels for capability briefs, and automated qualification workflows for institutional clients — designed to position Synexum as an enterprise AI leader.",
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
      "Enterprise-grade digital presence with automated lead qualification for institutional clients — capturing B2B leads at scale across three languages",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
    accentColor: "#C8A55C",
    challenge:
      "Synexum Labs required an enterprise-grade digital presence to position them as a credible AI and digital transformation partner for institutional clients. The website needed to convey authority and sophistication while functioning as a lead generation machine — capturing, qualifying, and nurturing enterprise leads through long B2B sales cycles across multiple languages and regions.",
    solution:
      "I built a high-end GHL website with enterprise B2B positioning, featuring dynamic case study pages, a capability brief lead magnet funnel, and discovery call booking. The multi-language implementation (EN/FR/ES) expands their reach to international institutional clients. The CRM pipeline tracks enterprise leads through qualification stages, while automated nurture sequences keep prospects engaged throughout the extended B2B decision-making process.",
    stats: [
      { value: "3", label: "Languages Supported" },
      { value: "10", label: "GHL Features Built" },
      { value: "B2B", label: "Enterprise Positioning" },
      { value: "100%", label: "Automated Follow-ups" },
    ],
    metrics: [
      { before: "No digital presence", after: "Authority enterprise site", label: "Market Positioning" },
      { before: "Cold outreach only", after: "Inbound lead magnets", label: "Lead Generation" },
      { before: "Manual qualification", after: "Automated CRM routing", label: "Lead Qualification" },
    ],
    screenshots: [
      {
        label: "Enterprise Homepage",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
        description: "Authority-first homepage designed to build institutional trust and drive discovery call bookings",
      },
      {
        label: "Case Studies Section",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        description: "Dynamic case study pages demonstrating AI transformation results for enterprise clients",
      },
      {
        label: "Capability Brief Lead Magnet",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        description: "Downloadable capability brief funnel capturing enterprise prospects in the awareness stage",
      },
      {
        label: "Blog / Insights Platform",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
        description: "SEO-structured insights platform establishing thought leadership in enterprise AI transformation",
      },
    ],
    techStack: ["GoHighLevel", "Multi-Language", "Lead Magnets", "CRM Pipeline", "Nurture Sequences"],
    deliveryTime: "3 weeks",
    metaTitle: "Synexum Labs GHL Case Study — Enterprise AI Platform | Automate with Level",
    metaDescription:
      "How I built an enterprise-grade GoHighLevel website with multi-language support, capability brief lead magnets, dynamic case studies, and automated qualification workflows for a B2B AI company.",
    serviceType: "Enterprise B2B Platform",
    areaServed: "United States, Global",
  },
];
