'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] text-white py-24 px-6 sm:px-12 lg:px-24">
      
      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-7xl mx-auto"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition"
          aria-label="Back to Home"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          ← Back Home
        </Link>
      </motion.div>

      {/* Content Container */}
      <motion.article
        className="max-w-4xl mx-auto bg-[#1a1f2b]/70 backdrop-blur-md rounded-3xl p-12 shadow-lg border border-cyan-600/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            At Spabrix, we value your privacy and are committed to protecting your
            personal information. This Privacy Policy explains how we collect,
            use, store, and protect your data when you visit our website or use
            our services.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            We collect information only when it is necessary to provide our
            services or respond to your requests.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Your name, email address, phone number, and business details</li>
            <li>Information submitted through contact or inquiry forms</li>
            <li>Basic usage data such as browser type and pages visited</li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            The information we collect is used for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>To respond to your inquiries and provide requested services</li>
            <li>To improve our website, services, and user experience</li>
            <li>To communicate project updates or important information</li>
            <li>To ensure website security and prevent misuse</li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may use cookies and similar technologies to improve website
            functionality and understand user behavior. Cookies help us analyze
            traffic and enhance your browsing experience. You can choose to
            disable cookies in your browser settings.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-300 leading-relaxed">
            We take reasonable technical and organizational measures to protect
            your personal data from unauthorized access, disclosure, or loss.
            However, no online system is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        {/* Third Party */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Third-Party Sharing
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We do not sell or rent your personal information to third parties.
            Information may be shared only with trusted partners who assist us
            in operating our website or providing services, and only when
            necessary.
          </p>
        </section>

        {/* User Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-gray-300 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your personal information</li>
            <li>Withdraw consent where applicable</li>
          </ul>
        </section>

        {/* Updates */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated revision date.
          </p>
          <p className="text-gray-400 mt-6 text-sm">
            Last Updated: December 2025
          </p>
        </section>
      </motion.article>

      {/* Decorative glow blobs */}
      <div className="absolute -top-32 -left-24 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none animate-pulse" />
      <div className="absolute -bottom-36 -right-24 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full pointer-events-none animate-pulse" />
    </section>
  );
}
