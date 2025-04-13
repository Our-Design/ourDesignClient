"use server";

import { cookies } from "next/headers";

export const fetchSingleLead = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/leads/${id}`,
      {
        next: {
          tags: ["lead"],
        },
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
        },
      }
    );
    const respData = await res.json();
    // if (!res.ok) {
    //   throw new Error(respData.errors[0].msg);
    // }
    const data = respData;
    return {
      success: true,
      data: data,
      message: "Fetched Successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch Lead",
    };
  }
};
