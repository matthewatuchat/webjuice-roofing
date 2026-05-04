export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  domain: string;
  fromName: string;
  navLinks: { label: string; href: string }[];
  footer: { text: string };
}

export const siteConfig: SiteConfig = {
  name: 'RoofPro Template',
  tagline: 'Quality Roofing You Can Trust',
  description: 'Professional website template for roofing contractors and home service businesses.',
  email: 'hello@roofpro.template',
  domain: 'roofing.webjuice.fengtalk.ai',
  fromName: 'RoofPro Template',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    text: 'Built with WebJuice Stack.',
  },
};
