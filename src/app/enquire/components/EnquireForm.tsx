"use client";

import { createLead } from "@/actions/createLead";
import InputField from "@/components/InputField";
import SpinnerLocal from "@/components/SpinnerLocal";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import { FiRefreshCw } from "react-icons/fi";

// Generate a simple math captcha
const generateCaptcha = () => {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  const operators = ["+", "-"] as const;
  const op = operators[Math.floor(Math.random() * operators.length)];
  const question = `${a} ${op} ${b}`;
  const answer = op === "+" ? a + b : a - b;
  return { question, answer };
};

const EnquireForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Captcha state
  const [captcha, setCaptcha] = useState({ question: "", answer: 0 });
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
    setCaptchaError("");
  }, []);

  useEffect(() => {
    refreshCaptcha();
  }, [refreshCaptcha]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      newErrors.email = "Please enter a valid email address.";
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    if (!formData.city.trim()) newErrors.city = "City is required.";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate captcha first
    if (!captchaInput.trim()) {
      setCaptchaError("Please solve the captcha to continue.");
      toast.error("Please solve the captcha before submitting.");
      return;
    }

    if (parseInt(captchaInput) !== captcha.answer) {
      setCaptchaError("Wrong answer! Try the new one below.");
      toast.error("Captcha verification failed. Please try again.");
      refreshCaptcha();
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const count = Object.keys(validationErrors).length;
      toast.error(
        `Please fix ${count} ${count === 1 ? "error" : "errors"} in the form.`,
      );
      return;
    }

    setLoading(true);
    const res = await createLead({
      formData: {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        address1: "-",
        city: formData.city,
        state: "-",
        pincode: "000000",
        budget: "0",
      },
    });
    setLoading(false);
    if (res.success) {
      toast.success(res.message || "Thanks! Your enquiry has been submitted.");
      router.push("/");
    } else {
      toast.error(res.message || "Sorry, we couldn't submit your enquiry.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* PERSONAL INFO */}
      <div>
        <h2 className="lg:text-2xl text-xl font-semibold mb-4 border-b pb-2">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Enter your email"
          />
          <InputField
            label="Mobile No."
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
            required
          />
          <InputField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
            required
          />
        </div>
      </div>

      {/* ADDRESS */}
      {/* <div>
        <h2 className="lg:text-2xl text-xl font-semibold mb-4 border-b pb-2">
          Location
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="House/Flat No."
            name="address1"
            placeholder="Enter House/Flat No."
            value={formData.address1}
            onChange={handleChange}
            error={errors.address1}
            required
          />
          <InputField
            label="Street/Area"
            placeholder="Enter Street/Area"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
          <InputField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
            required
          />
          <InputField
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            error={errors.state}
            required
          />
          <InputField
            label="Pincode"
            name="pincode"
            type="tel"
            value={formData.pincode}
            onChange={handleChange}
            error={errors.pincode}
            required
          />
        </div>
      </div> */}

      {/* PROPERTY DETAILS */}
      {/* <div>
        <h2 className="lg:text-2xl text-xl font-semibold mb-4 border-b pb-2">
          Property Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Property Type"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
          />
          <InputField
            label="Property Size (In sq.ft)"
            name="propertySize"
            value={formData.propertySize}
            onChange={handleChange}
          />
          <InputField
            label="Budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            error={errors.budget}
            required
          />
        </div>
      </div> */}

      {/* ADDITIONAL INFO */}
      {/* <div>
        <h2 className="lg:text-2xl text-xl font-semibold mb-4 border-b pb-2">
          Describe your Property & Requirements
        </h2>
        <div className="grid grid-cols-1">
          <InputField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            isTextarea
          />
        </div>
      </div> */}

      {/* CAPTCHA */}
      <div>
        <h2 className="lg:text-2xl text-xl font-semibold mb-4 border-b pb-2">
          Verify You&apos;re Human
        </h2>
        <div className="flex flex-col gap-3 max-w-md">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 border border-gray-300 rounded-lg px-6 py-3 select-none">
              <span className="text-xl font-bold tracking-widest text-primary">
                {captcha.question} = ?
              </span>
            </div>
            <button
              type="button"
              onClick={refreshCaptcha}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              title="Refresh captcha"
            >
              <FiRefreshCw className="text-xl text-gray-500" />
            </button>
          </div>
          <input
            type="text"
            inputMode="numeric"
            value={captchaInput}
            onChange={(e) => {
              setCaptchaInput(e.target.value);
              setCaptchaError("");
            }}
            placeholder="Enter your answer"
            className="bg-white p-3 rounded border border-gray-300 outline-none font-semibold max-w-[200px]"
          />
          {captchaError && (
            <span className="text-red-500 text-sm">{captchaError}</span>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-600">* Fields marked are mandatory.</p>

      <button
        type="submit"
        className="bg-primary w-full text-white text-lg font-bold py-3 rounded hover:scale-102 cursor-pointer transition"
      >
        {loading ? <SpinnerLocal /> : "Get Started"}
      </button>
    </form>
  );
};

export default EnquireForm;
