import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "library.elementor.com",
      },
      {
        protocol: "https",
        hostname: "images.livspace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "artstreet.in",
      },
      {
        protocol: "https",
        hostname: "www.home-designing.com",
      },
      {
        protocol: "https",
        hostname: "images.kreatecube.com",
      },
      {
        protocol: "https",
        hostname: "chiedesign.in",
      },
    ],
  },
};

export default nextConfig;
