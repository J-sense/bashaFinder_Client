import { Property } from "@/types";
import Image from "next/image";
import React from "react";
import defaultImage from "@/assests/project3.webp";
import Link from "next/link";

const HouseCard = ({ property }: { property: Property }) => {
  // ✅ Show card only if property is approved
  if (property.approved !== "approved") return null;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer">
      <Link href={`/listings/${property._id}`} className="cursor-pointer">
        {/* Property Image */}
        <div className="relative">
          <Image
            src={property.images.length > 0 ? property.images[0] : defaultImage}
            alt={property.title}
            className="w-full h-48 object-cover rounded-t"
            height={192}
            width={192}
          />
          {!property?.available && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Unavailable
            </div>
          )}
        </div>
      </Link>

      <div className="px-6 py-4">
        {/* Title and Location */}
        <h2 className="text-xl font-semibold text-gray-800">
          {property.title}
        </h2>
        <p className="text-gray-600">{property.location}</p>

        {/* Description */}
        <p className="text-gray-500 mt-2">{property.description}</p>

        {/* Rent & Bedrooms */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-medium text-gray-700">
            {property.rentAmount} BDT
          </p>
          <p className="text-sm text-gray-500">{property.bedrooms} Bedrooms</p>
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-100 rounded-b flex justify-between items-center">
        {/* Posted Date */}
        <p className="text-sm text-gray-400">
          Posted on: {new Date(property.createdAt).toLocaleDateString()}
        </p>

        {/* View Details Button */}
        <Link href={`/listings/${property._id}`}>
          <button className="text-gray-700 border border-gray-400 px-4 py-2 text-sm rounded-md transition hover:bg-gray-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HouseCard;
