export interface PricingTier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

export interface NichePricing {
  niche: string;
  label: string;
  tiers: PricingTier[];
}

export const nichePricing: Record<string, NichePricing> = {
  roofing: {
    niche: 'roofing',
    label: 'Roofing Contractor',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: 499,
        description: 'Essential site for local roofers',
        features: ['Template customization', 'Logo & brand colors', '3 service pages', 'Contact form', 'Mobile responsive'],
      },
      {
        id: 'pro',
        name: 'Pro',
        price: 799,
        description: 'Complete site with project gallery',
        features: ['Everything in Starter', 'Project gallery', 'Testimonials', 'SEO optimization', 'Google Maps integration', 'Emergency service banner'],
      },
    ],
  },
};

export function getPricing(niche: string): NichePricing {
  return nichePricing[niche] || nichePricing.roofing;
}
