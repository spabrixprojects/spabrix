'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPostsData } from '../lib/blogData';
import Breadcrumbs from '../components/Breadcrumbs';

export default function BlogClient() {
    return (
        <section className="relative min-h-screen py-20 bg-slate-50 text-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-12">
                    <Breadcrumbs />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-700"
                        >
                            Spabrix Blog
                        </motion.h1>
                        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
                            Insights on Web Development, SEO, and Digital Growth.
                        </p>
                    </motion.div>
                </div>

                {/* Blog Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPostsData.map((post) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: post.id * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl p-6 flex flex-col border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                        >
                            <Link href={`/blog/${post.slug}`} className="flex flex-col flex-grow">
                                {/* Minimal Tags */}
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {post.tags.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-slate-600 text-sm flex-grow line-clamp-3 mb-6">
                                    {post.excerpt}
                                </p>

                                <span className="text-brand font-semibold group-hover:underline mb-6">
                                    Read More →
                                </span>

                                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        <time>{post.date}</time>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User size={14} />
                                        <span>{post.author}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-200/40 blur-[80px] rounded-full" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200/40 blur-[80px] rounded-full" />
            </div>
        </section>
    );
}
