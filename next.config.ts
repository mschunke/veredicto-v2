import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // Exclude functions folder from Next.js compilation
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        "./functions": "commonjs ./functions",
      });
    }
    return config;
  },
  // Ignore functions folder during type checking
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    dirs: ["app", "components", "lib", "types"], // Only lint these directories
  },
};

export default nextConfig;
