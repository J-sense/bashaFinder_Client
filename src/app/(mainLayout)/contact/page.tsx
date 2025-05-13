"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-30 bg-gray-50 p-6 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Fill out the form
            below or reach out through our social channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                ></textarea>
              </div>

              <Button
                variant="default"
                className="w-full py-6 bg-blue-600 hover:bg-blue-700 transition-all shadow-sm"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm h-full">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mail className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 font-medium">Email</h3>
                    <p className="text-gray-900">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Phone className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 font-medium">Phone</h3>
                    <p className="text-gray-900">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MapPin className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 font-medium">Location</h3>
                    <p className="text-gray-900">
                      123 Business Ave, Suite 500
                      <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-gray-500 font-medium mb-4">Follow us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
                  >
                    <Facebook className="text-gray-700 w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
                  >
                    <Twitter className="text-gray-700 w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
                  >
                    <Linkedin className="text-gray-700 w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
                  >
                    <Github className="text-gray-700 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
