"use client";
// import React, { useState } from "react";
import styles from "./herosection.module.css";
import { Search } from "lucide-react";
// import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const HeroSection = () => {
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [queryField, setQueryField] = useState("searchTerm");

  //   const router = useRouter();
  //   const pathName = usePathname();

  // Handle the input change
  //   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearchQuery(e.target.value);
  //     router.push(`${pathName}?${queryField}=${searchQuery.toString()}`);
  //   };

  //   // Prevent form submission behavior
  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     console.log("Search Query:", searchQuery, queryField);
  //     // Perform any actions with the searchQuery, like API call or filtering
  //   };

  return (
    <div
      className={`${styles.banner} relative border-2 border-white rounded-3xl mt-6 overflow-hidden`}
    >
      {/* Overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div> */}

      <div className="h-[600px] flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-16 lg:px-20 space-y-6 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Agents. Tours. <br className="hidden sm:block" /> Loans. Homes.
        </h1>

        {/* Search Bar */}
        <form
          //   onSubmit={handleSubmit} // Prevent form submission
          className="flex items-center w-full max-w-lg bg-white rounded-md overflow-hidden shadow-lg"
        >
          <input
            type="text"
            placeholder="Search properties..."
            // value={searchQuery}
            // onChange={handleSearch} // Pass the event here directly
            className="px-5 py-5 w-full text-gray-700 focus:outline-none"
          />
          <Link href={"/house-listing"}>
            <button
              type="submit"
              className="p-3 text-black rounded-full transition duration-300"
            >
              <Search size={24} />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
