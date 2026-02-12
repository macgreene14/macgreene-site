import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath not needed with custom domain (macgreene.com)
  images: { unoptimized: true },
};

export default nextConfig;
