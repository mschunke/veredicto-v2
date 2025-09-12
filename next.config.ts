import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // Mitigate Chromium "ERR_TOO_MANY_ACCEPT_CH_RESTARTS" by disabling Client Hints
  // See: https://crbug.com/1413458 and related discussions
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Deny all User-Agent Client Hints via Permissions-Policy
          {
            key: "Permissions-Policy",
            value:
              "ch-ua=(), ch-ua-mobile=(), ch-ua-platform=(), ch-ua-arch=(), ch-ua-bitness=(), ch-ua-full-version-list=(), ch-ua-model=(), ch-ua-platform-version=(), ch-device-memory=(), ch-viewport-width=()",
          },
          // Clear Accept-CH and Critical-CH if any upstream adds them
          { key: "Accept-CH", value: "" },
          { key: "Critical-CH", value: "" },
        ],
      },
    ];
  },
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
