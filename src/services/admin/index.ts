"use server";

import { UpdateUserPayload } from "@/types";
import { cookies } from "next/headers";

export const ViewAllUser = async () => {
  try {
    const accessToken = (await cookies()).get("accessToken")!.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/users`, {
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

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
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
