'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const faqItems: FAQItem[] = [
  {
    category: 'General',
    question: 'What is your core expertise?',
    answer: 'We specialize in engineering enterprise-grade digital platforms, utilizing modern stacks like Next.js, combined with high-end editorial UI/UX design and aggressive technical SEO strategies to dominate search engine results.',
  },
  {
    category: 'General',
    question: 'Do you operate strictly within Kerala?',
    answer: 'No. While our headquarters is in Malappuram, our infrastructure and communication protocols allow us to partner seamlessly with global brands and remote enterprises.',
  },
  {
    category: 'Process',
    question: 'What is your project lifecycle?',
    answer: 'Our process is highly structured: Strategic Discovery → Architectural Planning → High-Fidelity Design Prototyping → Full-Stack Engineering → QA & SEO Optimization → Deployment. We do not use templates; everything is bespoke.',
  },
  {
    category: 'Tech',
    question: 'Do you use WordPress?',
    answer: 'We strongly prefer custom engineering using Next.js and React. This guarantees unparalleled speed, impenetrable security, and infinite scalability that traditional monolithic CMS platforms like WordPress simply cannot match.',
  },
  {
    category: 'SEO',
    question: 'What does your SEO process entail?',
    answer: 'We deploy data-driven technical SEO. This involves optimizing Core Web Vitals, structuring semantic HTML, implementing advanced schema markups, and continuous performance analytics to ensure aggressive organic growth.',
  },
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { scrollYProgress } = useScroll();
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-40 bg-[#050505] min-h-screen text-white overflow-hidden border-t border-white/5">
      {/* Background Marquee */}
      <div className="absolute top-40 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none overflow-hidden font-outfit font-black text-[15vw] leading-none">
          <motion.div style={{ x: marqueeX }} className="inline-block">
              INTELLIGENCE INTELLIGENCE INTELLIGENCE INTELLIGENCE
          </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">

        <div className="mb-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-4 border border-white/10 rounded-full px-6 py-2 mb-10 w-fit bg-white/[0.02] backdrop-blur-md"
            >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">Intelligence</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-outfit font-light tracking-tight leading-[0.85] mb-12 flex flex-col">
                <div className="overflow-hidden flex">
                    {"COMMON".split('').map((char, index) => (
                        <motion.span 
                            key={index}
                            initial={{ y: 150, opacity: 0, rotateZ: 10 }}
                            animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                            transition={{ duration: 1, delay: 0.1 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                            className="block text-slate-100"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
                <div className="overflow-hidden flex">
                    {"INQUIRIES".split('').map((char, index) => (
                        <motion.span 
                            key={index}
                            initial={{ y: 150, opacity: 0, rotateZ: 10 }}
                            animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                            transition={{ duration: 1, delay: 0.3 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 via-slate-500 to-neutral-600 italic font-black"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </h1>
            
            <div className="overflow-hidden">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-slate-400 max-w-2xl text-2xl font-light leading-relaxed border-l border-white/20 pl-6"
                >
                    Clarity is key. Below you will find detailed insights into our operational methodology, engineering stacks, and strategic approaches.
                </motion.p>
            </div>
        </div>

        <div className="border-t border-white/10">
            {faqItems.map(({ question, answer }, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div 
                    key={index} 
                    className="border-b border-white/10 group relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: isOpen ? "100%" : "0%" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute bottom-0 left-0 w-full bg-white/[0.02] pointer-events-none" 
                  />
                  <button
                    aria-expanded={isOpen}
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full py-10 cursor-pointer text-left focus:outline-none relative z-10"
                  >
                    <span className={`text-3xl md:text-4xl font-outfit font-light transition-colors duration-500 ${isOpen ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                        {question}
                    </span>
                    <motion.span 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0"
                    >
                      <span className="text-white font-mono text-xl leading-none font-light">
                        {isOpen ? '—' : '+'}
                      </span>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto', paddingBottom: 40 },
                          collapsed: { opacity: 0, height: 0, paddingBottom: 0 },
                        }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden relative z-10"
                      >
                        <p className="text-slate-400 font-light text-xl leading-relaxed max-w-4xl pr-12">
                          {answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
