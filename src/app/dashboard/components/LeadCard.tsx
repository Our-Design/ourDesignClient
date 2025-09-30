import { Lead } from "@/types";
import Link from "next/link";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";

type LeadCardProps = {
  leadDetails: Lead;
  /** Optional override for the CTA/button label (e.g., "View" in My Leads) */
  buttonLabel?: string;
};

const LeadCard = ({ leadDetails, buttonLabel }: LeadCardProps) => {
  const { _id, customerName, address, budget, status, propertyType } =
    leadDetails;

  return (
    <Link
      href={`/dashboard/${_id}`}
      className="relative overflow-hidden bg-white lg:p-5 p-4 rounded-xl hover:scale-102 shadow-xl"
    >
      <div className="">
        <h3 className="capitalize font-bold lg:text-2xl text-xl">
          {customerName}
        </h3>
        <p className="">
          Budget: <span className="font-bold text-lg">₹ {budget}</span>
        </p>
        <span className="font-extrabold lg:text-lg">{propertyType}</span>
        <div className="flex items-center gap-1">
          <IoLocationSharp className="text-red-400" />
          <span className="capitalize text-sm">
            {address?.city}, {address?.state}
          </span>
        </div>
      </div>
      <button
        className={`px-4 py-2 mt-3 cursor-pointer rounded-xl bg-primary text-white font-semibold w-full ${
          status === "new" ? "bg-primary" : "bg-red-400"
        }`}
      >
        {buttonLabel ?? (status === "new" ? "New" : "Sold")}
      </button>

      <div className="absolute w-40 h-40 rounded-full top-0 right-0 translate-x-[50%] translate-y-[-40%] bg-[#FFD6D6]/80"></div>
      <div className="absolute w-40 h-40 rounded-full top-0 right-0 translate-x-[20%] translate-y-[-60%] bg-[#FFD6D6]/80"></div>
    </Link>
  );
};

export default LeadCard;
