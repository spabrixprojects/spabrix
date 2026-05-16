'use client';

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useVelocity,
} from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

/* ─── Animated Counter with scramble effect ─── */
function Counter({ to, duration = 2.4 }: { to: number; duration?: number }) {
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
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * to));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(to);
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

/* ─── Split text into animated chars ─── */
function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.03,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0, rotateX: -40 }}
          animate={{ y: '0%', opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block', transformOrigin: 'bottom center' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Floating Magnetic Orb ─── */
function MagneticOrb({
  x: ox,
  y: oy,
  size,
  color,
  delay,
  scrollY,
  scrollRange,
  parallaxRange,
}: {
  x: string;
  y: string;
  size: string;
  color: string;
  delay: number;
  scrollY: any;
  scrollRange: [number, number];
  parallaxRange: [number, number];
}) {
  const yParallax = useTransform(scrollY, scrollRange, parallaxRange);
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full blur-3xl"
      style={{
        left: ox,
        top: oy,
        width: size,
        height: size,
        background: color,
        y: yParallax,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="w-full h-full rounded-full"
        animate={{
          scale: [1, 1.15, 0.92, 1.08, 1],
          rotate: [0, 15, -10, 5, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay }}
        style={{ background: 'inherit' }}
      />
    </motion.div>
  );
}

/* ─── Kinetic Marquee with scroll velocity tilt ─── */
const marqueeItems = ['WEB DESIGN', '·', 'DEVELOPMENT', '·', 'SEO', '·', 'BRANDING', '·', 'DIGITAL STRATEGY', '·'];

function KineticMarquee() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const skewX = useSpring(useTransform(scrollVelocity, [-2000, 2000], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });

  return (
    <div className="relative mt-14 border-t border-white/[0.07] overflow-hidden py-4">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="flex gap-12 whitespace-nowrap w-max"
        style={{ skewX }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className={`font-mono text-[10px] tracking-[0.35em] uppercase ${
              item === '·' ? 'text-[#d4af37]/70' : 'text-white/20'
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Scroll-driven SVG Grid Lines ─── */
function GridLines({ scrollY }: { scrollY: any }) {
  const progress = useTransform(scrollY, [0, 600], [0, 1]);
  const [p, setP] = useState(0);
  useEffect(() => progress.on('change', setP), [progress]);

  return (
    <svg
      className="pointer-events-none absolute inset-0 w-full h-full z-0"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      {/* Horizontal rules that draw in */}
      {[20, 45, 70, 90].map((y, i) => (
        <motion.line
          key={`h-${i}`}
          x1="0"
          y1={y}
          x2="100"
          y2={y}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
      {/* Diagonal accent line driven by scroll */}
      <line
        x1="0"
        y1="100"
        x2={`${p * 100}`}
        y2={`${100 - p * 100}`}
        stroke="rgba(212,175,55,0.08)"
        strokeWidth="0.15"
      />
    </svg>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax layers
  const yText = useTransform(scrollY, [0, 700], [0, -140]);
  const opacitySection = useTransform(scrollY, [0, 480], [1, 0]);
  const yOrbs = useTransform(scrollY, [0, 600], [0, -60]);

  // Mouse reactive spotlight
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 18 });

  const [gp, setGp] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handle);
    const ux = springX.on('change', (v) => setGp((p) => ({ ...p, x: v * 100 })));
    const uy = springY.on('change', (v) => setGp((p) => ({ ...p, y: v * 100 })));
    return () => { window.removeEventListener('mousemove', handle); ux(); uy(); };
  }, [mouseX, mouseY, springX, springY]);

  // Image pill 3D tilt
  const pillRotateX = useMotionValue(0);
  const pillRotateY = useMotionValue(0);
  const pillSpringX = useSpring(pillRotateX, { stiffness: 200, damping: 25 });
  const pillSpringY = useSpring(pillRotateY, { stiffness: 200, damping: 25 });

  const handlePillMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    pillRotateY.set(((e.clientX - cx) / rect.width) * 20);
    pillRotateX.set(-((e.clientY - cy) / rect.height) * 20);
  }, [pillRotateX, pillRotateY]);

  const handlePillMouseLeave = useCallback(() => {
    pillRotateX.set(0);
    pillRotateY.set(0);
  }, [pillRotateX, pillRotateY]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#080808] text-white min-h-[100svh] overflow-hidden"
    >
      {/* ── Deep layered background ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at ${gp.x}% ${gp.y}%, rgba(212,175,55,0.055) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 85% 15%, rgba(255,255,255,0.018) 0%, transparent 55%),
            radial-gradient(ellipse 60% 80% at 5% 90%, rgba(100,60,200,0.04) 0%, transparent 50%)
          `,
        }}
      />

      {/* ── Noise texture ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }}
      />

      {/* ── SVG animated grid ── */}
      <GridLines scrollY={scrollY} />

      {/* ── Floating orbs ── */}
      <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ y: yOrbs }}>
        <MagneticOrb x="72%" y="8%" size="38vw" color="radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)" delay={0.4} scrollY={scrollY} scrollRange={[0,600]} parallaxRange={[0,-80]} />
        <MagneticOrb x="-10%" y="55%" size="32vw" color="radial-gradient(circle, rgba(120,80,220,0.07) 0%, transparent 70%)" delay={0.7} scrollY={scrollY} scrollRange={[0,600]} parallaxRange={[0,-40]} />
        <MagneticOrb x="40%" y="70%" size="20vw" color="radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)" delay={1.0} scrollY={scrollY} scrollRange={[0,600]} parallaxRange={[0,-120]} />
      </motion.div>

      {/* ── Top entry line ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent origin-left z-10"
      />

      {/* ── Left vertical accent ── */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent origin-top z-10"
      />

      {/* ── Main content with scroll parallax ── */}
      <motion.div
        style={{ y: yText, opacity: opacitySection }}
        className="relative z-10 flex flex-col min-h-[100svh]"
      >
        {/* ── Top bar ── */}
        <div className="flex justify-between items-center px-8 md:px-14 pt-32 pb-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="block w-1.5 h-1.5 rounded-full bg-[#d4af37]"
            />
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-white/35">
              Est. 2022 — Kerala, India
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[10px] tracking-[0.32em] uppercase text-white/25 hidden md:block"
          >
            Creative Engineering Studio
          </motion.div>
        </div>

        {/* ── Hero headline ── */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 pt-10 md:pt-0">

          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 md:mb-12"
          >
            <span className="font-mono text-[10px] md:text-xs tracking-[0.38em] uppercase text-[#d4af37]/65">
              Digital Agency &nbsp;/&nbsp; 80+ Projects Delivered
            </span>
          </motion.div>

          {/* Giant headline — char split */}
          <div className="overflow-hidden">
            <div className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] font-playfair leading-[0.88] tracking-tight text-white">
              <SplitText text="We Build" delay={0.6} stagger={0.04} />
            </div>
          </div>

          {/* Second line — italic gold + image pill */}
          <div className="overflow-hidden mt-1 md:mt-2 flex flex-wrap items-center gap-4 md:gap-6">
            <div
              className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] font-playfair italic leading-[0.88] tracking-tight text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(100deg, #d4af37 0%, #f5e09f 45%, #c9982a 100%)' }}
            >
              <SplitText text="Digital" delay={0.75} stagger={0.05} />
            </div>

            {/* Image pill — 3D tilt on hover */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
              onMouseMove={handlePillMouseMove}
              onMouseLeave={handlePillMouseLeave}
              style={{
                rotateX: pillSpringX,
                rotateY: pillSpringY,
                perspective: 800,
                transformStyle: 'preserve-3d',
              }}
              className="hidden md:block relative w-[14vw] h-[6.5vw] rounded-full overflow-hidden border border-white/12 bg-white/5 shrink-0 cursor-none"
            >
              <Image
                src="/pr2.png"
                alt="Spabrix project preview"
                fill
                className="object-cover opacity-60 hover:opacity-95 transition-opacity duration-700 scale-110"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </motion.div>
          </div>

          <div className="overflow-hidden mt-1 md:mt-2">
            <div className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] font-playfair leading-[0.88] tracking-tight text-white/85">
              <SplitText text="Empires." delay={0.9} stagger={0.045} />
            </div>
          </div>

          {/* ── Bottom row ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end gap-8 md:gap-6 lg:gap-0 justify-between"
          >
            {/* Description */}
            <p className="max-w-xs text-sm md:text-base text-white/35 leading-relaxed font-light">
              An independent creative studio merging high-end aesthetics with
              bleeding-edge technology — built to elevate premium brands.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 self-start md:self-center"
            >
              {/* Animated ring */}
              <span className="relative overflow-hidden flex items-center justify-center w-12 h-12 rounded-full border border-white/15 group-hover:border-[#d4af37]/70 transition-colors duration-500">
                <motion.span
                  className="absolute inset-0 rounded-full bg-[#d4af37]/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="relative z-10 w-4 h-4 stroke-white/50 group-hover:stroke-[#d4af37] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                >
                  <path d="M2 14L14 2M14 2H5M14 2v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="relative z-10 font-mono text-xs tracking-[0.28em] uppercase text-white/70 group-hover:text-white transition-colors duration-300">
                Start a Project
              </span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[#d4af37]/60 to-transparent group-hover:w-full transition-all duration-600 ease-out" />
            </Link>

            {/* Stats */}
            <div className="flex gap-8 md:gap-10">
              {[
                { value: 80, suffix: '+', label: 'Projects' },
                { value: 4, suffix: 'yr', label: 'Experience' },
                { value: 100, suffix: '%', label: 'Satisfaction' },
              ].map(({ value, suffix, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.7 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-1"
                >
                  <span className="font-playfair text-2xl sm:text-3xl md:text-4xl text-white/90 leading-none">
                    <Counter to={value} />{suffix}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/25">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Kinetic Marquee ── */}
        <KineticMarquee />
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-14 hidden sm:flex flex-col items-center gap-2 z-20"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/20 [writing-mode:vertical-lr] mb-3">
          Scroll
        </span>
        <div className="relative w-px h-14 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#d4af37]/60 to-transparent"
            animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-white/6" />
        </div>
      </motion.div>

      {/* ── Decorative index number with parallax ── */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 600], [0, 80]) }}
        className="pointer-events-none absolute top-[26%] right-2 md:right-10 z-0 select-none overflow-hidden"
      >
        <motion.span
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair text-[18vw] md:text-[13vw] text-white/[0.022] leading-none font-bold"
        >
          01
        </motion.span>
      </motion.div>

      {/* ── Corner coordinates ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-8 hidden md:block z-20"
      >
        <span className="font-mono text-[8px] tracking-[0.3em] text-white/15 uppercase">
          11.0510° N · 76.0711° E
        </span>
      </motion.div>
    </section>
  );
}
