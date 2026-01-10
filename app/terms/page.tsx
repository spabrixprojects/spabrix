'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <section className="relative min-h-screen bg-slate-50 text-slate-800 py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">

      {/* Modern Background Grid */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      {/* Floating Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse delay-1000" />

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
          Terms and Conditions
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Acceptance of Terms</h2>
          <p className="text-slate-600 leading-loose">
            By accessing or using the services provided by Spabrix, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, please do not use our website or services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Use of Services</h2>
          <p className="text-slate-600 leading-loose">
            You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Intellectual Property</h2>
          <p className="text-slate-600 leading-loose">
            All content, design, logos, and software used on the site are owned by Spabrix or its licensors and are protected by intellectual property laws.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Limitation of Liability</h2>
          <p className="text-slate-600 leading-loose">
            Spabrix shall not be liable for any damages arising from the use or inability to use our services, including but not limited to loss of data or profits.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Privacy Policy</h2>
          <p className="text-slate-600 leading-loose">
            Our Privacy Policy governs the collection and use of personal information. By using our services, you consent to the collection and use of your data as described in the Privacy Policy.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Changes to Terms</h2>
          <p className="text-slate-600 leading-loose">
            We reserve the right to update or change our Terms and Conditions at any time. Updates will be posted on this page with the effective date.
          </p>
        </section>

        <section className="mb-4 border-t border-slate-100 pt-8 mt-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h2>
          <p className="text-slate-600">
            For any questions about these Terms and Conditions, please contact us at:
            <br />
            <a href="mailto:spabrix@gmail.com" className="text-brand font-medium hover:underline">spabrix@gmail.com</a>
            <br />
            Phone: <a href="tel:+919946972210" className="text-brand font-medium hover:underline">+91 9946972210</a>
          </p>
        </section>

        <p className="text-slate-400 text-sm mt-12 text-center font-medium">
          Last Updated: July 2024
        </p>
      </motion.article>
    </section>
  );
}
