/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import defaultImage from "@/assests/project3.webp";
import { Button } from "@/components/ui/button";
import { BedSingle, LandPlot } from "lucide-react";
import { useUser } from "@/components/context/UserContext";
import { toast } from "sonner";
import { rentRequestAction } from "@/services/tenant";

// Default fallback image

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
    console.log(res.errorSource[0].message);
    try {
      if (res?.success) {
        toast.success(res?.message || "Request successful!");
        setIsModalOpen(false);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(res.errorSource[0].message);
      }
    } catch (error) {
      console.log(error);
    }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-slate-100 rounded-lg">
      {/* Image Section */}
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* Image Section */}
        <div className="w-full h-64 relative">
          <Image
            src={
              property.images?.length > 0 ? property.images[0] : defaultImage
            }
            alt={property.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Property Information */}
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-gray-800">{property.title}</h1>
          <p className="text-gray-600 mt-2">{property.description}</p>

          <div className="mt-4">
            <div className="flex gap-2 items-center">
              <p className="text-lg font-semibold text-gray-700">
                Rent: {property.rentAmount} BDT
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <BedSingle size={20} />
              <p className="text-gray-600">Bedrooms: {property.bedrooms}</p>
            </div>
            <div className="flex gap-2">
              <LandPlot size={20} />
              <p className="text-gray-600">Location: {property.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Request Rental Button */}
      <Button
        variant="outline"
        onClick={() => setIsModalOpen(true)}
        className="mt-6 px-6 py-2 font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Request Rental
      </Button>

      {/* Rental Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-semibold text-gray-800">
              Request Rental
            </h2>

            {/* Move-in Date */}
            <label className="block mt-3">
              <span className="text-gray-700">Tenant ID</span>
              <input
                type="text"
                readOnly
                value={user?.user?.userId}
                className="w-full p-2 border rounded-md mt-1"
              />
            </label>
            <label className="block mt-3">
              <span className="text-gray-700">Phone</span>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded-md mt-1"
              />
            </label>
            <label className="block mt-3">
              <span className="text-gray-700">Move-in Date</span>
              <input
                type="date"
                value={moveInDate}
                onChange={(e) => setMoveInDate(e.target.value)}
                className="w-full p-2 border rounded-md mt-1"
              />
            </label>

            {/* Rental Duration */}
            <label className="block mt-3">
              <span className="text-gray-700">Rental Duration (Months)</span>
              <input
                type="number"
                value={rentalDuration}
                onChange={(e) => setRentalDuration(e.target.value)}
                className="w-full p-2 border rounded-md mt-1"
                placeholder="Enter months"
              />
            </label>

            {/* Special Requests */}
            <label className="block mt-3">
              <span className="text-gray-700">Special Requests</span>
              <textarea
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                className="w-full p-2 border rounded-md mt-1"
                placeholder="Enter any special requests"
              ></textarea>
            </label>

            {/* Terms and Conditions */}
            <label className="flex items-center mt-4 text-gray-700 text-sm">
              <input
                type="checkbox"
                className="mr-2"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
              />
              I agree to the{" "}
              <a href="/terms" className="text-blue-600 underline ml-1">
                terms and conditions
              </a>
            </label>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleRequestRental}
                className={`px-4 py-2 rounded-lg ${
                  agreeToTerms
                    ? "bg-blue-600 text-white"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
                disabled={!agreeToTerms}
              >
                {loading ? "submitting" : " Submit Request"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
