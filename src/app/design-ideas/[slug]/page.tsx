import Image from "next/image";
import React from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const DesignIdeasComponent = async ({ params }: PageProps) => {
  const { slug } = await params;
  const dummyData = [
    {
      imgSrc:
        "https://images.kreatecube.com/usefull/vendor/28756/Gallery/19291.jpg?tr=w-380,h-200,c-force,bg-f4f5f7,f-webp",
      title: "Modern Wooden & White TV Unit design",
    },
    {
      imgSrc:
        "https://images.kreatecube.com/usefull/vendor/26530/Gallery/19060.jpeg?tr=w-380,h-200,c-force,bg-f4f5f7,f-webp",
      title: "Sophisticated Modern Hall Design With Decor Elements",
    },
    {
      imgSrc:
        "https://images.kreatecube.com/usefull/vendor/20973/Gallery/19252.jpg?tr=w-380,h-200,c-force,bg-f4f5f7,f-webp",
      title: "Elegant Traditional Pooja Room With White Carvings",
    },
    {
      imgSrc:
        "https://images.kreatecube.com/usefull/vendor/34778/Gallery/19377.jpg?tr=w-380,h-200,c-force,bg-f4f5f7,f-webp",
      title: "Elegant Pooja Unit With Intricate Carvings",
    },
    {
      imgSrc:
        "https://images.kreatecube.com/usefull/vendor/26530/Gallery/19058.jpeg?tr=w-380,h-200,c-force,bg-f4f5f7,f-webp",
      title: "Stylish Kitchen Interior Decoration With Modern Design Elements",
    },
    {
      imgSrc:
        "https://images.kreatecube.com/usefull/vendor/39885/Gallery/17837.jpeg?tr=w-380,h-200,c-force,bg-f4f5f7,f-webp",
      title: "Modern Drawing Room With TV Unit",
    },
    {
      imgSrc:
        "https://images.kreatecube.com/usefull/vendor/38067/Gallery/17110.webp?tr=w-380,h-200,c-force,bg-f4f5f7,f-webp",
      title: "LED High Glossy Laminates WPC Panels",
    },
    {
      imgSrc:
        "https://images.kreatecube.com/usefull/vendor/32453/Gallery/13633.jpg?tr=w-380,h-200,c-force,bg-f4f5f7,f-webp",
      title: "Decorative Wall Mirror",
    },
    {
      imgSrc:
        "https://images.kreatecube.com/usefull/vendor/32453/Gallery/13626.jpg?tr=w-380,h-200,c-force,bg-f4f5f7,f-webp",
      title: "Hallway Design With Hanging Lights",
    },
    {
      imgSrc:
        "https://images.kreatecube.com/usefull/vendor/24818/Gallery/10499.jpeg?tr=w-380,h-200,c-force,bg-f4f5f7,f-webp",
      title: "Living Room Sofa, Rugs and Curtains Texture",
    },
  ];

  return (
    <main className="px-8 bg-secondary py-10 pb-20">
      <h2 className="capitalize text-2xl font-bold">{slug}</h2>
      <p className="mb-10">Result found({dummyData.length})</p>

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
