import Profile from "@/components/modules/admin/profile/Profile";
import { alluser } from "@/services/admin";
import { getCurrentUser } from "@/services/authService";
import { TUser } from "@/types";

const page = async () => {
  const { data } = await alluser();

  const user = await getCurrentUser();

  const findUser = data.find((item: TUser) => item?._id === user?.userId);

  return (
    <div>
      <Profile userInfo={findUser} />
    </div>
  );
};

export default page;
