import UpdateHouseForm from "@/components/modules/landlord/EditHouse";
import { allListings } from "@/services/landlord";
import { Apartment } from "@/types";

const EditPage = async ({
  params,
}: {
  params: Promise<{ listingId: string }>;
}) => {
  const { listingId } = await params;
  const { data } = await allListings();
  const findProduct = data.find((pr: Apartment) => pr._id == listingId);

  return (
    <div className="my-24">
      <UpdateHouseForm id={listingId} house={findProduct} />
    </div>
  );
};

export default EditPage;
