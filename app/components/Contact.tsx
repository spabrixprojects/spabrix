'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

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
        toast.success("Message sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
        toast.error("Failed to send message. Please try again.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 md:px-24 bg-[#fdfdfd] text-black border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          <span className="text-brand text-xs font-bold tracking-widest uppercase mb-4 block">READY TO START?</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-[#111]">
            Let's Work<br/>Together.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-md">
            Ready to take your digital presence to the next level? Get in touch with us to discuss your project.
          </p>
          
          <div className="space-y-6">
            <div>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">EMAIL</p>
              <a href="mailto:spabrix@gmail.com" className="text-xl font-medium text-[#111] hover:text-brand transition-colors">spabrix@gmail.com</a>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">PHONE</p>
              <p className="text-xl font-medium text-[#111]">+91 9946972210</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-black/5"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input
                type="text" name="name" value={formData.name} onChange={handleChange} required
                onFocus={() => setFocusedInput('name')} onBlur={() => setFocusedInput(null)}
                className="w-full bg-transparent border-b border-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand transition-colors peer relative z-10 text-black"
                placeholder=" "
              />
              <label className="absolute left-0 top-4 text-gray-500 text-xl font-medium pointer-events-none peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-brand peer-[&:not(:placeholder-shown)]:-translate-y-6 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-brand transition-all duration-300">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email" name="email" value={formData.email} onChange={handleChange} required
                onFocus={() => setFocusedInput('email')} onBlur={() => setFocusedInput(null)}
                className="w-full bg-transparent border-b border-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand transition-colors peer relative z-10 text-black"
                placeholder=" "
              />
              <label className="absolute left-0 top-4 text-gray-500 text-xl font-medium pointer-events-none peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-brand peer-[&:not(:placeholder-shown)]:-translate-y-6 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-brand transition-all duration-300">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message" value={formData.message} onChange={handleChange} required rows={3}
                onFocus={() => setFocusedInput('message')} onBlur={() => setFocusedInput(null)}
                className="w-full bg-transparent border-b border-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand transition-colors peer resize-none relative z-10 text-black"
                placeholder=" "
              />
              <label className="absolute left-0 top-4 text-gray-500 text-xl font-medium pointer-events-none peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-brand peer-[&:not(:placeholder-shown)]:-translate-y-6 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-brand transition-all duration-300">
                Project Details
              </label>
            </div>

            <button disabled={loading} className="group w-full md:w-auto bg-brand hover:bg-[#e64a19] text-white px-8 py-4 rounded-md font-bold text-sm tracking-widest uppercase disabled:opacity-50 mt-8 transition-colors flex items-center justify-center gap-3">
              {loading ? "SENDING..." : "SEND MESSAGE"} 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </form>
        </motion.div>
      </div>
      <ToastContainer position="bottom-right" autoClose={4000} theme="light" hideProgressBar={false} />
    </section>
  );
}
