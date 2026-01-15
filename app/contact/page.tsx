import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Spabrix | Get a Free Web Design Quote in Kerala",
  description: "Ready to grow your business online? Contact Spabrix for expert web development, SEO, and digital marketing services in Malappuram, Kerala. Call +91 9946972210 or email us today.",
  alternates: {
    canonical: 'https://spabrix.in/contact',
  },
  keywords: ['contact spabrix', 'web design quote kerala', 'digital marketing agency contact', 'malappuram web agency'],
};

export default function ContactPage() {
  return <ContactClient />;
}
