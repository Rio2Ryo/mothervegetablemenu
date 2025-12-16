import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aを /achieve-howto 配下で動かす
  basePath: "/achieve-howto",

  images: {
    // next/image 最適化を使わない（現状のまま）
    unoptimized: true
  }
};

export default nextConfig;
