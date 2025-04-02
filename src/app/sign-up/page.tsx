"use client";
import PasswordInput from "@/components/PasswordInput";
import Link from "next/link";
import React, { useState } from "react";

const SignUpPage = () => {
  const inputs = [
    {
      type: "text",
      placeholder: "Firm/Company Name",
    },
    {
      type: "number",
      placeholder: "Mobile No.",
    },
    {
      type: "number",
      placeholder: "Pin Code",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="px-8 py-24 bg-[url('https://interiosplash.com/wp-content/uploads/2024/09/12-optimized.webp')] flex justify-center items-center">
      <div className="bg-white shadow-xl p-10 lg:px-20 px-8 space-y-8 flex flex-col">
        <h2 className="text-xl font-bold">Register as Professional!</h2>
        {inputs.map((input, i) => {
          return (
            <input
              key={i}
              type={input.type}
              placeholder={input.placeholder}
              className="border outline-none p-2 rounded"
            />
          );
        })}
        <PasswordInput isVisible={isVisible} setIsVisible={setIsVisible} />
        <div className="flex flex-col gap-1">
          <button className="px-8 py-2 bg-primary rounded shadow-lg hover:scale-101 cursor-pointer hover:shadow-xl text-white font-bold uppercase">
            Register Now
          </button>
        </div>
        <div className="lg:text-sm text-xs">
          Are you already registered?{" "}
          <Link href="/login">
            <span className="hover:font-bold font-semibold text-primary cursor-pointer">
              Please Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
