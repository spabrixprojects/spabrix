'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
    {
        num: "01",
        title: 'Digital Platform Architecture',
        description: 'We build highly scalable, enterprise-grade web applications tailored to exact business logic. Leveraging Next.js and modern stacks, we guarantee speed, absolute security, and fluid scaling.',
    },
    {
        num: "02",
        title: 'Creative Direction & Design',
        description: 'Aesthetics dictate trust. We engineer visually striking, modern interfaces that encapsulate your brand identity and ensure a flawless user journey across every viewport.',
    },
    {
        num: "03",
        title: 'UI/UX Engineering',
        description: 'We craft intuitive, data-backed user interfaces. Moving from rigorous wireframing to high-fidelity prototypes, our focus is relentless usability and maximizing conversion rates.',
    },
    {
        num: "04",
        title: 'Performance & Technical SEO',
        description: 'An invisible masterpiece holds no value. We optimize infrastructure for millisecond load times and deploy aggressive technical SEO to dominate search engine algorithms.',
    },
];

export default function ServicesClient() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section ref={containerRef} className="min-h-screen py-40 relative bg-[#050505] text-white overflow-hidden font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Background Marquee */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 whitespace-nowrap opacity-[0.02] pointer-events-none overflow-hidden font-outfit font-black text-[20vw] leading-none">
                <motion.div 
                    animate={{ x: [0, -2000] }} 
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                >
                    ARCHITECTURE ENGINEERING ARCHITECTURE ENGINEERING
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col mb-32 pt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                        className="inline-flex items-center gap-4 border border-white/10 rounded-full px-6 py-2 mb-10 w-fit bg-white/[0.02] backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">Capabilities</span>
                    </motion.div>

                    <h2 className="text-6xl md:text-8xl lg:text-[11rem] font-outfit font-light tracking-tight leading-[0.85] mb-12 flex flex-col">
                        <div className="overflow-hidden flex">
                            {"SERVICE".split('').map((char, index) => (
                                <motion.span 
                                    key={index}
                                    initial={{ y: 150, opacity: 0, rotateZ: 10 }}
                                    animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                                    transition={{ duration: 1, delay: 0.1 + index * 0.04, ease: [0.16, 1, 0.3, 1] as any }}
                                    className="block text-slate-100"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                        <div className="overflow-hidden flex">
                            {"ARCHITECTURE".split('').map((char, index) => (
                                <motion.span 
                                    key={index}
                                    initial={{ y: 150, opacity: 0, rotateZ: 10 }}
                                    animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                                    transition={{ duration: 1, delay: 0.3 + index * 0.04, ease: [0.16, 1, 0.3, 1] as any }}
                                    className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 via-slate-500 to-neutral-600 italic font-black"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    </h2>

                    <div className="max-w-2xl flex flex-wrap gap-[6px]">
                        {"A comprehensive suite of digital solutions, engineered to elevate premium brands from initial concept through to market domination.".split(" ").map((word, index) => (
                            <div key={index} className="overflow-hidden">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 + index * 0.02, ease: [0.16, 1, 0.3, 1] as any }}
                                    className="inline-block text-2xl text-slate-400 font-light leading-relaxed"
                                >
                                    {word}
                                </motion.span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col border-t border-white/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group border-b border-white/10 relative overflow-hidden"
                        >
                            <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: hoveredIndex === index ? "100%" : "0%" }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute bottom-0 left-0 w-full bg-white/[0.03] pointer-events-none" 
                            />

                            <div className="flex flex-col lg:flex-row py-16 lg:py-24 items-start lg:items-center justify-between gap-8 lg:gap-16 px-6 -mx-6 relative z-10">
                                <div className="flex items-center gap-12 lg:w-1/2">
                                    <div className="text-slate-600 font-mono text-sm shrink-0 uppercase tracking-widest overflow-hidden h-6 w-8">
                                        <motion.span animate={{ y: hoveredIndex === index ? -24 : 0 }} className="block transition-transform duration-500">{service.num}</motion.span>
                                        <motion.span animate={{ y: hoveredIndex === index ? -24 : 0 }} className="block transition-transform duration-500 text-white">{service.num}</motion.span>
                                    </div>
                                    <motion.h3 
                                        animate={{ x: hoveredIndex === index ? 20 : 0 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="text-4xl md:text-5xl lg:text-6xl font-outfit font-medium text-slate-400 group-hover:text-white transition-colors"
                                    >
                                        {service.title}
                                    </motion.h3>
                                </div>
                                
                                <div className="lg:w-1/2 pl-20 lg:pl-0">
                                    <motion.p 
                                        animate={{ opacity: hoveredIndex === index ? 1 : 0.6 }}
                                        className="text-slate-400 font-light leading-relaxed text-xl"
                                    >
                                        {service.description}
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
