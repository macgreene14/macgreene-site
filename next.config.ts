import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/macgreene-site",
  images: { unoptimized: true },
};

export default nextConfig;
