"use client";
import { Button } from "@/components/ui/button";
import { BTable } from "@/components/ui/core/BTable";
import { updateRentalApproved } from "@/services/landlord";
import { TRentalRequest } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

import React from "react";
import { toast } from "sonner";

const RentalRequest = ({
  rentalHouses,
}: {
  rentalHouses: TRentalRequest[];
}) => {
  const handleApprove = async (data: string) => {
    try {
      const status = "approved";
      const res = await updateRentalApproved(data, status);
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
  const handleReject = async (data: string) => {
    try {
      const status = "rejected";
      const res = await updateRentalApproved(data, status);
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
  const columns: ColumnDef<TRentalRequest>[] = [
    {
      accessorKey: "tenant",
      header: "Tenant ID",
    },
    {
      accessorKey: "landlordPhone",
      header: "Landlord Phone",
    },
    {
      accessorKey: "moveInDate",
      header: "Move-In Date",
      cell: ({ row }) => new Date(row.original.moveInDate).toLocaleDateString(),
    },
    {
      accessorKey: "duration",
      header: "Duration",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Button variant="outline" className="px-4 capitalize">
          {row.original.status}
        </Button>
      ),
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button
            variant="default"
            disabled={row.original.status == "approved"}
            onClick={() => handleApprove(row.original._id)}
          >
            Approve
          </Button>
          <Button
            disabled={row.original.status == "rejected"}
            variant="default"
            onClick={() => handleReject(row.original._id)}
          >
            Reject
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <h1>All Rental Request</h1>
      <BTable columns={columns} data={rentalHouses} />
    </div>
  );
};

export default RentalRequest;
