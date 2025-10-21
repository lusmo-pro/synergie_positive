import { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/synergie_positive",  // si tu veux garder le repo comme base
  trailingSlash: true,             // optionnelle sur Vercel
  transpilePackages: ["swiper"],   // pour que Swiper fonctionne correctement
};

export default nextConfig;