import Image from "next/image";
import React from "react";
// import { FaStar } from "react-icons/fa";
import TestimonialCarousel from "./TestimonialCarousel";

const Reviews = () => {
  // const reviews = [
  //   {
  //     name: "Sarah Brown",
  //     pfp: "https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Testimonial-3.png",
  //     rating: 5,
  //     company: "Modern Interiors Co.",
  //     review:
  //       "The quality of leads has been exceptional. I have converted 80% of the leads into clients, transforming my business completely.",
  //   },
  //   {
  //     name: "Mike Rodriguez",
  //     pfp: "https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Testimonial-2.png",
  //     rating: 5,
  //     company: "Elite Designs",
  //     review:
  //       "Best investment I have made for my design business. The leads are pre-qualified and ready to start projects immediately.",
  //   },
  //   {
  //     name: "Anna Kim",
  //     pfp: "https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Testimonial-pic-1.png",
  //     rating: 5,
  //     company: "Luxe Interiors",
  //     review:
  //       "The consistent flow of quality leads has helped me scale my business. Customer support is outstanding too!",
  //   },
  // ];

  return (
    <main className="flex flex-col items-center px-8 lg:px-32 py-24 text-accent w-full">
      <p className="">This Is What We Do</p>
      <h2 className="text-4xl mt-5 text-primary text-center">
        This Is What They Say
      </h2>
      {/* <p className="mt-6 text-2xl text-center">
        Hear from interior designers who have transformed their business with
        our leads
      </p> */}
      {/* <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 pt-20">
        {reviews.map((review, i) => {
          return (
            <div key={i} className="bg-zinc-800 p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-4 ">
                <span className="text-4xl font-bold bg-primary rounded-full w-16 h-16 flex justify-center items-center">
                  {review.name.split("")[0]}
                </span>
                <div className="text-xl space-y-2">
                  <h4 className="font-bold">{review.name}</h4>
                  <span className="text-gray-400">{review.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xl text-yellow-300">
                {[1, 2, 3, 4, 5].map((el) => (
                  <FaStar key={el} />
                ))}
              </div>
              <p className="text-xl">&quot;{review.review}&quot;</p>
            </div>
          );
        })}
      </div> */}
      <div className="flex w-full lg:flex-row flex-col gap-2 pt-20">
        <div className="lg:w-1/2 w-full h-full">
          <Image
            src="https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Testimonial-pic.png"
            // src="/images/building.webp"
            alt="innovative building"
            width={100}
            height={80}
            className="w-full lg:h-[515px] object-cover"
          />
        </div>
        <div className="flex flex-col lg:items-start items-end lg:w-1/2 w-full">
          <TestimonialCarousel />
          <div className="w-24 h-24 bg-soft"></div>
        </div>
      </div>
    </main>
  );
};

export default Reviews;
