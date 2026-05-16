'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { useRef, useCallback } from 'react';

type Project = { id: number; title: string; type: string; imageUrl: string; projectUrl: string; };

const projects: Project[] = [
    { id: 1, title: 'Triplora', type: 'Travel Ecosystem', imageUrl: '/pr2.png', projectUrl: 'https://triplora.vercel.app/' },
    { id: 2, title: 'Vistara Interiors', type: 'Digital Showcase', imageUrl: '/pr3.png', projectUrl: 'https://vistarainterior.vercel.app/' },
    { id: 3, title: 'CH Center Ozhukur', type: 'Healthcare Platform', imageUrl: '/pr4.png', projectUrl: 'https://chcenterozhukur.vercel.app/' },
];

const sentence = 'An archive of our most recent engineering and design accomplishments. Every project is a testament to our commitment to aesthetic precision and flawless performance.';

/* ─── Magnetic tilt card ─── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] });

    // Parallax image inside card
    const yImg = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    // Clip reveal driven by scroll
    const clipY = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%']);
    // Scale in
    const scale = useTransform(scrollYProgress, [0, 0.4], [0.92, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    // Mouse 3D tilt
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springRX = useSpring(rotateX, { stiffness: 150, damping: 20 });
    const springRY = useSpring(rotateY, { stiffness: 150, damping: 20 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        rotateY.set(((e.clientX - cx) / rect.width) * 10);
        rotateX.set(-((e.clientY - cy) / rect.height) * 10);
    }, [rotateX, rotateY]);

    const handleMouseLeave = useCallback(() => {
        rotateX.set(0);
        rotateY.set(0);
    }, [rotateX, rotateY]);

    return (
        <motion.a
            ref={cardRef}
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ scale, opacity, rotateX: springRX, rotateY: springRY, perspective: 1000, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group block relative"
        >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/5 mb-8">
                {/* Clip-reveal overlay */}
                <motion.div
                    className="absolute inset-0 z-20 bg-[#050505] origin-bottom"
                    style={{ scaleY: clipY }}
                />
                {/* Parallax image */}
                <motion.div style={{ y: yImg }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-108 opacity-65 group-hover:opacity-100 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        priority={project.id <= 3}
                    />
                </motion.div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                {/* Live label */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-6 right-6 z-30 font-mono text-[10px] tracking-[0.3em] uppercase text-white/80 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
                >
                    Explore Live ↗
                </motion.div>
            </div>

            <div className="flex flex-col relative z-10 px-2">
                <div className="flex justify-between items-center mb-3">
                    <div className="overflow-hidden">
                        <motion.h3
                            className="text-2xl md:text-3xl font-outfit font-medium text-slate-200 group-hover:text-white transition-colors"
                            whileHover={{ x: 8 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {project.title}
                        </motion.h3>
                    </div>
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#d4af37]/60 border border-[#d4af37]/20 rounded-full px-3 py-1">
                        {project.type}
                    </span>
                </div>

                {/* Gold line draw */}
                <div className="relative w-full h-px bg-white/8 overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37]/70 to-transparent origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                </div>
            </div>
        </motion.a>
    );
}

export default function ProjectsClient() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
    const bgTextX = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const orbY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section className="relative py-40 bg-[#050505] text-white min-h-screen overflow-hidden">
            <div ref={containerRef}>
                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

                {/* Orb parallax */}
                <motion.div style={{ y: orbY }} className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_65%)] blur-3xl" />

                {/* Kinetic BG text */}
                <div className="absolute top-32 left-0 w-full whitespace-nowrap opacity-[0.018] pointer-events-none overflow-hidden font-outfit font-black text-[15vw] leading-none">
                    <motion.div style={{ x: bgTextX }} className="inline-block">
                        PORTFOLIO SHOWCASE ARCHIVE PORTFOLIO SHOWCASE ARCHIVE PORTFOLIO
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

                    {/* Header */}
                    <div className="mb-32 pt-10">
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-4 border border-white/10 rounded-full px-6 py-2 mb-8 bg-white/[0.02]"
                        >
                            <motion.span animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#d4af37]" />
                            <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">Selected Work</span>
                        </motion.div>

                        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-outfit font-light tracking-tight leading-[0.85] mb-12 flex flex-col">
                            <div className="overflow-hidden flex">
                                {'DIGITAL'.split('').map((char, i) => (
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
                                {'SHOWCASE'.split('').map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: 120, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true, margin: '-100px' }}
                                        transition={{ duration: 0.9, delay: 0.3 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
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
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-lg md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed border-l border-[#d4af37]/30 pl-6"
                        >
                            {sentence}
                        </motion.p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-20 lg:gap-28 sm:grid-cols-2">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
