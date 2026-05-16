'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
    { num: '01', title: 'Digital Platform Architecture', description: 'We build highly scalable, enterprise-grade web applications tailored to exact business logic. Leveraging Next.js and modern stacks, we guarantee speed, absolute security, and fluid scaling.', tag: 'Engineering' },
    { num: '02', title: 'Creative Direction & Design', description: 'Aesthetics dictate trust. We engineer visually striking, modern interfaces that encapsulate your brand identity and ensure a flawless user journey across every viewport.', tag: 'Design' },
    { num: '03', title: 'UI/UX Engineering', description: 'We craft intuitive, data-backed user interfaces. Moving from rigorous wireframing to high-fidelity prototypes, our focus is relentless usability and maximizing conversion rates.', tag: 'Strategy' },
    { num: '04', title: 'Performance & Technical SEO', description: 'An invisible masterpiece holds no value. We optimize infrastructure for millisecond load times and deploy aggressive technical SEO to dominate search engine algorithms.', tag: 'Growth' },
];

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
    const [hovered, setHovered] = useState(false);
    const rowRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: rowRef, offset: ['start end', 'center center'] });
    const xLine = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
    const yRow = useTransform(scrollYProgress, [0, 1], [40, 0]);

    return (
        <motion.div
            ref={rowRef}
            style={{ opacity, y: yRow }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group border-b border-white/8 relative overflow-hidden"
        >
            {/* Fill wipe on hover */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: hovered ? '100%' : '0%' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/[0.03] to-transparent pointer-events-none"
            />

            {/* Scroll-driven gold top line */}
            <motion.div
                className="absolute top-0 left-0 h-px bg-gradient-to-r from-[#d4af37]/60 to-transparent"
                style={{ width: xLine }}
            />

            <div className="flex flex-col lg:flex-row py-10 md:py-16 lg:py-20 items-start lg:items-center justify-between gap-6 lg:gap-16 px-0 relative z-10">
                <div className="flex items-center gap-6 md:gap-12 lg:w-1/2">
                    {/* Number slot machine */}
                    <div className="text-slate-600 font-mono text-sm shrink-0 uppercase tracking-widest overflow-hidden h-6 w-8">
                        <motion.span animate={{ y: hovered ? -24 : 0 }} transition={{ duration: 0.4 }} className="block">{service.num}</motion.span>
                        <motion.span animate={{ y: hovered ? -24 : 0 }} transition={{ duration: 0.4 }} className="block text-[#d4af37]">{service.num}</motion.span>
                    </div>
                    <motion.h3
                        animate={{ x: hovered ? 16 : 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-medium text-slate-400 group-hover:text-white transition-colors duration-300"
                    >
                        {service.title}
                    </motion.h3>
                </div>
                <div className="lg:w-1/2 pl-10 md:pl-20 lg:pl-0 flex flex-col gap-4">
                    <motion.p
                        animate={{ opacity: hovered ? 1 : 0.5 }}
                        transition={{ duration: 0.3 }}
                        className="text-slate-400 font-light leading-relaxed text-base md:text-lg"
                    >
                        {service.description}
                    </motion.p>
                    <motion.span
                        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
                        transition={{ duration: 0.3 }}
                        className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#d4af37]/70"
                    >
                        {service.tag}
                    </motion.span>
                </div>
            </div>
        </motion.div>
    );
}

export default function ServicesClient() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });

    const orbY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
    const bgTextX = useTransform(scrollYProgress, [0, 1], [0, -400]);

    return (
        <section ref={containerRef} className="min-h-screen py-40 relative bg-[#050505] text-white overflow-hidden font-sans">
            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Floating orb */}
            <motion.div style={{ y: orbY }} className="pointer-events-none absolute top-1/4 right-[-20%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_65%)] blur-3xl" />

            {/* Kinetic BG text */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 whitespace-nowrap opacity-[0.018] pointer-events-none overflow-hidden font-outfit font-black text-[20vw] leading-none">
                <motion.div style={{ x: bgTextX }} className="inline-block">
                    ARCHITECTURE ENGINEERING ARCHITECTURE ENGINEERING ARCHITECTURE
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col mb-32 pt-10">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-4 border border-white/10 rounded-full px-6 py-2 mb-10 w-fit bg-white/[0.02]"
                    >
                        <motion.span animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#d4af37]" />
                        <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">Capabilities</span>
                    </motion.div>

                    <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[11rem] font-outfit font-light tracking-tight leading-[0.85] mb-12 flex flex-col">
                        <div className="overflow-hidden flex">
                            {'SERVICE'.split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: 120, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{ duration: 0.9, delay: 0.1 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                                    className="block text-slate-100"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                        <div className="overflow-hidden flex">
                            {'ARCHITECTURE'.split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: 120, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{ duration: 0.9, delay: 0.3 + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
                                    className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 via-slate-500 to-neutral-600 italic font-black"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.01 }}
                        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-base md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed border-l border-[#d4af37]/30 pl-6"
                    >
                        A comprehensive suite of digital solutions, engineered to elevate premium brands from initial concept through to market domination.
                    </motion.p>
                </div>

                {/* Service rows */}
                <div className="flex flex-col border-t border-white/8">
                    {services.map((service, index) => (
                        <ServiceRow key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
