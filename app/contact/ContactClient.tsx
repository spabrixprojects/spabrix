'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

import Breadcrumbs from '../components/Breadcrumbs';

export default function ContactClient() {
    // ... code truncated ...
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

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
        setLoading(false);

        if (result.success) {
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <section
            id="contact"
            className="py-20 px-6 bg-white text-slate-800 flex flex-col items-center justify-center relative overflow-hidden min-h-screen"
        >
            <div className="w-full max-w-6xl mb-8 flex flex-col items-center">
                <Breadcrumbs />
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-700 mb-10"
                >
                    Contact Us
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl w-full grid md:grid-cols-2 gap-14"
            >
                {/* Left Side - Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5"
                >
                    <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-700">
                        Contact Information
                    </h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Get in touch with us for any inquiries, collaborations, or support.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-50 rounded-full">
                                <FaEnvelope className="text-brand w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">Email</h3>
                                <p className="text-slate-600">spabrix@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-50 rounded-full">
                                <FaPhone className="text-brand w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">Phone</h3>
                                <p className="text-slate-600">+91 9946972210</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-50 rounded-full">
                                <FaMapMarkerAlt className="text-brand w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">Location</h3>
                                <p className="text-slate-600">Malappuram, Kerala</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5"
                >
                    <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-700">
                        Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full bg-white border border-slate-200 text-slate-800 py-3 px-4 rounded-lg outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition shadow-sm"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full bg-white border border-slate-200 text-slate-800 py-3 px-4 rounded-lg outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition shadow-sm"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                rows={5}
                                className="w-full bg-white border border-slate-200 text-slate-800 py-3 px-4 rounded-lg outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition shadow-sm"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand to-blue-700 text-white py-3 rounded-lg text-lg font-bold shadow-lg shadow-brand/30 hover:shadow-xl transition disabled:opacity-50"
                        >
                            {loading ? "Sending..." : <> Send Message <FaPaperPlane /> </>}
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
            <ToastContainer position="top-right" autoClose={3000} theme="light" />
        </section>
    );
}
