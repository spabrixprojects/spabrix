'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Creative\nSolutions',
    desc: 'Thoughtful ideas that inspire and engage.',
    icon: (
      <svg className="w-8 h-8 stroke-brand stroke-[1.5] fill-none" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Modern\nDevelopment',
    desc: 'Clean, scalable and performance-focused websites.',
    icon: (
      <svg className="w-8 h-8 stroke-brand stroke-[1.5] fill-none" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <path d="M3 9h18M9 21V9" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Design\nExcellence',
    desc: 'Visuals that communicate your brand and connect with your audience.',
    icon: (
      <svg className="w-8 h-8 stroke-brand stroke-[1.5] fill-none" viewBox="0 0 24 24">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Results\nDriven',
    desc: 'Solutions built to grow your brand and deliver measurable impact.',
    icon: (
      <svg className="w-8 h-8 stroke-brand stroke-[1.5] fill-none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function AboutClient() {
  return (
    <section className="bg-[#fdfdfd] text-black py-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 max-w-2xl"
        >
          <span className="text-brand text-xs font-bold tracking-widest uppercase mb-4 block">ABOUT US</span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Ideas. Design.<br/>Technology. <span className="text-brand">Results.</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            At Spabrix, we blend creativity with technology to deliver meaningful digital solutions. From websites that perform to designs that communicate – we bring your ideas to life.
          </p>
        </motion.div>

        {/* Right Side: Features Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-brand/5 flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold leading-tight whitespace-pre-line text-[#111]">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
