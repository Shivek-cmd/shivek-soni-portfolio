export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Audit",
    description:
      "Deep-dive into your current systems, workflows, and business goals. I map every touchpoint, identify inefficiencies, and define exactly what success looks like.",
    details: [
      "Current tech stack & workflow audit",
      "Business goal alignment session",
      "Gap analysis & opportunity mapping",
      "Custom project scope document",
    ],
  },
  {
    step: 2,
    title: "Architecture & Strategy",
    description:
      "Design the complete system architecture before writing a single automation. Every pipeline, workflow, and integration is planned with precision.",
    details: [
      "CRM & pipeline architecture design",
      "Workflow logic mapping & sequencing",
      "Integration blueprint & data flow design",
      "Timeline & milestone planning",
    ],
  },
  {
    step: 3,
    title: "Build & Configure",
    description:
      "Hands-on implementation inside GoHighLevel. Every automation, funnel, pipeline, and integration is built, tested, and refined to perfection.",
    details: [
      "Full GHL account setup & configuration",
      "Workflow automation builds",
      "Funnel & website development",
      "Third-party integrations & API connections",
    ],
  },
  {
    step: 4,
    title: "Test, Launch & Optimize",
    description:
      "Rigorous testing across every workflow path, followed by a supported launch. Post-launch monitoring ensures everything performs at peak efficiency.",
    details: [
      "End-to-end workflow testing",
      "Team training & documentation",
      "Monitored launch with real-time support",
      "Performance optimization & iteration",
    ],
  },
];
