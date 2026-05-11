'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// Utility for scramble text effect
const scrambleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%&*";

function ScrambleText({ text, delay }: { text: string, delay: number }) {
    const [displayText, setDisplayText] = useState(text.replace(/./g, '-'));
    
    useEffect(() => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplayText((prev) => 
                prev.split('').map((letter, index) => {
                    if (index < iterations) return text[index];
                    return scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
                }).join('')
            );
            if (iterations >= text.length) clearInterval(interval);
            iterations += 1 / 3; 
        }, 30);
        
        const timeout = setTimeout(() => interval, delay * 1000);
        return () => { clearInterval(interval); clearTimeout(timeout); };
    }, [text, delay]);

    return <span>{displayText}</span>;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Smooth scroll parallax
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);
  const yHero = useTransform(scrollY, [0, 800], [0, 250]);

  // Mouse tracking for the custom floating orb
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 120 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  // Framer Motion staggered character reveal
  const titleVariants: Variants = {
    hidden: { y: "150%", rotateZ: 10, opacity: 0 },
    visible: (i: number) => ({
      y: "0%", 
      rotateZ: 0, 
      opacity: 1,
      transition: { duration: 1.4, delay: 1 + (i * 0.04), ease: [0.16, 1, 0.3, 1] as any }
    })
  };

  return (
    <>
      {/* Premium Curtain Intro Animation */}
      <motion.div 
        initial={{ height: "100vh", top: 0 }}
        animate={{ height: "0vh", top: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any, delay: 0.2 }}
        className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center pointer-events-none"
      >
        <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white font-mono tracking-[0.5em] text-xs uppercase"
        >
            <ScrambleText text="INITIALIZING_ENVIRONMENT" delay={0} />
        </motion.div>
      </motion.div>

      <section ref={containerRef} className="relative min-h-[100svh] bg-[#030303] text-white overflow-hidden selection:bg-white selection:text-black">
        
        {/* Abstract Animated Background Gradients */}
        <div className="absolute inset-0 z-0 opacity-40">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-[100px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-[100px]" 
          />
        </div>

        {/* Architectural Grid Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
          <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 2, delay: 1 }} className="absolute top-0 left-[10%] w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
          <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 2, delay: 1.2 }} className="absolute top-0 right-[10%] w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, delay: 1.4 }} className="absolute top-[20%] left-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, delay: 1.6 }} className="absolute bottom-[20%] left-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>

        {/* Custom Mouse Follower (Glowing Orb) */}
        <motion.div
          className="fixed top-0 left-0 w-[300px] h-[300px] bg-white/[0.04] rounded-full blur-[40px] pointer-events-none z-0 hidden md:block"
          style={{ x: cursorXSpring, y: cursorYSpring }}
        />

        <motion.div style={{ y: yHero }} className="relative z-10 w-full h-[100svh] flex flex-col justify-center px-4 sm:px-10 lg:px-[10%]">
          
          {/* Top Meta Info */}
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="absolute top-[25%] left-[10%] lg:left-[12%] flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] uppercase text-slate-500"
          >
              <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
              </span>
              <ScrambleText text="KERALA, INDIA — GLOBAL" delay={2} />
          </motion.div>

          <motion.div style={{ opacity: opacityText }} className="flex flex-col mt-20">
              
              {/* Row 1: Left Aligned */}
              <div className="overflow-hidden flex">
                  <motion.div className="flex">
                      {"We".split('').map((char, i) => (
                          <motion.h1 key={`we-${i}`} custom={i} variants={titleVariants} initial="hidden" animate="visible" className="text-[4rem] sm:text-[6rem] md:text-[8.5rem] lg:text-[11vw] font-playfair tracking-tight leading-[0.85] pr-2 md:pr-4">
                              {char}
                          </motion.h1>
                      ))}
                  </motion.div>
                  <motion.div className="flex ml-4 md:ml-8">
                      {"Architect".split('').map((char, i) => (
                          <motion.h1 key={`arc-${i}`} custom={i + 2} variants={titleVariants} initial="hidden" animate="visible" className="text-[4rem] sm:text-[6rem] md:text-[8.5rem] lg:text-[11vw] font-playfair italic tracking-tight leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">
                              {char}
                          </motion.h1>
                      ))}
                  </motion.div>
              </div>

              {/* Row 2: Right Aligned with Image integration */}
              <div className="overflow-hidden flex justify-end items-center gap-6 mt-2 md:mt-4">
                  <motion.div 
                      initial={{ scale: 0, rotate: -15, filter: "blur(10px)" }}
                      animate={{ scale: 1, rotate: 0, filter: "blur(0px)" }}
                      transition={{ duration: 1.4, delay: 1.8, ease: [0.16, 1, 0.3, 1] as any }}
                      className="hidden md:block w-[18vw] h-[7vw] rounded-[4rem] overflow-hidden relative border border-white/20 bg-[#111] group cursor-pointer"
                  >
                      <Image src="/pr2.png" alt="Creative Design" fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 mix-blend-overlay" />
                  </motion.div>
                  <motion.div className="flex">
                      {"Digital".split('').map((char, i) => (
                          <motion.h1 key={`dig-${i}`} custom={i + 9} variants={titleVariants} initial="hidden" animate="visible" className="text-[4rem] sm:text-[6rem] md:text-[8.5rem] lg:text-[11vw] font-playfair tracking-tight leading-[0.85] text-white">
                              {char}
                          </motion.h1>
                      ))}
                  </motion.div>
              </div>

              {/* Row 3: Left Aligned */}
              <div className="overflow-hidden mt-2 md:mt-4 flex items-end justify-between">
                  <motion.div className="flex">
                      {"Empires.".split('').map((char, i) => (
                          <motion.h1 key={`emp-${i}`} custom={i + 16} variants={titleVariants} initial="hidden" animate="visible" className="text-[4rem] sm:text-[6rem] md:text-[8.5rem] lg:text-[11vw] font-playfair italic tracking-tight leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-white to-slate-400">
                              {char}
                          </motion.h1>
                      ))}
                  </motion.div>

                  {/* Circular Call to action */}
                  <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] as any }}
                      className="hidden lg:flex"
                  >
                      <Link href="/contact" className="relative flex items-center justify-center w-32 h-32 rounded-full border border-white/20 group hover:bg-white transition-colors duration-500">
                          <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-2 border border-dashed border-white/30 rounded-full group-hover:border-black/30 transition-colors duration-500"
                          />
                          <ArrowUpRight className="w-8 h-8 text-white group-hover:text-black transition-colors duration-500" />
                          
                          {/* Magnetic Hover Text Ring */}
                          <div className="absolute inset-[-20px] rounded-full border border-white/0 group-hover:border-white/10 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
                      </Link>
                  </motion.div>
              </div>

          </motion.div>

          {/* Bottom Details */}
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5, ease: [0.16, 1, 0.3, 1] as any }}
              className="absolute bottom-[10%] left-[10%] right-[10%] flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
          >
              <div className="text-slate-400 font-light max-w-sm text-sm sm:text-base leading-relaxed overflow-hidden">
                <motion.p initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 2.6, ease: [0.16, 1, 0.3, 1] as any }}>
                    An independent creative engineering studio merging high-end aesthetics with bleeding-edge technology to elevate premium brands above the noise.
                </motion.p>
              </div>

              <div className="flex gap-12 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  <div className="flex flex-col gap-2 overflow-hidden">
                      <motion.span initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 2.7 }} className="text-white">Services</motion.span>
                      <motion.span initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 2.8 }}>Development</motion.span>
                      <motion.span initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 2.9 }}>Design</motion.span>
                      <motion.span initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 3.0 }}>SEO</motion.span>
                  </div>
                  <div className="flex flex-col gap-2 overflow-hidden">
                      <motion.span initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 2.7 }} className="text-white">Connect</motion.span>
                      <motion.a initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 2.8 }} href="mailto:spabrix@gmail.com" className="hover:text-white transition-colors">Email</motion.a>
                      <motion.a initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 2.9 }} href="https://instagram.com" className="hover:text-white transition-colors">Instagram</motion.a>
                      <motion.a initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 3.0 }} href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</motion.a>
                  </div>
              </div>
          </motion.div>

        </motion.div>
      </section>
    </>
  );
}
