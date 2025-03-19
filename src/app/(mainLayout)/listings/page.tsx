import ListingPage from "@/components/modules/Listings/ListingPage";
import { AllHouseAction } from "@/services/landlord";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const listings = async ({ searchParams }: { searchParams: SearchParams }) => {
  const query = await searchParams;

  const { data } = await AllHouseAction(query);

  return (
    <div className="container mx-auto py-40">
      <ListingPage data={data} />
    </div>
  );
};

export default listings;
