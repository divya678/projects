import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // your custom settings
    
    return config;
  },
};

export default nextConfig;
