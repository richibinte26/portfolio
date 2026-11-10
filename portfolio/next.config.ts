import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Linting is not set up in this starter; type errors still fail the build.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
