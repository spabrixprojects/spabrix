'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  X,
  Menu, // Corrected import
  Info,
  Code,
  Briefcase,
  Phone,
  BookOpen,
  HelpCircle
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll logic remains similar if needed, or simplified
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Define navLinks locally to match usage
  const navLinks = [
    { name: 'About', href: '/about', icon: Info },
    { name: 'Services', href: '/services', icon: Code },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
  ];

  const scrollToContact = () => {
    // Basic scroll logic if on home, or navigate to contact
    if (pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If not on home, Link to contact will handle it
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm py-3'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" aria-label="Spabrix Home" className="flex items-center  group">
              <div className="relative w-14 h-14">
                <Image
                  src="/spabrix-logo-new.png"
                  alt="Spabrix Digital Agency Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="56px"
                />
              </div>
              <span className={`text-2xl font-bold bg-clip-text text-transparent bg-blue-600 leading-none ${scrolled ? 'opacity-100' : 'opacity-90'}`}>
                Spabrix
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-brand relative group ${scrolled ? 'text-slate-700' : 'text-slate-800'
                    }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full" />
                </Link>
              ))}
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand to-blue-600 text-white font-semibold shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-105 transition-all active:scale-95"
              >
                Get Started
              </Link>
            </div>


            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-slate-900 hover:bg-white/20'}`}
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-[100dvh] w-[80%] max-w-sm bg-white/60 backdrop-blur-3xl border-l border-white/40 shadow-2xl z-[60] md:hidden flex flex-col"
            >
              <div className="p-6 flex flex-col h-full overflow-hidden">
                <div className="flex justify-end mb-8 shrink-0">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-full bg-white/40 border border-white/50 hover:bg-white/60 transition-colors shadow-sm"
                    aria-label="Close Menu"
                  >
                    <X size={24} className="text-slate-800" />
                  </button>
                </div>

                <div className="flex flex-col space-y-4 overflow-y-auto flex-1 no-scrollbar pb-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/40 transition-all duration-300 border border-transparent hover:border-white/40"
                    >
                      <div className="p-3 rounded-xl bg-white/50 text-slate-700 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <link.icon size={20} />
                      </div>
                      <span className="text-lg font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="pt-6 mt-auto border-t border-slate-200/50 shrink-0">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all text-center text-lg hover:shadow-blue-500/40"
                  >
                    Get Started
                  </Link>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-slate-500 font-medium">
                      © {new Date().getFullYear()} Spabrix Agency
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
