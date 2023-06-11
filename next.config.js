/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
};ss
module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path*", // Ruta de tu API
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // o el origen específico que deseas permitir
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS", // Métodos permitidos
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Authorization, Content-Type, Accept", // Encabezados permitidos
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
