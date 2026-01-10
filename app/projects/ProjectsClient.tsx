'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Breadcrumbs from '../components/Breadcrumbs';

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
        type: 'Travel Agency Website',
        imageUrl: '/pr2.png',
        projectUrl: 'https://triplora.vercel.app/',
    },
    {
        id: 2,
        title: 'Vistara Interiors',
        type: 'Interior Design Website',
        imageUrl: '/pr3.png',
        projectUrl: 'https://vistarainterior.vercel.app/',
    },
    {
        id: 3,
        title: 'CH Center Ozhukur',
        type: 'Clinic & Medical Website',
        imageUrl: '/pr4.png',
        projectUrl: 'https://chcenterozhukur.vercel.app/',
    },
];

export default function ProjectsClient() {
    return (
        <section
            id="projects"
            className="relative py-20 bg-slate-50 min-h-screen"
            aria-label="Website Projects"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
                <div className="flex justify-center">
                    <Breadcrumbs />
                </div>

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-700 mb-6"
                    >
                        Recent Website Projects
                    </motion.h1>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Explore a showcase of our recent work. Each project represents our commitment to quality, performance, and user-centric design. From travel agencies to healthcare providers, we build solutions that deliver real results.
                    </p>
                </motion.div>

                {/* Project Cards */}
                <motion.div
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                >
                    {projects.map(({ id, title, type, imageUrl, projectUrl }) => (
                        <motion.a
                            key={id}
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-cyan-500/30"
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            {/* Image container */}
                            <div className="relative w-full h-[220px] overflow-hidden">
                                <Image
                                    src={imageUrl}
                                    alt={title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    priority={id <= 3}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-brand transition-colors">
                                    {title}
                                </h3>
                                <p className="text-slate-500 text-sm mt-2">{type}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -top-40 -left-20 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-36 -right-20 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full pointer-events-none" />
        </section>
    );
}
