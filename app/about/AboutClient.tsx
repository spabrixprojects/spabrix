'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';

import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutClient() {
    const stats = [
        { icon: FaRocket, label: 'Projects Completed', value: '20+' },
        { icon: FaLightbulb, label: 'Years Experience', value: '2+' },
        { icon: FaUsers, label: 'Happy Clients', value: '98+' },
    ];

    const process = [
        { title: 'Discovery', text: 'We understand your goals, target audience, and brand through research and discussion.' },
        { title: 'Design', text: 'We create clean, user-friendly designs that reflect your brand and engage users.' },
        { title: 'Development', text: 'Our team builds fast, responsive, and functional websites using the latest technologies.' },
        { title: 'Deployment', text: 'We launch your website, handle setup, and provide ongoing support.' },
    ];

    return (
        <section
            id="about"
            className="py-20 relative bg-slate-50 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
                <div className="flex justify-center">
                    <Breadcrumbs />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-700 mb-6"
                        >
                            Why Choose Spabrix?
                        </motion.h1>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            At Spabrix, we craft websites and digital experiences that help your business grow. We are a team of passionate developers and marketers in Malappuram dedicated to your success.
                            <br /><br />
                            Our process is smooth, transparent, and future-ready — we don’t just build websites, we create comprehensive digital solutions that strengthen your brand and drive real business results.
                        </p>

                        {/* Process Steps */}
                        <div className="space-y-5 mb-10">
                            {process.map((step, i) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                    className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10 transition"
                                >
                                    <h2 className="text-lg font-bold text-slate-800 mb-1">{step.title}</h2>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mission & Vision - Updated to White Cards */}
                        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 mb-20">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5 hover:shadow-2xl transition-all"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-blue-50 rounded-full">
                                        <FaRocket className="text-brand w-8 h-8" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    To empower businesses of all sizes in Malappuram and beyond with robust, meaningful digital presences. We strive to bridge the gap between technology and business growth through innovative web solutions.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5 hover:shadow-2xl transition-all"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-blue-50 rounded-full">
                                        <FaLightbulb className="text-brand w-8 h-8" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800">Our Vision</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    To be the most trusted and results-driven web development agency in Kerala, known for our commitment to quality, creativity, and client success.
                                </p>
                            </motion.div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            {stats.map(({ icon: Icon, label, value }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:scale-105 transition-transform"
                                >
                                    <Icon className="w-8 h-8 mb-3 text-brand" />
                                    <div className="text-2xl font-bold text-slate-900">{value}</div>
                                    <div className="text-sm text-slate-500">{label}</div>
                                </motion.div>

                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content - Vision + Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col items-center"
                    >
                        <div className="rounded-2xl p-[1px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-8 w-full max-w-md">
                            <div className="w-full h-full rounded-2xl bg-white p-10 flex flex-col items-center justify-center text-center shadow-lg">
                                <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-700">
                                    Meet The Team
                                </h2>
                                <p className="text-slate-600 leading-relaxed">
                                    To be the leading force in creating digital experiences that inspire,
                                    innovate, and deliver exceptional value to our clients.
                                </p>
                            </div>
                        </div>

                        {/* Interactive Image */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ type: 'spring', stiffness: 150 }}
                            className="rounded-3xl overflow-hidden shadow-xl cursor-pointer"
                            style={{ perspective: 800 }}
                        >
                            <Image
                                src="/aboutfoze.png" // Replace with your image path
                                alt="Spabrix team or office"
                                width={400}
                                height={300}
                                className="rounded-3xl object-cover"
                                draggable={false}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-200/40 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full pointer-events-none" />
        </section>
    );
}
