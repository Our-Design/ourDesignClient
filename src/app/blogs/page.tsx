import Image from "next/image";
import React from "react";

const blogData = [
  {
    id: 1,
    category: "Design Trends",
    title: "Top 10 Web Design Trends for 2025",
    description:
      "Stay ahead of the curve with these cutting-edge design trends that will dominate 2025.",
    date: "28-Mar-2025",
    image:
      "https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room.jpg",
  },
  {
    id: 2,
    category: "UI/UX",
    title: "How UX Impacts User Retention",
    description: "A deep dive into how great UX design keeps users engaged.",
    date: "24-Mar-2025",
    image:
      "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/kitchen-m-1662025086-jIt6f.png",
  },
  {
    id: 3,
    category: "Technology",
    title: "AI in Web Development: Boon or Bane?",
    description:
      "Exploring the role of AI in modern web development and its implications.",
    date: "20-Mar-2025",
    image:
      "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/kitchen-m-1662025086-jIt6f.png",
  },
  {
    id: 4,
    category: "Marketing",
    title: "SEO Strategies That Work in 2025",
    description:
      "Master the latest SEO techniques to boost your online presence.",
    date: "15-Mar-2025",
    image:
      "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/kitchen-m-1662025086-jIt6f.png",
  },
  {
    id: 5,
    category: "Development",
    title: "Next.js vs React: Which One Should You Use?",
    description:
      "A comparison between Next.js and React for building modern web apps.",
    date: "10-Mar-2025",
    image:
      "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/kitchen-m-1662025086-jIt6f.png",
  },
  {
    id: 6,
    category: "Freelancing",
    title: "How to Price Your Web Design Services",
    description:
      "A guide for freelancers on pricing their web design projects effectively.",
    date: "05-Mar-2025",
    image:
      "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/kitchen-m-1662025086-jIt6f.png",
  },
  {
    id: 7,
    category: "Startups",
    title: "Building a Brand Identity for Your Startup",
    description: "Tips on creating a strong and memorable brand identity.",
    date: "01-Mar-2025",
    image:
      "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/kitchen-m-1662025086-jIt6f.png",
  },
];

const Blogs = () => {
  return (
    <div className="py-10 px-8 lg:px-16 bg-secondary">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
      <div className="grid md:grid-cols-2 gap-8 lg:py-10">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={100}
              height={100}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-primary bg-soft px-3 py-1 rounded-full">
                {blog.category}
              </span>
              <h3 className="text-xl font-bold mt-4">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 text-sm">📅 {blog.date}</span>
                <button className="bg-soft text-primary px-4 py-2 rounded-md hover:shadow-lg cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
