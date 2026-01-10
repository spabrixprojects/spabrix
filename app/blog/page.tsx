import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: "Latest Insights & News | Spabrix Blog",
  description: "Read the latest articles on web development, SEO strategies, digital marketing trends, and business growth tips from the Spabrix team.",
};

export default function BlogPage() {
  return <BlogClient />;
}
