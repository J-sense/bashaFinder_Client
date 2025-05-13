// components/RentalProcess.js
"use client";
import { motion } from "framer-motion";

const RentalProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Pick a few places",
      description:
        "Explore hundreds of high-quality rooms, studios, and apartments. Save favorites. Get alerts. Finding your dream home could not be easier.",
    },
    {
      number: "2",
      title: "Message the landlord",
      description:
        "Enjoy an online, private space for all conversations with the landlord. Ask questions, share information, and see how well you both match.",
    },
    {
      number: "3",
      title: "Send a booking request",
      description:
        "Like a place and want to call it home? Send the landlord a booking request. You'll know if it's accepted or not within 48 hours.",
    },
    {
      number: "4",
      title: "Pay, and it's yours",
      description:
        "Pay the first month's rent to confirm your booking. Congratulations, you found your next home. We'll protect your money until you've moved in and checked the place out.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            It&lsquo;s quick. All online. 100% safe.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process makes finding and securing your perfect
            home effortless and secure.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 group"
            >
              <div className="flex flex-col h-full">
                {/* Number Indicator */}
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  <span className="text-white text-xl font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 flex-grow">{step.description}</p>

                {/* Decorative line */}
                <div className="mt-6 pt-6 border-t border-gray-200 relative">
                  <div className="absolute -top-3 left-0 w-8 h-1.5 bg-blue-600 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RentalProcess;
