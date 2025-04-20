import { fetchSingleLead } from "@/actions/fetchSingleLead";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
// import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
// import { MdOutlineMessage } from "react-icons/md";
import ZeroStateComponent from "@/components/ZeroStateComponent";
import Link from "next/link";
import { formatDate } from "@/utils";
import RazorpayPaymentButton from "./components/RazorpayButtonComponent";
import { cookies } from "next/headers";

interface LeadProps {
  params: Promise<{ id: string }>;
}

const Lead = async ({ params }: LeadProps) => {
  const { id } = await params;
  const userId = (await cookies()).get("userId")!.value;
  const leadDetails = await fetchSingleLead(id);
  // console.log({ leadDetails });
  const {
    _id,
    customerName,
    customerMobile,
    address,
    budget,
    propertyType,
    propertySize,
    description,
    createdAt,
    status,
    leadPrice,
  } = leadDetails?.data;

  if (!leadDetails.success) {
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
        <span className="capitalize">
          {address.city}, {address.state}
        </span>
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
        {customerMobile ? <span>Size: {propertySize}sft</span> : null}
        <span>Requirements: Design and Execution</span>
        <span>{description}</span>
        <span>Ready to meet: Yes</span>
        {customerMobile ? (
          <span className="capitalize">
            Street Address: {address.addressLine1},{" "}
            {address?.addressLine2 && address?.addressLine2}, {address?.city},{" "}
            {address?.state}, {address?.country}, {address.pinCode}.
          </span>
        ) : (
          <span className="capitalize">
            Street Address: {address?.city}, {address?.state},{" "}
            {address?.country}
          </span>
        )}
      </div>

      <div className="space-y-2 my-4">
        <p className="font-semibold">Owner Details:</p>
        <div className="flex items-center gap-4">
          <span className="uppercase lg:w-24 lg:h-24 w-20 h-20 shadow-lg flex items-center justify-center lg:text-5xl text-4xl font-bold bg-gray-300 rounded-full">
            {customerMobile ? customerName?.split("")[0] : "U"}
          </span>
          <div className="flex flex-col lg:text-lg gap-3">
            <span className="capitalize font-bold">
              {!customerMobile ? "*********" : customerName}
            </span>
            <p className="font-semibold cursor-pointer">
              {!customerMobile ? "*********" : customerMobile}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="space-y-2">
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
      </div> */}

      {status === "new" ? (
        <RazorpayPaymentButton
          amount={leadPrice * 100}
          leadId={_id}
          designerId={userId}
          // onSuccess={() => redirect("/my-leads")}
          // onFailure={() => toast.error("Purchase failed! Please try again.")}
        />
      ) : (
        <button className="bg-[#011640]/60 cursor-not-allowed text-white font-semibold py-2 lg:w-1/2 w-full rounded-lg mt-4">
          Sold Out
        </button>
      )}
    </div>
  );
};

export default Lead;
