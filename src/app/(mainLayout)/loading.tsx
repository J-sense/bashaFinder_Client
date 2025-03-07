// components/FancyLoadingPage.tsx
import React from "react";

const FancyLoadingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="text-center">
        <div className="relative">
          {/* Bouncing Circles */}
          <div className="flex justify-center items-center space-x-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-12 h-12 bg-blue-400 rounded-full animate-bounce delay-200"></div>
            <div className="w-12 h-12 bg-blue-300 rounded-full animate-bounce delay-300"></div>
          </div>

          {/* Loading Text */}
          <p className="mt-6 text-2xl font-semibold text-gray-700 animate-pulse">
            Please Wait...
          </p>
        </div>
      </div>
    </div>
  );
};

export default FancyLoadingPage;
