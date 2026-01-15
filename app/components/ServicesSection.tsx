'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaSearch, FaPaintBrush, FaShoppingCart, FaChartLine, FaMobileAlt } from 'react-icons/fa';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const services = [
    {
        icon: FaGlobe,
        title: 'Custom Web Development',
        description: 'High-performance websites built with Next.js & React. Fast, secure, and scalable solutions.',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: FaSearch,
        title: 'SEO & Google Ranking',
        description: 'Dominate search results with our proven SEO strategies. Get found by customers in Kerala.',
        color: 'from-emerald-500 to-teal-500',
    },
    {
        icon: FaPaintBrush,
        title: 'Logo & Brand Design',
        description: 'Memorable brand identities that make your business stand out from competition.',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: FaShoppingCart,
        title: 'E-commerce Solutions',
        description: 'Online stores with secure payments, inventory management, and seamless user experience.',
        color: 'from-orange-500 to-red-500',
    },
    {
        icon: FaChartLine,
        title: 'Digital Marketing',
        description: 'Data-driven marketing campaigns on Google, Facebook, and Instagram that convert.',
        color: 'from-indigo-500 to-blue-500',
    },
    {
        icon: FaMobileAlt,
        title: 'Social Media Marketing',
        description: 'Engaging content and strategic posting to build your brand presence online.',
        color: 'from-pink-500 to-rose-500',
    },
];

const testimonials = [
    {
        name: 'Riyaz Enterprises',
        location: 'Malappuram',
        text: 'Spabrix built our e-commerce website and it has transformed our business. Sales increased by 200% in 3 months!',
        rating: 5,
    },
    {
        name: 'Triplora Travel',
        location: 'Calicut',
        text: 'Professional team, excellent communication, and stunning design. Highly recommend for any business.',
        rating: 5,
    },
    {
        name: 'Vistara Interiors',
        location: 'Kochi',
        text: 'Our website ranks on page 1 of Google now! The SEO work Spabrix did was worth every penny.',
        rating: 5,
    },
];

export default function ServicesSection() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute -left-40 top-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
            <div className="absolute -right-40 bottom-20 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-semibold mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Complete Digital Solutions for{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-600">
                            Your Business
                        </span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        From stunning websites to powerful marketing strategies — we provide everything you need to dominate online in Kerala and beyond.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand/30 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <service.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-brand transition-colors group"
                    >
                        View All Services
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="container mx-auto px-4 mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-sm font-semibold mb-4">
                        Client Reviews
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Trusted by Businesses Across{' '}
                        <span className="text-brand">Kerala</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                            <div className="border-t border-slate-100 pt-4">
                                <p className="font-bold text-slate-900">{testimonial.name}</p>
                                <p className="text-sm text-slate-500">{testimonial.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
