import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "cdn.culture.ru",
      },
      {
        protocol: "https",
        hostname: "must-see.top",
      },
      {
        protocol: "https",
        hostname: "*.dzeninfra.ru",
      },
      // если будешь добавлять ещё домены — просто дописывай сюда
    ],
  },
};

export default nextConfig;
