import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    {
      path: "privacy-policy",
      label: "Privacy Policy",
    },
    // {
    //   path: "shopping-delivery",
    //   label: "Shopping & Delivery",
    // },
    {
      path: "terms-conditions",
      label: "Terms & Conditions",
    },
    // {
    //   path: "cancellation-refund",
    //   label: "Cancellation & Refund",
    // },
    {
      path: "contact-us",
      label: "Contact Us",
    },
  ];

  return (
    <main className="text-gray-400 bg-primary px-8">
      <div className="flex lg:flex-row flex-col lg:justify-around gap-10 py-20">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-background">OurDesign</h3>
          <p className="text-xl">
            Connecting interior designers with quality leads to grow their
            business.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/our__design"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow us on Instagram"
            >
              <div className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 group-hover:shadow-lg">
                <FaInstagram
                  size={20}
                  className="text-background group-hover:text-pink-200"
                />
              </div>
            </a>
            <a
              href="https://www.facebook.com/people/Our-Design/100063770276463/#"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow us on Facebook"
            >
              <div className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 group-hover:shadow-lg">
                <FaFacebook
                  size={20}
                  className="text-background group-hover:text-blue-200"
                />
              </div>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-bold mb-6 text-background">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link) => {
              return (
                <Link
                  key={link.label}
                  href={link.path}
                  className="hover:text-background"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-8 border-t border-gray-300 text-center">
        <p>© {new Date().getFullYear()} OurDesign. All rights reserved.</p>
      </div>
    </main>
  );
};

export default Footer;
