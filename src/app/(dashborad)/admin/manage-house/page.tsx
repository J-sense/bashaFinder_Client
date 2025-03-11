export const dynamic = "force-dynamic";
import GetAllHouseListing from "@/components/modules/admin/house-listing/GetAllHouseListing";
import { getAllHouseAction } from "@/services/admin";

const ManageHouseListing = async () => {
  const { data } = await getAllHouseAction();

  return (
    <div className="p-5">
      <GetAllHouseListing data={data} />
    </div>
  );
};

export default ManageHouseListing;
