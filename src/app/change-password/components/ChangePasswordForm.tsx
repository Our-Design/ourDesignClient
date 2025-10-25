"use client";
import { changePassword } from "@/actions/changePassword";
import PasswordInput from "@/components/PasswordInput";
import SpinnerLocal from "@/components/SpinnerLocal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  }>({});
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!oldPassword.trim())
      newErrors.oldPassword = "Current password is required.";
    if (!newPassword.trim())
      newErrors.newPassword = "New password is required.";
    else if (newPassword.length < 6)
      newErrors.newPassword = "Password must be at least 6 characters.";
    if (!confirmPassword.trim())
      newErrors.confirmPassword = "Confirm password is required.";
    else if (newPassword !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    const response = await changePassword({
      oldPassword,
      newPassword,
      confirmPassword,
    });
    setIsLoading(false);

    if (!response.success) {
      toast.error(response.message || "Failed to change password!");
      return;
    }

    toast.success(response.message || "Password changed successfully!");
    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl p-10 lg:px-20 px-8 space-y-6 flex flex-col max-w-md w-full"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Change Password</h2>
        <p className="text-gray-600 text-sm">
          Please enter your current password and choose a new password.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Current Password
        </label>
        <PasswordInput
          isVisible={showOldPassword}
          setIsVisible={setShowOldPassword}
          state={oldPassword}
          setter={(val) => {
            setOldPassword(val);
            setErrors((prev) => ({ ...prev, oldPassword: "" }));
          }}
          placeholder="Enter current password"
        />
        {errors.oldPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.oldPassword}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">New Password</label>
        <PasswordInput
          isVisible={showNewPassword}
          setIsVisible={setShowNewPassword}
          state={newPassword}
          setter={(val) => {
            setNewPassword(val);
            setErrors((prev) => ({ ...prev, newPassword: "" }));
          }}
          placeholder="Enter new password (min. 6 characters)"
        />
        {errors.newPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Confirm New Password
        </label>
        <PasswordInput
          isVisible={showConfirmPassword}
          setIsVisible={setShowConfirmPassword}
          state={confirmPassword}
          setter={(val) => {
            setConfirmPassword(val);
            setErrors((prev) => ({ ...prev, confirmPassword: "" }));
          }}
          placeholder="Confirm new password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <button
          type="submit"
          className="px-8 py-3 bg-primary rounded shadow-lg hover:scale-101 cursor-pointer hover:shadow-xl text-white font-bold uppercase disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? <SpinnerLocal /> : "Change Password"}
        </button>
        <Link href="/dashboard">
          <button
            type="button"
            className="w-full px-8 py-3 bg-gray-200 rounded shadow-lg hover:scale-101 cursor-pointer hover:shadow-xl font-bold uppercase"
          >
            Cancel
          </button>
        </Link>
      </div>

      <div className="lg:text-sm text-xs text-center text-gray-600">
        Password must be at least 6 characters long.
      </div>
    </form>
  );
};

export default ChangePasswordForm;
