"use client";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-green-600 mb-4">Success!</h1>
        <p className="text-gray-600 text-lg">
          Your operation was successful. Everything went smoothly.
        </p>

        <div className="mt-6">
          <Link href="/">
            <a className="text-white bg-green-500 hover:bg-green-600 py-2 px-6 rounded-md shadow-md transition duration-300">
              Go to Dashboard
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
