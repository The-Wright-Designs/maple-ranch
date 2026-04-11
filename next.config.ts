import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 31536000,
    deviceSizes: [425, 800, 1280],
  },
};

export default nextConfig;
