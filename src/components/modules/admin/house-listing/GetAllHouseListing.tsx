/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
// import { BTable } from "@/components/ui/core/BTable";
import { BTable } from "@/components/ui/core/BTable";
import { Apartment } from "@/types/index";
import { ColumnDef } from "@tanstack/react-table";
import img from "@/assests/project3.webp";
import Image from "next/image";
import React, { useState } from "react";
import { approvalAction, deleteRentalHouse } from "@/services/admin";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const GetAllHouseListing = ({ data }: { data: Apartment[] }) => {
  const [loading, setLoading] = useState(false);
  // Adjust the import path as needed
  const handleDelete = async (id: string) => {
    try {
      // setLoading(true);
      const res = await deleteRentalHouse(id);

      if (res?.success) {
        toast.success(res?.message);
        // setLoading(true);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = async (id: string) => {
    const approved = "rejected";
    try {
      // setLoading(true);
      const res = await approvalAction(id, approved);

      if (res?.success) {
        toast.success(res?.message);
        // setLoading(true);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const columns: ColumnDef<Apartment>[] = [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "rentAmount",
      header: "Rent (BDT)",
      cell: ({ row }) => `৳${row.original.rentAmount.toLocaleString()}`, // Format with currency symbol
    },
    {
      accessorKey: "bedrooms",
      header: "Bedrooms",
    },
    {
      accessorKey: "approved",
      header: "Approval",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            // onClick={() => handleApprove(row.original._id)}
            disabled={row.original.approved == "rejected"}
            className="px-4 text-center"
          >
            <Badge>{row.original.approved}</Badge>
          </button>
          <button
            className={`px-2 py-1 rounded ${
              row.original.approved === "rejected"
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-500 text-white cursor-pointer"
            }`}
            onClick={() => handleReject(row.original._id)}
            disabled={row.original.approved === "rejected"}
          >
            Click to Reject
          </button>
        </div>
      ),
    },
    // {
    //   accessorKey: "images",
    //   header: "Images",
    //   cell: ({ row }) => (
    //     <Image
    //       src={row.original.images?.[0] || "/default.jpg"} // Use first image or default
    //       alt="Apartment"
    //       className="w-16 h-16 object-cover rounded-full"
    //       width={30}
    //       height={30}
    //     />
    //   ),
    // },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => handleDelete(row.original._id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-black">All House Listing</h1>
      <BTable columns={columns} data={data} />

      {/* Pass selected user data & control modal state */}
    </div>
  );
};

export default GetAllHouseListing;
