import EditProfile from "@/components/modules/admin/profile/EditProfile";
import { alluser } from "@/services/admin";
import { getCurrentUser } from "@/services/authService";
import { TUser } from "@/types";

const ProfileEdit = async () => {
  const { data } = await alluser();
  const user = await getCurrentUser();
  const findUser = data.find((item: TUser) => item._id === user!.userId);

  return (
    <div>
      <EditProfile user={findUser} />
    </div>
  );
};

export default ProfileEdit;
