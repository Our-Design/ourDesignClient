"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CloudinaryImage } from "@/types";
import ImageModal from "./ImageModal";

interface GalleryGridProps {
  images: CloudinaryImage[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<CloudinaryImage | null>(
    null
  );
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image: CloudinaryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex =
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-6 space-y-6">
        {images.map((data: CloudinaryImage, index: number) => {
          const aspectRatio = data.width / data.height;
          const isWide = aspectRatio > 1.2;
          const isTall = aspectRatio < 0.8;

          return (
            <div
              key={data.public_id}
              className={`
                break-inside-avoid mb-6 group cursor-pointer
                ${isWide ? "sm:col-span-2" : ""}
                ${isTall ? "row-span-2" : ""}
              `}
              onClick={() => openModal(data, index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <Image
                    src={data.secure_url}
                    alt={data.display_name || `Design ${index + 1}`}
                    width={data.width}
                    height={data.height}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex-1">
                          {/* <p className="text-sm font-medium truncate">
                            {data.display_name || `Design ${index + 1}`}
                          </p> */}
                          <p className="text-xs opacity-80">
                            {data.width} × {data.height}
                          </p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 ml-2">
                          <svg
                            className="w-4 h-4"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={goToNext}
        onPrevious={goToPrevious}
        currentIndex={selectedIndex}
        totalImages={images.length}
      />
    </>
  );
};

export default GalleryGrid;
