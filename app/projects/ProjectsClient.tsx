'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Project = { id: number; title: string; category: string; imageUrl: string; };

const projects: Project[] = [
  { id: 1, title: 'Glowderma\nSkin Clinic', category: 'Beauty & Skincare Website', imageUrl: '/pr1.png' },
  { id: 2, title: 'Chronix\nWatch', category: 'Product Website', imageUrl: '/pr2.png' },
  { id: 3, title: 'Interio\nStudio', category: 'Interior Design Website', imageUrl: '/pr3.png' },
  { id: 4, title: 'Brewista\nCoffee', category: 'E-commerce Website', imageUrl: '/pr4.png' },
];

export default function ProjectsClient() {
  return (
    <section className="bg-[#fdfdfd] text-black py-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-brand text-xs font-bold tracking-widest uppercase mb-4 block">PROJECTS</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Latest Work</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 md:mt-0"
          >
            <Link 
              href="/projects" 
              className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all hover:text-brand"
            >
              VIEW ALL PROJECTS <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map((project, i) => (
              <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] bg-[#111] min-w-[85vw] sm:min-w-0 shrink-0 snap-center"
            >
              <Image
                src={project.imageUrl}
                alt={project.title.replace('\n', ' ')}
                fill
                className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-sm text-white">
                    {project.title.split('\n')[0].toUpperCase()}
                  </span>
                </div>
                
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-2xl font-bold leading-tight mb-2 whitespace-pre-line">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs tracking-widest uppercase mb-4">
                    {project.category}
                  </p>
                  <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
