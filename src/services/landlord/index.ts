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

    revalidateTag("PRODUCT");
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw error; // Rethrow error for handling in UI
  }
};
export const updateHouseListing = async (
  userData: Record<string, any>,
  id: string
) => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    if (!token) {
      throw new Error("No access token found. Please log in.");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(userData),
      }
    );

    if (!res.ok) {
      const errorMessage = await res.text(); // Capture error message from API response
      throw new Error(`Update failed: ${errorMessage}`);
    }

    revalidateTag("HOUSE_LISTINGS"); // Consider renaming if needed
    return await res.json();
  } catch (error) {
    console.error("Error updating house listing:", error);
    throw error; // Rethrow for UI handling
  }
};

// src/actions/getAllHouseAction.ts
export const AllHouseAction = async (query: any) => {
  const params = new URLSearchParams();
  if (query?.bedrooms) {
    params.append("bedrooms", query?.bedrooms.toString());
    // params.append("maxPrice", query?.price.toString());
  }
  if (query?.searchTerm) {
    params.append("searchTerm", query?.searchTerm);
    // params.append("maxPrice", query?.price.toString());
  }
  if (query?.minPrice) {
    params.append("minPrice", "0");
  }
  if (query?.maxPrice) {
    params.append("maxPrice", query?.maxPrice.toString());
  }

  console.log(query);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/all-houses?${params}`,
      {
        next: {
          revalidate: 60,
        },
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch listings: ${res.statusText}`);
    }

    return await res.json(); // ✅ Return the fetched listings
  } catch (error) {
    console.error("Error fetching listings:", error);
    return [];
  }
};
export const AllRentalRequestAction = async () => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    if (!token) {
      throw new Error("No access token found. Please log in.");
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/requests`,
      {
        next: {
          revalidate: 60,
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

    return await res.json(); // ✅ Return the fetched listings
  } catch (error) {
    console.error("Error fetching listings:", error);
    return [];
  }
};
export const singProperty = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/all-houses/${id}`,
      {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch listings: ${res.statusText}`);
    }

    return await res.json(); // ✅ Return the fetched listings
  } catch (error) {
    console.error("Error fetching listings:", error);
    return [];
  }
};
export const updateRentalApproved = async (id: string, status: string) => {
  try {
    const token = (await cookies()).get("accessToken")?.value;

    if (!token) {
      throw new Error("No access token found. Please log in.");
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/requests/${id}`,
      {
        next: {
          tags: ["RENTAL"],
        },
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ status }),
      }
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
