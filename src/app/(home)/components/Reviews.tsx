"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { fetchCloudinaryImages } from "@/actions/fetchCloudinaryImages";
import { CloudinaryImage } from "@/types";
import TestimonialCarousel from "./TestimonialCarousel";

const Reviews = () => {
  const [elevationImages, setElevationImages] = useState<CloudinaryImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fetch elevation images
  const fetchElevationImages = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fetchCloudinaryImages("elevation");

      if (
        !("error" in result) &&
        result.resources &&
        result.resources.length > 0
      ) {
        // Shuffle images for variety
        const shuffledImages = result.resources.sort(() => Math.random() - 0.5);
        setElevationImages(shuffledImages);
      }
    } catch (error) {
      console.error("Error fetching elevation images:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initialize images on component mount
  useEffect(() => {
    fetchElevationImages();
  }, [fetchElevationImages]);

  // Auto-change images every 5 seconds
  useEffect(() => {
    if (elevationImages.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % elevationImages.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [elevationImages.length]);

  const currentImage = elevationImages[currentImageIndex];
  return (
    <main className="flex flex-col items-center px-8 lg:px-32 py-24 text-accent w-full">
      <p className="">This Is What We Do</p>
      <h2 className="text-4xl mt-5 text-primary text-center">
        This Is What They Say
      </h2>

      <div className="flex w-full lg:flex-row flex-col gap-2 pt-20">
        <div className="lg:w-1/2 w-full h-full relative">
          {isLoading ? (
            <div className="w-full lg:h-[515px] h-64 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
              <div className="text-gray-500">Loading Building Images...</div>
            </div>
          ) : currentImage ? (
            <div className="relative w-full lg:h-[515px] h-64 overflow-hidden rounded-lg">
              <Image
                src={currentImage.secure_url}
                alt={currentImage.display_name || "Building Elevation Design"}
                fill
                className={`object-cover transition-all duration-500 ease-in-out ${
                  isTransitioning
                    ? "scale-110 opacity-50"
                    : "scale-100 opacity-100"
                }`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={currentImageIndex === 0}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />

              {/* Image overlay with transition effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
                  isTransitioning ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Image counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {elevationImages.length}
              </div>

              {/* Auto-play indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Auto</span>
              </div>
            </div>
          ) : (
            <div className="w-full lg:h-[515px] h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-gray-500">No building images available</div>
            </div>
          )}
        </div>
        <div className="flex flex-col lg:items-start items-end lg:w-1/2 w-full">
          <TestimonialCarousel />
          <div className="w-full h-24 bg-soft"></div>
        </div>
      </div>
    </main>
  );
};

export default Reviews;
