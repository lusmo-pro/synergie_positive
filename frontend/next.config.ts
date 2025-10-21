import { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,             // optionnelle sur Vercel
  transpilePackages: ["swiper"],   // pour que Swiper fonctionne correctement
};

export default nextConfig;