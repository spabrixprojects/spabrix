'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
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
      className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white text-slate-800 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-100/50 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-start relative z-10"
      >
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-brand text-sm font-semibold mb-6 border border-blue-100">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            Let's Build Something <span className="text-brand">Extraordinary</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
            Ready to transform your digital presence? We are here to help you grow.
            Reach out for a free consultation or just to say hello.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-5 group p-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 border border-transparent hover:border-blue-50">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300 border border-blue-50">
                <FaEnvelope className="text-brand w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                <p className="text-slate-600 group-hover:text-brand transition-colors">spabrix@gmail.com</p>
                <p className="text-sm text-slate-400 mt-1">We rely within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group p-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 border border-transparent hover:border-blue-50">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300 border border-blue-50">
                <FaPhone className="text-brand w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                <p className="text-slate-600 group-hover:text-brand transition-colors">+91 9946972210</p>
                <p className="text-sm text-slate-400 mt-1">Mon-Fri from 9am to 6pm</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group p-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 border border-transparent hover:border-blue-50">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300 border border-blue-50">
                <FaMapMarkerAlt className="text-brand w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h3>
                <p className="text-slate-600">Malappuram, Kerala</p>
                <p className="text-sm text-slate-400 mt-1">Serving clients worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25" />
          <div className="relative p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-2xl shadow-blue-500/10">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="block py-3 px-0 w-full text-base text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer transition-colors"
                />
                <label
                  htmlFor="name"
                  className="absolute text-base text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none"
                >
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="block py-3 px-0 w-full text-base text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer transition-colors"
                />
                <label
                  htmlFor="email"
                  className="absolute text-base text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none"
                >
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  rows={4}
                  className="block py-3 px-0 w-full text-base text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer transition-colors resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute text-base text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none"
                >
                  Your Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={loading}
                className="w-full relative overflow-hidden group flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-xl text-lg font-bold shadow-xl shadow-slate-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all disabled:opacity-70 mt-4"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? "Sending..." : <>Send Message <FaPaperPlane className="text-sm" /></>}
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
      <ToastContainer position="bottom-right" autoClose={4000} theme="colored" hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </section>
  );
}
