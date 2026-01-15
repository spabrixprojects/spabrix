import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Web Development, SEO & Digital Marketing Services | Spabrix Kerala",
  description: "From custom Next.js websites to result-oriented SEO, branding, and social media marketing. Explore Spabrix's full suite of digital services designed to scale your business in Malappuram & Kerala.",
  alternates: {
    canonical: 'https://spabrix.in/services',
  },
  keywords: ['web development services kerala', 'SEO services malappuram', 'digital marketing kerala', 'website design calicut'],
};

export default function ServicesPage() {
  return <ServicesClient />;
}
