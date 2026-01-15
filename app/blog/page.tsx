import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: "Web Design & SEO Blog | Tips & Insights from Spabrix Kerala",
  description: "Read the latest articles on web development, SEO strategies, digital marketing trends, and business growth tips for Kerala businesses from the Spabrix team.",
  alternates: {
    canonical: 'https://spabrix.in/blog',
  },
  keywords: ['web design blog', 'SEO tips kerala', 'digital marketing articles', 'business website tips'],
};

export default function BlogPage() {
  return <BlogClient />;
}
