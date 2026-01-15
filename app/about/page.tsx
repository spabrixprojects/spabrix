import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "About Spabrix | Top Web Design & Marketing Agency in Malappuram, Kerala",
  description: "Discover Spabrix's mission to transform businesses with custom web development, SEO, and data-driven marketing. We are the trusted digital growth partners for businesses in Malappuram, Calicut, Kochi, and across Kerala.",
  alternates: {
    canonical: 'https://spabrix.in/about',
  },
  keywords: ['about spabrix', 'web design agency malappuram', 'digital marketing kerala', 'spabrix team'],
};

export default function AboutPage() {
  return <AboutClient />;
}
