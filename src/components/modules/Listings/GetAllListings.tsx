import { BTable } from "@/components/ui/core/BTable";
import { Apartment } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

import React from "react";

const GetAllListings = ({ houses }: { houses: Apartment[] }) => {
  const columns: ColumnDef<Apartment>[] = [
    {
      accessorKey: "title",
      header: "Title",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold text-black">All House Listing</h1>
      <BTable columns={columns} data={houses} />

      {/* Pass selected user data & control modal state */}
    </div>
  );
};

export default GetAllListings;
