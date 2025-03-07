import HouseCard from "@/components/modules/admin/house-listing/HouseCard";
import { AllHouseAction } from "@/services/landlord";
import { Property } from "@/types";

const listings = async () => {
  const { data } = await AllHouseAction();
  console.log(data);
  return (
    <div className="container mx-auto py-40">
      <div className="grid md:grid-cols-4 gap-3">
        {data.map((item: Property, index: number) => (
          <HouseCard property={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default listings;
