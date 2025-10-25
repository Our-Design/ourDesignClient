"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import PasswordInput from "./PasswordInput";
import SpinnerLocal from "./SpinnerLocal";
import { changePassword } from "@/actions/changePassword";
import { toast } from "sonner";

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  }>({});

  const resetForm = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setErrors({});
    setShowOldPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

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
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <IoClose className="text-2xl" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Change Password</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
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
            <label className="block text-sm font-medium mb-2">
              New Password
            </label>
            <PasswordInput
              isVisible={showNewPassword}
              setIsVisible={setShowNewPassword}
              state={newPassword}
              setter={(val) => {
                setNewPassword(val);
                setErrors((prev) => ({ ...prev, newPassword: "" }));
              }}
              placeholder="Enter new password"
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
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300 font-medium"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary text-white rounded shadow hover:scale-101 hover:shadow-lg font-medium disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? <SpinnerLocal /> : "Change Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
