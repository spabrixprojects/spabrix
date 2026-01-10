'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <section className="relative min-h-screen bg-slate-50 text-slate-800 py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">

      {/* Modern Background Grid */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      {/* Floating Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse delay-1000" />

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-7xl mx-auto relative z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 font-medium hover:text-brand hover:border-brand/30 hover:shadow-md transition-all group"
          aria-label="Back to Home"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back Home
        </Link>
      </motion.div>

      {/* Content Container */}
      <motion.article
        className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/5 border border-slate-100 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-600">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Introduction</h2>
          <p className="text-slate-600 leading-loose">
            At Spabrix, we value your privacy and are committed to protecting your
            personal information. This Privacy Policy explains how we collect,
            use, store, and protect your data when you visit our website or use
            our services.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Information We Collect</h2>
          <p className="text-slate-600 mb-4">
            We collect information only when it is necessary to provide our
            services or respond to your requests.
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 marker:text-brand">
            <li>Your name, email address, phone number, and business details</li>
            <li>Information submitted through contact or inquiry forms</li>
            <li>Basic usage data such as browser type and pages visited</li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">How We Use Your Information</h2>
          <p className="text-slate-600 mb-4">
            The information we collect is used for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 marker:text-brand">
            <li>To respond to your inquiries and provide requested services</li>
            <li>To improve our website, services, and user experience</li>
            <li>To communicate project updates or important information</li>
            <li>To ensure website security and prevent misuse</li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-slate-600 leading-loose">
            We may use cookies and similar technologies to improve website
            functionality and understand user behavior. Cookies help us analyze
            traffic and enhance your browsing experience. You can choose to
            disable cookies in your browser settings.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Security</h2>
          <p className="text-slate-600 leading-loose">
            We take reasonable technical and organizational measures to protect
            your personal data from unauthorized access, disclosure, or loss.
            However, no online system is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        {/* Third Party */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Third-Party Sharing
          </h2>
          <p className="text-slate-600 leading-loose">
            We do not sell or rent your personal information to third parties.
            Information may be shared only with trusted partners who assist us
            in operating our website or providing services, and only when
            necessary.
          </p>
        </section>

        {/* User Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Rights</h2>
          <p className="text-slate-600 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 marker:text-brand">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your personal information</li>
            <li>Withdraw consent where applicable</li>
          </ul>
        </section>

        {/* Updates */}
        <section className="border-t border-slate-100 pt-8 mt-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-slate-600 leading-loose">
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated revision date.
          </p>
          <p className="text-slate-400 mt-6 text-sm font-medium">
            Last Updated: December 2025
          </p>
        </section>
      </motion.article>
    </section>
  );
}
