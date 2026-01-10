import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Our Services | Spabrix Web Solutions",
  description: "Explore our premium web development and digital marketing services. Custom websites, SEO, branding, and UI/UX design tailored for your business success.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
