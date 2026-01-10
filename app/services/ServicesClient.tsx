'use client';

import { motion } from 'framer-motion';
import { FaGlobe, FaLaptopCode, FaBolt, FaPencilRuler } from 'react-icons/fa';

import Breadcrumbs from '../components/Breadcrumbs';

export default function ServicesClient() {
    // ... (services array remains)
    const services = [
        {
            icon: FaGlobe,
            title: 'Custom Web Development',
            description: 'We build scalable, high-performance websites tailored perfectly to your business needs. Using cutting-edge technologies like Next.js, we ensure your site is fast, secure, and ready to scale.',
        },
        {
            icon: FaLaptopCode,
            title: 'Creative Web Design',
            description: 'First impressions matter. We create visually stunning, modern web designs that capture your brand identity and provide an exceptional user experience across all devices.',
        },
        {
            icon: FaPencilRuler,
            title: 'UI / UX Design',
            description: 'We craft intuitive and engaging user interfaces. From wireframing to polished prototypes, our designs focus on usability and driving user engagement.',
        },
        {
            icon: FaBolt,
            title: 'Performance Optimization & SEO',
            description: 'A beautiful site is useless if no one sees it. We optimize your website for lightning-fast load times and implement advanced SEO strategies to boost your ranking on search engines.',
        },
    ];

    return (
        <section
            id="services"
            className="py-20 relative bg-slate-50 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 relative z-10">
                <div className="flex justify-center">
                    <Breadcrumbs />
                </div>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-600 mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        We provide a comprehensive suite of digital solutions designed to elevate your brand. From initial concept to final launch and beyond, we are your partners in digital growth.
                    </p>
                </motion.div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:border-brand/30 transition-all group"
                        >
                            <div className="mb-6 p-4 rounded-full bg-blue-50 w-fit group-hover:bg-brand/10 transition-colors">
                                <service.icon className="w-8 h-8 text-brand" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-brand transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -left-24 top-40 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -right-24 bottom-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
        </section>
    );
}
