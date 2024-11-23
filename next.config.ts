import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // disable only fot demo purposes
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
