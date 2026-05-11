'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type Project = {
    id: number;
    title: string;
    type: string;
    imageUrl: string;
    projectUrl: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: 'Triplora',
        type: 'Travel Ecosystem',
        imageUrl: '/pr2.png',
        projectUrl: 'https://triplora.vercel.app/',
    },
    {
        id: 2,
        title: 'Vistara Interiors',
        type: 'Digital Showcase',
        imageUrl: '/pr3.png',
        projectUrl: 'https://vistarainterior.vercel.app/',
    },
    {
        id: 3,
        title: 'CH Center Ozhukur',
        type: 'Healthcare Platform',
        imageUrl: '/pr4.png',
        projectUrl: 'https://chcenterozhukur.vercel.app/',
    },
];

const sentence = "An archive of our most recent engineering and design accomplishments. Every project is a testament to our commitment to aesthetic precision and flawless performance.";

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });
    
    const yImg = useTransform(scrollYProgress, [0, 1], [-40, 40]);

    return (
        <motion.a
            ref={cardRef}
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/5 mb-8">
                <motion.div style={{ y: yImg }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-70 group-hover:opacity-100 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        priority={project.id <= 3}
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="flex flex-col relative z-10 px-4">
                <div className="overflow-hidden">
                    <motion.h3 
                        className="text-3xl font-outfit font-medium text-slate-200 group-hover:text-white transition-colors origin-left"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {project.title}
                    </motion.h3>
                </div>
                
                <div className="relative w-full h-[1px] bg-white/10 my-4 overflow-hidden">
                    <motion.div 
                        className="absolute top-0 left-0 h-full bg-white origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                </div>
                
                <div className="flex justify-between items-center overflow-hidden">
                    <motion.p 
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-slate-500 font-mono text-xs uppercase tracking-widest"
                    >
                        {project.type}
                    </motion.p>
                    <span className="text-sm font-semibold opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Explore Live ↗
                    </span>
                </div>
            </div>
        </motion.a>
    );
}

export default function ProjectsClient() {
    return (
        <section className="relative py-40 bg-[#050505] text-white min-h-screen overflow-hidden">
            {/* Background Marquee */}
            <div className="absolute top-40 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none overflow-hidden font-outfit font-black text-[15vw] leading-none">
                <motion.div 
                    animate={{ x: [0, -2000] }} 
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                >
                    PORTFOLIO SHOWCASE ARCHIVE PORTFOLIO SHOWCASE ARCHIVE
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
                
                <div className="mb-32 pt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-4 border border-white/10 rounded-full px-6 py-2 mb-8 bg-white/[0.02] backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">Selected Work</span>
                    </motion.div>

                    <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-outfit font-light tracking-tight leading-[0.85] mb-12 flex flex-col">
                        <div className="overflow-hidden flex">
                            {"DIGITAL".split('').map((char, index) => (
                                <motion.span 
                                    key={index}
                                    initial={{ y: 150, opacity: 0, rotateZ: 10 }}
                                    animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                                    transition={{ duration: 1, delay: 0.1 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                                    className="block text-slate-100"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                        <div className="overflow-hidden flex">
                            {"SHOWCASE".split('').map((char, index) => (
                                <motion.span 
                                    key={index}
                                    initial={{ y: 150, opacity: 0, rotateZ: 10 }}
                                    animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                                    transition={{ duration: 1, delay: 0.3 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                                    className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 via-slate-500 to-neutral-600 italic font-black"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    </h2>

                    <div className="max-w-2xl flex flex-wrap gap-[6px]">
                        {sentence.split(" ").map((word, index) => (
                            <div key={index} className="overflow-hidden">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 + index * 0.02, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block text-xl text-slate-400 font-light leading-relaxed"
                                >
                                    {word}
                                </motion.span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-16 lg:gap-24 sm:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
