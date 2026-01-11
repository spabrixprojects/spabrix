import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "About Spabrix | Top Web Design & Marketing Agency in Kerala",
  description: "Discover Spabrix's mission to transform businesses with custom web development and data-driven marketing. We are the digital growth partners for Malappuram and beyond.",
};

export default function AboutPage() {
  return <AboutClient />;
}
