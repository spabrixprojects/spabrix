'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type BlogPost = {
  id: number;
  title: string;
  content: string;
  date: string;
  excerpt: string;
  tags: string[];
};

const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: 'Why Every Business in Malappuram Needs a Professional Website',
    excerpt:
      'Many local businesses still rely only on social media. A professional website builds trust, improves Google visibility, and attracts more customers.',
    content: `
In today’s digital world, customers search online before choosing a business.
Without a professional website, your business may lose potential customers.

A website builds trust and credibility. When customers search for your business
on Google, a professional website shows that your business is reliable.

For businesses in Malappuram, a website improves local visibility and works 24/7
to generate inquiries even when your business is closed.
    `,
    date: 'December 18, 2025',
    tags: ['Business Website', 'Local SEO', 'Malappuram'],
  },
  {
    id: 2,
    title: 'How a Website Helps You Get More Customers in 2025',
    excerpt:
      'A modern website is more than design. Learn how websites generate leads and support business growth.',
    content: `
In 2025, a business website acts as a lead-generation tool.
It helps customers discover your services and contact you easily.

Fast loading speed, mobile responsiveness, and SEO optimization
increase visibility and inquiries.

A well-built website reduces dependency on paid ads
and delivers long-term results.
    `,
    date: 'December 12, 2025',
    tags: ['Web Development', 'Lead Generation', 'Digital Growth'],
  },
  {
    id: 3,
    title: 'Website vs Social Media: Which Is Better for Business?',
    excerpt:
      'Is social media alone enough? Learn the difference between websites and social platforms for business growth.',
    content: `
Social media is useful for engagement, but it should not replace a website.

A website gives full control over content, branding, and customer data.
Social media platforms may change algorithms or restrict reach.

The best strategy is to use social media for promotion
and a website for conversions.
    `,
    date: 'December 5, 2025',
    tags: ['Website', 'Social Media', 'Digital Marketing'],
  },
  {
    id: 4,
    title: 'How Much Does a Business Website Cost in Kerala?',
    excerpt:
      'Planning a website? Learn about business website pricing in Kerala and what affects the cost.',
    content: `
Website cost depends on design, features, number of pages, and SEO needs.

Basic websites are affordable for small businesses,
while advanced websites offer better performance and lead generation.

Focus on long-term value rather than the cheapest option.
    `,
    date: 'November 28, 2025',
    tags: ['Website Cost', 'Kerala', 'Web Agency'],
  },
  {
    id: 5,
    title: 'Common Website Mistakes That Hurt Small Businesses',
    excerpt:
      'Slow speed, poor SEO, and unclear content can stop customers from contacting you.',
    content: `
Slow loading speed increases bounce rate.
Poor SEO prevents Google ranking.
Unclear content reduces trust.

Fixing these issues improves conversions
and overall website performance.
    `,
    date: 'November 20, 2025',
    tags: ['Website Mistakes', 'SEO', 'Small Business'],
  },
  {
    id: 6,
    title: 'What Is SEO and Why Is It Important for Local Businesses?',
    excerpt:
      'SEO helps local businesses appear on Google and attract nearby customers.',
    content: `
SEO improves visibility on Google search results.
Local SEO is crucial for businesses serving specific areas.

Optimizing your website and Google Business Profile
attracts high-intent customers.

SEO provides long-term growth and trust.
    `,
    date: 'November 12, 2025',
    tags: ['SEO', 'Local Business', 'Google Ranking'],
  },
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(blogPostsData);
  }, []);

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Spabrix Blog
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Practical insights on websites, SEO, and digital marketing to help
            businesses grow online.
          </p>
        </motion.div>

        {/* Back to Home */}
        <div className="flex justify-center mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full
            bg-white/10 hover:bg-white/20 transition text-sm text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

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
              <Link href="#" className="flex flex-col flex-grow">
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
