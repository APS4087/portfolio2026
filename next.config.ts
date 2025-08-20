import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // This will be available on both server and client
    NEXT_PUBLIC_OPENWEATHER_API_KEY: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
  },
  // Enable React Strict Mode
  reactStrictMode: true,
};

export default nextConfig;
