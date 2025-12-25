'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
};

const dummyPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why Every Business in Malappuram Needs a Professional Website',
    excerpt:
      'Many local businesses still rely only on social media. Learn why a professional website helps build trust, improve Google visibility, and attract more customers.',
    date: 'December 18, 2025',
    tags: ['Business Website', 'Local SEO', 'Malappuram'],
    slug: 'why-business-needs-website-malappuram',
  },
  {
    id: 2,
    title: 'How a Website Helps You Get More Customers in 2025',
    excerpt:
      'A modern website is more than design. Discover how websites generate leads, increase inquiries, and help businesses grow online.',
    date: 'December 12, 2025',
    tags: ['Web Development', 'Lead Generation', 'Digital Growth'],
    slug: 'how-website-gets-more-customers',
  },
  {
    id: 3,
    title: 'Website vs Social Media: What Is Better for Business?',
    excerpt:
      'Is Instagram or Facebook enough for your business? We compare websites and social media to help you choose the right digital strategy.',
    date: 'December 5, 2025',
    tags: ['Website', 'Social Media', 'Digital Marketing'],
    slug: 'website-vs-social-media-business',
  },
  {
    id: 4,
    title: 'How Much Does a Business Website Cost in Kerala?',
    excerpt:
      'Planning to create a website? Here’s a simple breakdown of website costs in Kerala and the factors that affect pricing.',
    date: 'November 28, 2025',
    tags: ['Website Cost', 'Kerala', 'Web Agency'],
    slug: 'business-website-cost-kerala',
  },
  {
    id: 5,
    title: 'Common Website Mistakes That Hurt Small Businesses',
    excerpt:
      'Slow loading, poor SEO, and outdated design can cost you customers. Learn the most common website mistakes small businesses make.',
    date: 'November 20, 2025',
    tags: ['Website Mistakes', 'SEO', 'Small Business'],
    slug: 'common-website-mistakes-small-business',
  },
  {
    id: 6,
    title: 'What Is SEO and Why Is It Important for Local Businesses?',
    excerpt:
      'SEO helps your business appear on Google when customers search nearby. Learn how SEO works and why it is crucial for local growth.',
    date: 'November 12, 2025',
    tags: ['SEO', 'Local Business', 'Google Ranking'],
    slug: 'seo-for-local-businesses',
  },
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(dummyPosts);
  }, []);

  return (
    <section className="relative py-20 min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Spabrix Blog
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Insights, guides, and tips to help businesses grow online through
            websites, SEO, and digital marketing.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: post.id * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#1a1f2b]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-3 hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-400 flex-grow">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <time className="mt-4 text-sm text-gray-500">
                  {post.date}
                </time>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}
