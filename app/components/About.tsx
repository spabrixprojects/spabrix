'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={containerRef} id="about" className="py-40 bg-[#050505] text-white relative border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Content */}
                    <div className="flex flex-col">
                        <div className="overflow-hidden mb-8">
                            <motion.h2 
                                initial={{ opacity: 0, y: 100, rotateZ: 5 }}
                                whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-5xl sm:text-6xl lg:text-[7rem] font-outfit font-light tracking-tight leading-[0.9]"
                            >
                                Beyond <br/>
                                <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Boundaries</span>
                            </motion.h2>
                        </div>

                        <div className="space-y-8 text-slate-400 text-base md:text-xl font-light leading-relaxed border-l border-white/20 pl-6 ml-2">
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            >
                                We are an independent creative studio operating at the intersection of design, technology, and strategy. We refuse to rely on templates or AI-generated mediocrity.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            >
                                Every pixel, every animation, and every line of code is meticulously crafted to elevate your brand above the noise, offering an unparalleled digital experience.
                            </motion.p>
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-16"
                        >
                            <Link href="/about" className="group relative inline-flex items-center gap-4 text-white uppercase tracking-widest text-sm font-semibold">
                                <span className="relative z-10">Discover Our Story</span>
                                <span className="w-10 h-[1px] bg-white relative z-10 group-hover:w-16 transition-all duration-300" />
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </div>
                    
                    {/* Right Parallax Image/Abstract */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative h-[360px] sm:h-[500px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden group border border-white/10"
                    >
                        <motion.div style={{ y: yImg, scale: scaleImg }} className="absolute inset-0 w-full h-full">
                            <div className="absolute inset-0 bg-[#0a0a0a]" />
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-[#050505] to-[#050505]" />
                            
                            {/* Abstract animated lines for premium tech feel */}
                            <motion.div 
                                animate={{ y: ['-100%', '100%'] }}
                                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent left-1/4"
                            />
                            <motion.div 
                                animate={{ y: ['100%', '-100%'] }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent left-1/2"
                            />
                            <motion.div 
                                animate={{ y: ['-100%', '100%'] }}
                                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent left-3/4"
                            />
                        </motion.div>
                        
                        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
                        
                        <motion.div 
                            className="absolute bottom-12 left-12 text-white z-10 mix-blend-difference"
                            whileHover={{ scale: 1.05 }}
                        >
                            <p className="text-7xl font-outfit font-black mb-3 tabular-nums tracking-tighter">150+</p>
                            <p className="text-xs tracking-widest uppercase text-slate-400 font-mono">Digital Platforms Engineered</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
