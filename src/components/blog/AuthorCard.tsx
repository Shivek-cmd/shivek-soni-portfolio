"use client";

export default function AuthorCard() {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-6 mt-12">
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-surface flex items-center justify-center text-2xl font-heading font-bold text-gold">
        SS
      </div>
      <div>
        <p className="font-heading font-semibold text-text-primary">Shivek Soni</p>
        <p className="text-xs text-gold mb-2">GoHighLevel Expert &amp; Automation Specialist</p>
        <p className="text-sm text-text-secondary">
          I help USA businesses automate their operations with GoHighLevel —
          from CRM pipelines and AI chatbots to sales funnels and white-label
          SaaS solutions. Over 50 projects delivered and counting.
        </p>
      </div>
    </div>
  );
}
