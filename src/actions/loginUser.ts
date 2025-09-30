"use server";
import { cookies } from "next/headers";

interface LoginSuccessResponse {
  accessToken?: string;
  message?: string;
  user?: { _id?: string };
  error?: string;
}

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    let data: LoginSuccessResponse | null = null;
    try {
      data = (await res.json()) as LoginSuccessResponse;
    } catch {
      // ignore json parse error; keep data null
    }

    if (!res.ok) {
      const message =
        (data && (data.message || data.error)) ||
        "Unable to log in. Please check your credentials.";
      return { success: false, message };
    }

    // Guard: require tokens and user in a successful response
    const accessToken = data?.accessToken;
    const userId = data?.user?._id;
    if (!accessToken || !userId) {
      return {
        success: false,
        message: "Login succeeded but token/session is missing.",
      };
    }

    // Persist cookies
    (await cookies()).set({ name: "userId", value: String(userId) });
    (await cookies()).set({ name: "accessToken", value: String(accessToken) });

    return {
      success: true,
      message: data?.message || "Logged in successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to login User!",
    };
  }
};
