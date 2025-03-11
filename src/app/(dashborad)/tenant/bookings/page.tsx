export const dynamic = "force-dynamic";
import Booking from "@/components/modules/tenant/Booking";
import { yourRequest } from "@/services/tenant";

const page = async () => {
  const { data } = await yourRequest();
  console.log(data);
  return (
    <div>
      <Booking booking={data} />
    </div>
  );
};

export default page;
