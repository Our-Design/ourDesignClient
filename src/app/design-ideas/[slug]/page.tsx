import Image from "next/image";
import React from "react";

const DesignIdeasComponent = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const dummyData = [
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
    {
      imgSrc:
        "https://artstreet.in/cdn/shop/files/916oRo1jirL_700x700.jpg?v=1732259391",
      title: "Traditional Indian Lotus Floral Motif Entice Painting",
    },
  ];

  return (
    <main className="px-8 bg-secondary py-10 pb-20">
      <h2 className="capitalize text-2xl font-bold mb-10">{slug}</h2>

      <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-10">
        {dummyData.map((data, i) => {
          return (
            <div
              key={i}
              className="flex flex-col hover:scale-102 hover:shadow-xl cursor-pointer rounded shadow-lg overflow-hidden bg-white"
            >
              <Image
                src={data.imgSrc}
                alt={data.title}
                width={100}
                height={100}
                className="w-full"
              />
              <h3 className="text-center font-semibold p-3 text-primary">
                {data.title}
              </h3>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default DesignIdeasComponent;
