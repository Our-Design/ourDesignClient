"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import DesignIdeasNavigation from "./DesignIdeasNavigation";
import { CgProfile } from "react-icons/cg";
import { logout } from "@/actions/logout";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const NavLinksComponent = ({ isAuthorized }: { isAuthorized: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
    setIsLoggingOut(false);
    toast.success("Logged out successfully!");
    router.push("/");
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="block md:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenu />
      </div>
      <div
        className={`absolute top-15 left-0 px-5 md:static w-full md:flex md:flex-row justify-end items-center gap-6 ${
          isOpen ? "flex flex-col backdrop-blur-2xl bg-white py-6" : "hidden"
        }`}
      >
        {isAuthorized?.length ? (
          <Link
            href="/dashboard"
            className="hover:font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
        ) : null}
        {isAuthorized?.length ? (
          <Link
            href="/my-leads"
            className="hover:font-semibold"
            onClick={() => setIsOpen(false)}
          >
            My Leads
          </Link>
        ) : null}
        <DesignIdeasNavigation setIsOpen={setIsOpen} />
        <Link href="/blogs" onClick={() => setIsOpen(false)}>
          <button className="cursor-pointer hover:font-semibold text-primary">
            Blogs
          </button>
        </Link>
        {isAuthorized?.length ? (
          <button
            onClick={handleLogout}
            className="cursor-pointer hover:font-semibold text-primary"
          >
            Logout
          </button>
        ) : (
          <Link href="/login" onClick={() => setIsOpen(false)}>
            <CgProfile className="text-2xl cursor-pointer" />
          </Link>
        )}
        <Link href="/enquire" onClick={() => setIsOpen(false)}>
          <button className="bg-primary text-white shadow-lg p-2 px-4 font-medium rounded-lg cursor-pointer hover:bg-black">
            Enquire Now
          </button>
        </Link>

        {isLoggingOut && <Spinner />}
      </div>
    </>
  );
};

export default NavLinksComponent;
