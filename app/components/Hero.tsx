'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

/* ─── Animated Counter ─── */
function Counter({ to, duration = 2.2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * to));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{count}</span>;
}

/* ─── Marquee Strip ─── */
const marqueeItems = ['WEB DESIGN', '·', 'DEVELOPMENT', '·', 'SEO', '·', 'BRANDING', '·', 'DIGITAL MARKETING', '·'];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax — text shifts upward on scroll
  const yText = useTransform(scrollY, [0, 700], [0, -120]);
  const opacitySection = useTransform(scrollY, [0, 500], [1, 0]);

  // Mouse-reactive gradient spotlight
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, [mouseX, mouseY]);

  // Build gradient string from spring values
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const unsubX = springX.on('change', (v) =>
      setGradientPos((p) => ({ ...p, x: v * 100 }))
    );
    const unsubY = springY.on('change', (v) =>
      setGradientPos((p) => ({ ...p, y: v * 100 }))
    );
    return () => { unsubX(); unsubY(); };
  }, [springX, springY]);

  // Page-load reveal: single stagger parent
  const reveal = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const lineUp = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: '0%', opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as any } },
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-[#080808] text-white min-h-[100svh] overflow-hidden"
    >
      {/* ── Mouse-reactive gradient backdrop ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-none"
        style={{
          background: `radial-gradient(600px circle at ${gradientPos.x}% ${gradientPos.y}%, rgba(212,175,55,0.06) 0%, transparent 65%), radial-gradient(900px circle at 80% 20%, rgba(255,255,255,0.025) 0%, transparent 60%)`,
        }}
      />

      {/* ── Subtle noise texture ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* ── Fine horizontal rule ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="absolute top-0 left-0 right-0 h-px bg-white/10 origin-left z-10"
      />

      {/* ── Main content ── */}
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        style={{ y: yText, opacity: opacitySection }}
        className="relative z-10 flex flex-col min-h-[100svh]"
      >
        {/* ── Top bar ── */}
        <div className="flex justify-between items-center px-6 md:px-12 pt-32 pb-0">
          <motion.div variants={fadeIn} className="flex items-center gap-3">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              Est. 2022 — Kerala, India
            </span>
          </motion.div>
          <motion.div variants={fadeIn} className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 hidden md:block">
            Creative Engineering Studio
          </motion.div>
        </div>

        {/* ── Hero headline ── */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 pt-10 md:pt-0">

          {/* Overline */}
          <div className="overflow-hidden mb-6 md:mb-10">
            <motion.p
              variants={lineUp}
              className="font-mono text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#d4af37]/70"
            >
              Digital Agency &nbsp;/&nbsp; 80+ Projects Delivered
            </motion.p>
          </div>

          {/* Giant headline — two lines */}
          <div className="overflow-hidden">
            <motion.h1
              variants={lineUp}
              className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] font-playfair leading-[0.88] tracking-tight text-white"
            >
              We Build
            </motion.h1>
          </div>

          {/* Second line — italic + accent colour + embedded image pill */}
          <div className="overflow-hidden mt-1 md:mt-2 flex flex-wrap items-center gap-4 md:gap-6">
            <motion.h1
              variants={lineUp}
              className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] font-playfair italic leading-[0.88] tracking-tight text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(95deg, #d4af37 0%, #f5e09f 40%, #d4af37 100%)' }}
            >
              Digital
            </motion.h1>

            {/* Image pill — hidden on mobile */}
            <motion.div
              variants={{
                hidden: { scale: 0.8, opacity: 0, rotate: -6 },
                visible: { scale: 1, opacity: 1, rotate: 0, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as any, delay: 0.6 } },
              }}
              className="hidden md:block relative w-[14vw] h-[6.5vw] rounded-full overflow-hidden border border-white/10 bg-white/5 shrink-0"
            >
              <Image
                src="/pr2.png"
                alt="Spabrix project preview"
                fill
                className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-700 scale-110"
              />
            </motion.div>
          </div>

          <div className="overflow-hidden mt-1 md:mt-2">
            <motion.h1
              variants={lineUp}
              className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] font-playfair leading-[0.88] tracking-tight text-white/90"
            >
              Empires.
            </motion.h1>
          </div>

          {/* ── Bottom row: description + CTA + stats ── */}
          <motion.div
            variants={fadeIn}
            className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end gap-8 md:gap-6 lg:gap-0 justify-between"
          >
            {/* Description */}
            <p className="max-w-xs text-sm md:text-base text-white/40 leading-relaxed font-light">
              An independent creative studio merging high-end aesthetics with
              bleeding-edge technology — built to elevate premium brands.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 self-start md:self-center"
            >
              <span className="relative z-10 font-mono text-xs tracking-[0.25em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">
                Start a Project
              </span>
              <span className="relative overflow-hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/20 group-hover:border-[#d4af37]/60 transition-colors duration-500">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4 stroke-white/60 group-hover:stroke-[#d4af37] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                >
                  <path d="M2 14L14 2M14 2H5M14 2v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#d4af37]/50 group-hover:w-full transition-all duration-500 ease-out" />
            </Link>

            {/* Stats */}
            <div className="flex gap-8 md:gap-10">
              {[
                { value: 80, suffix: '+', label: 'Projects' },
                { value: 4, suffix: 'yr', label: 'Experience' },
                { value: 100, suffix: '%', label: 'Satisfaction' },
              ].map(({ value, suffix, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-playfair text-2xl sm:text-3xl md:text-4xl text-white/90 leading-none">
                    <Counter to={value} />{suffix}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Marquee strip ── */}
        <div className="relative mt-14 border-t border-white/[0.07] overflow-hidden py-4">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap w-max"
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className={`font-mono text-[10px] tracking-[0.3em] uppercase ${
                  item === '·' ? 'text-[#d4af37]/60' : 'text-white/20'
                }`}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator — hidden on small screens to avoid overlap ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-12 hidden sm:flex flex-col items-center gap-2 z-20"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25 rotate-90 origin-center mb-4">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-white/5 to-white/30 origin-top"
        />
      </motion.div>

      {/* ── Decorative large index number ── */}
      <div className="pointer-events-none absolute top-[28%] right-2 md:right-8 z-0 select-none overflow-hidden">
        <span className="font-playfair text-[18vw] md:text-[13vw] text-white/[0.025] leading-none font-bold">
          01
        </span>
      </div>
    </section>
  );
}
