import React from "react";
import { TiMessages } from "react-icons/ti";
import { SiTicktick } from "react-icons/si";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { RxLightningBolt } from "react-icons/rx";
import { FaRegClipboard, FaScaleBalanced } from "react-icons/fa6";
import Link from "next/link";

const Features = () => {
  const designerFeatures = [
    {
      icon: <TiMessages />,
      title: "Exclusive Leads",
      desc: "Get exclusive access to verified customer leads in your area",
    },
    {
      icon: <SiTicktick />,
      title: "Verified Contacts",
      desc: "All leads come with verified contact information and project details",
    },
    {
      icon: <HiOutlineCurrencyDollar />,
      title: "Pre-qualified Budgets",
      desc: "Only receive leads with confirmed project budgets matching your criteria",
    },
  ];

  const customerFeatures = [
    {
      icon: <RxLightningBolt />,
      title: "Instant Matching",
      desc: "Get matched with verified designers within 24 hours of your enquiry",
    },
    {
      icon: <FaRegClipboard />,
      title: "Free Consultation",
      desc: "Discuss your project requirements with expert designers at no cost",
    },
    {
      icon: <FaScaleBalanced />,
      title: "Transparent Pricing",
      desc: "Clear itemized estimates with no hidden costs or surprises",
    },
  ];

  return (
    <main className="flex flex-col items-center px-8 py-24 text-accent">
      <h2 className="lg:text-4xl text-3xl text-primary mb-4 text-center font-bold">
        Why Choose OurDesign?
      </h2>
      <p className="lg:text-xl text-lg text-center max-w-3xl mb-16">
        Whether you&apos;re transforming your home or growing your design
        business, we&apos;ve got you covered
      </p>

      {/* For Designers Section */}
      <div className="w-full max-w-7xl mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-flex items-center rounded-full border border-primary bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            For Interior Designers
          </span>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6">
          {designerFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex hover:scale-105 transition-transform flex-col items-start gap-5 hover:shadow-2xl border border-gray-100 shadow-lg p-6 rounded-xl bg-white"
            >
              <div className="text-primary text-2xl bg-primary/10 p-5 rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl text-primary font-semibold">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/dashboard"
            className="bg-primary text-white font-bold lg:text-lg text-base px-8 py-3 rounded-lg cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Join as a Designer
          </Link>
        </div>
      </div>

      {/* For Customers Section */}
      <div className="w-full max-w-7xl">
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-flex items-center rounded-full border border-primary bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            For Homeowners
          </span>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6">
          {customerFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex hover:scale-105 transition-transform flex-col items-start gap-5 hover:shadow-2xl border border-gray-100 shadow-lg p-6 rounded-xl bg-white"
            >
              <div className="text-primary text-2xl bg-primary/10 p-5 rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl text-primary font-semibold">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/enquire"
            className="bg-soft text-primary border-2 border-primary font-bold lg:text-lg text-base px-8 py-3 rounded-lg cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Features;
