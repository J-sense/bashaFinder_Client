"use client";
// import { BTable } from "@/components/ui/core/BTable";
import { BTable } from "@/components/ui/core/BTable";
import { Apartment } from "@/types/index";
import { ColumnDef } from "@tanstack/react-table";
import img from "@/assests/project3.webp";
import Image from "next/image";
import React from "react";
import { deleteRentalHouse } from "@/services/admin";
import { toast } from "sonner";

const GetAllHouseListing = ({ data }: { data: Apartment[] }) => {
  // Adjust the import path as needed
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteRentalHouse(id);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
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
      accessorKey: "available",
      header: "Available",
      cell: ({ row }) => (
        <span
          className={
            row.original.available
              ? "text-green-500"
              : "text-red-500 text-center"
          }
        >
          {row.original.available ? "Yes" : "No"}
        </span>
      ),
    },
    // {
    //   accessorKey: "landlord",
    //   header: "Landlord ID",
    // },
    {
      accessorKey: "images",
      header: "Images",
      cell: () => (
        <Image
          src={img}
          alt="Apartment"
          className="w-16 h-16 object-cover rounded rounded-full"
          width={30}
          height={30}
        />
      ),
    },
    // {
    //   accessorKey: "createdAt",
    //   header: "Created At",
    //   cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
    // },
    // {
    //   accessorKey: "updatedAt",
    //   header: "Updated At",
    //   cell: ({ row }) => new Date(row.original.updatedAt).toLocaleDateString(),
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
