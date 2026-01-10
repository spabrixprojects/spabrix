import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "About Us | Spabrix - Web Agency in Malappuram",
  description: "Learn more about Spabrix, a leading web development and digital marketing agency in Malappuram, Kerala. Discover our mission, vision, and how we help businesses grow.",
};

export default function AboutPage() {
  return <AboutClient />;
}
