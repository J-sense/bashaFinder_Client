"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const rentRequestAction = async (info: {
  tenant: string;
  property: string;
  message: string;
  moveInDate: string;
  duration: string;
  landlordPhone: string;
}) => {
  try {
    const token = (await cookies()).get("accessToken")?.value; // No await needed

    if (!token) {
      throw new Error("No access token found. Please log in.");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tenants/requests`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // ✅ Fix Authorization format
        },
        body: JSON.stringify(info),
      }
    );

    // if (!res.ok) {
    //   const errorMessage = await res.text(); // Read error message
    //   throw new Error(`Request failed: ${errorMessage}`);
    // }

    revalidateTag("RENTAL"); // ✅ Ensure it's in a server function

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error in rentRequestAction:", error);
    throw error; // ✅ Throw error for UI handling
  }
};
export const yourRequest = async () => {
  try {
    const token = (await cookies()).get("accessToken")?.value; // No need for await

    if (!token) {
      throw new Error("No access token found. Please log in.");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tenants/requests`, // Fixed URL
      {
        next: {
          tags: ["RENTAL"],
        },
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );

    // if (!res.ok) {
    //   throw new Error(`Request failed: ${res.statusText}`);
    // }

    return res.json();
  } catch (error) {
    console.error("Error fetching requests:", error);
    throw error; // Rethrow for handling in UI
  }
};
