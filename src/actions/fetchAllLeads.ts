"use server";
import { cookies } from "next/headers";
import type { Lead } from "@/types";

type LeadsSuccess = Lead[] | { data?: Lead[]; message?: string };
interface LeadsError {
  error?: string;
  message?: string;
}

type LeadsResponse = LeadsSuccess | LeadsError;

function isError(resp: LeadsResponse): resp is LeadsError {
  return !Array.isArray(resp) && "error" in resp && resp.error !== undefined;
}

function extractMessage(resp: LeadsResponse | null): string | undefined {
  if (!resp) return undefined;
  if (Array.isArray(resp)) return undefined;
  return resp.message || ("error" in resp ? resp.error : undefined);
}

function extractList(resp: LeadsResponse | null): unknown[] | undefined {
  if (!resp) return undefined;
  if (Array.isArray(resp)) return resp as unknown[];
  if (isError(resp)) return undefined;
  return (resp.data ?? []) as unknown[];
}

export const fetchAllLeads = async (): Promise<{
  success: boolean;
  data?: Lead[];
  message: string;
}> => {
  try {
    const token = (await cookies()).get("accessToken")?.value;
    if (!token) {
      return { success: false, message: "Not authenticated" };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/leads`, {
      next: { tags: ["leads"] },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let data: LeadsResponse | null = null;
    try {
      data = (await res.json()) as LeadsResponse;
    } catch {
      // ignore
    }

    if (!res.ok) {
      const message =
        extractMessage(data) || "Failed to fetch leads. Please try again.";
      return { success: false, message };
    }

    const listRaw = extractList(data) || [];
    const list = listRaw as unknown as Lead[];
    return {
      success: true,
      data: list,
      message: "Fetched Successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch Leads",
    };
  }
};
