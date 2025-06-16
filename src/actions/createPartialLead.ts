"use server";

import { cookies } from "next/headers";

interface RequestBody {
  customerName: string;
  customerMobile: string;
}

interface FormDataType {
  name: string;
  mobile: string;
}

export const createPartialLead = async ({
  formData,
}: {
  formData: FormDataType;
}) => {
  try {
    const { name, mobile } = formData;

    const body: RequestBody = {
      customerName: name,
      customerMobile: mobile,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/leads/partial`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
        },
        body: JSON.stringify(body),
      }
    );

    await res.json();

    return {
      success: true,
      message: "Lead details submitted successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to create lead.",
    };
  }
};
