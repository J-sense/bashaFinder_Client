"use client";

import * as React from "react";
import {
  AudioWaveform,
  Bot,
  Settings2,
  SquareTerminal,
  User,
} from "lucide-react";

type UserRole = "landlord" | "admin" | "tenant";

// Import necessary components
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
// import { NavUser } from "./nav-user";
import { useUser } from "@/components/context/UserContext";
import Link from "next/link";
import { NavUser } from "./nav-user";

// Define the navigation structure for different user roles
const data = {
  navMain: {
    landlord: [
      {
        title: "Dashboard",
        url: "/landlord/dashboard",
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: "Rental Listings",
        url: "/landlord/listings",
        icon: SquareTerminal,
        items: [
          { title: "View Listings", url: "/landlord/listings" },
          { title: "Edit Listing", url: "/landlord/listings/:listingId" },
        ],
      },
      {
        title: "Rental Requests",
        url: "/landlord/rental-requests",
        icon: Bot,
        items: [{ title: "View Requests", url: "/landlord/rental-requests" }],
      },
      {
        title: "Payment Requests",
        url: "/landlord/payment-request",
        icon: SquareTerminal,
        items: [
          {
            title: "Initiate Payment Request",
            url: "/landlord/payment-request",
          },
        ],
      },
    ],
    admin: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: "Admin Profile",
        url: "/admin/profile",
        icon: User,
        items: [
          { title: "View Profile", url: "/profile" },
          { title: "Edit Profile", url: "/profile/edit" },
        ],
      },
      {
        title: "User Management",
        url: "/admin/users",
        icon: Settings2,
        items: [
          { title: "Manage Users", url: "/admin/users" },
          { title: "Edit User", url: "/admin/users/edit/:userId" },
        ],
      },
      {
        title: "Rental H. Management",
        url: "/admin/users",
        icon: Settings2,
        items: [
          { title: "Manage House Listing", url: "/admin/manage-house" },
          //   { title: "Edit User", url: "/admin/users/edit/:userId" },
        ],
      },
    ],
    tenant: [
      {
        title: "Dashboard",
        url: "/tenant/dashboard",
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: "My Bookings",
        url: "/tenant/bookings",
        icon: AudioWaveform,
        items: [
          { title: "View Bookings", url: "/tenant/bookings" },
          { title: "Cancel Booking", url: "/tenant/bookings/cancel" },
        ],
      },
      {
        title: "Payment History",
        url: "/tenant/payments",
        icon: SquareTerminal,
        items: [{ title: "View Payments", url: "/tenant/payments" }],
      },
    ],
  },

  // Common Profile menu for all users
  profile: [
    {
      title: "Profile",
      url: "/profile",
      icon: User,
      items: [
        { title: "View Profile", url: "/profile" },
        { title: "Edit Profile", url: "/profile/edit" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  // Ensure userRole is a valid type
  const userRole: UserRole = user?.role as UserRole;

  // Merge role-specific items with common profile menu
  const navItems = [...(data.navMain[userRole] || []), ...data.profile];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader />
      <SidebarMenuButton size="lg" asChild>
        <Link href="/">
          <div className="flex items-center justify-center">
            {/* <Logo /> */}
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <h2 className="font-bold text-xl">BashaFinder</h2>
          </div>
        </Link>
      </SidebarMenuButton>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
