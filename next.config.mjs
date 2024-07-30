/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async headers() {
    return [
      {
        source: "/api/webhook", // Adjust the path as needed
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://cuddly-carnival-pq9w647599vhgpv-3000.app.github.dev",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
