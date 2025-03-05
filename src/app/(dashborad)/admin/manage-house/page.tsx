import GetAllHouseListing from "@/components/modules/admin/house-listing/GetAllHouseListing";
import { getAllHouseAction } from "@/services/admin";
import React from "react";

const ManageHouseListing = async () => {
  const { date } = await getAllHouseAction();

  return (
    <div className="p-5">
      <GetAllHouseListing data={date} />
    </div>
  );
};

export default ManageHouseListing;
