'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'Website Design',
    description: 'We design clean, modern websites that reflect your brand and create lasting impressions.',
    icon: (
      <svg className="w-10 h-10 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
        <path d="M6 8h.01M10 8h.01M14 8h.01M2 12h20" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    href: '/services/design'
  },
  {
    title: 'Website Development',
    description: 'We build fast, responsive and scalable websites using the latest technologies with clean code.',
    icon: (
      <svg className="w-10 h-10 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    href: '/services/development'
  },
  {
    title: 'Graphic Design',
    description: 'From logos to marketing materials, we create visuals that communicate your brand message effectively.',
    icon: (
      <svg className="w-10 h-10 stroke-white stroke-[1.5] fill-none" viewBox="0 0 24 24">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 5l4 4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    href: '/services/graphic-design'
  }
];

export default function ServicesClient() {
  return (
    <section className="bg-[#111111] text-white py-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-brand text-xs font-bold tracking-widest uppercase mb-4 block">SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What We Do</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#1a1a1a] border border-white/10 rounded-xl p-8 lg:p-10 hover:border-brand/50 transition-colors group flex flex-col items-start"
            >
              <div className="mb-8">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <Link 
                href={service.href}
                className="text-brand text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-auto"
              >
                EXPLORE <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
