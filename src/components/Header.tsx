"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-1 w-full flex py-4 bg-zinc-900 text-white justify-between items-center px-8">
      <Link
        // onClick={() => scrollToSection(0)}
        href="/"
        className="font-bold text-2xl cursor-pointer"
      >
        OurDesign
      </Link>
      <div
        className="block md:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenu />
      </div>
      <div
        className={`absolute top-15 left-0 px-5 md:static md:max-w-[620px] w-full md:flex md:flex-row justify-end items-center gap-6 ${
          isOpen ? "flex flex-col bg-zinc-900 " : "hidden"
        }`}
      >
        <span className="text-primary hover:bg-blue-800 cursor-pointer font-medium hover:text-white p-2 px-6 rounded-3xl">
          Get Started
        </span>
        <button className="p-2 px-4 font-medium bg-white cursor-pointer hover:bg-gray-200 text-black rounded-md">
          Download App
        </button>
      </div>
    </nav>
  );
};

export default Header;
