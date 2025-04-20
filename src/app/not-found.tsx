import Image from "next/image";
import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div className="flex flex-col items-center lg:p-12 p-8">
      <Image
        src="/not-found.jpg"
        alt="404 not found"
        width={400}
        height={400}
      />
      <p className="text-lg mb-3">Oops! Page not found.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-primary text-white rounded hover:opacity-90"
      >
        Go Home
      </Link>
    </div>
  );
};

export default error;
