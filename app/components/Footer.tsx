import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white py-20 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-2">
            <div className="text-3xl font-bold flex items-center gap-3">
              <Image
                src="/spabrix-logo-new.png"
                alt="Spabrix Digital Agency Logo - Web Design Malappuram"
                width={48}
                height={48}
                className="object-contain filter brightness-0 invert"
              />
              <span className="text-2xl font-bold tracking-widest uppercase">Spabrix</span>
            </div>
            <p className="mt-6 text-slate-400 font-light leading-relaxed max-w-sm">
              We are an independent creative studio operating at the intersection of design, technology, and strategy, crafting premium digital experiences.
            </p>
            
            <div className="flex space-x-4 mt-8">
              {[
                { href: "https://www.facebook.com/spabrix", icon: <FaFacebookF size={18} /> },
                { href: "https://wa.me/919946972210", icon: <FaWhatsapp size={18} /> },
                { href: "https://www.instagram.com/spabrix", icon: <FaInstagram size={18} /> },
                { href: "https://www.linkedin.com/company/spabrix", icon: <FaLinkedinIn size={18} /> },
                { href: "https://youtube.com/@spabrix", icon: <FaYoutube size={18} /> },
                { href: "https://twitter.com/spabrix", icon: <FaTwitter size={18} /> },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-slate-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer Navigation">
            <h4 className="text-sm font-mono tracking-widest text-slate-500 uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["About", "Services", "Projects", "Contact", "Blog", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-white transition-colors font-light text-lg"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-sm font-mono tracking-widest text-slate-500 uppercase mb-6">
              Contact
            </h4>
            <address className="not-italic text-slate-300 space-y-4 font-light text-lg">
              <p>
                <a href="mailto:spabrix@gmail.com" className="hover:text-white transition-colors">
                  spabrix@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+919946972210" className="hover:text-white transition-colors">
                  +91 9946972210
                </a>
              </p>
              <p className="pt-2 text-slate-400">
                Malappuram, Kerala 676505<br />
                India
              </p>
            </address>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm font-light">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Spabrix. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
