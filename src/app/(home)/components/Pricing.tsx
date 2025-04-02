import React from "react";
// import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  // const pricingDetails = [
  //   {
  //     isMostPopular: false,
  //     title: "Starter",
  //     price: 299,
  //     subtitle: "Perfect for new designers",
  //     benefits: [
  //       "10 Verified Leads/month",
  //       "Basic Lead Details",
  //       "Email Support",
  //     ],
  //     buttonText: "Get Started",
  //   },
  //   {
  //     isMostPopular: true,
  //     title: "Professional",
  //     price: 599,
  //     subtitle: "For established designers",
  //     benefits: [
  //       "25 Verified Leads/month",
  //       "Detailed Project Briefs",
  //       "Priority Support",
  //       "Lead Analytics Dashboard",
  //     ],
  //     buttonText: "Get Started",
  //   },
  //   {
  //     isMostPopular: false,
  //     title: "Enterprise",
  //     price: 999,
  //     subtitle: "For design firms",
  //     benefits: [
  //       "50+ Verified Leads/month",
  //       "Advanced Lead Filtering",
  //       "24/7 Premium Support",
  //       "Custom Integration",
  //     ],
  //     buttonText: "Contact Sales",
  //   },
  // ];

  return (
    <main className="px-8 py-24 text-accent bg-secondary flex flex-col items-center">
      <h2 className="text-4xl text-center text-primary">
        Simple, Transparent Pricing
      </h2>
      <p className="lg:text-xl text-base mt-4 text-center">
        Choose this perfect investment to grow your interior design business
      </p>

      {/* <div className="grid lg:grid-cols-3 gap-6 grid-cols-1 my-20">
        {pricingDetails.map((detail, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden p-10 py-16 shadow-xl flex flex-col gap-6 items-center text-xl ${
              detail.isMostPopular
                ? "bg-primary text-white"
                : "border bg-white border-gray-300"
            }`}
          >
            <h3
              className={`text-3xl font-bold ${
                detail.isMostPopular ? "" : "text-primary"
              }`}
            >
              {detail.title}
            </h3>
            <div>
              <span
                className={`text-4xl font-bold ${
                  detail.isMostPopular ? "text-white" : "text-primary"
                }`}
              >
                ${detail.price}
              </span>{" "}
              /month
            </div>
            <p className="max-lg:text-lg">{detail.subtitle}</p>
            <div className="space-y-6 w-full">
              {detail.benefits.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 lg:text-xl text-base"
                  >
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
              <span className="px-6 py-2 bg-soft font-bold text-primary text-lg rounded-bl-2xl absolute top-0 right-0">
                Most Popular
              </span>
            ) : null}
          </div>
        ))}
      </div> */}

      <div className="bg-white text-primary cursor-pointer hover:scale-102 hover:shadow-2xl rounded-md p-8 lg:w-1/2 flex flex-col items-center shadow-xl gap-6 lg:my-20 my-10">
        <h3 className="text-5xl font-bold flex items-end">
          ₹800<span className="text-lg">/lead</span>
        </h3>
        <p className="lg:text-xl text-lg font-semibold text-center">
          Get high-quality, verified leads to grow your business.
        </p>
      </div>
    </main>
  );
};

export default Pricing;
