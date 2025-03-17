"use client";
import { Button } from "@/components/ui/button";
import { BTable } from "@/components/ui/core/BTable";
import { Apartment } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit2Icon, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const GetAllListings = ({ houses }: { houses: Apartment[] }) => {
  const columns: ColumnDef<Apartment>[] = [
    {
      accessorKey: "_id",
      header: "ID",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "bedrooms",
      header: "Bedrooms",
    },
    {
      accessorKey: "rentAmount",
      header: "Rent Amount",
      cell: ({ row }) => `৳ ${row.original.rentAmount}`,
    },

    {
      accessorKey: "available",
      header: "Available",
      cell: ({ row }) => (
        <Link href={`/landlord/listings/${row.original._id}`}>
          <Button
            className={`${
              row.original.available ? "text-white" : "text-red-500"
            }`}
          >
            Edit <Edit2Icon />
          </Button>
        </Link>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) =>
        new Date(row.original.createdAt).toLocaleDateString("en-US"),
    },

    {
      accessorKey: "images",
      header: "Images",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Image
            src={row.original?.images[0]}
            height={30}
            width={30}
            alt={`image`}
            className="w-10 h-10 object-cover rounded-full"
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-5 items-center">
        <h1 className="text-3xl font-bold text-black">All House Listing</h1>
        <Link href={`/house-listing`}></Link>
        <Button variant="default">
          Add a <House />
        </Button>
      </div>
      <BTable columns={columns} data={houses} />

      {/* Pass selected user data & control modal state */}
    </div>
  );
};

export default GetAllListings;
