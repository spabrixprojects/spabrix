'use client';

import { motion, useScroll, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
            }
        });
        if (nodeRef.current) observer.observe(nodeRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (inView) {
            const node = nodeRef.current;
            if (node) {
                const controls = animate(from, to, {
                    duration: duration,
                    ease: [0.16, 1, 0.3, 1] as any,
                    onUpdate(value) {
                        node.textContent = value.toFixed(0) + (to === 100 ? '%' : '+');
                    },
                });
                return () => controls.stop();
            }
        }
    }, [from, to, duration, inView]);

    return <span ref={nodeRef}>{from}+</span>;
}

export default function AboutClient() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleLine = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);

    const values = [
        {
            title: "Transparency",
            desc: "Honest, direct communication. No hidden fees, no false promises. Pure engineering.",
            number: "01"
        },
        {
            title: "Innovation",
            desc: "We stay ahead of the curve, utilizing bleeding-edge technology to give you an unfair advantage.",
            number: "02"
        },
        {
            title: "Performance",
            desc: "Beautiful design is obsolete if it doesn't perform. We architect for speed and conversion.",
            number: "03"
        },
        {
            title: "Partnership",
            desc: "We aren't just an agency; we are the strategic digital extension of your business.",
            number: "04"
        }
    ];

    return (
        <section ref={containerRef} className="min-h-screen pt-40 pb-32 relative bg-[#050505] text-white overflow-hidden font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div style={{ y: yHero }} className="flex flex-col mb-40 pt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                        className="inline-flex items-center gap-4 border border-white/10 rounded-full px-6 py-2 mb-10 w-fit bg-white/[0.02]"
                    >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">Our Story</span>
                    </motion.div>

                    <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-outfit font-light tracking-tight leading-[0.85] mb-12">
                        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}>Engineering</motion.div>
                        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }} className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Excellence</motion.div>
                    </h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-base md:text-2xl text-slate-400 font-light max-w-3xl leading-relaxed border-l-2 border-white/20 pl-6 md:pl-8"
                    >
                        We are a collective of elite developers and strategists committed to redefining the digital landscape for premium brands globally.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
                        className="relative h-[600px] rounded-[2rem] overflow-hidden border border-white/10 group"
                    >
                        <div className="absolute inset-0 bg-[#0a0a0a]" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] to-[#1a1a1a] opacity-80" />
                        <motion.div 
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                            className="absolute top-1/3 left-0 w-full h-[1px] bg-white/10"
                        />
                        <motion.div 
                            animate={{ y: ['-100%', '100%'] }}
                            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                            className="absolute top-0 left-1/3 w-[1px] h-full bg-white/10"
                        />
                        
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-64 h-64 border border-white/5 rounded-full border-dashed opacity-50"
                            />
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h3 className="text-4xl font-outfit font-medium mb-6">The Mission</h3>
                            <p className="text-slate-400 font-light leading-relaxed text-xl">
                                To empower forward-thinking businesses with high-speed, SEO-driven digital platforms that function as powerful revenue engines, moving far beyond traditional brochure websites.
                            </p>
                        </motion.div>
                        <motion.div style={{ scaleX: scaleLine, transformOrigin: 'left' }} className="w-full h-[1px] bg-white/20" />
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <h3 className="text-4xl font-outfit font-medium mb-6">The Vision</h3>
                            <p className="text-slate-400 font-light leading-relaxed text-xl">
                                To become the ultimate digital transformation partner, setting a new global benchmark for aesthetic precision, performance engineering, and measurable ROI.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="mb-40 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
                    <div className="bg-[#050505] p-6 md:p-12 flex flex-col items-center justify-center group hover:bg-[#0a0a0a] transition-colors relative overflow-hidden">
                        <motion.div className="absolute inset-0 bg-white/[0.02] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-black mb-2 md:mb-4 relative z-10"><Counter from={0} to={50} /></span>
                        <span className="text-[9px] md:text-xs tracking-widest text-slate-500 uppercase font-mono relative z-10 text-center">Platforms Built</span>
                    </div>
                    <div className="bg-[#050505] p-6 md:p-12 flex flex-col items-center justify-center group hover:bg-[#0a0a0a] transition-colors relative overflow-hidden">
                        <motion.div className="absolute inset-0 bg-white/[0.02] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-black mb-2 md:mb-4 relative z-10"><Counter from={0} to={100} /></span>
                        <span className="text-[9px] md:text-xs tracking-widest text-slate-500 uppercase font-mono relative z-10 text-center">Client Retention</span>
                    </div>
                    <div className="bg-[#050505] p-6 md:p-12 flex flex-col items-center justify-center group hover:bg-[#0a0a0a] transition-colors relative overflow-hidden">
                        <motion.div className="absolute inset-0 bg-white/[0.02] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-black mb-2 md:mb-4 relative z-10"><Counter from={0} to={5} /></span>
                        <span className="text-[9px] md:text-xs tracking-widest text-slate-500 uppercase font-mono relative z-10 text-center">Years Active</span>
                    </div>
                    <div className="bg-[#050505] p-6 md:p-12 flex flex-col items-center justify-center group hover:bg-[#0a0a0a] transition-colors relative overflow-hidden">
                        <motion.div className="absolute inset-0 bg-white/[0.02] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-black mb-2 md:mb-4 relative z-10">24/7</span>
                        <span className="text-[9px] md:text-xs tracking-widest text-slate-500 uppercase font-mono relative z-10 text-center">Global Reach</span>
                    </div>
                </div>

                <div>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <span className="text-sm font-mono tracking-widest text-slate-500 uppercase block mb-6">Principles</span>
                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-outfit font-light tracking-tight">Core <span className="font-bold">Values</span></h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                                className="group relative border-t border-white/20 pt-8"
                            >
                                <motion.div 
                                    className="absolute top-0 left-0 h-[2px] bg-white origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                                />
                                <div className="flex justify-between items-end mb-6">
                                    <h3 className="text-2xl md:text-4xl font-outfit font-medium group-hover:text-slate-300 transition-colors transform group-hover:translate-x-2 duration-300">{v.title}</h3>
                                    <span className="text-sm font-mono text-slate-600 tracking-widest">{v.number}</span>
                                </div>
                                <p className="text-slate-400 font-light leading-relaxed text-base md:text-xl max-w-md">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
