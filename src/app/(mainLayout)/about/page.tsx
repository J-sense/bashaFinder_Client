"use client";

import { motion } from "framer-motion";
import profile from "@/assests/my.jpg";
import {
  Facebook,
  Linkedin,
  MessageCircle,
  Phone,
  Twitter,
  Home,
  Target,
  Users,
  Heart,
} from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Najmul Hassan Jishan",
    role: "Founder & Lead Developer",
    image: profile,
    social: {
      linkedin: "https://www.linkedin.com/in/najmul-hasan-222b43273/",
      twitter: "#",
      facebook: "https://www.facebook.com/mdnajmulhasan.jishan/",
    },
  },
  {
    name: "Najmul Hassan Jishan",
    role: "UI/UX Designer",
    image: profile,
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Najmul Hassan Jishan",
    role: "Backend Engineer",
    image: profile,
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
];

const coreValues = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Housing Solutions",
    description: "Providing accessible housing options for everyone",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Precision Matching",
    description: "Advanced algorithms to find your perfect home",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Focus",
    description: "Building connections between landlords and tenants",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Trust & Safety",
    description: "Verified listings and secure transactions",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600">BashaFinder</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Revolutionizing the way people find rental homes through technology
            and exceptional service.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-10 rounded-3xl shadow-lg"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                <Target className="text-blue-600 dark:text-blue-300 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              At BashaFinder, we&lsquo;re committed to transforming the rental
              housing market by creating a platform that prioritizes
              transparency, efficiency, and user satisfaction. Our mission is to
              eliminate the stress of house hunting through innovative
              technology and personalized service.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-all"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border-4 border-blue-100 dark:border-gray-700"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {member.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">
                {member.role}
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="text-gray-500 hover:text-blue-400"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.social.facebook}
                  className="text-gray-500 hover:text-blue-600"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Ready to find your perfect home?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help you every step of the way. Get in touch
            with us today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a
              href="mailto:contact@bashafinder.com"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" /> contact@bashafinder.com
            </a>
            <a
              href="tel:+8801234567890"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-all"
            >
              <Phone className="w-5 h-5" /> +880 123 456 7890
            </a>
          </div>
          <div className="flex justify-center gap-6 text-white">
            <a
              href="https://www.facebook.com/mdnajmulhasan.jishan/"
              className="hover:text-blue-200 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/najmul-hasan-222b43273/"
              className="hover:text-blue-200 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
