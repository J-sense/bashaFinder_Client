import RentalRequest from "@/components/modules/landlord/RentalRequest";
import { AllRentalRequestAction } from "@/services/landlord";

const RentalReq = async () => {
  const { data } = await AllRentalRequestAction();
  console.log(data);
  return (
    <div className="p-5">
      <RentalRequest rentalHouses={data}></RentalRequest>
    </div>
  );
};

export default RentalReq;
