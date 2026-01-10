import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Us | Spabrix Web Solutions",
  description: "Get in touch with Spabrix for your web development and digital marketing needs in Malappuram. We are ready to help you grow your business.",
};

export default function ContactPage() {
  return <ContactClient />;
}
