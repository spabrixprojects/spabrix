import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="relative bg-slate-50 text-slate-700 py-16 px-6 overflow-hidden border-t border-slate-200">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding */}
          <div>
            <div className="text-3xl font-bold flex items-center gap-3">
              <Image
                src="/spabrix-logo-new.png"
                alt="Spabrix Logo"
                width={64}
                height={64}
                className="object-contain"
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-600">Spabrix</span>
            </div>
            <p className="mt-4 text-slate-500 leading-relaxed max-w-sm">
              Spabrix is a web development and digital marketing agency in Malappuram, Kerala.
              We specialize in creating SEO-friendly websites and online solutions for
              local businesses looking to grow online.
            </p>
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {[
                {
                  href: "https://www.facebook.com/spabrix",
                  icon: <FaFacebookF size={18} />,
                },
                {
                  href: "https://wa.me/919946972210?text=Hello%20Spabrix!",
                  icon: <FaWhatsapp size={18} />,
                },
                {
                  href: "https://www.instagram.com/spabrix",
                  icon: <FaInstagram size={18} />,
                },
                {
                  href: "https://www.linkedin.com/company/spabrix",
                  icon: <FaLinkedinIn size={18} />,
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-brand hover:to-blue-600 hover:shadow-lg hover:shadow-brand/30 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-slate-800">
              Quick Links
            </h4>
            <ul className="space-y-3 text-slate-600">
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-brand transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-slate-800">
              Contact
            </h4>
            <p className="text-slate-600 mb-2">
              Email:{" "}
              <a
                href="mailto:spabrix@gmail.com"
                className="text-slate-700 hover:text-brand hover:underline font-medium"
              >
                spabrix@gmail.com
              </a>
            </p>
            <p className="text-slate-600">
              Phone:{" "}
              <a
                href="tel:9946972210"
                className="text-slate-700 hover:text-brand hover:underline font-medium"
              >
                +91 9946972210
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-slate-200 text-center text-slate-500 text-sm">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Spabrix. All rights reserved.</p>
          <div className="mt-3 flex justify-center space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-brand transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
