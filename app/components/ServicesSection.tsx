'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaSearch, FaPaintBrush, FaShoppingCart, FaChartLine, FaMobileAlt } from 'react-icons/fa';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const services = [
    {
        icon: FaGlobe,
        title: 'Custom Web Development',
        description: 'High-performance websites built with Next.js & React. Fast, secure, and scalable solutions engineered for maximum conversion.',
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-100/50',
        slug: 'web-development',
        colSpan: 'lg:col-span-2',
    },
    {
        icon: FaSearch,
        title: 'SEO Mastery',
        description: 'Dominate search results with data-driven, localized SEO strategies.',
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-100/50',
        slug: 'seo',
        colSpan: 'lg:col-span-1',
    },
    {
        icon: FaPaintBrush,
        title: 'Brand Aesthetics',
        description: 'Memorable brand identities that create a lasting impression and stand out from the competition.',
        iconColor: 'text-purple-600',
        iconBg: 'bg-purple-100/50',
        slug: 'branding',
        colSpan: 'lg:col-span-1',
    },
    {
        icon: FaShoppingCart,
        title: 'E-commerce Solutions',
        description: 'Full-scale online stores with secure payments, inventory management, and an addictive user experience.',
        iconColor: 'text-orange-500',
        iconBg: 'bg-orange-100/50',
        slug: 'ecommerce',
        colSpan: 'lg:col-span-2',
    },
    {
        icon: FaChartLine,
        title: 'Growth Marketing',
        description: 'Data-driven marketing campaigns on Google & Meta that turn clicks into paying customers.',
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-100/50',
        slug: 'digital-marketing',
        colSpan: 'lg:col-span-2',
    },
    {
        icon: FaMobileAlt,
        title: 'Social Media',
        description: 'Strategic content to build an engaged brand presence online.',
        iconColor: 'text-pink-600',
        iconBg: 'bg-pink-100/50',
        slug: 'social-media',
        colSpan: 'lg:col-span-1',
    },
];



export default function ServicesSection() {
    return (
        <section className="py-28 bg-[#FAFAFA] relative overflow-hidden">
            {/* Subtle Gradient Orbs for Light Mode */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/2 opacity-70 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
                
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-brand" />
                        <span className="text-sm font-semibold tracking-wide text-slate-700">Our Expertise</span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-slate-900"
                    >
                        We build digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">masterpieces.</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-slate-600 max-w-2xl text-lg md:text-xl font-medium"
                    >
                        Elevate your brand with bleeding-edge technology, stunning aesthetics, and growth-focused strategies.
                    </motion.p>
                </div>

                {/* Light Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${service.colSpan} h-full`}
                        >
                            <Link href={`/services#${service.slug}`} className="block h-full outline-none focus-visible:ring-4 focus-visible:ring-brand/50 rounded-[2rem]">
                                <div className="h-full bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                                    
                                    {/* Hover gradient sweep */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-8 border border-white/50 shadow-sm group-hover:scale-110 transition-transform duration-500 ease-out`}>
                                            <service.icon className={`w-8 h-8 ${service.iconColor}`} aria-hidden="true" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 text-base leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-brand font-semibold relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>Explore Service</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>


                

                
            </div>
        </section>
    );
}
