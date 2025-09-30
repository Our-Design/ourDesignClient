"use server";

import { cookies } from "next/headers";

export const registerUser = async ({
  name,
  email,
  phone,
  password,
  otp,
}: {
  name: string;
  email: string;
  phone: string;
  password: string;
  otp: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password, otp }),
      }
    );
    interface RegisterResponse {
      accessToken?: string;
      message?: string;
      error?: string;
      user?: { _id?: string };
    }
    let data: RegisterResponse | null = null;
    try {
      data = (await res.json()) as RegisterResponse;
    } catch {}

    if (!res.ok) {
      return {
        success: false,
        message:
          (data && (data.message || data.error)) ||
          "Registration failed. Please check your details and OTP.",
      };
    }

    const accessToken = data?.accessToken;
    const userId = data?.user?._id;
    if (!accessToken || !userId) {
      return {
        success: false,
        message: "Registration succeeded but session token is missing.",
      };
    }

    (await cookies()).set({ name: "userId", value: String(userId) });
    (await cookies()).set({ name: "accessToken", value: String(accessToken) });

    return {
      success: true,
      message: data?.message || "Registered successfully",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to register User!",
    };
  }
};
