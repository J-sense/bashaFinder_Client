// components/FeedbackSection.js
"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, PanInfo } from "framer-motion";

const FeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const feedbacks = [
    {
      name: "Sarah Johnson",
      text: "The service was exceptional! The team went above and beyond to meet our needs and delivered ahead of schedule.",
    },
    {
      name: "Michael Chen",
      text: "Impressed with the attention to detail and professional approach. Will definitely work with them again.",
    },
    {
      name: "Emma Rodriguez",
      text: "Great communication throughout the project. They understood our vision perfectly and executed flawlessly.",
    },
    {
      name: "David Kim",
      text: "Reliable and high-quality work. The results exceeded our expectations in every way.",
    },
    {
      name: "Lisa Patel",
      text: "A pleasure to work with. Responsive, creative, and delivered exactly what we needed.",
    },
  ];

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 50) {
      // Swiped right
      setCurrentIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
    } else if (info.offset.x < -50) {
      // Swiped left
      setCurrentIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 px-4 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          What Our Clients Say
        </h2>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{
                  x: `-${currentIndex * 100}%`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {feedbacks.map((feedback, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                      <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg italic">
                        &ldquo;{feedback.text}&ldquo;
                      </p>
                      <p className="font-semibold text-gray-800">
                        - {feedback.name}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous feedback"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next feedback"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to feedback ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{ x }}
            className="flex cursor-grab active:cursor-grabbing"
          >
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={index}
                className="w-full flex-shrink-0 px-2"
                animate={{
                  scale: currentIndex === index ? 1 : 0.95,
                  opacity: currentIndex === index ? 1 : 0.7,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <p className="text-gray-600 mb-4 text-sm italic">
                    &ldquo;{feedback.text}&ldquo;
                  </p>
                  <p className="font-semibold text-gray-800 text-sm">
                    - {feedback.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-4 space-x-1.5">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to feedback ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile navigation buttons (optional) */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous feedback"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next feedback"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
