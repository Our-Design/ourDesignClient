"use client";
import { loginUser } from "@/actions/loginUser";
import PasswordInput from "@/components/PasswordInput";
import SpinnerLocal from "@/components/SpinnerLocal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    const response = await loginUser({ phone, password });
    setIsLoading(false);
    console.log(response);

    if (!response.success) {
      toast.error("Failed to log in!");
      console.log(response.message); // Show error message
    } else {
      toast.success("Logged In Successfully!");
      router.push("/dashboard"); // Redirect on success
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl p-10 lg:px-20 px-8 space-y-8 flex flex-col"
    >
      <h2 className="text-xl font-bold">Welcome back!</h2>
      <input
        type="text"
        placeholder="Mobile No."
        className="border outline-none p-2 rounded"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <PasswordInput
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        state={password}
        setter={setPassword}
      />
      <div className="flex flex-col gap-1">
        <span className="text-xs cursor-pointer hover:font-bold">
          Forgot Password?
        </span>
        <button
          type="submit"
          className="px-8 py-2 bg-primary rounded shadow-lg hover:scale-101 cursor-pointer hover:shadow-xl text-white font-bold uppercase"
        >
          {isLoading ? <SpinnerLocal /> : "Log In"}
        </button>
      </div>
      <div className="lg:text-sm text-xs">
        Don&apos;t have an Account?{" "}
        <Link href="/sign-up">
          <span className="hover:font-bold font-semibold text-primary cursor-pointer">
            Register
          </span>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
