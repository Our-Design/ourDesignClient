import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Schedule = () => {
  const features = [
    "Pre-qualified Leads",
    "Verified Contacts",
    "Instant Access",
  ];

  return (
    <main className="py-24 px-8 text-white bg-black">
      <div className="bg-gradient-to-br px-8 from-blue-700 to-blue-800 space-y-10 lg:px-32 py-20 rounded-3xl flex flex-col items-center text-center">
        <h2 className="lg:text-6xl text-5xl font-bold">
          Start Growing Your Interior Design Business Today
        </h2>
        <p className="text-2xl">
          Join hundreds of successful interior designers who are scaling their
          business with qualified leads
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 lg:text-xl text-base">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex gap-2 font-medium bg-white/20 px-6 py-2 rounded-xl"
            >
              <IoMdCheckmark />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 lg:text-xl text-base">
          <button className="bg-white text-primary font-bold lg:px-8 px-5 lg:py-4 py-2 rounded-xl">
            Get Started Now
          </button>
          <button className="border-2 border-white font-bold lg:px-8 px-5 lg:py-4 py-2 rounded-xl">
            Schedule Demo
          </button>
        </div>
      </div>
    </main>
  );
};

export default Schedule;
