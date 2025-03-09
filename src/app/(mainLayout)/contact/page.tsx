"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <motion.h1
        className="text-5xl font-extrabold text-white mb-8 tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Lets Connect
      </motion.h1>

      <motion.form
        className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all text-lg font-semibold">
          Send Message
        </button>
      </motion.form>

      <motion.div
        className="flex space-x-6 mt-8 text-white text-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a href="#" className="hover:text-gray-300 transition-all">
          <Facebook />
        </a>
        <a href="#" className="hover:text-gray-300 transition-all">
          <Twitter />
        </a>
        <a href="#" className="hover:text-gray-300 transition-all">
          <Linkedin />
        </a>
        <a href="#" className="hover:text-gray-300 transition-all">
          <Github />
        </a>
      </motion.div>
    </div>
  );
}
