"use client";
import { createPartialLead } from "@/actions/createPartialLead";
import InputField from "@/components/InputField";
import SpinnerLocal from "@/components/SpinnerLocal";
import React, { useEffect, useState, createContext, useContext } from "react";
import { RxCross2 } from "react-icons/rx";
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
  const closeForm = () => setIsOpen(false);

  // Auto-open timer (existing functionality)
  useEffect(() => {
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
      onClose();
    } else if (!res.success) {
      toast.error("Internal Server error. Please try again later.");
    }
  };

  return (
    <div
      className={`bg-black/70 fixed z-50 inset-0 flex justify-center items-center ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className="relative bg-white lg:w-[35%] w-[90%] shadow-lg space-y-6 lg:p-10 p-6"
      >
        <h2 className="lg:text-4xl text-2xl font-bold">Share your details</h2>
        <RxCross2
          className="absolute lg:top-10 lg:right-10 top-6 right-6 text-2xl cursor-pointer"
          onClick={onClose}
        />
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
        <button className="bg-primary mt-10 font-bold text-background w-full py-3 rounded cursor-pointer">
          {loading ? <SpinnerLocal /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

// Legacy default export for backward compatibility
const FormPopup = FormPopupProvider;

export default FormPopup;
