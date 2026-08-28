'use client';

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
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

  const isHomePage = pathname === '/';
  const isDarkText = !isHomePage || scrolled;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Framer Motion variants
  const menuVariants: Variants = {
    closed: { 
        clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
        transition: { type: "spring", stiffness: 400, damping: 40 }
    },
    open: { 
        clipPath: "circle(150% at calc(100% - 3rem) 3rem)",
        transition: { type: "spring", stiffness: 20, restDelta: 2 }
    }
  };

  const staggerVariants: Variants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    closed: { y: 50, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
        className={`fixed z-[100] left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center ${scrolled
          ? 'w-[95%] sm:w-[90%] md:w-[85%] max-w-6xl top-4 rounded-full bg-white/90 backdrop-blur-2xl border border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] py-2 px-8'
          : 'w-full top-0 bg-transparent py-8 px-6 sm:px-12'
          }`}
      >
        <div className="w-full h-full flex justify-between items-center">
          <Link href="/" aria-label="Spabrix Home" className="flex items-center relative z-[10]">
            <div className={`relative transition-all duration-300 ${scrolled ? 'w-14 h-14' : 'w-24 h-24'}`}>
              <Image
                src="/newlogoo.webp"
                alt="Spabrix Logo"
                fill
                className="object-contain"
                priority
                sizes="82px"
              />
            </div>
            <span className={`font-outfit font-bold tracking-widest transition-all duration-300 ${isDarkText ? 'text-black' : 'text-white'} ${scrolled ? 'text-2xl -ml-3' : 'text-3xl -ml-6'}`}>
              spabrix
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
                <span className={`relative z-10 text-xs font-mono tracking-widest uppercase transition-colors duration-300 ${
                  pathname === link.href 
                    ? (isDarkText ? 'text-black font-bold border-b-2 border-brand pb-1' : 'text-white font-bold border-b-2 border-brand pb-1') 
                    : (isDarkText ? 'text-slate-600 hover:text-black' : 'text-slate-300 hover:text-white')
                }`}>
                  {link.name}
                </span>
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="navbar-hover"
                    className={`absolute inset-0 rounded-full ${isDarkText ? 'bg-black/5' : 'bg-white/10'}`}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            

          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-[110] w-12 h-12 rounded-full flex flex-col items-center justify-center gap-[6px] group"
            aria-label="Toggle Navigation"
          >
            <motion.div 
                animate={mobileMenuOpen ? { rotate: 45, y: 8, backgroundColor: "#000" } : { rotate: 0, y: 0, backgroundColor: isDarkText ? "#000" : "#fff" }} 
                className="w-6 h-[2px] origin-center transition-all duration-300"
            />
            <motion.div 
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: isDarkText ? "#000" : "#fff" }} 
                className="w-6 h-[2px] transition-all duration-300"
            />
            <motion.div 
                animate={mobileMenuOpen ? { rotate: -45, y: -8, backgroundColor: "#000" } : { rotate: 0, y: 0, backgroundColor: isDarkText ? "#000" : "#fff" }} 
                className="w-6 h-[2px] origin-center transition-all duration-300"
            />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <motion.div
        initial="closed"
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed inset-0 bg-[#fdfdfd] z-[90] md:hidden flex flex-col justify-center px-8 pointer-events-auto"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/[0.02] to-transparent pointer-events-none" />
        
        <motion.div variants={staggerVariants} className="flex flex-col gap-6 relative z-10">
          {navLinks.map((link, i) => (
            <motion.div key={link.name} variants={itemVariants} className="overflow-hidden">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-3xl sm:text-4xl font-outfit font-bold tracking-tight text-slate-700 hover:text-brand transition-colors"
                >
                  <span className="text-sm font-mono text-black/20 mr-4">0{i + 1}</span>
                  {link.name}
                </Link>
            </motion.div>
          ))}
          

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
