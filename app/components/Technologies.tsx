'use client';

import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiFramer,
  SiVercel,
  SiGoogleanalytics
} from 'react-icons/si';

const technologies = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500' },
  { name: 'Vercel', icon: SiVercel, color: 'text-white' },
  { name: 'SEO Tools', icon: SiGoogleanalytics, color: 'text-orange-400' },
];

export default function Technologies() {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-600">
            Technologies We Use
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We use the latest, most secure, and fastest technologies to build websites that rank high and perform perfectly.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-brand/20 transition-all border border-slate-100 group-hover:border-brand/30">
                <div className="text-4xl text-slate-600 group-hover:text-brand transition-colors transform group-hover:scale-110 duration-300">
                  <tech.icon />
                </div>
              </div>
              <span className="text-slate-600 text-sm font-medium group-hover:text-cyan-700 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-cyan-200/20 blur-[100px] pointer-events-none" />
    </section>
  );
}
