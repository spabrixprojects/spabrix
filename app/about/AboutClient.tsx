'use client';

import { motion, useScroll, useTransform, useSpring, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

/* ─── Animated Counter ─── */
function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setInView(true);
        });
        if (nodeRef.current) observer.observe(nodeRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (inView && nodeRef.current) {
            const node = nodeRef.current;
            const controls = animate(from, to, {
                duration,
                ease: [0.16, 1, 0.3, 1] as any,
                onUpdate(value) {
                    node.textContent = value.toFixed(0) + (to === 100 ? '%' : '+');
                },
            });
            return () => controls.stop();
        }
    }, [from, to, duration, inView]);

    return <span ref={nodeRef}>{from}+</span>;
}

/* ─── Reveal word ─── */
function RevealWord({ word, delay = 0 }: { word: string; delay?: number }) {
    return (
        <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {word}
        </motion.span>
    );
}

const values = [
    { title: 'Transparency', desc: 'Honest, direct communication. No hidden fees, no false promises. Pure engineering.', number: '01' },
    { title: 'Innovation', desc: 'We stay ahead of the curve, utilizing bleeding-edge technology to give you an unfair advantage.', number: '02' },
    { title: 'Performance', desc: 'Beautiful design is obsolete if it doesn\'t perform. We architect for speed and conversion.', number: '03' },
    { title: 'Partnership', desc: 'We aren\'t just an agency; we are the strategic digital extension of your business.', number: '04' },
];

export default function AboutClient() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
    const { scrollYProgress: imageProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] });

    const yHero = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const clipX = useTransform(imageProgress, [0, 0.6], ['100%', '0%']);
    const imgScale = useTransform(imageProgress, [0, 0.7], [1.18, 1]);

    return (
        <section ref={containerRef} className="min-h-screen pt-40 pb-32 relative bg-[#050505] text-white overflow-hidden font-sans">
            {/* Grid texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Floating orbs */}
            <motion.div style={{ y: orbY1 }} className="pointer-events-none absolute -top-32 -right-32 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.055)_0%,transparent_70%)] blur-3xl" />
            <motion.div style={{ y: orbY2 }} className="pointer-events-none absolute bottom-0 -left-24 w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(120,80,220,0.04)_0%,transparent_70%)] blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ── Section label ── */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex items-center gap-4 border border-white/10 rounded-full px-6 py-2 mb-16 w-fit bg-white/[0.02]"
                >
                    <motion.span
                        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-[#d4af37]"
                    />
                    <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">Our Story</span>
                </motion.div>

                {/* ── Hero headline ── */}
                <motion.div style={{ y: yHero }} className="flex flex-col mb-40 pt-4">
                    <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-outfit font-light tracking-tight leading-[0.88] mb-10">
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.01 }}
                            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Engineering
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.01 }}
                            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                            className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500"
                        >
                            Excellence
                        </motion.div>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.01 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-base md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed border-l border-[#d4af37]/30 pl-6 md:pl-8"
                    >
                        We are a collective of elite developers and strategists committed to redefining the digital landscape for premium brands globally.
                    </motion.p>
                </motion.div>

                {/* ── Image + Mission/Vision ── */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">

                    {/* Clip-reveal image */}
                    <div ref={imageRef} className="relative h-[600px] rounded-[2rem] overflow-hidden border border-white/8 bg-[#0a0a0a]">
                        <motion.div style={{ scale: imgScale }} className="absolute inset-0">
                            <div className="w-full h-full bg-gradient-to-tr from-[#050505] via-[#111] to-[#1a1a1a]" />
                        </motion.div>
                        {/* Animated scan lines */}
                        <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                            className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"
                        />
                        <motion.div
                            animate={{ y: ['-100%', '100%'] }}
                            transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
                            className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#d4af37]/10 to-transparent z-20"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                                className="w-52 h-52 border border-dashed border-white/5 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                                className="absolute w-32 h-32 border border-dashed border-[#d4af37]/8 rounded-full"
                            />
                        </div>
                    </div>

                    {/* Mission / Vision */}
                    <div className="flex flex-col gap-16">
                        {[
                            { label: 'The Mission', text: 'To empower forward-thinking businesses with high-speed, SEO-driven digital platforms that function as powerful revenue engines, moving far beyond traditional brochure websites.' },
                            { label: 'The Vision', text: 'To become the ultimate digital transformation partner, setting a new global benchmark for aesthetic precision, performance engineering, and measurable ROI.' },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="overflow-hidden mb-6">
                                    <motion.h3
                                        initial={{ y: '100%' }}
                                        whileInView={{ y: '0%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, delay: i * 0.12 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className="text-3xl font-outfit font-medium"
                                    >
                                        {item.label}
                                    </motion.h3>
                                </div>
                                <p className="text-slate-400 font-light leading-relaxed text-lg">{item.text}</p>
                                {i === 0 && (
                                    <motion.div
                                        className="w-full h-px bg-gradient-to-r from-[#d4af37]/30 to-transparent mt-12"
                                        initial={{ scaleX: 0, originX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Stats ── */}
                <div className="mb-40 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 border border-white/8 rounded-3xl overflow-hidden">
                    {[
                        { to: 50, label: 'Platforms Built' },
                        { to: 100, label: 'Client Retention' },
                        { to: 5, label: 'Years Active' },
                    ].map(({ to, label }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-[#050505] p-6 md:p-12 flex flex-col items-center justify-center group hover:bg-[#0c0c0c] transition-colors relative overflow-hidden"
                        >
                            <motion.div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/4 to-transparent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-black mb-2 md:mb-4 relative z-10 text-white">
                                <Counter from={0} to={to} />
                            </span>
                            <span className="text-[9px] md:text-xs tracking-widest text-slate-500 uppercase font-mono relative z-10 text-center">{label}</span>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-[#050505] p-6 md:p-12 flex flex-col items-center justify-center group hover:bg-[#0c0c0c] transition-colors relative overflow-hidden"
                    >
                        <motion.div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/4 to-transparent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-black mb-2 md:mb-4 relative z-10">24/7</span>
                        <span className="text-[9px] md:text-xs tracking-widest text-slate-500 uppercase font-mono relative z-10 text-center">Global Reach</span>
                    </motion.div>
                </div>

                {/* ── Core Values ── */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.01 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-20"
                    >
                        <span className="text-sm font-mono tracking-widest text-slate-500 uppercase block mb-6">Principles</span>
                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-outfit font-light tracking-tight flex gap-3 flex-wrap">
                            <RevealWord word="Core" delay={0.1} />
                            <span className="font-black"><RevealWord word="Values" delay={0.2} /></span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative border-t border-white/10 pt-8"
                            >
                                <motion.div
                                    className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-[#d4af37] to-transparent origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: i * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ width: '100%' }}
                                />
                                <div className="flex justify-between items-end mb-6">
                                    <h3 className="text-2xl md:text-4xl font-outfit font-medium group-hover:text-slate-200 transition-all duration-300 group-hover:translate-x-2">
                                        {v.title}
                                    </h3>
                                    <span className="text-sm font-mono text-slate-700 tracking-widest">{v.number}</span>
                                </div>
                                <p className="text-slate-400 font-light leading-relaxed text-base md:text-lg max-w-md">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
