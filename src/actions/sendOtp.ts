"use server";

export const sendOtp = async ({ email }: { email: string }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/send-otp`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    let data: { message?: string; error?: string } | null = null;
    try {
      data = await res.json();
    } catch {}

    if (!res.ok) {
      return {
        success: false,
        message:
          (data && (data.message || data.error)) ||
          "Failed to send OTP. Please try again.",
      };
    }

    return {
      success: true,
      message: (data && data.message) || "OTP sent successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send OTP.",
    };
  }
};
