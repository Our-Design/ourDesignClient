"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import DesignIdeasNavigation from "./DesignIdeasNavigation";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-1 w-full backdrop-blur supports-[backdrop-filter]:bg-secondary/40 flex py-4 justify-between items-center px-8">
      <Link
        // onClick={() => scrollToSection(0)}
        href="/"
        className="font-bold text-3xl cursor-pointer"
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
          isOpen ? "flex flex-col backdrop-blur bg-white py-6" : "hidden"
        }`}
      >
        {/* <span className="text-primary hover:bg-blue-800 cursor-pointer font-medium hover:text-white p-2 px-6 rounded-3xl">
          Get Started
        </span>
        <button className="p-2 px-4 mb-8 lg:mb-0 font-medium bg-white cursor-pointer hover:bg-gray-200 text-black rounded-md">
          Download App
        </button> */}
        <DesignIdeasNavigation setIsOpen={setIsOpen} />
        <Link href="/blogs" onClick={() => setIsOpen(false)}>
          <button className="cursor-pointer hover:font-semibold text-primary">
            Blogs
          </button>
        </Link>
        <Link href="/login" onClick={() => setIsOpen(false)}>
          <CgProfile className="text-2xl cursor-pointer" />
        </Link>
        <Link href="/enquire" onClick={() => setIsOpen(false)}>
          <button className="bg-primary text-white shadow-lg p-2 px-4 font-medium rounded-lg cursor-pointer hover:bg-black">
            Enquire Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
