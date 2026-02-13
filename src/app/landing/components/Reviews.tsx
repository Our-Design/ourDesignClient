"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

// Local building/project photos from public/photos folder
const projectPhotos = [
  "/photos/IMG_0852.jpeg",
  "/photos/IMG_0882.JPG",
  "/photos/IMG_0883.JPG",
  "/photos/IMG_0884.JPG",
  "/photos/IMG_0885.JPG",
  "/photos/IMG_0889.jpeg",
  "/photos/IMG_1641.jpeg",
  "/photos/IMG_3381.JPG",
  "/photos/IMG_3382.JPG",
  "/photos/IMG_3383.JPG",
  "/photos/IMG_3384.JPG",
  "/photos/IMG_3385.JPG",
  "/photos/IMG_3386.JPG",
  "/photos/IMG_3387.JPG",
  "/photos/IMG_3388.JPG",
  "/photos/IMG_3871.JPG",
  "/photos/IMG_5877.JPG",
  "/photos/IMG_7255.jpeg",
  "/photos/IMG_7258.jpeg",
  "/photos/IMG_8368.jpeg",
  "/photos/IMG_8807.jpeg",
  "/photos/IMG_8818.jpeg",
  "/photos/IMG_8822.jpeg",
  "/photos/IMG_9842.jpeg",
  "/photos/IMG_9845.jpeg",
];

// Client testimonials (designers/business owners)
const clientReviews = [
  {
    name: "Muskaan Handa",
    avatar:
      "https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Testimonial-3.png",
    role: "Interior Designer",
    city: "Delhi",
    rating: 5,
    review:
      "The quality of leads has been exceptional. I have converted 80% of the leads into clients, transforming my business completely.",
  },
  {
    name: "Sachin Sharma",
    avatar:
      "https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Testimonial-2.png",
    role: "Design Studio Owner",
    city: "Mumbai",
    rating: 5,
    review:
      "Best investment I have made for my design business. The leads are pre-qualified and ready to start projects immediately.",
  },
  {
    name: "Asim Salim",
    avatar:
      "https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Testimonial-pic-1.png",
    role: "Architect",
    city: "Bengaluru",
    rating: 5,
    review:
      "The consistent flow of quality leads has helped me scale my business. Customer support is outstanding too!",
  },
];

// Customer testimonials (homeowners)
const customerReviews = [
  {
    name: "Sawan Malhotra",
    avatar: "/male4.avif",
    role: "Homeowner",
    city: "Gurugram",
    rating: 5,
    review:
      "Absolutely loved the design and execution! The team handled everything smoothly and finished on time.",
  },
  {
    name: "Arjun Mehta",
    avatar: "/placeholder-avatar.jpg",
    role: "Homeowner",
    city: "Bengaluru",
    rating: 5,
    review:
      "Our 3BHK makeover turned out better than we imagined. Transparent pricing and great communication.",
  },
  {
    name: "Surya k",
    avatar: "/male2.avif",
    role: "Homeowner",
    city: "Mumbai",
    rating: 5,
    review:
      "The 3D designs made it easy to decide. The final space matches the renders perfectly!",
  },
];

// Combine all reviews
const allReviews = [...clientReviews, ...customerReviews];

const Reviews = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % projectPhotos.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Auto-change reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % allReviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentReview = allReviews[currentReviewIndex];

  return (
    <main className="flex flex-col items-center px-8 lg:px-32 py-24 text-accent w-full bg-gradient-to-b from-white to-secondary">
      <div className="flex items-center gap-2 text-amber-500 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-amber-400 stroke-amber-500" />
        ))}
        <span className="text-sm text-gray-600 ml-2">
          Trusted by homeowners & designers
        </span>
      </div>

      <h2 className="text-4xl mt-5 text-primary text-center font-bold">
        What Our Clients Say
      </h2>

      <p className="text-center text-gray-600 mt-3 max-w-2xl">
        From homeowners to professional designers, everyone loves working with
        OurDesign
      </p>

      <div className="flex w-full lg:flex-row flex-col gap-8 pt-12 max-w-7xl mx-auto">
        {/* Left side - Project Photos Slideshow */}
        <div className="lg:w-1/2 w-full h-full relative">
          <div className="relative w-full lg:h-[600px] h-80 overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={projectPhotos[currentImageIndex]}
              alt={`Project showcase ${currentImageIndex + 1}`}
              fill
              className={`object-cover transition-all duration-500 ease-in-out ${
                isTransitioning
                  ? "scale-110 opacity-50"
                  : "scale-100 opacity-100"
              }`}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={currentImageIndex === 0}
            />

            {/* Image overlay with transition effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-300 ${
                isTransitioning ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Image counter */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {projectPhotos.length}
            </div>

            {/* Auto-play indicator */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-sm text-gray-700 font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Projects</span>
            </div>
          </div>
        </div>

        {/* Right side - Combined Reviews Carousel */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 lg:p-12 min-h-[400px] flex flex-col">
            {/* Review Content */}
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: currentReview.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 stroke-amber-500"
                  />
                ))}
              </div>

              <p className="text-lg lg:text-xl text-gray-700 italic leading-relaxed mb-8">
                &quot;{currentReview.review}&quot;
              </p>

              <div className="flex items-center gap-4">
                {/* <Image
                  src={currentReview.avatar}
                  alt={currentReview.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover border-2 border-primary/20"
                /> */}
                <div>
                  <h4 className="font-bold text-lg text-primary">
                    {currentReview.name}
                  </h4>
                  <p className="text-sm text-gray-600">{currentReview.role}</p>
                  <p className="text-xs text-gray-500">{currentReview.city}</p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {allReviews.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentReviewIndex === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentReviewIndex(index)}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            {/* Review Type Badge */}
            <div className="absolute top-4 right-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  currentReview.role === "Homeowner"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {currentReview.role === "Homeowner" ? "Customer" : "Designer"}
              </span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md">
              <p className="text-2xl font-bold text-primary">300+</p>
              <p className="text-xs text-gray-600 mt-1">Projects Done</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md">
              <p className="text-2xl font-bold text-primary">70+</p>
              <p className="text-xs text-gray-600 mt-1">Happy Clients</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md">
              <p className="text-2xl font-bold text-primary">4.7★</p>
              <p className="text-xs text-gray-600 mt-1">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Reviews;
