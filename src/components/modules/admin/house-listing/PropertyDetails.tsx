/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import defaultImage from "@/assests/project3.webp";
import { Button } from "@/components/ui/button";
import {
  Bath,
  BedSingle,
  Check,
  Home,
  MapPin,
  Square,
  Star,
} from "lucide-react";
import { useUser } from "@/components/context/UserContext";
import { toast } from "sonner";
import { rentRequestAction } from "@/services/tenant";

const PropertyDetails = ({ house, id }: { house: any; id: string }) => {
  const rentAmount = house?.data.rentAmount;
  console.log(rentAmount);
  const { data: property } = house;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [moveInDate, setMoveInDate] = useState("");
  const [rentalDuration, setRentalDuration] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [phone, setPhone] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const user = useUser();

  const handleRequestRental = async () => {
    setLoading(true);
    if (user?.user?.role !== "tenant") {
      return toast.error("You are not authorized.Please login as a tenant");
    }
    if (!agreeToTerms) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    const rentalData = {
      tenant: user?.user?.userId,
      property: id,
      message: specialRequest,
      moveInDate: moveInDate,
      duration: rentalDuration,
      landlordPhone: phone,
      rentAmount: rentAmount,
    };

    const res = await rentRequestAction(rentalData);

    try {
      if (res?.success) {
        toast.success(res?.message || "Request successful!");
        setIsModalOpen(false);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(res.errorSource[0]?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* Property Card */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Image Gallery */}
        <div className="relative h-72 sm:h-80 md:h-96 w-full">
          <Image
            src={
              property.images?.length > 0 ? property.images[0] : defaultImage
            }
            alt={property.title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full shadow-sm">
            <span className="text-sm font-medium text-gray-800">
              1/{property.images?.length || 1}
            </span>
          </div>
        </div>

        {/* Property Details */}
        <div className="p-6 sm:p-8">
          {/* Title and Price */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {property.title}
            </h1>
            <div className="mt-2 sm:mt-0">
              <span className="inline-block bg-blue-100 text-blue-800 text-xl font-semibold px-4 py-2 rounded-lg">
                {property.rentAmount} BDT/month
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="mt-4 flex items-center">
            <MapPin className="text-gray-500 mr-2" size={18} />
            <p className="text-gray-700">{property.location}</p>
          </div>

          {/* Rating (Static) */}
          <div className="mt-3 flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">4.8 (24 reviews)</span>
          </div>

          {/* Divider */}
          <hr className="my-6 border-gray-200" />

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <BedSingle className="text-gray-700 mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-500">Bedrooms</p>
                <p className="font-medium">{property.bedrooms}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Bath className="text-gray-700 mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-500">Bathrooms</p>
                <p className="font-medium">2</p>
              </div>
            </div>
            <div className="flex items-center">
              <Square className="text-gray-700 mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-500">Area</p>
                <p className="font-medium">1,200 sqft</p>
              </div>
            </div>
            <div className="flex items-center">
              <Home className="text-gray-700 mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium">Apartment</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {property.description ||
                "This beautiful property offers modern living in a prime location. Featuring spacious rooms, high-quality finishes, and excellent natural light throughout. The open-plan living area flows seamlessly to a private balcony with stunning views. Includes secure parking and access to building amenities."}
            </p>
          </div>

          {/* Amenities */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Amenities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Wi-Fi",
                "Air Conditioning",
                "Parking",
                "Laundry",
                "Security",
                "Elevator",
                "Gym",
                "Swimming Pool",
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <Check className="text-green-500 mr-2" size={16} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Availability
              </h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Available From:</span> June 1,
                  2023
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Minimum Stay:</span> 12 months
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Deposit:</span> 2 months rent
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Contact
              </h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Property Manager:</span> John
                  Smith
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> +880 1234 567890
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span>{" "}
                  property@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Request Rental Button */}
      <div className="mt-8 text-center">
        <Button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
          Request Rental
        </Button>
      </div>

      {/* Rental Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/30">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Request Rental
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Tenant ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tenant ID
                </label>
                <input
                  type="text"
                  readOnly
                  value={user?.user?.userId}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500">+1</span>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              {/* Move-in Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Move-in Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                    className="w-full px-1 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none pr-5"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute right-3 top-3 text-gray-400 pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  ></svg>
                </div>
              </div>

              {/* Rental Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rental Duration
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={rentalDuration}
                    onChange={(e) => setRentalDuration(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter months"
                    min="1"
                  />
                  <span className="absolute right-3 top-2.5 text-gray-500 text-sm">
                    months
                  </span>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>
                <textarea
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[100px]"
                  placeholder="Any special requirements or notes..."
                ></textarea>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start pt-2">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                  />
                </div>
                <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                  I agree to the{" "}
                  <a
                    href="/terms"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    terms and conditions
                  </a>
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleRequestRental}
                disabled={!agreeToTerms || loading}
                className={`px-5 py-2.5 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${
                  agreeToTerms
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Submit Request"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
