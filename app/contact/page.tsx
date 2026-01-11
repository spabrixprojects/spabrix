import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Spabrix | Get a Free Quote Today",
  description: "Ready to grow? Contact Spabrix for expert web development and digital marketing services. Call us or email to start your project.",
};

export default function ContactPage() {
  return <ContactClient />;
}
