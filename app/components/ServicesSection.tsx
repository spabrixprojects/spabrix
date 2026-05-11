'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Digital Platforms',
    description: 'We build immersive, high-performance web applications and corporate websites using modern stacks like Next.js and React.',
    slug: 'web-development',
  },
  {
    num: '02',
    title: 'Brand Identity',
    description: 'Crafting memorable, premium visual identities, typography, and design systems that resonate with luxury audiences.',
    slug: 'branding',
  },
  {
    num: '03',
    title: 'E-Commerce',
    description: 'Architecting conversion-optimized, bespoke digital storefronts that offer a frictionless shopping experience.',
    slug: 'ecommerce',
  },
  {
    num: '04',
    title: 'SEO & Growth',
    description: 'Data-driven technical SEO and growth strategies ensuring your digital presence dominates search results.',
    slug: 'seo',
  }
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-40 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Marquee Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 whitespace-nowrap opacity-[0.02] pointer-events-none overflow-hidden font-outfit font-black text-[20vw] leading-none">
        <motion.div 
            animate={{ x: [0, -2000] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block"
        >
            CAPABILITIES CAPABILITIES CAPABILITIES CAPABILITIES
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div style={{ y }} className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-8">
          <div className="max-w-3xl overflow-hidden">
            <motion.h2 
              initial={{ opacity: 0, y: 100, rotateZ: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-outfit font-light tracking-tight leading-[0.9]"
            >
              Our <span className="font-black italic">Expertise</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-slate-400 font-light max-w-md text-xl border-l border-white/20 pl-6"
          >
            We don't just build websites; we architect digital ecosystems that drive growth and command attention in competitive markets.
          </motion.p>
        </motion.div>

        <div className="border-t border-white/10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group border-b border-white/10 relative"
            >
              <Link href={`/services#${service.slug}`} className="py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden z-10">
                
                {/* Hover Background fill */}
                <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: hoveredIndex === index ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-full bg-white/[0.03] pointer-events-none" 
                />

                <div className="flex items-center gap-8 md:gap-16 relative z-10 w-full md:w-auto">
                  <span className="text-slate-600 font-mono text-sm uppercase tracking-widest block w-10 overflow-hidden">
                    <motion.span 
                        animate={{ y: hoveredIndex === index ? -20 : 0 }} 
                        className="block transition-transform duration-500"
                    >
                        {service.num}
                    </motion.span>
                    <motion.span 
                        animate={{ y: hoveredIndex === index ? -20 : 0 }} 
                        className="block transition-transform duration-500 text-white"
                    >
                        {service.num}
                    </motion.span>
                  </span>
                  
                  <h3 className="text-4xl md:text-6xl font-outfit font-medium text-slate-400 group-hover:text-white transition-all duration-500 origin-left">
                    <motion.span 
                        animate={{ x: hoveredIndex === index ? 20 : 0, scale: hoveredIndex === index ? 1.05 : 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="block"
                    >
                        {service.title}
                    </motion.span>
                  </h3>
                </div>

                <div className="flex items-center justify-between w-full md:w-auto md:gap-16 relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : -20 }}
                    transition={{ duration: 0.4 }}
                    className="hidden md:block w-72"
                  >
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {service.description}
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    animate={{ rotate: hoveredIndex === index ? 45 : 0, backgroundColor: hoveredIndex === index ? "#ffffff" : "transparent", color: hoveredIndex === index ? "#000000" : "#ffffff" }}
                    transition={{ duration: 0.4, ease: "backOut" }}
                    className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center shrink-0 ml-auto md:ml-0"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
