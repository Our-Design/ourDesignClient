"use client";
import { registerUser } from "@/actions/registerUser";
import PasswordInput from "@/components/PasswordInput";
import SpinnerLocal from "@/components/SpinnerLocal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const inputs = [
    {
      type: "text",
      placeholder: "Firm/Company Name",
      state: name,
      setter: setName,
    },
    {
      type: "text",
      placeholder: "Mobile No.",
      state: phone,
      setter: setPhone,
    },
    {
      type: "text",
      placeholder: "Pin Code",
      state: pincode,
      setter: setPincode,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    const response = await registerUser({ phone, password, name });
    setIsLoading(false);
    // console.log(response);

    if (!response.success) {
      toast.error("Failed to sign-up!");
      console.log(response.message); // Show error message
    } else {
      toast.success("Signed up successfully!");
      router.push("/dashboard"); // Redirect on success
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl p-10 lg:px-20 px-8 space-y-8 flex flex-col"
    >
      <h2 className="text-xl font-bold">Register as Professional!</h2>
      {inputs.map((input, i) => {
        return (
          <input
            key={i}
            type={input.type}
            placeholder={input.placeholder}
            className="border outline-none p-2 rounded"
            value={input.state}
            onChange={(e) => input.setter(e.target.value)}
            required
          />
        );
      })}
      <PasswordInput
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        state={password}
        setter={setPassword}
      />
      <div className="flex flex-col gap-1">
        <button
          type="submit"
          className="px-8 py-2 bg-primary rounded shadow-lg hover:scale-101 cursor-pointer hover:shadow-xl text-white font-bold uppercase"
        >
          {isLoading ? <SpinnerLocal /> : "Register Now"}
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
    </form>
  );
};

export default SignUpForm;
