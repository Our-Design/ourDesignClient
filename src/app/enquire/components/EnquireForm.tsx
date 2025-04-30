"use client";

import { createLead } from "@/actions/createLead";
import InputField from "@/components/InputField";
import SpinnerLocal from "@/components/SpinnerLocal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const EnquireForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    propertyType: "",
    propertySize: "",
    budget: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Valid 10-digit mobile number required";
    if (!formData.address1.trim())
      newErrors.address1 = "Address line 1 is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.pincode.trim() || !/^\d{6}$/.test(formData.pincode))
      newErrors.pincode = "Valid 6-digit pincode required";
    if (!formData.budget.trim()) newErrors.budget = "Budget is required";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Do your submission logic here
    setLoading(true);
    const res = await createLead({ formData });
    setLoading(false);
    if (res.success) {
      toast.success("Lead created successfully!");
      router.push("/");
    } else if (!res.success) {
      toast.error("Failed to create lead!");
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
            label="Mobile No."
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
            required
          />
        </div>
      </div>

      {/* ADDRESS */}
      <div>
        <h2 className="lg:text-2xl text-xl font-semibold mb-4 border-b pb-2">
          Address
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
            type="number"
            value={formData.pincode}
            onChange={handleChange}
            error={errors.pincode}
            required
          />
        </div>
      </div>

      {/* PROPERTY DETAILS */}
      <div>
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
            label="Property Size"
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
      </div>

      {/* ADDITIONAL INFO */}
      <div>
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
