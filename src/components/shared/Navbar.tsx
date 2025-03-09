"use client";

import { useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOutAction } from "@/services/authService";
import { useUser } from "../context/UserContext";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setIsLoading } = useUser();

  const handleLogOut = () => {
    LogOutAction();
    setIsLoading(true);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-black tracking-wide "
        >
          BashaFinder
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
          <Link
            href="/"
            className="hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/listings"
            className="hover:text-blue-600 transition duration-300"
          >
            Listings
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Profile & House Listing Button */}
        <div className="hidden md:flex items-center space-x-6">
          {user?.role == "landlord" && (
            <Link href={"/house-listing"}>
              <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md">
                House Listing
              </Button>
            </Link>
          )}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="border-2 border-blue-500">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    {user?.role?.charAt(0) || "U"}
                  </AvatarFallback>
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
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href={`/${user.role}`}>Dashboard</Link>
                </DropdownMenuItem>
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
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg transition hover:bg-blue-700 shadow-md"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={30} className="text-gray-700" />
          ) : (
            <Menu size={30} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center space-y-6 py-6 text-lg font-medium">
          <Link
            href="/"
            className="hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/listings"
            className="hover:text-blue-600 transition duration-300"
          >
            Listings
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition duration-300"
          >
            Contact
          </Link>
          {user?.role == "landlord" && (
            <Button className="bg-green-600 hover:bg-green-700 text-white w-4/5 text-lg font-semibold py-2 rounded-lg">
              House Listing
            </Button>
          )}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="border-2 border-blue-500">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    {user?.email?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="shadow-lg rounded-md py-2 w-48">
                <DropdownMenuLabel className="font-semibold px-4">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href={`/${user.role}`}>Dashboard</Link>
                </DropdownMenuItem>
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
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg transition hover:bg-blue-700 shadow-md"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
