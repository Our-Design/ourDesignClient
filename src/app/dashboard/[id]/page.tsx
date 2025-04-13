import { fetchSingleLead } from "@/actions/fetchSingleLead";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import ZeroStateComponent from "@/components/ZeroStateComponent";
import Link from "next/link";
import { formatDate } from "@/utils";

interface LeadProps {
  params: Promise<{ id: string }>;
}

const Lead = async ({ params }: LeadProps) => {
  const { id } = await params;
  const leadDetails = await fetchSingleLead(id);
  console.log(leadDetails);
  const {
    customerName,
    address,
    budget,
    propertyType,
    propertySize,
    description,
    createdAt,
  } = leadDetails?.data;

  if (!leadDetails.success || !customerName) {
    return (
      <div className="py-8 flex flex-col items-center gap-4 bg-secondary">
        <ZeroStateComponent text="Failed to fetch lead details." />
        <Link
          href="/dashboard"
          className="bg-primary rounded-xl px-4 py-2 font-bold text-white"
        >
          Go back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-secondary p-8 space-y-2 lg:bg-[url('https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Hero.png')] bg-cover max-lg:bg-center">
      <h2 className="lg:text-3xl text-2xl font-bold capitalize">
        {propertyType}
      </h2>
      <div className="flex items-center gap-1 my-4">
        <IoLocationSharp className="text-red-400" />
        <span className="capitalize">{address}</span>
      </div>
      <div className="flex items-center gap-1 font-extrabold">
        <span>Budget:</span>
        <span>{budget ? `₹ ${budget}` : "To be quoted"}</span>
      </div>
      <p className="font-extrabold">Time to start: Immediately</p>
      <div className="font-extrabold mb-4">
        Posted on: {formatDate(createdAt)}
      </div>

      <h3 className="text-blue-800 font-bold">DESCRIPTION</h3>

      <div className="text-accent font-semibold flex flex-col lg:w-[60%] border-b border-accent py-4">
        <span>Size: {propertySize}sft</span>
        <span>Requirements: Design and Execution</span>
        <span>{description}</span>
        <span>Ready to meet: Yes</span>
        <span>Street Address: {address}</span>
      </div>

      <div className="space-y-2 my-4">
        <p className="font-semibold">Owner Details:</p>
        <div className="flex items-center gap-4">
          <span className="uppercase lg:w-24 lg:h-24 w-20 h-20 shadow-lg flex items-center justify-center lg:text-5xl text-4xl font-bold bg-gray-300 rounded-full">
            {customerName?.split("")[0]}
          </span>
          <div className="flex flex-col lg:text-lg gap-3">
            <span className="capitalize font-bold">{customerName}</span>
            <p className="text-blue-800 underline font-semibold cursor-pointer">
              View Profile
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="font-semibold">Contact owner:</p>
        <div className="flex items-center gap-2">
          <div className="text-white lg:text-xl bg-gray-400 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex items-center justify-center">
            <FaWhatsapp />
          </div>
          <div className="text-white lg:text-xl bg-gray-400 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex items-center justify-center">
            <MdOutlineMessage />
          </div>
          <div className="text-white lg:text-lg bg-gray-400 rounded-full lg:w-12 lg:h-12 w-10 h-10 flex items-center justify-center">
            <FaPhoneAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lead;
