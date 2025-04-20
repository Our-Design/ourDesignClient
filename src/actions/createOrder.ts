"use server";

import { cookies } from "next/headers";

export const createOrder = async ({
  amount,
  leadId,
  designerId,
}: {
  amount: number;
  leadId: string;
  designerId: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/payments/create-order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
        },
        body: JSON.stringify({ amount, leadId, designerId }),
      }
    );
    const respData = await res.json();
    // console.log(respData);
    // if (!res.ok) {
    //   throw new Error(respData.errors[0].msg);
    // }
    // add cookies to the application here

    return respData;
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to create order!",
    };
  }
};
