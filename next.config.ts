import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['aryzrvchgvkmsdwvmtwu.supabase.co'],
  },
  reactStrictMode: true,
  webpack: (config) => {
    // your custom settings
    
    
    return config;
  },
};

export default nextConfig;
