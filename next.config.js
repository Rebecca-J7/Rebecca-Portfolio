/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
  },
  basePath: "/Rebecca-Portfolio",
  assetPrefix: "/Rebecca-Portfolio/",
};

module.exports = nextConfig;
