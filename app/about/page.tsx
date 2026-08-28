import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "About Spabrix | Website Development Studio in Malappuram, Kerala",
  description: "Discover Spabrix — a specialist website development studio in Malappuram, Kerala. We build fast, SEO-optimised, high-converting websites with Next.js & React for businesses across India.",
  alternates: {
    canonical: 'https://spabrix.in/about',
  },
  keywords: ['about spabrix', 'website development company malappuram', 'Next.js developer kerala', 'web developer malappuram', 'custom website developer kerala'],
};

export default function AboutPage() {
  return <AboutClient />;
}
