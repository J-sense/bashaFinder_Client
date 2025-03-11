/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
console.log(`${process.env.NEXT_PUBLIC_BASE_API}`);
export const registration = async (userData: FieldValues) => {
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

    return await res.json();
  } catch (error: any) {
    console.error("Registration Error:", error.message);
    return { success: false, message: error.message }; // Return an object instead of throwing an error
  }
};
export const LoginAction = async (userData: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/login`, {
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
    const result = await res.json();
    if (result.token) {
      (await cookies()).set("accessToken", result.token);
    }
    return result;
  } catch (error: any) {
    console.log(error); // Return an object instead of throwing an error
  }
};
export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decoded;
  if (accessToken) {
    decoded = (await jwtDecode(accessToken)) as any;
    return decoded;
  } else {
    return null;
  }
};

export const LogOutAction = async () => {
  (await cookies()).delete("accessToken");
};
