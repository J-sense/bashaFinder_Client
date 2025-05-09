"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TUser } from "@/types";
import { Edit, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import coverImage from "../../../../assests/coverjpg.jpg";
import profileImg from "../../../../assests/fb.jpg";

const Profile = ({ userInfo }: { userInfo: TUser }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image Section */}
      <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
        <Image
          src={coverImage}
          alt="Cover photo"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Back Button */}
        <Link href="/" className="absolute top-4 left-4 z-10">
          <Button
            variant="ghost"
            className="text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to home
          </Button>
        </Link>
      </div>

      {/* Profile Content */}
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Card - Adjusted for better alignment */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            {/* Profile Image */}
            <div className="relative -mt-20 mb-4 rounded-full border-4 border-white shadow-lg">
              <Image
                src={profileImg}
                alt="Profile picture"
                width={160}
                height={160}
                className="rounded-full object-cover w-40 h-40"
              />
              {/* Edit Profile Image Button */}
              <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all">
                <Edit size={16} />
              </button>
            </div>

            {/* Profile Actions - Made height match details card */}
            <Card className="w-full bg-white shadow-xl rounded-xl overflow-hidden h-full">
              <div className="p-6 space-y-3 flex flex-col h-full">
                <div>
                  <CardTitle className="text-2xl font-bold text-center text-gray-800">
                    {userInfo?.username}
                  </CardTitle>

                  <p className="text-gray-500 text-sm text-center mt-1">
                    {userInfo?.role
                      ? userInfo.role.charAt(0).toUpperCase() +
                        userInfo.role.slice(1)
                      : "User"}
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-end pt-4 space-y-2">
                  <Link href={`/edit/${userInfo?._id}`} className="block">
                    <Button variant="outline" className="w-full gap-2">
                      <Edit size={16} />
                      Edit Profile
                    </Button>
                  </Link>

                  <Link href={`/profile/${userInfo?._id}`} className="block">
                    <Button variant="outline" className="w-full gap-2">
                      <Lock size={16} />
                      Change Password
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* User Details - Improved spacing */}
          <Card className="w-full md:w-2/3 bg-white shadow-xl rounded-xl md:mt-28">
            <CardHeader>
              <h2 className="text-xl font-semibold text-gray-800">
                Profile Information
              </h2>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">
                    Full Name
                  </h3>
                  <p className="text-gray-800">
                    {userInfo?.username || "Not provided"}
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">
                    Email Address
                  </h3>
                  <p className="text-gray-800">{userInfo?.email}</p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">Role</h3>
                  <p className="text-gray-800 capitalize">{userInfo?.role}</p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">
                    Member Since
                  </h3>
                  <p className="text-gray-800">
                    {userInfo?.createdAt
                      ? new Date(userInfo.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )
                      : "Unknown"}
                  </p>
                </div>
              </div>

              {/* Additional Info Sections - Improved empty state handling */}
              {/* <div className="pt-4 border-t border-gray-100 space-y-4">
                {(userInfo?.bio || userInfo?.location) && (
                  <>
                    {userInfo?.bio && (
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-gray-500">
                          About
                        </h3>
                        <p className="text-gray-600 whitespace-pre-line">
                          {userInfo.bio}
                        </p>
                      </div>
                    )}

                    {userInfo?.location && (
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-gray-500">
                          Location
                        </h3>
                        <p className="text-gray-600">{userInfo.location}</p>
                      </div>
                    )}
                  </>
                )}
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
