/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://blog-next-7ngvuu396-alek30k.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
