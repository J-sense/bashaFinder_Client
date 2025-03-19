export const dynamic = "force-dynamic";
import GetAllListings from "@/components/modules/Listings/GetAllListings";
import { allListings } from "@/services/landlord";

const AllListings = async () => {
  const { data } = await allListings();

  return (
    <div className="p-5">
      <GetAllListings houses={data} />
    </div>
  );
};

export default AllListings;
