"use client";
import React, { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface ProfileDropdownProps {
  onLogout: () => void;
  isLoggingOut: boolean;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  onLogout,
  isLoggingOut,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Profile menu"
      >
        <CgProfile className="text-2xl cursor-pointer text-primary" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <button
            onClick={() => {
              router.push("/change-password");
              setIsOpen(false);
            }}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors"
            disabled={isLoggingOut}
          >
            <RiLockPasswordLine className="text-xl text-primary" />
            <span className="text-sm font-medium">Change Password</span>
          </button>
          <hr className="my-1 border-gray-200" />
          <button
            onClick={() => {
              onLogout();
              setIsOpen(false);
            }}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors text-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoggingOut}
          >
            <IoLogOutOutline className="text-xl" />
            <span className="text-sm font-medium">
              {isLoggingOut ? "Logging out..." : "Logout"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
