"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const verifyPayment = async (params: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  leadId: string;
  designerId: string;
}) => {
  try {
    const token = (await cookies()).get("accessToken")?.value;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/payments/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(params),
      }
    );

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return {
        success: false,
        message:
          (data && (data.message || data.error)) ||
          "Payment verification failed.",
      };
    }
    // Invalidate any cached lead lists so My Leads reflects the purchase
    revalidateTag("leads");
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Payment verification failed.",
    };
  }
};
