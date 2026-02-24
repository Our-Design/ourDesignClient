import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const HowItWorks = () => {
  const steps = [
    {
      title: "Subscribe to a Plan",
      desc: "Choose a subscription plan that matches your business needs and coverage area",
    },
    {
      title: "Receive Lead Notifications",
      desc: "Get instant notifications when new leads matching your criteria are available",
    },
    {
      title: "Connect with Clients",
      desc: "Access verified contact information and start building client relationships",
    },
  ];

  const checks = [
    "Pre-qualified project budgets",
    "Verified contact information",
    "Detailed project requirements",
  ];

  return (
    <div className="flex flex-col items-center py-20 lg:pt-32 pt-24 space-y-6 px-8 text-accent">
      <h2 className="text-4xl text-center text-primary">How It Works</h2>
      <p className="lg:text-xl text-base mb-24 text-center lg:w-[40%]">
        Our streamlined process makes it easy to receive qualified interior
        design leads and grow your business
      </p>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mb-24">
        {steps.map((step, i) => {
          return (
            <div
              key={i}
              className="flex flex-col text-center items-center space-y-8 bg-secondary shadow-lg hover:shadow-2xl p-10 rounded-md"
            >
              <div className="lg:text-3xl text-2xl font-bold w-20 h-20 flex justify-center items-center bg-primary text-white rounded-full">
                {i + 1}
              </div>

              <h3 className="lg:text-2xl text-xl text-primary">{step.title}</h3>
              <p className="lg:text-xl text-base text-center">{step.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-primary text-white lg:px-20 px-8 py-12 flex lg:flex-row flex-col lg:justify-between gap-16 items-center w-full">
        <div>
          <h3 className="lg:text-4xl text-3xl font-bold mb-8">
            Lead Quality Guarantee
          </h3>
          <div className="space-y-6 flex flex-col lg:items-start items-center">
            {checks.map((check, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 lg:text-xl text-lg"
                >
                  <IoMdCheckmark className="text-green-400" />
                  <span>{check}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <h3 className="text-5xl font-bold">95%</h3>
          <p className="text-xl text-center">
            Lead satisfaction rate among our interior designers
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
