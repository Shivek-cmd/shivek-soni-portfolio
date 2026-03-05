export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

// PLACEHOLDER: Replace all testimonials with real client feedback
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Client Name",
    role: "CEO",
    company: "Real Estate Agency",
    quote:
      "Shivek completely transformed how we operate. Our CRM went from a mess of spreadsheets to a fully automated machine. Lead follow-up is instant, nothing falls through the cracks, and our agents actually enjoy using the system. The ROI was obvious within the first month.",
    image: "/images/testimonial-placeholder-1.jpg", // PLACEHOLDER: Replace with actual photo
  },
  {
    id: "testimonial-2",
    name: "Client Name",
    role: "Founder",
    company: "Marketing Agency",
    quote:
      "We wanted to launch our own SaaS product but had no idea where to start. Shivek built the entire white-label platform, set up our pricing tiers, and automated client onboarding. We went from zero to 50 paying customers in 30 days. His GHL knowledge is unmatched.",
    image: "/images/testimonial-placeholder-2.jpg", // PLACEHOLDER: Replace with actual photo
  },
  {
    id: "testimonial-3",
    name: "Client Name",
    role: "Operations Director",
    company: "Medical Spa Group",
    quote:
      "The AI booking system Shivek built handles 85% of our patient inquiries without any staff involvement. Our no-show rate dropped dramatically and appointment bookings went up 42%. It's like having a receptionist that never sleeps.",
    image: "/images/testimonial-placeholder-3.jpg", // PLACEHOLDER: Replace with actual photo
  },
  {
    id: "testimonial-4",
    name: "Client Name",
    role: "Managing Partner",
    company: "Dental Group",
    quote:
      "Our Google rating went from 3.8 to 4.7 stars in just three months. Shivek's automated review system is incredibly effective — patients get a perfectly timed request, and the AI handles responses instantly. It's been a game-changer for our online presence.",
    image: "/images/testimonial-placeholder-4.jpg", // PLACEHOLDER: Replace with actual photo
  },
];
