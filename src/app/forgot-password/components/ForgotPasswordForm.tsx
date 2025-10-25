"use client";
import { forgotPassword } from "@/actions/forgotPassword";
import SpinnerLocal from "@/components/SpinnerLocal";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    const response = await forgotPassword(email);
    setIsLoading(false);

    if (!response.success) {
      toast.error(response.message || "Failed to process request!");
      return;
    }

    toast.success(response.message);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white shadow-xl p-10 lg:px-20 px-8 space-y-6 flex flex-col max-w-md">
        <div className="flex flex-col gap-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-center">Check Your Email</h2>
          <p className="text-gray-600 text-center text-sm">
            If an account exists with <strong>{email}</strong>, we&apos;ve sent
            a temporary password to your email address.
          </p>
          <p className="text-gray-600 text-center text-sm">
            Please use the temporary password to log in, then change your
            password from your account settings.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/login">
            <button className="w-full px-8 py-2 bg-primary rounded shadow-lg hover:scale-101 cursor-pointer hover:shadow-xl text-white font-bold uppercase">
              Back to Login
            </button>
          </Link>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full px-8 py-2 bg-gray-200 rounded shadow-lg hover:scale-101 cursor-pointer hover:shadow-xl font-bold uppercase"
          >
            Resend Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl p-10 lg:px-20 px-8 space-y-6 flex flex-col max-w-md"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Forgot Password?</h2>
        <p className="text-gray-600 text-sm">
          Enter your email address and we&apos;ll send you a temporary password
          to access your account.
        </p>
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="border outline-none p-3 rounded w-full"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: "" }));
          }}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <button
          type="submit"
          className="px-8 py-2 bg-primary rounded shadow-lg hover:scale-101 cursor-pointer hover:shadow-xl text-white font-bold uppercase disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? <SpinnerLocal /> : "Send Temporary Password"}
        </button>
        <Link href="/login">
          <button
            type="button"
            className="w-full px-8 py-2 bg-gray-200 rounded shadow-lg hover:scale-101 cursor-pointer hover:shadow-xl font-bold uppercase"
          >
            Back to Login
          </button>
        </Link>
      </div>
      <div className="lg:text-sm text-xs text-center">
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

export default ForgotPasswordForm;
