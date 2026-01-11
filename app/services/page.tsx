import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Web Development & SEO Services | Spabrix Agency",
  description: "From custom Next.js websites to result-oriented SEO and branding. Explore Spabrix's full suite of digital services designed to scale your business.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
