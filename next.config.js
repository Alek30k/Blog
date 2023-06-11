/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  headers: [
    { key: "Access-Control-Allow-Credentials", value: "true" },
    {
      key: "Access-Control-Allow-Origin",
      value: "https://blog-next-hcrqw2j5i-alek30k.vercel.app",
    },
    // ...
  ],
};

module.exports = nextConfig;
