"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const rentRequestAction = async (info) => {
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

    if (!res.ok) {
      const errorMessage = await res.text(); // Read error message
      throw new Error(`Request failed: ${errorMessage}`);
    }

    revalidateTag("RENTAL"); // ✅ Ensure it's in a server function

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error in rentRequestAction:", error);
    throw error; // ✅ Throw error for UI handling
  }
};
