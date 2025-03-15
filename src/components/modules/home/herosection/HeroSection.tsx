"use client";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./herosection.module.css";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Function to handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    if (searchQuery.trim()) {
      router.push(`/listings?searchTerm=${encodeURIComponent(searchQuery)}`);
    }
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
        <Link href="/house-listing">
          <Button variant="outline">Post Rental House Info</Button>
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full max-w-lg bg-white rounded-md overflow-hidden shadow-lg"
        >
          <input
            type="text"
            placeholder="Search properties..."
            className="px-5 py-5 w-full text-gray-700 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 text-black rounded-full transition duration-300"
          >
            <Search size={24} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
