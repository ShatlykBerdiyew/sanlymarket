/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["sanlymarket.com"],
  },
};

module.exports = nextConfig;
