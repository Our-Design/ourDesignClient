"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { fetchCloudinaryImages } from "@/actions/fetchCloudinaryImages";
import { CloudinaryImage } from "@/types";
import Image from "next/image";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { HiOutlineSparkles } from "react-icons/hi2";
import { useFormPopup } from "./FormPopup";

const DesignGallery = () => {
  const [allImages, setAllImages] = useState<CloudinaryImage[]>([]);
  const [displayImages, setDisplayImages] = useState<CloudinaryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imagesPerView, setImagesPerView] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get form popup control functions
  const { openForm } = useFormPopup();

  // Design categories to fetch from
  const categories = useCallback(
    () => [
      "bedroom",
      "kitchen",
      "drawing-room",
      "bathroom",
      "furniture",
      "decoration",
    ],
    []
  );

  // Fetch images from multiple categories
  const fetchAllImages = useCallback(async () => {
    setIsLoading(true);
    try {
      const categoryList = categories();
      const promises = categoryList.map((category) =>
        fetchCloudinaryImages(category)
      );
      const results = await Promise.all(promises);

      const combinedImages: CloudinaryImage[] = [];
      results.forEach((result) => {
        if (!("error" in result) && result.resources) {
          combinedImages.push(...result.resources);
        }
      });

      // Shuffle images for variety
      const shuffledImages = combinedImages.sort(() => Math.random() - 0.5);
      setAllImages(shuffledImages);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  }, [categories]);

  // Initialize images on component mount
  useEffect(() => {
    fetchAllImages();
  }, [fetchAllImages]);

  // Update display images when all images or view settings change
  const updateDisplayImages = useCallback(() => {
    if (allImages.length === 0) return;

    const images = [];
    for (let i = 0; i < imagesPerView; i++) {
      const index = (currentIndex + i) % allImages.length;
      images.push(allImages[index]);
    }
    setDisplayImages(images);
  }, [allImages, currentIndex, imagesPerView]);

  useEffect(() => {
    if (allImages.length > 0) {
      updateDisplayImages();
    }
  }, [allImages, currentIndex, imagesPerView, updateDisplayImages]);

  // Responsive design
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImagesPerView(1);
      } else if (window.innerWidth < 1024) {
        setImagesPerView(2);
      } else if (window.innerWidth < 1280) {
        setImagesPerView(3);
      } else {
        setImagesPerView(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (isAnimating || allImages.length === 0) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + imagesPerView) % allImages.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, imagesPerView, allImages.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating || allImages.length === 0) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev - imagesPerView;
        return newIndex < 0
          ? Math.max(allImages.length - imagesPerView, 0)
          : newIndex;
      });
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, imagesPerView, allImages.length]);

  // Calculate total slides and current slide for pagination
  const totalSlides = Math.ceil(allImages.length / imagesPerView);
  const currentSlide = Math.floor(currentIndex / imagesPerView);

  if (isLoading) {
    return (
      <section className="relative bg-gradient-to-br from-secondary via-white to-secondary py-20 lg:py-32 overflow-hidden lg:pt-48 pt-80">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg mb-6">
              <HiOutlineSparkles className="text-primary text-xl animate-spin" />
              <span className="text-primary font-medium">
                Loading Gallery...
              </span>
            </div>
            <div className="max-w-md mx-auto">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-secondary via-white to-secondary py-20 lg:py-32 overflow-hidden lg:pt-48 pt-80">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-0 w-2 h-40 bg-gradient-to-b from-primary/20 to-transparent"></div>
      <div className="absolute top-1/3 right-0 w-2 h-40 bg-gradient-to-b from-primary/20 to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg mb-6">
            <HiOutlineSparkles className="text-primary text-xl" />
            <span className="text-primary font-medium">Showcase</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-heading mb-6 tracking-tight">
            Design <span className="text-primary">Gallery</span>
          </h2>

          <p className="text-lg lg:text-xl text-accent max-w-3xl mx-auto leading-relaxed">
            Let OurDesign handle everything—from concept to completion—for your
            <span className="text-primary font-semibold"> dream interiors</span>
            .
          </p>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: Math.min(totalSlides, 10) }, (_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                onClick={() => {
                  setCurrentIndex(index * imagesPerView);
                }}
              />
            ))}
          </div>
        </div>

        {/* Gallery Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={isAnimating || allImages.length === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 
                     bg-white hover:bg-primary text-primary hover:text-white
                     shadow-2xl hover:shadow-primary/25 rounded-full w-12 h-12 lg:w-16 lg:h-16 
                     flex items-center justify-center text-xl lg:text-2xl
                     transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed
                     backdrop-blur-sm border border-primary/10"
            aria-label="Previous designs"
          >
            <IoMdArrowBack />
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating || allImages.length === 0}
            className=" absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 
                     bg-white hover:bg-primary text-primary hover:text-white
                     shadow-2xl hover:shadow-primary/25 rounded-full w-12 h-12 lg:w-16 lg:h-16 
                     flex items-center justify-center text-xl lg:text-2xl
                     transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed
                     backdrop-blur-sm border border-primary/10"
            aria-label="Next designs"
          >
            <IoMdArrowForward />
          </button>

          {/* Images Container */}
          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-3xl bg-white/50 backdrop-blur-sm p-4 lg:p-8 shadow-xl"
          >
            <div
              className={`flex gap-4 lg:gap-6 transition-all duration-500 ease-out ${
                isAnimating
                  ? "transform scale-95 opacity-80"
                  : "transform scale-100 opacity-100"
              }`}
            >
              {displayImages.map((img, index) => (
                <div
                  key={`${img.public_id}-${currentIndex + index}`}
                  className={`relative flex-shrink-0 group cursor-pointer ${
                    imagesPerView === 1
                      ? "w-full"
                      : imagesPerView === 2
                      ? "w-[calc(50%-12px)]"
                      : imagesPerView === 3
                      ? "w-[calc(33.333%-16px)]"
                      : "w-[calc(25%-18px)]"
                  }`}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                >
                  {/* Image Container with enhanced styling */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform hover:scale-105">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={img.secure_url}
                        alt={img.display_name || `Design ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes={`${100 / imagesPerView}vw`}
                        draggable={false}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Content */}
                      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"></div>

                      {/* Corner Accent */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            onClick={openForm}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <HiOutlineSparkles className="text-xl" />
            Get Your Free Design Consultation
          </button>
          <p className="text-sm text-accent mt-4">
            Start your journey to a beautiful home today
          </p>

          {/* Gallery Stats */}
          <div className="flex justify-center items-center gap-6 mt-8 text-sm text-accent">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>{allImages.length} Total Designs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{categories().length} Categories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;
