'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Smooth spring animation for the progress ring
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-28 right-6 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg text-slate-800 hover:text-brand transition-colors group"
            aria-label="Back to top"
          >
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-slate-200"
                strokeWidth="3"
                fill="none"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-brand"
                strokeWidth="3"
                fill="none"
                style={{ pathLength }}
                strokeLinecap="round"
              />
            </svg>
            <ArrowUp size={20} className="text-slate-600 group-hover:text-brand transition-colors" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 