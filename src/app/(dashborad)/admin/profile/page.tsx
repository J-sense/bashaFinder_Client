import Profile from "@/components/modules/admin/profile/Profile";
import { ViewAllUser } from "@/services/admin";
import { getCurrentUser } from "@/services/authService";
import { TUser } from "@/types";

const AdminProfile = async () => {
  const { date } = await ViewAllUser();
  const user = await getCurrentUser();
  console.log(user.userId);
  const findUser = date.find((item: TUser) => item._id === user.userId);
  console.log(findUser);
  return (
    <div>
      <Profile userInfo={findUser} />
    </div>
  );
};

export default AdminProfile;
