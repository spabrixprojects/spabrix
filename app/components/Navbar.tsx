'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Journal', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Framer Motion variants
  const menuVariants = {
    closed: { 
        clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
        transition: { type: "spring", stiffness: 400, damping: 40 }
    },
    open: { 
        clipPath: "circle(150% at calc(100% - 3rem) 3rem)",
        transition: { type: "spring", stiffness: 20, restDelta: 2 }
    }
  };

  const staggerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    closed: { y: 50, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-[100] left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
          ? 'w-[95%] sm:w-[90%] md:w-[85%] max-w-6xl top-6 rounded-full bg-[#0a0a0a]/70 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] py-4 px-8'
          : 'w-full top-0 bg-transparent py-8 px-6 sm:px-12'
          }`}
      >
        <div className="w-full h-full flex justify-between items-center">
          <Link href="/" aria-label="Spabrix Home" className="flex items-center gap-3 relative z-[110]">
            <div className="relative w-8 h-8">
              <Image
                src="/spabrix-logo-new.png"
                alt="Spabrix Logo"
                fill
                className="object-contain filter brightness-0 invert"
                priority
                sizes="32px"
              />
            </div>
            <span className="text-xl font-outfit font-bold tracking-widest text-white">
              SPABRIX
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-6 py-2"
              >
                <span className={`relative z-10 text-xs font-mono tracking-widest uppercase transition-colors duration-300 ${pathname === link.href ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                  {link.name}
                </span>
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            <Link
              href="/contact"
              className="ml-4 px-8 py-3 rounded-full bg-white text-black text-xs font-mono tracking-widest uppercase font-semibold hover:bg-slate-200 hover:scale-105 transition-all duration-300"
            >
              Initiate
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-[110] w-12 h-12 rounded-full flex flex-col items-center justify-center gap-[6px] group"
            aria-label="Toggle Navigation"
          >
            <motion.div 
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
                className="w-6 h-[2px] bg-white origin-center transition-all duration-300"
            />
            <motion.div 
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} 
                className="w-6 h-[2px] bg-white transition-all duration-300"
            />
            <motion.div 
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
                className="w-6 h-[2px] bg-white origin-center transition-all duration-300"
            />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <motion.div
        initial="closed"
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed inset-0 bg-[#050505] z-[90] md:hidden flex flex-col justify-center px-8 pointer-events-auto"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none" />
        
        <motion.div variants={staggerVariants} className="flex flex-col gap-6 relative z-10">
          {navLinks.map((link, i) => (
            <motion.div key={link.name} variants={itemVariants} className="overflow-hidden">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-5xl sm:text-6xl font-outfit font-light tracking-tight text-slate-400 hover:text-white transition-colors"
                >
                  <span className="text-sm font-mono text-white/20 mr-4">0{i + 1}</span>
                  {link.name}
                </Link>
            </motion.div>
          ))}
          
          <motion.div variants={itemVariants} className="mt-12 overflow-hidden">
            <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block px-10 py-5 rounded-full bg-white text-black font-semibold uppercase tracking-widest text-sm"
            >
                Start a Project
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
            variants={itemVariants}
            className="absolute bottom-10 left-8 right-8 flex justify-between items-end border-t border-white/10 pt-6"
        >
            <div className="flex flex-col gap-2 text-slate-500 font-mono text-xs uppercase tracking-widest">
                <span>spabrix@gmail.com</span>
                <span>+91 9946972210</span>
            </div>
            <span className="text-slate-600 font-mono text-xs uppercase tracking-widest">
                © {new Date().getFullYear()}
            </span>
        </motion.div>
      </motion.div>
    </>
  );
}
