import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aを /achieve-howto 配下で動かす
  basePath: "/achieve-howto",

  /* Turbopackを無効化 */
  experimental: {
    turbo: undefined
  },

  images: {
    // next/image 最適化を使わない（現状のまま）
    unoptimized: true
  }
};

export default nextConfig;
