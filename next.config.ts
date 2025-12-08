import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion", "lucide-react"],
  },
};

export default nextConfig;
