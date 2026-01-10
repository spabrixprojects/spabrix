'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';
import Link from 'next/link';

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const faqItems: FAQItem[] = [
  // --- General Services ---
  {
    category: 'General',
    question: 'What services does Spabrix offer?',
    answer:
      'Spabrix is a full-service web development and digital marketing agency based in Malappuram, Kerala. We specialize in custom website design, Next.js web development, SEO (Search Engine Optimization), branding, logo design, and social media marketing. We help businesses of all sizes establish a powerful online presence.',
  },
  {
    category: 'General',
    question: 'Do you work with businesses outside of Kerala?',
    answer:
      'Yes! While we are proud to be a top web design agency in Malappuram, we work with clients across India and globally. Our digital communication tools allow us to effectively manage projects remotely, ensuring you get high-quality service regardless of your location.',
  },
  {
    category: 'General',
    question: 'Why do I need a website for my small business?',
    answer:
      'In today’s digital age, a website is your 24/7 storefront. It builds credibility, allows customers to find you on Google, and showcases your products or services to a wider audience. Without a website, you are losing potential customers to competitors who are online.',
  },

  // --- Web Development & Design ---
  {
    category: 'Web Development',
    question: 'How much does a website cost in Kerala?',
    answer:
      'The cost of a website depends on its complexity, features, and number of pages. A basic business website starts at an affordable rate, while custom e-commerce or web applications depend on specific requirements. Contact us for a free, transparent quote tailored to your budget.',
  },
  {
    category: 'Web Development',
    question: 'How long does it take to build a website?',
    answer:
      'For a standard professional business website, our turnaround time is typically 3 to 7 business days. More complex projects like e-commerce stores or custom web applications may take 2 to 4 weeks. We prioritize fast delivery without compromising on quality.',
  },
  {
    category: 'Web Development',
    question: 'Will my website work on mobile phones?',
    answer:
      'Absolutely. We adopt a "mobile-first" approach. Every website we build is fully responsive, meaning it adapts perfectly to smartphones, tablets, and desktops. This is crucial for user experience and Google SEO rankings.',
  },
  {
    category: 'Web Development',
    question: 'Do you use WordPress or Custom Code?',
    answer:
      'We primarily specialize in custom coding using modern technologies like Next.js, React, and Tailwind CSS because they offer superior speed, security, and scalability compared to WordPress. However, we can also provide CMS solutions if your project specifically requires them.',
  },
  {
    category: 'Web Development',
    question: 'Can I update the website content myself?',
    answer:
      'Yes, we can integrate a Headless CMS (like Sanity or Strapi) or an Admin Dashboard that allows you to easily update text, images, and blog posts without needing any coding knowledge.',
  },

  // --- SEO & Marketing ---
  {
    category: 'SEO & Marketing',
    question: 'What is SEO and why is it important?',
    answer:
      'SEO (Search Engine Optimization) is the process of improving your website to rank higher on Google search results. It helps potential customers find you when they search for keywords like "best cafe in Malappuram" or "travel agency near me." Good SEO leads to organic, free traffic and more sales.',
  },
  {
    category: 'SEO & Marketing',
    question: 'Do you offer Local SEO services?',
    answer:
      'Yes, Local SEO is one of our specialties. We optimize your Google Business Profile (Maps), build local citations, and create location-specific content to help your business dominate search results in your specific city or region.',
  },
  {
    category: 'SEO & Marketing',
    question: 'How long does it take to see results from SEO?',
    answer:
      'SEO is a long-term strategy. While technical fixes can show immediate improvements, significant ranking changes typically take 3 to 6 months. We provide monthly reports to track progress and adjust strategies for the best results.',
  },
  {
    category: 'SEO & Marketing',
    question: 'Can you manage my Social Media accounts?',
    answer:
      'Yes, we offer social media management services. We create engaging content, posters, and reels for platforms like Instagram, Facebook, and LinkedIn to build your brand and engage with your audience.',
  },

  // --- E-commerce ---
  {
    category: 'E-commerce',
    question: 'Can you build an online store (E-commerce)?',
    answer:
      'Yes, we build secure and scalable e-commerce websites. Features include product catalogs, shopping carts, secure payment gateway integration (Razorpay, Stripe, UPI), and order management systems.',
  },
  {
    category: 'E-commerce',
    question: 'Is online payment integration secure?',
    answer:
      'Ideally yes. We use industry-standard, secure APIs from trusted providers like Razorpay and Stripe to handle payments. Your customer\'s data is encrypted and safe.',
  },

  // --- Support & Maintenance ---
  {
    category: 'Support',
    question: 'Do you provide website hosting?',
    answer:
      'We can set up hosting for you. We typically recommend modern cloud hosting platforms like Vercel or AWS for superior speed and reliability, but we can also work with your preferred hosting provider.',
  },
  {
    category: 'Support',
    question: 'What relies on website maintenance?',
    answer:
      'Websites need regular updates to stay secure and functional. Our maintenance packages include security patches, content updates, performance checks, and regular backups to ensure your business runs smoothly online.',
  },
  {
    category: 'Support',
    question: 'What if I need help after the website is launched?',
    answer:
      'We believe in long-term partnerships. We offer free support for a specific period after launch to fix any bugs. After that, you can opt for our affordable annual maintenance capability or contact us on an hourly basis.',
  },
  {
    category: 'Support',
    question: 'How do I get started?',
    answer:
      'It’s simple! Contact us via WhatsApp, call us at +91 9946972210, or email spabrix@gmail.com. We’ll discuss your requirements, provide a free consultation, and kickstart your project.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'General', 'Web Development', 'SEO & Marketing', 'E-commerce', 'Support'];

  const filteredItems = filter === 'All'
    ? faqItems
    : faqItems.filter(item => item.category === filter);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-20 bg-slate-50 min-h-screen text-slate-800"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-600">Questions</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our services, process, and pricing. Can’t find the answer you’re looking for? Feel free to contact us.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                ? "bg-brand text-white shadow-lg shadow-brand/30"
                : "bg-white text-slate-600 hover:bg-slate-50 hover:text-brand"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence mode='wait'>
            {filteredItems.map(({ question, answer }, index) => {
              // We need a unique key that combines index and filter to ensure smooth animation when filtering
              const uniqueKey = `${filter}-${index}`;
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={uniqueKey}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    aria-expanded={isOpen}
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full px-6 py-5 cursor-pointer text-left focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    <span className="text-lg font-bold text-slate-800 pr-4">{question}</span>
                    <span className="text-cyan-600 flex-shrink-0">
                      {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto', marginBottom: 24 },
                          collapsed: { opacity: 0, height: 0, marginBottom: 0 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="px-6 text-slate-600 overflow-hidden leading-relaxed"
                      >
                        <div className="border-t border-slate-100 pt-4">
                          {answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-10 text-slate-500">
              No questions found in this category.
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>

      </div>

      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-cyan-200/40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-200/40 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}
