import UpdateHouseForm from "@/components/modules/landlord/EditHouse";

const EditPage = async ({
  params,
}: {
  params: Promise<{ listingId: string }>;
}) => {
  const { listingId } = await params;
  console.log(listingId);
  return (
    <div className="my-24">
      <UpdateHouseForm id={listingId} />
    </div>
  );
};

export default EditPage;
