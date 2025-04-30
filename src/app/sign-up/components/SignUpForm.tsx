"use client";
import { registerUser } from "@/actions/registerUser";
import PasswordInput from "@/components/PasswordInput";
import SpinnerLocal from "@/components/SpinnerLocal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const SignUpForm = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    pincode?: string;
    password?: string;
  }>({});
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Firm/Company Name is required.";
    if (!phone.trim()) newErrors.phone = "Mobile number is required.";
    else if (!/^[0-9]{10}$/.test(phone))
      newErrors.phone = "Enter a valid 10-digit mobile number.";
    if (!pincode.trim()) newErrors.pincode = "Pin Code is required.";
    else if (!/^[0-9]{6}$/.test(pincode))
      newErrors.pincode = "Enter a valid 6-digit pin code.";
    if (!password.trim()) newErrors.password = "Password is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    const response = await registerUser({ phone, password, name });
    setIsLoading(false);

    if (!response.success) {
      toast.error("Failed to sign-up!");
    } else {
      toast.success("Signed up successfully!");
      router.push("/dashboard");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl p-10 lg:px-20 px-8 space-y-8 flex flex-col"
    >
      <h2 className="text-xl font-bold">Register as Professional!</h2>
      <div>
        <input
          type="text"
          placeholder="Firm/Company Name"
          className="border outline-none p-2 rounded w-full"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((prev) => ({ ...prev, name: "" }));
          }}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      <div>
        <input
          type="text"
          placeholder="Mobile No."
          className="border outline-none p-2 rounded w-full"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setErrors((prev) => ({ ...prev, phone: "" }));
          }}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>
      <div>
        <input
          type="text"
          placeholder="Pin Code"
          className="border outline-none p-2 rounded w-full"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
            setErrors((prev) => ({ ...prev, pincode: "" }));
          }}
        />
        {errors.pincode && (
          <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
        )}
      </div>
      <div>
        <PasswordInput
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          state={password}
          setter={(val) => {
            setPassword(val);
            setErrors((prev) => ({ ...prev, password: "" }));
          }}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>
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
