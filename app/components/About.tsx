'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers, FaArrowRight } from 'react-icons/fa';

export default function About() {
  const steps = [
    {
      icon: <FaLightbulb className="text-2xl text-white" />,
      title: "Strategy First",
      description: "We dive deep into your goals. Before writing a line of code, we blueprint a strategy that targets your audience and outpaces competitors.",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <FaRocket className="text-2xl text-white" />,
      title: "High-Performance Build",
      description: "Speed matches scale. We engine websites with Next.js and React that load instantly, rank higher on Google, and convert visitors.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaUsers className="text-2xl text-white" />,
      title: "Growth Ecosystem",
      description: "Launch is just day one. We integrate analytics, SEO hooks, and marketing channels to turn your site into a revenue-generating asset.",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50">

      {/* Background Blobs for Atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-brand text-xs font-bold tracking-wider uppercase mb-4"
          >
            The Spabrix Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Why Partner With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
          >
            We bridge the gap between <span className="text-slate-900 border-b-2 border-brand/20">creative design</span> and <span className="text-slate-900 border-b-2 border-brand/20">business logic</span>.
            Spabrix doesn't just deliver files; we deliver results that impact your bottom line.
          </motion.p>
        </div>

        {/* Value Props Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group overflow-hidden"
            >
              {/* Card Gradient Overlay (Hover) */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 mb-6`}>
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-base mb-6">
                  {step.description}
                </p>

                <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-brand transition-colors cursor-pointer">
                  Learn More <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
