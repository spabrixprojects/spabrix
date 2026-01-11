'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers, FaHandshake, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutClient() {
    const stats = [
        { label: 'Projects Completed', value: '50+' },
        { label: 'Client Satisfaction', value: '100%' },
        { label: 'Years Experience', value: '5+' },
        { label: 'Support Available', value: '24/7' },
    ];

    const values = [
        {
            icon: FaShieldAlt,
            title: "Integrity",
            desc: "We believe in honest, transparent communication. No hidden fees, no false promises."
        },
        {
            icon: FaLightbulb,
            title: "Innovation",
            desc: "We stay ahead of the curve, using the latest tech (Next.js, AI) to give you a competitive edge."
        },
        {
            icon: FaChartLine,
            title: "Results",
            desc: "Beautiful code is useless if it doesn't sell. We focus on ROI and conversion-driven design."
        },
        {
            icon: FaHandshake,
            title: "Partnership",
            desc: "We are not just vendors; we are your long-term digital growth partners."
        }
    ];

    return (
        <section className="min-h-screen pt-24 pb-20 relative bg-slate-50 overflow-hidden font-sans">

            {/* --- Background Aurora --- */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/80 to-transparent pointer-events-none" />
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Breadcrumbs & Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <Breadcrumbs />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-6 text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
                    >
                        We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-blue-600 to-cyan-500">Spabrix</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-slate-600 max-w-2xl font-medium"
                    >
                        The digital agency that fuses creative design with engineering excellence.
                    </motion.p>
                </div>

                {/* --- Our Story Section --- */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl rotate-2 opacity-10" />
                        <div className="relative bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Born in the heart of Malappuram, Spabrix started with a simple belief:
                                <span className="font-semibold text-slate-800"> businesses in Kerala deserve world-class digital solutions.</span>
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We saw too many generic, slow, and ineffective websites holding great businesses back.
                                So, we built a team of elite developers and strategists to change that. Today, we are proud
                                to be the go-to agency for brands that want to dominate their market.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission & Vision Column */}
                    <div className="flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="p-8 rounded-3xl bg-gradient-to-br from-white to-blue-50/50 border border-slate-200 hover:border-brand/30 transition-colors shadow-lg"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 rounded-full bg-blue-100 text-brand">
                                    <FaRocket className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                To empower businesses with high-speed, SEO-driven websites that function as powerful revenue engines, not just digital brochures.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-8 rounded-3xl bg-gradient-to-br from-white to-cyan-50/50 border border-slate-200 hover:border-cyan-400/30 transition-colors shadow-lg"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 rounded-full bg-cyan-100 text-cyan-600">
                                    <FaLightbulb className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                To be Kerala's #1 digital transformation partner, setting the benchmark for performance, aesthetics, and ROI.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* --- Stats Banner --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-3xl p-10 md:p-14 mb-24 relative overflow-hidden text-center md:text-left"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[80px] rounded-full pointer-events-none" />
                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center md:items-start">
                                <span className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</span>
                                <span className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* --- Core Values --- */}
                <div className="mb-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
                        <div className="w-20 h-1 bg-brand mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <v.icon className="w-10 h-10 text-brand mb-4" />
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{v.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
