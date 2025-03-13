"use client";

import { motion } from "framer-motion";
import profile from "@/assests/my.jpg";
import {
  Facebook,
  Linkedin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
// import {
//   FaFacebook,
//   FaLinkedin,
//   FaTwitter,
//   FaEnvelope,
//   FaPhone,
// } from "react-icons/fa";

const teamMembers = [
  {
    name: "Najmul Hassan Jishan",
    role: "Founder & Lead Developer",
    image: profile,
  },
  {
    name: "Najmul Hassan Jishan",
    role: "UI/UX Designer",
    image: profile,
  },
  {
    name: "Najmul Hassan Jishan",
    role: "Backend Engineer",
    image: profile,
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-32">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          About BashaFinder
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Your trusted partner in finding the perfect rental home effortlessly.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-12 bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Our Mission
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          BashaFinder is dedicated to simplifying the home rental process. Our
          goal is to create a seamless, tech-driven platform that connects
          renters with their ideal homes while ensuring transparency,
          affordability, and reliability.
        </p>
      </motion.div>

      {/* Team Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
          Meet Our Team
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-20 h-20 mx-auto rounded-full"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center"
      >
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Have questions? Reach out to us anytime.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <a
            href="mailto:jishan1873@gmail.com"
            className="flex items-center gap-2 text-gray-700 dark:text-white"
          >
            <MessageCircle className="text-xl" /> contact@bashafinder.com
          </a>
          <a
            href="tel:+8801405438389"
            className="flex items-center gap-2 text-gray-700 dark:text-white"
          >
            <Phone className="text-xl" /> +880 123 456 7890
          </a>
        </div>
        <div className="mt-6 flex justify-center gap-6 text-gray-700 dark:text-white text-2xl">
          <a
            href="https://www.facebook.com/mdnajmulhasan.jishan/"
            className="hover:text-blue-600"
          >
            <Facebook />
          </a>
          <a
            href="https://www.facebook.com/mdnajmulhasan.jishan/"
            className="hover:text-blue-400"
          >
            <Twitter />
          </a>
          <a
            href="https://www.linkedin.com/in/najmul-hasan-222b43273/"
            className="hover:text-blue-700"
          >
            <Linkedin />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
