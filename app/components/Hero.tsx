'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] max-h-[900px] flex items-center overflow-hidden bg-white ">
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Aurora Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-400/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-12">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge - Local SEO Signal */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-emerald-50 border border-emerald-200 mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-700 text-[11px] sm:text-xs font-semibold">
                🏆 Trusted by 80+ Businesses in Kerala
              </span>
            </motion.div>

            {/* H1 Heading - SEO Optimized */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-outfit text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black tracking-tight text-slate-900 mb-3 leading-[1.15]"
            >
              Best{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand via-blue-600 to-cyan-500">
                Web Design
              </span>{' '}
              & Digital Marketing Agency in{' '}
              <span className="text-brand">Kerala</span>
            </motion.h1>

            {/* Subtext - Keyword Rich */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs sm:text-sm md:text-base text-slate-600 max-w-lg mx-auto lg:mx-0 mb-4 leading-relaxed"
            >
              We build <strong>high-performance websites</strong>, boost your{' '}
              <strong>Google rankings</strong>, and create stunning brand identities.
            </motion.p>

            {/* Type Animation - Service Keywords */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-6 mb-5 text-slate-500 font-medium text-xs sm:text-sm"
            >
              <TypeAnimation
                sequence={[
                  '🚀 Custom Website Development',
                  2000,
                  '📈 SEO & Google Ranking',
                  2000,
                  '🎨 Logo & Brand Design',
                  2000,
                  '📱 Social Media Marketing',
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
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-5"
            >
              <Link
                href="/contact"
                className="group relative w-full sm:w-auto px-6 py-3 bg-slate-900 text-white font-bold text-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  Get Free Quote
                </span>
              </Link>

              <Link
                href="/projects"
                className="group w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-700 font-bold text-sm border-2 border-slate-200 hover:border-brand/50 transition-all flex items-center justify-center gap-2"
              >
                View Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-[10px] sm:text-xs font-semibold text-slate-500"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Satisfaction</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Fast Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <TiltImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TiltImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.08}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] cursor-grab"
    >
      {/* Glow Behind Image */}
      <motion.div
        animate={{
          scale: [0.85, 1.05, 0.85],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-cyan-400/40 blur-[50px] rounded-full"
      />

      {/* Floating Image Animation */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-full h-full"
      >
        <Image
          src="/hero-3d-Photoroom.webp"
          alt="Web Design & Digital Marketing Services - Spabrix Kerala"
          fill
          className="object-contain drop-shadow-2xl pointer-events-none"
          priority
          sizes="(max-width: 640px) 200px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 420px"
        />
      </motion.div>
    </motion.div>
  );
}
