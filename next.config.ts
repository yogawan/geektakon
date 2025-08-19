// next.config.mjs
import withPWAInit from "next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // biar di dev gak ganggu
});

const nextConfig = withPWA({
  reactStrictMode: true,
});

export default nextConfig;
