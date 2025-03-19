export const dynamic = "force-dynamic";
import RentalRequest from "@/components/modules/landlord/RentalRequest";
import { AllRentalRequestAction } from "@/services/landlord";

const RentalReq = async () => {
  const { data } = await AllRentalRequestAction();

  return (
    <div className="p-5">
      <RentalRequest rentalHouses={data}></RentalRequest>
    </div>
  );
};

export default RentalReq;
