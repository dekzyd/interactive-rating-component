import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/interactive-rating-component",
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true, // Required for SVGs
    contentDispositionType: "attachment", // Prevents XSS
  },
};

export default nextConfig;
