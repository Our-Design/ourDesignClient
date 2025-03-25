import React from "react";
import { TiMessages } from "react-icons/ti";
import { SiTicktick } from "react-icons/si";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { RxLightningBolt } from "react-icons/rx";
import { FaRegClipboard, FaScaleBalanced } from "react-icons/fa6";

const Features = () => {
  const features = [
    {
      icon: <TiMessages />,
      title: "Exclusive Leads",
      desc: "Every lead is exclusively shared with a limited number of designers in your area",
    },
    {
      icon: <SiTicktick />,
      title: "Verified Contacts",
      desc: "All leads are verified with valid contact information and project details",
    },
    {
      icon: <HiOutlineCurrencyDollar />,
      title: "Pre-qualified Budgets",
      desc: "Only receive leads with confirmed project budgets matching your criteria",
    },
    {
      icon: <RxLightningBolt />,
      title: "Instant Notifications",
      desc: "Get real-time alerts when new leads match your preferences",
    },
    {
      icon: <FaRegClipboard />,
      title: "Detailed Projects",
      desc: "Access comprehensive project briefs and requirements",
    },
    {
      icon: <FaScaleBalanced />,
      title: "Fair Distribution",
      desc: "Balanced lead distribution system ensures equal opportunities",
    },
  ];

  return (
    <main className="flex flex-col items-center px-8 py-24 bg-black text-white">
      <h2 className="text-5xl font-bold mb-4 text-center">
        Why Choose Our Lead Service?
      </h2>
      <p className="text-xl text-center">
        Discover how our premium lead generation service can transform your
        interior design business
      </p>

      <div className="my-20 grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex hover:scale-105 flex-col items-start gap-5 mb-6 bg-zinc-800 p-6 rounded-2xl"
          >
            <div className="text-blue-400 text-2xl bg-blue-800/50 p-5 rounded-2xl">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
            <p className="text-lg">{feature.desc}</p>
          </div>
        ))}
      </div>

      <button className="bg-primary font-bold text-xl px-6 py-3 rounded-xl">
        Start Receiving Leads Today
      </button>
    </main>
  );
};

export default Features;
