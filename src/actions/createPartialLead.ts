"use server";

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
        },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        success: false,
        message:
          (data && (data.message || data.error)) ||
          "Failed to submit details. Please try again.",
      };
    }

    return {
      success: true,
      message:
        (data && (data.message || data.success)) ||
        "Lead details submitted successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to create lead.",
    };
  }
};
