"use server";

interface ForgotPasswordResponse {
  message?: string;
  error?: string;
}

export const forgotPassword = async (email: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    let data: ForgotPasswordResponse | null = null;
    try {
      data = (await res.json()) as ForgotPasswordResponse;
    } catch {
      // ignore json parse error; keep data null
    }

    if (!res.ok) {
      const message =
        (data && (data.message || data.error)) ||
        "Unable to process forgot password request.";
      return { success: false, message };
    }

    return {
      success: true,
      message:
        data?.message ||
        "A temporary password has been sent to your email. Please use it to log in and change your password.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to process forgot password request!",
    };
  }
};
