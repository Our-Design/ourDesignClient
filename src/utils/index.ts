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
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Living room with sofas",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Kitchen",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Stylish Bedroom",
  },

  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1683141179507-734e6157ddba?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Stylish Kitchen Interior Decoration With Modern Design Elements",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1675616575391-45c8d9df6c63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Drawing Room With TV Unit",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1504963387610-bd7e38556ef3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "LED High Glossy Laminates WPC Panels",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1723200799114-358266b94a5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Decorative Wall Mirror",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1563973153236-794eef98609f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hallway Design With Hanging Lights",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1560964125-def77e725dbd?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Living Room Sofa, Rugs and Curtains Texture",
  },
];
