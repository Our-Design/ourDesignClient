import Link from "next/link";
import React from "react";

const DesignIdeasModal = () => {
  const modalLinks1 = [
    {
      label: "Home Decor",
      path: "/home-decor",
    },
    {
      label: "Kids Room",
      path: "/kids-room",
    },
    {
      label: "Bedroom",
      path: "/bedroom",
    },
    {
      label: "Living Room",
      path: "/living-room",
    },
    {
      label: "Dining Room",
      path: "/dining-room",
    },
  ];

  const modalLinks2 = [
    {
      label: "Kitchen",
      path: "/kitchen",
    },
    {
      label: "Office",
      path: "/office",
    },
    {
      label: "Wardrobe",
      path: "/wardrobe",
    },
    {
      label: "Bath Room",
      path: "/bath-room",
    },
    {
      label: "False Ceiling",
      path: "/false-ceiling",
    },
  ];

  const modalLinks3 = [
    {
      label: "Furniture",
      path: "/furniture",
    },
    {
      label: "Outdoor",
      path: "/outdoor",
    },
    {
      label: "Wallpaper",
      path: "/wallpaper",
    },
    {
      label: "Floor Plans",
      path: "/floor-plans",
    },
    {
      label: "Other",
      path: "/other",
    },
  ];

  return (
    <main className="p-6 rounded shadow-lg bg-white border-gray-200 border flex gap-6">
      <div className="space-y-4 flex flex-col border-r border-gray-400">
        {modalLinks1.map((link) => {
          return (
            <Link
              href={`/design-ideas${link.path}`}
              key={link.label}
              className="w-32 hover:text-primary hover:font-semibold"
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="space-y-4 flex flex-col border-r border-gray-400">
        {modalLinks2.map((link) => {
          return (
            <Link
              href={`/design-ideas${link.path}`}
              key={link.label}
              className="w-32 hover:text-primary hover:font-semibold"
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="space-y-4 flex flex-col">
        {modalLinks3.map((link) => {
          return (
            <Link
              href={`/design-ideas${link.path}`}
              key={link.label}
              className="w-32 hover:text-primary hover:font-semibold"
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default DesignIdeasModal;
