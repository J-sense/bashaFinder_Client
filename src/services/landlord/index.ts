/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const allListings = async () => {
  try {
    // Get token from cookies
    const token = (await cookies()).get("accessToken")?.value;

    if (!token) {
      throw new Error("No access token found. Please log in.");
    }

    // Fetch data
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings`,
      {
        next: {
          tags: ["PRODUCT"],
        },
        method: "GET",
        headers: {
          Authorization: token, // Correct format
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch listings: ${res.statusText}`);
    }

    return await res.json(); // Return the fetched data
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw error; // Rethrow error for handling in UI
  }
};
export const createHouseListing = async (userData: {
  images: string[];
  title: string;
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  landlord: string | undefined;
}) => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    if (!token) {
      throw new Error("No access token found. Please log in.");
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(userData),
      }
    );
    if (!res.ok) {
      const errorMessage = await res.text(); // Read error message
      throw new Error(`Update failed: ${errorMessage}`);
    }
    revalidateTag("PRODUCT");
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw error; // Rethrow error for handling in UI
  }
};
