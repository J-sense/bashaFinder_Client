export const dynamic = "force-dynamic";
import GetAllUsers from "@/components/modules/admin/GetAllUsers";
import { ViewAllUser } from "@/services/admin";

const page = async () => {
  const { data } = await ViewAllUser();

  return (
    <div className="p-5">
      <GetAllUsers data={data} />
    </div>
  );
};

export default page;
