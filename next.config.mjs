/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
      },
       {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      }
    ],
  },
};

export default nextConfig;
