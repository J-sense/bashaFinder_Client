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
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          BashaFinder
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/listings" className="hover:text-blue-600 transition">
            Listings
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Profile & House Listing Button */}
        <div className="hidden md:flex items-center space-x-4">
          {user?.role && (
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              House Listing
            </Button>
          )}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    {user?.role?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={`${user.role}`}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-500 cursor-pointer"
                  onClick={handleLogOut}
                >
                  <div className="flex text-base items-center gap-1">
                    <LogOut /> <small>Log Out</small>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-full transition hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/listings" className="hover:text-blue-600 transition">
            Listings
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
          {user?.role == "landlord" && (
            <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
              House Listing
            </Button>
          )}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    {user?.email?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={`${user.role}`}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-500 cursor-pointer"
                  onClick={handleLogOut}
                >
                  <div className="flex text-base items-center gap-1">
                    <LogOut /> <small>Log Out</small>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-full transition hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
