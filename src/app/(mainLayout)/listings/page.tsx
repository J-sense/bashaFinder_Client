import ListingPage from "@/components/modules/Listings/ListingPage";
import { AllHouseAction } from "@/services/landlord";
import { Metadata } from "next";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export const metadata: Metadata = {
  title: "BashaFinder | Listing",
  description: "Generated by create next app",
};

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
