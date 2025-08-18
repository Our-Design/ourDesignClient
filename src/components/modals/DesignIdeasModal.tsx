import Link from "next/link";
import React from "react";

interface DesignIdeasModalProps {
  setModalVisibility: (modalVisibility: boolean) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const DesignIdeasModal = ({
  setModalVisibility,
  setIsOpen,
}: DesignIdeasModalProps) => {
  // const modalLinks1 = [
  //   {
  //     label: "Home Decor",
  //     path: "/home-decor",
  //   },
  //   {
  //     label: "Kids Room",
  //     path: "/kids-room",
  //   },
  //   {
  //     label: "Bedroom",
  //     path: "/bedroom",
  //   },
  //   {
  //     label: "Living Room",
  //     path: "/living-room",
  //   },
  //   {
  //     label: "Dining Room",
  //     path: "/dining-room",
  //   },
  // ];

  // const modalLinks2 = [
  //   {
  //     label: "Kitchen",
  //     path: "/kitchen",
  //   },
  //   {
  //     label: "Office",
  //     path: "/office",
  //   },
  //   {
  //     label: "Wardrobe",
  //     path: "/wardrobe",
  //   },
  //   {
  //     label: "Bath Room",
  //     path: "/bath-room",
  //   },
  //   {
  //     label: "False Ceiling",
  //     path: "/false-ceiling",
  //   },
  // ];

  // const modalLinks3 = [
  //   {
  //     label: "Furniture",
  //     path: "/furniture",
  //   },
  //   {
  //     label: "Outdoor",
  //     path: "/outdoor",
  //   },
  //   {
  //     label: "Wallpaper",
  //     path: "/wallpaper",
  //   },
  //   {
  //     label: "Floor Plans",
  //     path: "/floor-plans",
  //   },
  //   {
  //     label: "Other",
  //     path: "/other",
  //   },
  // ];

  const modalLinks1 = [
    { id: 1, label: "Balcony", path: "balcony" },
    { id: 2, label: "Bathroom", path: "bathroom" },
    { id: 3, label: "Bedroom", path: "bedroom" },
    { id: 4, label: "Boundary Wall", path: "boundary-wall" },
    // { id: 5, label: "Clinic", path: "clinic" },
    // { id: 6, label: "Decoration", path: "decoration" },
    { id: 7, label: "Doors", path: "doors" },
  ];
  const modalLinks2 = [
    { id: 8, label: "Drawing Room", path: "drawing-room" },
    { id: 9, label: "Elevation", path: "elevation" },
    { id: 10, label: "Exterior", path: "exterior" },
    { id: 11, label: "False Ceiling", path: "false-ceiling" },
    { id: 12, label: "Foyer", path: "foyer" },
    { id: 13, label: "Furniture", path: "furniture" },
    { id: 14, label: "Kitchen", path: "kitchen" },
  ];

  const modalLinks3 = [
    { id: 15, label: "LCD Unit", path: "lcd-unit" },
    { id: 16, label: "Lobby", path: "lobby" },
    { id: 17, label: "Mandir", path: "mandir" },
    { id: 19, label: "Office", path: "office" },
    { id: 20, label: "Staircase", path: "staircase" },
    { id: 21, label: "Terrace Garden", path: "terrace-garden" },
  ];
  return (
    <main className="p-6 rounded shadow-lg bg-white border-gray-200 border flex gap-6">
      <div className="space-y-4 flex flex-col border-r border-gray-400">
        {modalLinks1.map((link) => {
          return (
            <Link
              href={`/design-ideas/${link.path}`}
              key={link.label}
              className="lg:w-32 capitalize w-20 max-lg:text-xs hover:text-primary hover:font-semibold"
              onClick={() => {
                setIsOpen(false);
                setModalVisibility(false);
              }}
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
              href={`/design-ideas/${link.path}`}
              key={link.label}
              className="lg:w-32 w-20 max-lg:text-xs hover:text-primary hover:font-semibold"
              onClick={() => {
                setIsOpen(false);
                setModalVisibility(false);
              }}
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
              href={`/design-ideas/${link.path}`}
              key={link.label}
              className="lg:w-32 w-20 max-lg:text-xs hover:text-primary hover:font-semibold"
              onClick={() => {
                setIsOpen(false);
                setModalVisibility(false);
              }}
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
