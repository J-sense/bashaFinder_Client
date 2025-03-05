import GetAllUsers from "@/components/modules/admin/GetAllUsers";
import { ViewAllUser } from "@/services/admin";

const page = async () => {
  const { date } = await ViewAllUser();
  console.log(date);
  return (
    <div className="p-5">
      <GetAllUsers data={date} />
    </div>
  );
};

export default page;
