"use client";
// import React, { useState } from "react";
import { Property as TProperty } from "@/types"; // Assuming you have a TProperty type defined
import HouseCard from "../admin/house-listing/HouseCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PropertyGrid = ({ data }: { data: TProperty[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pathName = usePathname();

  // Generic function to handle input changes
  const handleInputChange = (field: string, value: string | number) => {
    handleSearchClick(field, value);
  };

  // Handle search button click
  const handleSearchClick = (field: string, value: string | number) => {
    console.log(field, value);
    const params = new URLSearchParams(searchParams.toString());
    params.set(field, value.toString());
    router.push(`${pathName}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="space-y-6">
      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-1">
          <input
            type="text"
            onChange={(e) => handleInputChange("searchTerm", e.target.value)}
            placeholder="Search properties..."
            className="p-3 w-full border rounded"
          />
        </div>

        {/* Bedrooms Filter */}
        <div className="flex flex-col sm:flex-1">
          <input
            type="number"
            onChange={(e) =>
              handleInputChange("bedrooms", Number(e.target.value))
            }
            placeholder="Bedrooms"
            className="p-3 w-full border rounded"
          />
        </div>

        {/* Min Price Filter */}
        <div className="flex flex-col sm:flex-1">
          <input
            type="number"
            onChange={(e) =>
              handleInputChange("minPrice", Number(e.target.value))
            }
            placeholder="Min Price"
            className="p-3 w-full border rounded"
          />
        </div>

        {/* Max Price Filter */}
        <div className="flex flex-col sm:flex-1">
          <input
            type="number"
            onChange={(e) =>
              handleInputChange("maxPrice", Number(e.target.value))
            }
            placeholder="Max Price"
            className="p-3 w-full border rounded"
          />
        </div>

        {/* Search Button */}
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid md:grid-cols-4 gap-3">
        {data.map((item: TProperty, index: number) => (
          <HouseCard property={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
