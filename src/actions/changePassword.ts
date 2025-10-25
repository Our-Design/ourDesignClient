"use server";
import { cookies } from "next/headers";

interface ChangePasswordResponse {
  message?: string;
  error?: string;
}

export const changePassword = async ({
  oldPassword,
  newPassword,
  confirmPassword,
}: {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}) => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value;

    if (!accessToken) {
      return {
        success: false,
        message: "Unauthorized. Please login again.",
      };
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ oldPassword, newPassword, confirmPassword }),
      }
    );

    let data: ChangePasswordResponse | null = null;
    try {
      data = (await res.json()) as ChangePasswordResponse;
    } catch {
      // ignore json parse error; keep data null
    }

    if (!res.ok) {
      const message =
        (data && (data.message || data.error)) ||
        "Unable to change password. Please try again.";
      return { success: false, message };
    }

    return {
      success: true,
      message: data?.message || "Password changed successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to change password!",
    };
  }
};
