import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    {
      path: "privacy-policy",
      label: "Privacy Policy",
    },
    {
      path: "shopping-delivery",
      label: "Shopping & Delivery",
    },
    {
      path: "terms-conditions",
      label: "Terms & Conditions",
    },
    {
      path: "cancellation-refund",
      label: "Cancellation & Refund",
    },
    {
      path: "contact-us",
      label: "Contact Us",
    },
  ];

  return (
    <main className="text-gray-400 bg-zinc-900 px-8">
      <div className="flex lg:flex-row flex-col lg:justify-around gap-10 py-20">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">OurDesign</h3>
          <p className="text-xl">
            Connecting interior designers with quality leads to grow their
            business.
          </p>
          <div className="flex items-center gap-4">
            <a href="#">
              <FaFacebook size={24} />
            </a>
            <a href="#">
              <FaTwitter size={24} />
            </a>
            <a href="#">
              <FaLinkedin size={24} />
            </a>
            <a href="#">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-2xl text-white font-bold mb-6">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link) => {
              return (
                <Link
                  key={link.label}
                  href={link.path}
                  className="hover:text-white"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-8 border-t border-gray-600 text-center">
        <p>© {new Date().getFullYear()} OurDesign. All rights reserved.</p>
      </div>
    </main>
  );
};

export default Footer;
