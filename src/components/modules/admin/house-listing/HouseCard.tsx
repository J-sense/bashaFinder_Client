import { Property } from "@/types";
import Image from "next/image";
import Link from "next/link";
import defaultImage from "@/assests/project3.webp";
import { BedDouble, MapPin, Calendar, ArrowRight } from "lucide-react";

const HouseCard = ({ property }: { property: Property }) => {
  if (property.approved !== "approved") return null;

  return (
    <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <Link href={`/listings/${property._id}`} className="cursor-pointer">
        {/* Property Image */}
        <div className="relative h-48 w-full">
          <Image
            src={property.images.length > 0 ? property.images[0] : defaultImage}
            alt={property.title}
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {!property?.available && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Unavailable
            </div>
          )}
        </div>
      </Link>

      <div className="p-5 flex-1 flex flex-col">
        {/* Title and Location */}
        <div className="mb-3">
          <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
            {property.title}
          </h2>
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm line-clamp-1">{property.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Rent & Bedrooms */}
        <div className="flex items-center justify-between mt-auto mb-4">
          <div className="flex items-center">
            <span className="text-lg font-bold text-blue-600">
              {property.rentAmount} BDT
            </span>
            <span className="text-xs text-gray-500 ml-1">/month</span>
          </div>
          <div className="flex items-center text-gray-600">
            <BedDouble className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bedrooms} Beds</span>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center text-gray-500 text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            <span>
              {new Date(property.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

          <Link href={`/listings/${property._id}`}>
            <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              View Details
              <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
