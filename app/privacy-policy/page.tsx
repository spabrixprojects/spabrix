'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-40 px-6 sm:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      
      {/* Background Marquee */}
      <div className="absolute top-40 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none overflow-hidden font-outfit font-black text-[15vw] leading-none">
          <motion.div 
              animate={{ x: [0, -2000] }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="inline-block"
          >
              LEGAL DOCUMENT LEGAL DOCUMENT LEGAL DOCUMENT
          </motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 pt-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-4 border border-white/10 rounded-full px-6 py-2 mb-16 w-fit bg-white/[0.02] backdrop-blur-md"
        >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">Legal</span>
        </motion.div>

        <Link
          href="/"
          className="group inline-flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-slate-500 hover:text-white transition-colors mb-16 block w-fit"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Base
        </Link>

        <h1 className="text-6xl md:text-8xl font-outfit font-light tracking-tight text-white mb-24 flex flex-col">
            <div className="overflow-hidden flex">
                {"PRIVACY".split('').map((char, index) => (
                    <motion.span 
                        key={index}
                        initial={{ y: 150, opacity: 0, rotateZ: 10 }}
                        animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                        transition={{ duration: 1, delay: 0.1 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                        className="block"
                    >
                        {char}
                    </motion.span>
                ))}
            </div>
            <div className="overflow-hidden flex">
                {"POLICY".split('').map((char, index) => (
                    <motion.span 
                        key={index}
                        initial={{ y: 150, opacity: 0, rotateZ: 10 }}
                        animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                        className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 via-slate-500 to-neutral-600 italic font-black"
                    >
                        {char}
                    </motion.span>
                ))}
            </div>
        </h1>

        <div className="space-y-24 font-light text-xl leading-relaxed">
            <motion.section 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-l border-white/20 pl-8"
            >
                <h2 className="text-3xl font-outfit font-medium text-white mb-6">Introduction</h2>
                <p className="text-slate-400">
                    At Spabrix, we value your privacy and are committed to protecting your
                    personal information. This Privacy Policy explains how we collect,
                    use, store, and protect your data when you visit our website or use
                    our services.
                </p>
            </motion.section>

            <motion.section 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-l border-white/20 pl-8"
            >
                <h2 className="text-3xl font-outfit font-medium text-white mb-6">Information We Collect</h2>
                <p className="text-slate-400 mb-6">
                    We collect information only when it is necessary to provide our
                    services or respond to your requests.
                </p>
                <ul className="list-none space-y-4 text-slate-400 font-mono text-sm tracking-wide">
                    <li>[01] Your name, email address, phone number, and business details</li>
                    <li>[02] Information submitted through contact or inquiry forms</li>
                    <li>[03] Basic usage data such as browser type and pages visited</li>
                </ul>
            </motion.section>

            <motion.section 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-l border-white/20 pl-8"
            >
                <h2 className="text-3xl font-outfit font-medium text-white mb-6">How We Use Your Information</h2>
                <p className="text-slate-400 mb-6">
                    The information we collect is used for the following purposes:
                </p>
                <ul className="list-none space-y-4 text-slate-400 font-mono text-sm tracking-wide">
                    <li>[01] To respond to your inquiries and provide requested services</li>
                    <li>[02] To improve our website, services, and user experience</li>
                    <li>[03] To communicate project updates or important information</li>
                    <li>[04] To ensure website security and prevent misuse</li>
                </ul>
            </motion.section>

            <motion.section 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-l border-white/20 pl-8"
            >
                <h2 className="text-3xl font-outfit font-medium text-white mb-6">
                    Cookies & Tracking
                </h2>
                <p className="text-slate-400">
                    We may use cookies and similar technologies to improve website
                    functionality and understand user behavior. Cookies help us analyze
                    traffic and enhance your browsing experience. You can choose to
                    disable cookies in your browser settings.
                </p>
            </motion.section>

            <motion.section 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-l border-white/20 pl-8"
            >
                <h2 className="text-3xl font-outfit font-medium text-white mb-6">Data Security</h2>
                <p className="text-slate-400">
                    We take reasonable technical and organizational measures to protect
                    your personal data from unauthorized access, disclosure, or loss.
                    However, no online system is completely secure, and we cannot
                    guarantee absolute security.
                </p>
            </motion.section>

            <motion.section 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-l border-white/20 pl-8"
            >
                <h2 className="text-3xl font-outfit font-medium text-white mb-6">
                    Third-Party Sharing
                </h2>
                <p className="text-slate-400">
                    We do not sell or rent your personal information to third parties.
                    Information may be shared only with trusted partners who assist us
                    in operating our website or providing services, and only when
                    necessary.
                </p>
            </motion.section>

        </div>

        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="border-t border-white/10 pt-12 mt-32"
        >
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest text-center">
            Last Updated: December 2025
          </p>
        </motion.section>
      </div>
    </section>
  );
}
