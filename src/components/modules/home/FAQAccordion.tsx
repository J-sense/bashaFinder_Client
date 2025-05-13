// components/FAQAccordion.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I search for properties?",
      answer:
        "You can use our search filters to find properties by location, price range, number of bedrooms, and other criteria. Save your favorite listings to review later.",
    },
    {
      question: "What information do I need to provide to book a property?",
      answer:
        "You'll need to provide some basic personal information and payment details. We may also ask for identification to verify your identity, depending on the property requirements.",
    },
    {
      question: "How does the payment process work?",
      answer:
        "Once your booking is accepted, you'll pay the first month's rent through our secure platform. Your payment is held safely until you've moved in and confirmed the property meets your expectations.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Cancellation policies vary by property. You can review the specific cancellation terms before booking. Many properties offer flexible cancellation options.",
    },
    {
      question: "How do I communicate with landlords?",
      answer:
        "Our platform provides a secure messaging system where you can ask questions, discuss details, and arrange viewings with property owners or managers.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our rental process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 h-5 w-5 text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <Link href={"/contact"}>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
