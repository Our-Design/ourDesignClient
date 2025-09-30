"use server";

interface Address {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pinCode: string;
  country: string;
}

interface RequestBody {
  customerName: string;
  customerMobile: string;
  address: Address;
  budget: number;
  propertyType?: string;
  propertySize?: number;
  description?: string;
}

interface FormDataType {
  name: string;
  mobile: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  pincode: string;
  propertyType?: string;
  propertySize?: string;
  budget: string;
  description?: string;
}

export const createLead = async ({ formData }: { formData: FormDataType }) => {
  try {
    const {
      name,
      mobile,
      address1,
      address2,
      city,
      state,
      pincode,
      propertyType,
      propertySize,
      budget,
      description,
    } = formData;

    const address: Address = {
      addressLine1: address1,
      city,
      state,
      pinCode: pincode,
      country: "India",
    };

    if (address2?.trim()) {
      address.addressLine2 = address2;
    }

    const body: RequestBody = {
      customerName: name,
      customerMobile: mobile,
      address,
      budget: Number(budget),
    };

    if (propertyType?.trim()) {
      body.propertyType = propertyType;
    }

    if (propertySize) {
      body.propertySize = Number(propertySize);
    }

    if (description?.trim()) {
      body.description = description;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = Array.isArray(data?.message)
        ? data.message.join(", ")
        : typeof data?.message === "string"
        ? data.message
        : "Failed to create lead.";
      throw new Error(msg);
    }

    return {
      success: true,
      message: data?.message || "Thanks! Your enquiry has been submitted.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to create lead.",
    };
  }
};
