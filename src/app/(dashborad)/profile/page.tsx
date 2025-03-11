import Profile from "@/components/modules/admin/profile/Profile";
import { alluser } from "@/services/admin";
import { getCurrentUser } from "@/services/authService";
import { TUser } from "@/types";

const page = async () => {
  const { data } = await alluser();
  console.log(data);
  const user = await getCurrentUser();
  console.log(user.userId);
  const findUser = data.find((item: TUser) => item._id === user.userId);
  console.log(findUser);
  return (
    <div>
      <Profile userInfo={findUser} />
    </div>
  );
};

export default page;
