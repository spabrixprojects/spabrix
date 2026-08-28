import { FaInstagram, FaTwitter, FaDribbble, FaBehance, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#fdfdfd] text-black py-16 px-6 sm:px-12 md:px-24 border-t border-black/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Side: Logo & Socials */}
        <div className="flex flex-col items-start gap-8">
          <div className="text-3xl font-bold flex items-center">
            <Image
              src="/logonew.png"
              alt="Spabrix Logo"
              width={72}
              height={72}
              className="object-contain"
            />
            <span className="-ml-3 text-3xl font-bold tracking-widest text-black">Spabrix</span>
          </div>
          
          <div className="flex items-center gap-4 text-gray-800">
            <a href="https://instagram.com/spabrix" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors"><FaInstagram size={18} /></a>
            <a href="https://twitter.com/spabrix" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors"><FaTwitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors"><FaLinkedinIn size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors"><FaFacebookF size={18} /></a>
      
          </div>
        </div>

        {/* Middle: Menu */}
        <div className="flex flex-col items-start gap-6">
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">MENU</h4>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-lg font-medium text-black hover:text-brand transition-colors">Home</Link>
            <Link href="/about" className="text-lg font-medium text-black hover:text-brand transition-colors">About</Link>
            <Link href="/services" className="text-lg font-medium text-black hover:text-brand transition-colors">Services</Link>
            <Link href="/projects" className="text-lg font-medium text-black hover:text-brand transition-colors">Projects</Link>
          </nav>
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex flex-col items-start md:items-end gap-6 text-right">
          <div>
            <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">START A PROJECT</h4>
            <a href="mailto:hello@spabrix.com" className="text-xl font-medium text-black hover:text-brand transition-colors">hello@spabrix.com</a>
          </div>
          <div>
            <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2 mt-4">PHONE</h4>
            <p className="text-xl font-medium text-black">+91 9946972210</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
        <p suppressHydrationWarning>© {new Date().getFullYear()} Spabrix. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="/terms" className="hover:text-black transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
