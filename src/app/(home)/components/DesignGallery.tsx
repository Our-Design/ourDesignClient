"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { dummyData } from "@/utils";
import Image from "next/image";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { HiOutlineSparkles } from "react-icons/hi2";

const DesignGallery = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imagesPerView, setImagesPerView] = useState(4);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setStartIdx((prev) => {
        if (prev + imagesPerView >= dummyData.length) {
          return 0;
        }
        return Math.min(prev + imagesPerView, dummyData.length - imagesPerView);
      });
      setIsAnimating(false);
    }, 600);
  }, [isAnimating, imagesPerView]);

  // Auto-play functionality
  useEffect(() => {
    const autoPlay = setInterval(() => {
      if (!isAnimating && hoveredIndex === null) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(autoPlay);
  }, [isAnimating, hoveredIndex, handleNext]);

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setStartIdx((prev) => {
        if (prev === 0) {
          return Math.max(dummyData.length - imagesPerView, 0);
        }
        return Math.max(prev - imagesPerView, 0);
      });
      setIsAnimating(false);
    }, 600);
  };

  const visibleImages = dummyData.slice(startIdx, startIdx + imagesPerView);

  const totalSlides = Math.ceil(dummyData.length / imagesPerView);
  const currentSlide = Math.floor(startIdx / imagesPerView);

  return (
    <section className="relative bg-gradient-to-br  from-secondary via-white to-secondary py-20 lg:py-32 overflow-hidden lg:pt-48 pt-80">
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
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                onClick={() => {
                  setStartIdx(index * imagesPerView);
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
            disabled={isAnimating}
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
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 
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
              className={`flex gap-4 lg:gap-6 transition-all duration-700 ease-out ${
                isAnimating && direction === "right"
                  ? "transform translate-x-[-20px] opacity-80"
                  : isAnimating && direction === "left"
                  ? "transform translate-x-[20px] opacity-80"
                  : "transform translate-x-0 opacity-100"
              }`}
            >
              {visibleImages.map((img, index) => (
                <div
                  key={`${img.imgSrc}-${startIdx + index}`}
                  className={`relative flex-shrink-0 group cursor-pointer ${
                    imagesPerView === 1
                      ? "w-full"
                      : imagesPerView === 2
                      ? "w-[calc(50%-12px)]"
                      : imagesPerView === 3
                      ? "w-[calc(33.333%-16px)]"
                      : "w-[calc(25%-18px)]"
                  }`}
                  onMouseEnter={() => setHoveredIndex(startIdx + index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Image Container with enhanced styling */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform hover:scale-105">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={img.imgSrc}
                        alt={img.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes={`${100 / imagesPerView}vw`}
                        draggable={false}
                        loading="lazy"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Content */}
                      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <div className="text-white">
                          <h4 className="font-bold text-sm lg:text-base mb-2 line-clamp-2">
                            {img.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs lg:text-sm opacity-90">
                            <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </div>
                            <span>View Details</span>
                          </div>
                        </div>
                      </div>

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
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            <HiOutlineSparkles className="text-xl" />
            Get Your Free Design Consultation
          </button>
          <p className="text-sm text-accent mt-4">
            Start your journey to a beautiful home today
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;
