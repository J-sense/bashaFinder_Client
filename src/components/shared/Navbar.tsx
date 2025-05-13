"use client";

import { useState } from "react";
import { House, LogOut, Menu, X } from "lucide-react";
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
    <nav className="bg-white border-b border-gray-100 shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Desktop Nav */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                BashaFinder
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/listings"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Listings
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user?.role === "landlord" && (
              <Link href="/house-listing">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 border-blue-500 text-blue-600 hover:bg-blue-50"
                >
                  <House className="h-4 w-4" />
                  <span>List Property</span>
                </Button>
              </Link>
            )}

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8 border border-blue-100">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {user?.email?.charAt(0)?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden lg:inline text-sm font-medium text-gray-700">
                      {user.email}
                    </span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 rounded-lg shadow-lg border border-gray-100 mt-2"
                >
                  <DropdownMenuLabel className="px-4 py-2 font-medium text-gray-900">
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-100" />
                  <Link href="/profile">
                    <DropdownMenuItem className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-50">
                      Profile
                    </DropdownMenuItem>
                  </Link>
                  <Link href={`/${user.role}`}>
                    <DropdownMenuItem className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-50">
                      Dashboard
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator className="bg-gray-100" />
                  <DropdownMenuItem
                    onClick={handleLogOut}
                    className="px-4 py-2 text-sm cursor-pointer text-red-600 hover:bg-red-50"
                  >
                    <div className="flex items-center space-x-2">
                      <LogOut className="h-4 w-4" />
                      <span>Sign out</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex space-x-2">
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:bg-gray-50"
                  >
                    Log in
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/listings"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Listings
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-4">
            {user ? (
              <>
                {user.role === "landlord" && (
                  <div className="mb-4">
                    <Link
                      href="/house-listing"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center space-x-2 border-blue-500 text-blue-600 hover:bg-blue-50"
                      >
                        <House className="h-4 w-4" />
                        <span>List Property</span>
                      </Button>
                    </Link>
                  </div>
                )}
                <div className="flex items-center px-4 mb-4">
                  <div className="flex-shrink-0">
                    <Avatar className="h-10 w-10 border border-blue-100">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {user?.email?.charAt(0)?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.email}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    Profile
                  </Link>
                  <Link
                    href={`/${user.role}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogOut();
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md flex items-center space-x-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign out</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-2">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full block px-4 py-2 text-center text-base font-medium text-blue-600 hover:bg-blue-50 rounded-md border border-blue-600"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full block px-4 py-2 text-center text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
