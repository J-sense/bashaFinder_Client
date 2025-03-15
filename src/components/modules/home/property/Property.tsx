import { MoveRight } from "lucide-react";
import HouseCard from "../../admin/house-listing/HouseCard";
import { Property as Tproperty } from "@/types";

const Property = ({ houses }: { houses: Tproperty[] }) => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Heading Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg md:text-xl font-bold text-black">
          Popular Owner Properties
        </h1>
        <h3 className="flex items-center gap-2 text-red-700 cursor-pointer hover:underline">
          View more <MoveRight size={20} />
        </h3>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {houses?.slice(0, 4).map((house, index) => (
          <HouseCard property={house} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Property;
