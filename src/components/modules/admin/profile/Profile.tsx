"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TUser } from "@/types";
import { Edit } from "lucide-react"; // Import Edit Icon
import Link from "next/link";

const Profile = ({ userInfo }: { userInfo: TUser }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <Card className="w-96 bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 ">
        <CardHeader className="flex flex-col items-center gap-4">
          {/* Profile Avatar Placeholder */}
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-semibold text-gray-500">
            {userInfo?.username ? userInfo.username[0].toUpperCase() : "?"}
          </div>

          <CardTitle className="text-2xl font-bold text-gray-800">
            {userInfo?.username}
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center space-y-3">
          <p className="text-gray-600">
            <strong>Email:</strong> {userInfo?.email}
          </p>
          <p className="text-gray-600 capitalize">
            <strong>Role:</strong> {userInfo?.role}
          </p>

          {/* Edit Button with Icon */}
          <Link href={`/profile/${userInfo._id}`}>
            <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2">
              <Edit size={18} /> Edit Profile
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
