"use client";
import { loginUser } from "@/actions/loginUser";
import PasswordInput from "@/components/PasswordInput";
import SpinnerLocal from "@/components/SpinnerLocal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address.";

    if (!password.trim()) newErrors.password = "Password is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    const response = await loginUser({ email, password });
    setIsLoading(false);

    if (!response.success) {
      toast.error(response.message || "Failed to log in!");
      return;
    }

    toast.success(response.message || "Logged In Successfully!");
    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl p-10 lg:px-20 px-8 space-y-8 flex flex-col"
    >
      <h2 className="text-xl font-bold">Welcome back!</h2>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="border outline-none p-2 rounded w-full"
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
        <Link href="/forgot-password">
          <span className="text-xs cursor-pointer hover:font-bold text-primary">
            Forgot Password?
          </span>
        </Link>
        <button
          type="submit"
          className="px-8 py-2 bg-primary rounded shadow-lg hover:scale-101 cursor-pointer hover:shadow-xl text-white font-bold uppercase disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={isLoading}
          aria-busy={isLoading}
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
