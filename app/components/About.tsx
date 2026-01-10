'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers, FaCheckCircle, FaHospital, FaPlane, FaHome, FaShoppingCart, FaHotel, FaGraduationCap, FaBuilding } from 'react-icons/fa';

export default function About() {
  const steps = [
    {
      icon: <FaLightbulb className="text-3xl text-cyan-500" />,
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and competitors to craft a data-driven strategy."
    },
    {
      icon: <FaRocket className="text-3xl text-blue-500" />,
      title: "Design & Development",
      description: "Our team builds high-performance, mobile-first websites using the latest tech stack (Next.js, React) for speed and SEO."
    },
    {
      icon: <FaUsers className="text-3xl text-indigo-500" />,
      title: "Growth & Optimization",
      description: "We don't just launch; we optimize. From SEO to social media integration, we ensure your digital presence drives revenue."
    }
  ];

  const industries = [
    { name: "Healthcare & Clinics", icon: <FaHospital /> },
    { name: "Travel Agencies", icon: <FaPlane /> },
    { name: "Real Estate", icon: <FaHome /> },
    { name: "E-commerce", icon: <FaShoppingCart /> },
    { name: "Stay & Resort", icon: <FaHotel /> },
    { name: "Educational Inst.", icon: <FaGraduationCap /> },
    { name: "Construction", icon: <FaBuilding /> },
  ];

  return (
    <section id="about" className="py-20 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-700"
          >
            Why Choose Spabrix?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed"
          >
            We are not just a web design agency; we are your digital growth partners.
            Unlike generic template providers, Spabrix delivers <strong>custom-coded, ultra-fast, and SEO-optimized solutions</strong> tailored for the Kerala market.
            We combine technical excellence with marketing insights to turn your website into a customer magnet.
          </motion.p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-700 font-medium hover:text-cyan-600 hover:border-cyan-500/50 transition-colors cursor-default"
              >
                <span className="text-cyan-500">{industry.icon}</span>
                {industry.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "100%", label: "Satisfaction" },
            { number: "24/7", label: "Support" },
            { number: "5+", label: "Years Exp." }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
