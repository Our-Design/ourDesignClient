"use client";
import { createPartialLead } from "@/actions/createPartialLead";
import SpinnerLocal from "@/components/SpinnerLocal";
import Image from "next/image";
import React, { useEffect, useState, createContext, useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiUser, FiPhone } from "react-icons/fi";
import { toast } from "sonner";

// Create context for form popup control
interface FormPopupContextType {
  openForm: () => void;
  closeForm: () => void;
  isOpen: boolean;
}

const FormPopupContext = createContext<FormPopupContextType | undefined>(
  undefined
);

export const useFormPopup = () => {
  const context = useContext(FormPopupContext);
  if (!context) {
    throw new Error("useFormPopup must be used within a FormPopupProvider");
  }
  return context;
};

export const FormPopupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);

  const closeForm = () => {
    setIsOpen(false);
    // Store the timestamp when user closes the modal
    const now = new Date().getTime();
    localStorage.setItem("formPopupClosedAt", now.toString());
  };

  // Check if modal should be shown based on 24-hour cooldown
  const shouldShowModal = () => {
    if (typeof window === "undefined") return false;

    const closedAt = localStorage.getItem("formPopupClosedAt");
    if (!closedAt) return true;

    const now = new Date().getTime();
    const timePassed = now - parseInt(closedAt);
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    // If more than 24 hours have passed, clear the storage and show modal
    if (timePassed > twentyFourHours) {
      localStorage.removeItem("formPopupClosedAt");
      return true;
    }

    return false;
  };

  // Auto-open timer (with 24-hour cooldown check)
  useEffect(() => {
    if (!shouldShowModal()) {
      return; // Don't show modal if within 24-hour cooldown
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <FormPopupContext.Provider value={{ openForm, closeForm, isOpen }}>
      {children}
      <FormPopupModal isOpen={isOpen} onClose={closeForm} />
    </FormPopupContext.Provider>
  );
};

const FormPopupModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Valid 10-digit mobile number required";

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
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
    const res = await createPartialLead({ formData });
    setLoading(false);
    if (res.success) {
      toast.success("Thank you for submitting!");
      // Set a longer cooldown after successful submission (e.g., 7 days)
      const now = new Date().getTime();
      const sevenDaysLater = now + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem("formPopupClosedAt", sevenDaysLater.toString());
      onClose();
    } else if (!res.success) {
      toast.error("Internal Server error. Please try again later.");
    }
  };

  return (
    <div
      className={`bg-black/60 backdrop-blur-sm fixed z-50 inset-0 flex justify-center items-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <form
        onSubmit={handleSubmit}
        className={`relative bg-white lg:w-[420px] w-[92%] shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Top accent bar */}
        <div className="h-1.5 bg-primary w-full" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <RxCross2 className="text-xl text-gray-400" />
        </button>

        <div className="px-8 pt-8 pb-8 space-y-6">
          {/* Logo & Header */}
          <div className="flex flex-col items-center text-center space-y-3">
            <Image
              src="/logos/logo.png"
              alt="OurDesign Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Get Free Consultation
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Share your details and our design experts will reach out to you
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 transition-all text-gray-800"
                />
              </div>
              {errors.name && (
                <span className="text-red-500 text-xs">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 transition-all text-gray-800"
                />
              </div>
              {errors.mobile && (
                <span className="text-red-500 text-xs">{errors.mobile}</span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary font-semibold text-white w-full py-3.5 rounded-xl cursor-pointer hover:opacity-90 transition-all shadow-lg shadow-primary/20 text-base"
          >
            {loading ? <SpinnerLocal /> : "Get Started"}
          </button>

          <p className="text-xs text-center text-gray-400">
            By submitting, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </form>
    </div>
  );
};

// Legacy default export for backward compatibility
const FormPopup = FormPopupProvider;

export default FormPopup;
