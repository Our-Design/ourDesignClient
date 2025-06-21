"use client";

import React, { useState, useEffect } from "react";
import { dummyData } from "@/utils";
import Image from "next/image";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

// const IMAGES_PER_VIEW = 4;

const DesignGallery = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imagesPerView, setImagesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImagesPerView(1);
      } else {
        setImagesPerView(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setStartIdx((prev) => {
        if (prev === 0) {
          // wrap to end
          return Math.max(dummyData.length - imagesPerView, 0);
        }
        return Math.max(prev - imagesPerView, 0);
      });
      setIsAnimating(false);
    }, 400);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setStartIdx((prev) => {
        if (prev + imagesPerView >= dummyData.length) {
          // wrap to start
          return 0;
        }
        return Math.min(prev + imagesPerView, dummyData.length - imagesPerView);
      });
      setIsAnimating(false);
    }, 400);
  };

  const visibleImages = dummyData.slice(startIdx, startIdx + imagesPerView);

  return (
    <div className="flex flex-col items-center py-20 lg:pt-76 pt-[380px] space-y-6 px-8 text-accent">
      <h3 className="text-4xl text-center text-primary">Design Gallery</h3>
      <p className="lg:text-xl text-base lg:mb-24 mb-16 text-center lg:w-[60%]">
        Let OurDesign handle everything—from concept to completion—for your
        dream interiors.
      </p>
      <div className="relative w-full flex justify-center items-center lg:w-[80%]">
        <button
          onClick={handlePrev}
          className="absolute left-0 translate-x-[-50%] z-10 bg-background shadow-lg rounded-full w-14 h-14 flex items-center justify-center text-3xl"
          aria-label="Previous"
        >
          <IoMdArrowBack />
        </button>
        <div
          className={`flex justify-between w-full gap-8 min-h-[220px] transition-transform duration-400 ease-in-out ${
            isAnimating && direction === "right"
              ? "-translate-x-[10%]"
              : isAnimating && direction === "left"
              ? "translate-x-[10%]"
              : "translate-x-0"
          }`}
          //   style={{ width: "80%", minHeight: 220 }}
        >
          {visibleImages.map((img) => (
            <div
              key={img.imgSrc}
              className={`relative rounded-2xl overflow-hidden shadow-lg flex-shrink-0 group ${
                imagesPerView === 1 ? "w-full" : "w-[20%]"
              } h bg-white`}
              //   style={{ minWidth: 260, minHeight: 180 }}
            >
              <Image
                src={img.imgSrc}
                alt={img.title}
                width={100}
                height={70}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute bottom-0 py-2 bg-black/30 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-background text-base font-semibold text-center px-4">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 translate-x-[50%] z-10 bg-background shadow-lg rounded-full w-14 h-14 flex items-center justify-center text-3xl"
          aria-label="Next"
        >
          <IoMdArrowForward />
        </button>
      </div>
      {/* <button className="bg-primary text-white px-8 py-3 rounded-lg text-xl font-semibold shadow-md hover:bg-primary-dark transition">
        Get Free Estimate
      </button> */}
    </div>
  );
};

export default DesignGallery;
