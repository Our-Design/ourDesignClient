"use client";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavLinks = [
    "Home",
    "How It Works",
    "Benefits",
    "Pricing",
    "Testimonials",
    "PremiumLeads",
    "Get Started",
  ];
  return (
    <nav className="fixed z-1 w-full flex py-4 bg-zinc-900 text-white justify-between items-center lg:px-35 md:px-10 px-5 ">
      <button
        // onClick={() => scrollToSection(0)}
        className="font-bold text-2xl cursor-pointer"
      >
        InteriorLeads
      </button>
      <div
        className="block md:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenu />
      </div>
      <div
        className={`absolute top-15 left-0 px-5 md:static md:max-w-[620px] w-full md:flex md:flex-row justify-between ${
          isOpen ? "flex flex-col bg-zinc-900 " : "hidden"
        }`}
      >
        {NavLinks.map((link, idx) => (
          <button
            key={idx}
            onClick={() => {
              // scrollToSection(idx);
              setIsOpen(false);
            }}
            className={`cursor-pointer hover:text-blue-500 text-start md:p-0 py-2 px-5 w-full 
            md:max-w-max hover:bg-zinc-100 md:hover:bg-zinc-900 ${
              idx === NavLinks.length - 1
                ? isOpen
                  ? "bg-blue-500 rounded-md"
                  : "text-blue-500"
                : ""
            }
            ${idx === 5 && "hidden"}`}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Header;
