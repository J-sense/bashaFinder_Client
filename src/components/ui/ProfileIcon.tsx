"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/components/context/UserContext";
import Link from "next/link";
import { LogOutAction } from "@/services/authService";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";
const ProfileIcon = () => {
  const { user, setIsLoading } = useUser();
  const handleLogOut = () => {
    LogOutAction();
    setIsLoading(true);
    redirect("/");
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="border-2 border-blue-500">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{user?.role?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="shadow-lg rounded-md py-2 w-48">
          <DropdownMenuLabel className="font-semibold px-4">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href={"/profile"}>
            <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile
            </DropdownMenuItem>
          </Link>
          {/* <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Billing
                </DropdownMenuItem> */}
          {/* <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link href={`/${user?.role}`}>Dashboard</Link>
          </DropdownMenuItem> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red-500 cursor-pointer px-4 py-2 hover:bg-red-100"
            onClick={handleLogOut}
          >
            <div className="flex text-base items-center gap-2">
              <LogOut /> <span>Log Out</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileIcon;
