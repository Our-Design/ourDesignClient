import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <main className="pt-60 px-8 py-24 text-accent bg-secondary flex flex-col items-center">
      <h2 className="text-4xl text-center text-primary font-bold">
        Simple, Transparent Approach
      </h2>
      <p className="lg:text-xl text-base mt-4 text-center max-w-3xl">
        Whether you&apos;re looking to design your home or grow your design
        business, we make it easy to get started
      </p>

      <div className="grid lg:grid-cols-2 gap-8 grid-cols-1 lg:my-20 my-10 w-full max-w-5xl">
        {/* For Designers */}
        <Link
          href="/dashboard"
          className="bg-white text-primary cursor-pointer hover:scale-102 hover:shadow-2xl rounded-xl p-8 flex flex-col items-center shadow-xl gap-6 transition-all border-2 border-primary/20"
        >
          <div className="inline-flex items-center rounded-full border border-primary bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            For Designers
          </div>
          <h3 className="text-3xl font-bold">Pay Per Lead</h3>
          <p className="lg:text-xl text-lg font-semibold text-center">
            Only pay for verified leads that match your criteria. No monthly
            fees, no commitments.
          </p>
          <div className="text-5xl font-bold text-primary">
            At Reasonable Prices
          </div>
          <ul className="text-left space-y-2 text-lg">
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span> Verified customer
              details
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span> Project budget included
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span> Instant notifications
            </li>
          </ul>
          <div className="mt-4 px-6 py-3 bg-primary text-white rounded-lg font-semibold">
            Browse Leads Now →
          </div>
        </Link>

        {/* For Customers */}
        <Link
          href="/enquire"
          className="bg-primary text-white cursor-pointer hover:scale-102 hover:shadow-2xl rounded-xl p-8 flex flex-col items-center shadow-xl gap-6 transition-all"
        >
          <div className="inline-flex items-center rounded-full border border-white bg-white/20 px-4 py-1.5 text-sm font-semibold text-white">
            For Homeowners
          </div>
          <h3 className="text-3xl font-bold">Free Consultation</h3>
          <p className="lg:text-xl text-lg font-semibold text-center">
            Get expert design consultation at no cost. Discuss your vision and
            get matched with the perfect designer.
          </p>
          <div className="text-5xl font-bold">₹0</div>
          <ul className="text-left space-y-2 text-lg">
            <li className="flex items-center gap-2">
              <span className="text-green-300">✓</span> Free design consultation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-300">✓</span> Verified designer
              matching
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-300">✓</span> Transparent pricing
            </li>
          </ul>
          <div className="mt-4 px-6 py-3 bg-white text-primary rounded-lg font-semibold">
            Book Free Consultation →
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Pricing;
