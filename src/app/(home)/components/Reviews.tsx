import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Brown",
      rating: 5,
      company: "Modern Interiors Co.",
      review:
        "The quality of leads has been exceptional. I have converted 80% of the leads into clients, transforming my business completely.",
    },
    {
      name: "Mike Rodriguez",
      rating: 5,
      company: "Elite Designs",
      review:
        "Best investment I have made for my design business. The leads are pre-qualified and ready to start projects immediately.",
    },
    {
      name: "Anna Kim",
      rating: 5,
      company: "Luxe Interiors",
      review:
        "The consistent flow of quality leads has helped me scale my business. Customer support is outstanding too!",
    },
  ];

  return (
    <main className="flex flex-col items-center px-8 py-24 bg-black text-white">
      <h2 className="text-5xl font-bold text-center">What Our Designers Say</h2>
      <p className="mt-6 text-2xl text-center">
        Hear from interior designers who have transformed their business with
        our leads
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 pt-20">
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
      </div>
    </main>
  );
};

export default Reviews;
