import Link from "next/link";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Schedule = () => {
  const features = [
    "Pre-qualified Leads",
    "Verified Contacts",
    "Instant Access",
  ];

  return (
    <main className="pb-24 lg:pt-24 px-8">
      <div className="px-8 text-primary bg-soft space-y-10 lg:px-32 py-20 rounded-3xl flex flex-col items-center text-center">
        <h2 className="lg:text-6xl text-4xl font-bold">
          Start Growing Your Interior Design Business Today
        </h2>
        <p className="lg:text-2xl text-xl">
          Join hundreds of successful interior designers who are scaling their
          business with qualified leads
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 lg:text-xl text-base">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 font-medium bg-white/50 px-6 py-2 rounded-xl"
            >
              <IoMdCheckmark />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 lg:text-xl text-base">
          <Link
            href="/dashboard"
            className="bg-white shadow-lg hover:shadow-xl cursor-pointer text-primary font-bold lg:px-8 px-5 lg:py-4 py-2 rounded-xl"
          >
            Get Started Now
          </Link>
          {/* <Link
            href="/dashboard"
            className="text-white shadow-lg hover:shadow-xl cursor-pointer bg-primary font-bold lg:px-8 px-5 lg:py-4 py-2 rounded-xl"
          >
            Schedule Demo
          </Link> */}
        </div>
      </div>
    </main>
  );
};

export default Schedule;
