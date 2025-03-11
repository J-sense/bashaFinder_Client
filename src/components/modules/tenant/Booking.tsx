/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { BTable } from "@/components/ui/core/BTable";
import { TBooking } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

import { PaymentModel } from "./PaymentModel";
import { useState } from "react";

const Booking = ({ booking }: { booking: TBooking[] }) => {
  const [payment, setPayment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModel = (data: any) => {
    setPayment(data);
    setIsModalOpen(true);
  };
  const columns: ColumnDef<TBooking>[] = [
    {
      accessorKey: "property",
      header: "Property ID",
    },
    {
      accessorKey: "duration",
      header: "Duration (months)",
    },
    {
      accessorKey: "moveInDate",
      header: "Move-in Date",
      cell: ({ row }) => new Date(row.original.moveInDate).toLocaleDateString(),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <span
          className={`px-2 py-1 rounded-md text-white ${
            row.original.status === "approved" ? "bg-green-500" : "bg-gray-500"
          }`}
        >
          {row.original.status}
        </span>
      ),
    },
    {
      accessorKey: "landlordPhone",
      header: "Landlord Phone",
      cell: ({ row }) =>
        row.original.status === "approved" ? row.original.landlordPhone : "N/A",
    },
    {
      id: "actions",
      header: "Action",
      cell: ({ row }) =>
        row.original.status === "approved" ? (
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => handleModel(row.original)}
          >
            Make Payment
          </Button>
        ) : (
          <span className="text-gray-400">No Action</span>
        ),
    },
  ];
  return (
    <div>
      <h1>All Rental Request</h1>
      <BTable columns={columns} data={booking} />
      <PaymentModel
        paymentData={payment}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default Booking;
