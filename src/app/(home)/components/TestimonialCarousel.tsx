"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Sarah Brown",
    pfp: "https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Testimonial-3.png",
    rating: 5,
    company: "Modern Interiors Co.",
    review:
      "The quality of leads has been exceptional. I have converted 80% of the leads into clients, transforming my business completely.",
  },
  {
    name: "Mike Rodriguez",
    pfp: "https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Testimonial-2.png",
    rating: 5,
    company: "Elite Designs",
    review:
      "Best investment I have made for my design business. The leads are pre-qualified and ready to start projects immediately.",
  },
  {
    name: "Anna Kim",
    pfp: "https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Testimonial-pic-1.png",
    rating: 5,
    company: "Luxe Interiors",
    review:
      "The consistent flow of quality leads has helped me scale my business. Customer support is outstanding too!",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative shadow pt-16 pb-24 overflow-hidden w-full">
      <div
        className="flex transition-transform text-primary duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 p-6 bg-white rounded-lg text-center"
          >
            <p className="lg:text-lg text-base italic">
              &quot;{review.review}&quot;
            </p>
            <div className="mt-4 flex flex-col items-center">
              <Image
                src={review.pfp}
                alt={review.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <h3 className="font-semibold mt-2">{review.name}</h3>
              <p className="text-sm text-accent">{review.company}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
