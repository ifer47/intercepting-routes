/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "test.zhihur.com",
      },
    ],
  },
};

export default nextConfig;
