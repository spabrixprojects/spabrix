'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/919946972210?text=Hello%20Spabrix!"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full border border-[#25D366] animate-[ping_2s_ease-in-out_infinite] opacity-30" />

            <FaWhatsapp size={32} className="relative z-10" />
        </motion.a>
    );
}
