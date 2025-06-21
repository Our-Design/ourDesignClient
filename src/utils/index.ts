export function formatDate(isoDateString: string): string {
  const date = new Date(isoDateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", // 'short' for abbreviated month, or '2-digit'
    day: "numeric",
  });
}

export const dummyData = [
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
