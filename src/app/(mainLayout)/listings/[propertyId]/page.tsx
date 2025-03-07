import PropertyDetails from "@/components/modules/admin/house-listing/PropertyDetails";
import { singProperty } from "@/services/landlord";

const PropertyDetailsPage = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const { propertyId } = await params;
  const property = await singProperty(propertyId);

  return (
    <div className="py-36">
      <PropertyDetails house={property} id={propertyId} />
    </div>
  );
};

export default PropertyDetailsPage;
