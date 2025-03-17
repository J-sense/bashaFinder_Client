"use client";
import { Button } from "@/components/ui/button";
import { PoundSterling, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./herosection.module.css";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [bedrooms, setBedrooms] = useState("Any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const router = useRouter();

  // Function to handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    // Ensure search query is present or any other filter is set
    const query = new URLSearchParams();
    if (searchQuery.trim()) query.append("searchTerm", searchQuery);
    if (bedrooms !== "Any") query.append("bedrooms", bedrooms);
    if (minPrice) query.append("minPrice", minPrice);
    if (maxPrice) query.append("maxPrice", maxPrice);

    // Push query params to the URL
    router.push(`/listings?${query.toString()}`);
  };

  return (
    <div
      className={`${styles.banner} relative border-2 border-white rounded-3xl mt-6 overflow-hidden`}
    >
      <div className="h-[600px] flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-16 lg:px-20 space-y-6 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Agents. Tours. <br className="hidden sm:block" /> Loans. Homes.
        </h1>

        {/* CTA Button */}

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center w-full max-w-3xl bg-white rounded-md overflow-hidden shadow-lg p-3"
        >
          {/* Location Search Input */}
          <input
            type="text"
            placeholder="Search by location..."
            className="px-5 py-3 w-full sm:w-1/3 text-gray-700 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search by location"
          />

          {/* Number of Bedrooms Dropdown */}
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="px-5 py-3 w-full sm:w-1/3 text-gray-700 focus:outline-none mt-4 sm:mt-0"
            aria-label="Select number of bedrooms"
          >
            <option value="Any">Any Bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5+ Bedrooms</option>
          </select>

          {/* Min Price Input */}
          <input
            type="number"
            placeholder="Min Price"
            className="px-5 py-3 w-full sm:w-1/3 text-gray-700 focus:outline-none mt-4 sm:mt-0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            aria-label="Minimum price"
          />

          {/* Max Price Input */}
          <input
            type="number"
            placeholder="Max Price"
            className="px-5 py-3 w-full sm:w-1/3 text-gray-700 focus:outline-none mt-4 sm:mt-0"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            aria-label="Maximum price"
          />

          {/* Search Button */}
          <button
            type="submit"
            className="p-3 sm:mt-0 text-black rounded-full transition duration-300  focus:outline-none sm:w-auto mt-4"
            aria-label="Search button"
          >
            <Search size={24} />
          </button>
        </form>
        <Link href="/house-listing">
          <Button variant="outline" className="bg-blue-400">
            <PoundSterling /> Post Rental House Info
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
