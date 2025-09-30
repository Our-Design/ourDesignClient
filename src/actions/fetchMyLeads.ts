"use server";
import { cookies } from "next/headers";
import type { Lead } from "@/types";

type MyLeadsSuccess = Lead[];
interface MyLeadsError {
  message?: string;
  error?: string;
}

export const fetchMyLeads = async (): Promise<{
  success: boolean;
  data?: Lead[];
  message: string;
}> => {
  try {
    const token = (await cookies()).get("accessToken")?.value;
    if (!token) {
      return { success: false, message: "Not authenticated" };
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/leads/my-leads`,
      {
        // Always fetch fresh data for per-user My Leads
        cache: "no-store",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    let data: MyLeadsSuccess | MyLeadsError | null = null;
    try {
      data = await res.json();
    } catch {}

    if (!res.ok) {
      const message =
        (data && (data as MyLeadsError).message) ||
        (data && (data as MyLeadsError).error) ||
        "Failed to fetch your leads.";
      return { success: false, message };
    }

    return {
      success: true,
      data: (data as MyLeadsSuccess) || [],
      message: "Your Leads Fetched Successfully",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to fetch your leads.",
    };
  }
};
