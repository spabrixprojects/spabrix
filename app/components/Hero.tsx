'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Hero3DScene from './Hero3DScene';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-white pt-32 lg:pt-0">
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Aurora Gradients - Adjusted for split layout */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-400/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">

          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left z-20">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/50 border border-slate-200 backdrop-blur-sm shadow-sm mb-6 hover:border-brand/30 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-600 text-xs sm:text-sm font-semibold tracking-wide">
                #1 Web Development Agency in Kerala
              </span>
            </motion.div>

            {/* H1 Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-outfit text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4 leading-[1.1]"
            >
              Elevating Brands Through <br className="hidden lg:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand via-blue-600 to-cyan-500 drop-shadow-sm">
                Digital Excellence
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed font-medium"
            >
              Kerala's Premier <span className="text-slate-900 font-semibold">Web Design & Marketing Agency</span>.
              We fuse creative aesthetics with engineering precision to drive real business growth.
            </motion.p>

            {/* Type Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-6 mb-6 text-slate-500 font-medium text-sm sm:text-base"
            >
              <TypeAnimation
                sequence={[
                  'Building high-performance stores...',
                  2000,
                  'Creating stunning portfolios...',
                  2000,
                  'Optimizing for Google rankings...',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <Link
                href="/contact"
                className="group relative w-full sm:w-auto px-6 py-3.5 bg-slate-900 text-white font-bold text-base rounded-xl overflow-hidden shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  Start Your Project
                </span>
              </Link>

              <Link
                href="/projects"
                className="group w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-slate-700 font-bold text-base border border-slate-200 hover:border-brand/50 hover:bg-blue-50/50 transition-all shadow-sm hover:shadow-lg flex items-center justify-center gap-2"
              >
                View Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust Signals (Mini) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-slate-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% Satisfaction
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 24/7 Support
              </div>
            </motion.div>
          </div>

          {/* Right Column: Real 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative w-full max-w-[280px] sm:max-w-md lg:max-w-xl h-[300px] sm:h-[400px] lg:h-[500px]"
          >
            <Hero3DScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
