'use client';

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactClient() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [focusedInput, setFocusedInput] = useState<string | null>(null);

    const { scrollYProgress } = useScroll();
    const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -1000]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        try {
            const data = new FormData();
            data.append("access_key", "d984a31e-c78c-4009-a732-601b5b6ecc7f");
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("message", formData.message);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Transmission successful.");
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error("Transmission failed. Please try again.");
            }
        } catch {
            toast.error("Transmission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-40 bg-[#050505] text-white relative min-h-screen overflow-hidden border-t border-white/5">
            {/* Background Marquee */}
            <div className="absolute top-20 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none overflow-hidden font-outfit font-black text-[15vw] leading-none">
                <motion.div style={{ x: marqueeX }} className="inline-block">
                    INITIATE CONTACT INITIATE CONTACT INITIATE CONTACT
                </motion.div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="overflow-hidden mb-8">
                            <motion.h2 
                                initial={{ y: 100 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                                className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-outfit font-light tracking-tight leading-[0.9]"
                            >
                                Start a <br/>
                                <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Conversation</span>
                            </motion.h2>
                        </div>
                        <p className="text-base md:text-2xl text-slate-400 font-light mb-12 md:mb-20 max-w-md leading-relaxed">
                            Whether you require a complete digital transformation or strategic technical consultation, we are ready to listen.
                        </p>
                        
                        <div className="space-y-12">
                            <motion.div className="group border-t border-white/10 pt-6" whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                                <h3 className="text-xs font-mono tracking-widest text-slate-600 mb-2 uppercase">Direct Email</h3>
                                <a href="mailto:spabrix@gmail.com" className="text-xl md:text-3xl font-outfit font-light group-hover:text-slate-300 transition-colors break-all">spabrix@gmail.com</a>
                            </motion.div>
                            <motion.div className="group border-t border-white/10 pt-6" whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                                <h3 className="text-xs font-mono tracking-widest text-slate-600 mb-2 uppercase">Headquarters</h3>
                                <p className="text-xl md:text-3xl font-outfit font-light group-hover:text-slate-300 transition-colors">Malappuram, Kerala</p>
                            </motion.div>
                            <motion.div className="group border-t border-white/10 pt-6" whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                                <h3 className="text-xs font-mono tracking-widest text-slate-600 mb-2 uppercase">Direct Line</h3>
                                <p className="text-xl md:text-3xl font-outfit font-light group-hover:text-slate-300 transition-colors">+91 9946972210</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="relative bg-[#0a0a0a] p-6 sm:p-10 md:p-16 rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden group">
                            {/* Form background glow */}
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500"
                                animate={{ opacity: focusedInput ? 1 : 0 }}
                            />

                            <div className="space-y-14 relative z-10">
                                <div className="relative">
                                    <input
                                        type="text" name="name" value={formData.name} onChange={handleChange} required
                                        onFocus={() => setFocusedInput('name')} onBlur={() => setFocusedInput(null)}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-light focus:outline-none transition-colors peer relative z-10"
                                        placeholder=" "
                                    />
                                    <motion.div 
                                        className="absolute bottom-0 left-0 h-[2px] bg-white origin-left z-20"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: focusedInput === 'name' ? 1 : 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        style={{ width: '100%' }}
                                    />
                                    <label className="absolute left-0 top-4 text-slate-500 text-2xl font-light pointer-events-none peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:font-mono peer-focus:tracking-widest peer-focus:uppercase peer-focus:text-white peer-[&:not(:placeholder-shown)]:-translate-y-8 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-mono peer-[&:not(:placeholder-shown)]:tracking-widest peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:text-white transition-all duration-300">
                                        Full Name
                                    </label>
                                </div>

                                <div className="relative">
                                    <input
                                        type="email" name="email" value={formData.email} onChange={handleChange} required
                                        onFocus={() => setFocusedInput('email')} onBlur={() => setFocusedInput(null)}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-light focus:outline-none transition-colors peer relative z-10"
                                        placeholder=" "
                                    />
                                    <motion.div 
                                        className="absolute bottom-0 left-0 h-[2px] bg-white origin-left z-20"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: focusedInput === 'email' ? 1 : 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        style={{ width: '100%' }}
                                    />
                                    <label className="absolute left-0 top-4 text-slate-500 text-2xl font-light pointer-events-none peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:font-mono peer-focus:tracking-widest peer-focus:uppercase peer-focus:text-white peer-[&:not(:placeholder-shown)]:-translate-y-8 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-mono peer-[&:not(:placeholder-shown)]:tracking-widest peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:text-white transition-all duration-300">
                                        Email Address
                                    </label>
                                </div>

                                <div className="relative">
                                    <textarea
                                        name="message" value={formData.message} onChange={handleChange} required rows={3}
                                        onFocus={() => setFocusedInput('message')} onBlur={() => setFocusedInput(null)}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-light focus:outline-none transition-colors peer resize-none relative z-10"
                                        placeholder=" "
                                    />
                                    <motion.div 
                                        className="absolute bottom-0 left-0 h-[2px] bg-white origin-left z-20"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: focusedInput === 'message' ? 1 : 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        style={{ width: '100%' }}
                                    />
                                    <label className="absolute left-0 top-4 text-slate-500 text-2xl font-light pointer-events-none peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:font-mono peer-focus:tracking-widest peer-focus:uppercase peer-focus:text-white peer-[&:not(:placeholder-shown)]:-translate-y-8 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-mono peer-[&:not(:placeholder-shown)]:tracking-widest peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:text-white transition-all duration-300">
                                        Project Details
                                    </label>
                                </div>

                                <button disabled={loading} className="group w-full relative overflow-hidden bg-white text-black px-10 py-6 rounded-full font-medium text-lg disabled:opacity-50 mt-12 flex items-center justify-between">
                                    <motion.div 
                                        className="absolute inset-0 bg-slate-200 origin-bottom"
                                        initial={{ scaleY: 0 }}
                                        whileHover={{ scaleY: 1 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
                                    />
                                    <span className="relative z-10 mix-blend-exclusion text-white">{loading ? "Transmitting..." : "Submit Inquiry"}</span>
                                    <span className="relative z-10 mix-blend-exclusion text-white group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={4000} theme="dark" hideProgressBar={false} />
        </section>
    );
}
