'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Lock scroll when loading
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Simulate loading time (e.g., 2.5 seconds)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2800);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, [isLoading]);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
                >
                    {/* Background Animated Gradient Orb */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [1, 1.2, 1], opacity: 1 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]"
                    />

                    <div className="relative flex flex-col items-center justify-center z-10">
                        {/* Logo Container */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
                            {/* Spinning Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-20px] rounded-full border-t-2 border-l-2 border-brand/20 border-r-2 border-r-transparent border-b-2 border-b-transparent"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-10px] rounded-full border-b-2 border-r-2 border-cyan-400/30 border-t-2 border-t-transparent border-l-2 border-l-transparent"
                            />

                            {/* Logo Main */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src="/spabrix-logo-new.png"
                                    alt="Spabrix Loading"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Glowing Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="relative"
                        >
                            <h1 className="text-3xl md:text-4xl font-bold font-outfit text-slate-800 tracking-tight">
                                Spabrix
                            </h1>
                            {/* Shimmer Effect on Text */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full skew-x-12"
                            />
                        </motion.div>

                        {/* Loading Bar */}
                        <div className="mt-8 w-48 h-1 bg-slate-100 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand to-cyan-400"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
