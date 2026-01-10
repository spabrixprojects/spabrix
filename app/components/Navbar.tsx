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
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
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
                alt="Spabrix Logo"
                fill
                className="object-contain"
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-brand transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-xs px-6 py-3 rounded-full bg-gradient-to-r from-brand to-blue-600 text-white font-bold shadow-md active:scale-95 transition-transform text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
