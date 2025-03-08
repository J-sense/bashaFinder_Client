"use client";
import { Button } from "@/components/ui/button";
import { BTable } from "@/components/ui/core/BTable";
import { TBooking } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

const Booking = ({ booking }: { booking: TBooking[] }) => {
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
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
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
    </div>
  );
};

export default Booking;
