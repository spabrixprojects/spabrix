'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import { blogPostsData } from '../lib/blogData';
import { useRef } from 'react';

const sentence = "Insights on software engineering, technical SEO, and architectural design from our core team of developers and strategists.";

export default function BlogClient() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <section ref={containerRef} className="relative min-h-screen py-40 bg-[#050505] text-white overflow-hidden border-t border-white/5">
            {/* Background Marquee */}
            <div className="absolute top-20 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none overflow-hidden font-outfit font-black text-[15vw] leading-none">
                <motion.div 
                    animate={{ x: [0, -2000] }} 
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                >
                    JOURNAL PERSPECTIVES INSIGHTS JOURNAL PERSPECTIVES
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">

                <motion.div style={{ y: yHero }} className="flex flex-col mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-4 border border-white/10 rounded-full px-6 py-2 mb-10 w-fit bg-white/[0.02] backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">Journal</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-outfit font-light tracking-tight leading-[0.85] mb-12 flex flex-col">
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
                            {"PERSPECTIVES".split('').map((char, index) => (
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
                    </h1>

                    <div className="max-w-2xl flex flex-wrap gap-[6px]">
                        {sentence.split(" ").map((word, index) => (
                            <div key={index} className="overflow-hidden">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 + index * 0.02, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block text-2xl text-slate-400 font-light leading-relaxed"
                                >
                                    {word}
                                </motion.span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/10 pt-20">
                    {blogPostsData.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group flex flex-col relative"
                        >
                            <Link href={`/blog/${post.slug}`} className="flex flex-col flex-grow h-full p-10 bg-white/[0.01] rounded-3xl border border-white/5 overflow-hidden z-10">
                                
                                <motion.div 
                                    className="absolute inset-0 bg-white/[0.03] origin-bottom"
                                    initial={{ scaleY: 0 }}
                                    whileHover={{ scaleY: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                />

                                <div className="mb-8 flex flex-wrap gap-3 relative z-10">
                                    {post.tags.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-mono tracking-widest text-slate-400 uppercase border border-white/10 px-4 py-2 rounded-full backdrop-blur-md bg-black/50 group-hover:border-white/30 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-3xl font-outfit font-medium text-slate-300 mb-6 group-hover:text-white transition-colors relative z-10 origin-left">
                                    {post.title}
                                </h2>

                                <p className="text-slate-500 font-light text-lg flex-grow line-clamp-3 mb-10 relative z-10">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-xs font-mono tracking-widest text-slate-600 uppercase border-t border-white/10 pt-6 mt-auto relative z-10 group-hover:text-slate-400 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <Calendar size={14} />
                                        <time>{post.date}</time>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <User size={14} />
                                        <span>{post.author}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
