'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#fdfdfd] text-black h-screen overflow-hidden px-6 sm:px-12 md:px-24 flex items-center justify-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/heronewed.webp"
          alt="Spabrix Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute left-10 bottom-20 z-0 opacity-20 pointer-events-none flex gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
      </div>
      <div className="absolute left-10 bottom-24 z-0 opacity-20 pointer-events-none flex gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center pt-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 drop-shadow-md">
        
            <span className="block text-white">We Design & We Develop.</span>
            <span className="block text-brand">We Elevate Brands.</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mb-12 leading-relaxed drop-shadow-md">
            Spabrix is a creative agency helping businesses stand out with modern websites, impactful designs and digital solutions that drive real growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/services"
              className="px-8 py-4 rounded-md bg-brand text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#e64a19] transition-colors flex items-center justify-center gap-2"
            >
              OUR SERVICES
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 16.8V7H7.2"/></svg>
            </Link>
            
            <Link
              href="/projects"
              className="px-8 py-4 rounded-md border-2 border-white text-white font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 drop-shadow-sm"
            >
              VIEW PROJECTS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 16.8V7H7.2"/></svg>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
