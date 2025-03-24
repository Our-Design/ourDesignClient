import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  const pricingDetails = [
    {
      isMostPopular: false,
      title: "Starter",
      price: 299,
      subtitle: "Perfect for new designers",
      benefits: [
        "10 Verified Leads/month",
        "Basic Lead Details",
        "Email Support",
      ],
      buttonText: "Get Started",
    },
    {
      isMostPopular: true,
      title: "Professional",
      price: 599,
      subtitle: "For established designers",
      benefits: [
        "25 Verified Leads/month",
        "Detailed Project Briefs",
        "Priority Support",
        "Lead Analytics Dashboard",
      ],
      buttonText: "Get Started",
    },
    {
      isMostPopular: false,
      title: "Enterprise",
      price: 999,
      subtitle: "For design firms",
      benefits: [
        "50+ Verified Leads/month",
        "Advanced Lead Filtering",
        "24/7 Premium Support",
        "Custom Integration",
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <main className="px-8 py-24 bg-white text-black">
      <h2 className="text-5xl font-bold text-center">
        Simple, Transparent Pricing
      </h2>
      <p className="text-2xl mt-4 text-center">
        Choose the perfect plan to grow your interior design business
      </p>

      <div className="grid lg:grid-cols-3 gap-6 grid-cols-1 my-20">
        {pricingDetails.map((detail, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden p-10 py-16 shadow-xl flex flex-col gap-6 items-center text-xl ${
              detail.isMostPopular
                ? "bg-black text-white border-blue-400 border-2"
                : "border border-gray-300"
            }`}
          >
            <h3 className="text-3xl font-bold">{detail.title}</h3>
            <div>
              <span className="text-4xl font-bold text-primary">
                ${detail.price}
              </span>{" "}
              /month
            </div>
            <p>{detail.subtitle}</p>
            <div className="space-y-6 w-full">
              {detail.benefits.map((value, index) => {
                return (
                  <div key={index} className="flex items-center gap-3 text-xl">
                    <IoMdCheckmark className="text-green-400" />
                    <span>{value}</span>
                  </div>
                );
              })}
            </div>
            <button
              className={`w-full py-4 rounded-xl font-bold text-xl ${
                detail.isMostPopular
                  ? "bg-white text-black"
                  : "bg-primary text-white"
              }`}
            >
              {detail.buttonText}
            </button>

            {detail.isMostPopular ? (
              <span className="px-6 py-2 bg-primary text-white text-lg rounded-bl-2xl absolute top-0 right-0">
                Most Popular
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Pricing;
