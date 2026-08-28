'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <section className="relative min-h-screen bg-[#fdfdfd] text-black py-24 px-6 sm:px-12 lg:px-24 overflow-hidden border-t border-black/5">
      
      {/* Background Marquee */}
      <div className="absolute top-40 left-0 w-full whitespace-nowrap opacity-[0.03] pointer-events-none overflow-hidden font-outfit font-black text-[15vw] leading-none text-black">
          <motion.div 
              animate={{ x: [0, -2000] }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="inline-block"
          >
              TERMS AND CONDITIONS TERMS AND CONDITIONS
          </motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 pt-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-4 border border-black/10 rounded-full px-6 py-2 mb-16 w-fit bg-black/[0.02] backdrop-blur-md"
        >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-slate-600 uppercase">Legal</span>
        </motion.div>

        <Link
          href="/"
          className="group inline-flex items-center gap-4 text-xs font-mono tracking-widest uppercase text-slate-500 hover:text-black transition-colors mb-16 block w-fit"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Base
        </Link>

        <h1 className="text-4xl md:text-6xl font-outfit font-light tracking-tight text-[#111] mb-12 flex flex-col">
            <div className="overflow-hidden flex">
                {"TERMS &".split('').map((char, index) => (
                    <motion.span 
                        key={index}
                        initial={{ y: 150, opacity: 0, rotateZ: 10 }}
                        animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                        transition={{ duration: 1, delay: 0.1 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                        className="block"
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </div>
            <div className="overflow-hidden flex">
                {"CONDITIONS".split('').map((char, index) => (
                    <motion.span 
                        key={index}
                        initial={{ y: 150, opacity: 0, rotateZ: 10 }}
                        animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                        className="block text-brand italic font-black"
                    >
                        {char}
                    </motion.span>
                ))}
            </div>
        </h1>

        <div className="space-y-12 font-light text-lg leading-relaxed">
            <motion.section 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-l border-black/10 pl-8"
            >
                <h2 className="text-2xl font-outfit font-medium text-[#111] mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600">
                    By accessing or using the services provided by Spabrix, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, please do not use our website or services.
                </p>
            </motion.section>

            <motion.section 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-l border-black/10 pl-8"
            >
                <h2 className="text-2xl font-outfit font-medium text-[#111] mb-4">Use of Services</h2>
                <p className="text-gray-600">
                    You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment.
                </p>
            </motion.section>

            <motion.section 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-l border-black/10 pl-8"
            >
                <h2 className="text-2xl font-outfit font-medium text-[#111] mb-4">Intellectual Property</h2>
                <p className="text-gray-600">
                    All content, design, logos, and software used on the site are owned by Spabrix or its licensors and are protected by intellectual property laws.
                </p>
            </motion.section>

            <motion.section 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-l border-black/10 pl-8"
            >
                <h2 className="text-2xl font-outfit font-medium text-[#111] mb-4">Limitation of Liability</h2>
                <p className="text-gray-600">
                    Spabrix shall not be liable for any damages arising from the use or inability to use our services, including but not limited to loss of data or profits.
                </p>
            </motion.section>

            <motion.section 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border-l border-black/10 pl-8"
            >
                <h2 className="text-2xl font-outfit font-medium text-[#111] mb-4">Changes to Terms</h2>
                <p className="text-gray-600">
                    We reserve the right to update or change our Terms and Conditions at any time. Updates will be posted on this page with the effective date.
                </p>
            </motion.section>
        </div>

        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="border-t border-black/10 pt-12 mt-16"
        >
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest text-center">
            Last Updated: July 2024
          </p>
        </motion.section>
      </div>
    </section>
  );
}
