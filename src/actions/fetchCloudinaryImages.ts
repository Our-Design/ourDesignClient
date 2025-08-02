"use server";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryResponse } from "@/types";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export const fetchCloudinaryImages = async (
  folder: string
): Promise<CloudinaryResponse | { error: string }> => {
  try {
    const result = await cloudinary.search
      .expression(`folder:${folder}/*`)
      .sort_by("created_at", "desc")
      .max_results(500)
      .execute();

    return result as CloudinaryResponse;
  } catch (error) {
    console.error("Error fetching images:", error);
    return { error: "Failed to fetch images" };
  }
};
