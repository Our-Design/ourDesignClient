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
    <div className="bg-white text-black flex flex-col items-center py-20 space-y-6 px-8">
      <h2 className="text-5xl font-bold">How It Works</h2>
      <p className="text-xl mb-16">
        Our streamlined process makes it easy to receive qualified interior
        design leads and grow your business
      </p>

      <div className="flex gap-10 items-center mb-20">
        {steps.map((step, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center space-y-8 bg-gray-100 p-10 rounded-md"
            >
              <div className="text-3xl font-bold w-20 h-20 flex justify-center items-center bg-primary text-white rounded-full">
                {i + 1}
              </div>

              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-xl text-center">{step.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-black px-20 py-12 rounded-2xl text-white flex justify-between items-center w-full">
        <div>
          <h3 className="text-5xl font-bold mb-8">Lead Quality Guarantee</h3>
          <div className="space-y-6">
            {checks.map((check, index) => {
              return (
                <div key={index} className="flex items-center gap-3 text-xl">
                  <IoMdCheckmark className="text-green-400" />
                  <span>{check}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <h3 className="text-5xl font-bold">95%</h3>
          <p className="text-xl">
            Lead satisfaction rate among our interior designers
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
