import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.norrahalkbanan.se",
      },
    ],
  },
};

export default nextConfig;
