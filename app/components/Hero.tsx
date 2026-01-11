'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-white pt-20 lg:pt-0">
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Aurora Gradients - Adjusted for split layout */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-400/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">

          {/* Left Column: Text Content */}
          <div className="w-full lg:flex-1 text-center lg:text-left z-20">


            {/* H1 Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-outfit text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight text-slate-900 mb-4 leading-[1.1]"
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
              className="text-sm sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed font-medium"
            >
              Kerala's Premier <span className="text-slate-900 font-semibold">Web Design & Marketing Agency</span>.
              We fuse creative aesthetics with engineering precision to drive real business growth.
            </motion.p>

            {/* Type Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-6 mb-6 text-slate-500 font-medium text-xs sm:text-base"
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
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4 sm:mb-8"
            >
              <Link
                href="/contact"
                className="group relative w-full sm:w-auto px-6 py-3 bg-slate-900 text-white font-bold text-sm sm:text-base rounded-xl overflow-hidden shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  Start Your Project
                </span>
              </Link>

              <Link
                href="/projects"
                className="group w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-700 font-bold text-sm sm:text-base border border-slate-200 hover:border-brand/50 hover:bg-blue-50/50 transition-all shadow-sm hover:shadow-lg flex items-center justify-center gap-2"
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
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 text-[10px] sm:text-sm font-semibold text-slate-500"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" /> 100% Satisfaction
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" /> 24/7 Support
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Image with Tilt Effect */}
          <TiltImage />
        </div>
      </div>
    </section>
  );
}

function TiltImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      className="relative w-full lg:flex-1 h-[250px] sm:h-[400px] lg:h-auto max-w-[280px] sm:max-w-md lg:max-w-xl mx-auto cursor-grab perspective-1000 order-first lg:order-last"
    >
      <div className="relative w-full h-full lg:aspect-square flex items-center justify-center transform-style-3d">
        {/* Glow Behind Image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-[80px] rounded-full scale-90 -z-10" />

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/hero-3d-Photoroom.webp"
            alt="Digital Excellence Illustration"
            fill
            className="object-contain mix-blend-multiply drop-shadow-2xl pointer-events-none"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
