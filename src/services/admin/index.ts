/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { UpdateUser, UpdateUserPayload } from "@/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
export const createUSer = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      const errorMessage = await res.text(); // Get error message if response is not OK
      throw new Error(`Registration failed: ${errorMessage}`);
    }
    revalidateTag("USER");
    return await res.json();
  } catch (error: any) {
    console.error("Registration Error:", error.message);
    return { success: false, message: error.message }; // Return an object instead of throwing an error
  }
};
export const ViewAllUser = async () => {
  try {
    const accessToken = (await cookies()).get("accessToken")!.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/users`, {
      next: {
        tags: ["USER"],
      },
      method: "GET",
      headers: {
        Authorization: accessToken,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.statusText}`);
    }

    return await res.json(); // ✅ Return the fetched user data
  } catch (error) {
    console.error("Error fetching users:", error);
    return null; // ✅ Handle errors gracefully
  }
};
export const alluser = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_API}/admin/all-user`;
    console.log(url);
    const res = await fetch(url, {
      method: "GET",
    });

    if (!res.ok) {
      const errorText = await res.text(); // Get error details
      throw new Error(`Failed to fetch users: ${errorText}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAllHouseAction = async () => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/listings`,
      {
        method: "GET",
        headers: {
          Authorization: accessToken || "", // Fallback to empty string if no token
          "Content-Type": "application/json",
        },
        cache: "no-store", // ✅ Correct placement
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};

export const updateRoleAction = async (id: string, role: string) => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value; // Get token
    console.log(accessToken);
    if (!accessToken) {
      throw new Error("No access token found. Please log in.");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/users/${id}`,

      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken, // Send token
        },
        body: JSON.stringify({ role }), // Send new role
      }
    );

    if (!res.ok) {
      const errorMessage = await res.text(); // Read error message
      throw new Error(`Update failed: ${errorMessage}`);
    }
    revalidateTag("USER");
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error updating role:", error);
    throw error; // Handle error in UI
  }
};

export const deleteUserAction = async (id: string) => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value; // Get token

    if (!accessToken) {
      throw new Error("No access token found. Please log in.");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/users/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken, // Send token
        },
      }
    );

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Delete failed: ${errorMessage}`);
    }
    revalidateTag("USER");
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
export const activeAction = async (id: string) => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value; // Get token

    if (!accessToken) {
      throw new Error("No access token found. Please log in.");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/active/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken, // Send token
        },
      }
    );

    revalidateTag("USER");
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
export const deleteRentalHouse = async (id: string) => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value; // Get token

    if (!accessToken) {
      throw new Error("No access token found. Please log in.");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/listings/${id}`,
      {
        next: {
          tags: ["HOUSE"],
        },
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken, // Send token
        },
      }
    );

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Delete failed: ${errorMessage}`);
    }
    revalidateTag("HOUSE");
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
export const approvalAction = async (id: string, approved: string) => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value; // Get token

    if (!accessToken) {
      throw new Error("No access token found. Please log in.");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/listings/${id}`,
      {
        next: {
          tags: ["HOUSE"],
        },
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken, // Send token
        },
        body: JSON.stringify({ approved }),
      }
    );

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`update failed: ${errorMessage}`);
    }
    revalidateTag("HOUSE");
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
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

    revalidateTag("HOUSE");
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw error; // Rethrow error for handling in UI
  }
};
export const updateCredential = async (data: UpdateUserPayload) => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value; // Get token

    if (!accessToken) {
      throw new Error("No access token found. Please log in.");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/editProfile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken, // Send token
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`update failed: ${errorMessage}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
export const updateProfile = async (data: UpdateUser, id: string) => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value; // Get token

    if (!accessToken) {
      throw new Error("No access token found. Please log in.");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/profile/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken, // Send token
        },
        body: JSON.stringify(data),
      }
    );

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
// export const orderAction = async (data) => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/api/create-checkout-session`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );
//     console.log(res);
//     if (!res.ok) {
//       const errorMessage = await res.text();
//       throw new Error(`update failed: ${errorMessage}`);
//     }

//     const result = await res.json();
//     return result;
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     throw error;
//   }
// };
export const orderAction = async (paymentInfo: {
  userId: string | undefined;
  amount: number;
}) => {
  try {
    // Send a POST request to the backend to create a Stripe checkout session
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentInfo),
      }
    );

    // Check if the response is OK
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Failed to create session");
    }

    // Parse the JSON response
    const data = await response.json();

    // Check if sessionId exists and return it
    if (data?.sessionId) {
      return { sessionId: data.sessionId };
    }
    throw new Error("Session creation failed");
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    throw error;
  }
};
