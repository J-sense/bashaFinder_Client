"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { TUser } from "@/types";

const Profile = ({ userInfo }: { userInfo: TUser }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 bg-white shadow-lg rounded-2xl p-6">
        <CardHeader className="flex flex-col items-center gap-3">
          {/* <Avatar className="w-24 h-24">
            <AvatarImage src={profileImg} alt={userInfo.username} />
            <AvatarFallback>{userInfo.username[0]}</AvatarFallback>
          </Avatar> */}
          <CardTitle className="text-xl font-semibold">
            {userInfo?.username}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-2">
          <p className="text-gray-600">
            <strong>Email:</strong> {userInfo?.email}
          </p>
          <p className="text-gray-600 capitalize">
            <strong>Role:</strong> {userInfo?.role}
          </p>
          <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
