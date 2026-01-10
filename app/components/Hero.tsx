'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Hero() {
  const solutions = [
    'Web Development & Digital Marketing Agency in Malappuram',
    'Custom Website Design & SEO Services',
    'Social Media Marketing & Branding Solutions',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
      {/* Modern Background Grid */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      {/* Floating Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            <span className="text-slate-600 text-sm font-medium tracking-wide">
              Top Rated Web Agency in Kerala
            </span>
          </motion.div>

          <h1 className="text-3xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
            We Build <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand via-blue-600 to-cyan-500 animate-gradient-x">
              <TypeAnimation
                sequence={solutions}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Elevate your business with Spabrix. We craft high-performance websites and data-driven marketing strategies tailored for growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-brand text-white font-bold text-lg rounded-full overflow-hidden shadow-lg shadow-brand/25 transition-all hover:scale-105 hover:shadow-brand/40 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="/projects"
            className="px-8 py-4 rounded-full bg-white text-slate-700 font-bold text-lg border border-slate-200 hover:border-brand/30 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center gap-2"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
