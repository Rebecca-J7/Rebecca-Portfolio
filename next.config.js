/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  exportTrailingSlash: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
  },
  basePath: "/Rebecca-Portfolio",
  assetPrefix: "/Rebecca-Portfolio/",
};

module.exports = nextConfig;
