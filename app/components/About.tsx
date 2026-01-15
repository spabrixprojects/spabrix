'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, Target, Zap, Heart, ArrowRight } from 'lucide-react';

const About = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            },
        },
    };

    const cards = [
        {
            icon: Target,
            title: "Our Mission",
            desc: "To empower businesses with digital solutions that drive real growth and tangible results.",
            color: "bg-blue-50 text-blue-600",
        },
        {
            icon: Zap,
            title: "The Vision",
            desc: "Creating a future where technology and design merge seamlessly to enhance human potential.",
            color: "bg-amber-50 text-amber-600",
        },
        {
            icon: Heart,
            title: "Core Values",
            desc: "Integrity, innovation, and a relentless commitment to excellence in everything we do.",
            color: "bg-rose-50 text-rose-600",
        }
    ];

    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-[10%] -left-[5%] w-[600px] h-[600px] bg-gradient-to-tr from-emerald-50 to-teal-50 rounded-full blur-3xl opacity-60"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold tracking-wide uppercase">
                                <Sparkles size={16} className="text-blue-600" />
                                <span>Our Story</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                                Crafting Digital <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    Experiences
                                </span>
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                We started with a simple idea: to make the web more beautiful and functional. Today, we are a team of passionate creators, developers, and strategists dedicated to helping brands find their voice in the digital noise.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg shadow-slate-200 hover:shadow-xl transition-all flex items-center gap-2 group"
                                >
                                    Read More
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                                {[
                                    { label: "Projects", value: "150+" },
                                    { label: "Clients", value: "80+" },
                                    { label: "Awards", value: "12" },
                                ].map((stat, idx) => (
                                    <div key={idx}>
                                        <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                                        <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Interactive Cards */}
                        <div className="grid grid-cols-1 gap-6">
                            {cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group cursor-default"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className={`p-4 rounded-2xl ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                                            <card.icon size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
