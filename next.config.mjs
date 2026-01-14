/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👑 هذا السطر سيقوم بتقليص حجم الملفات لأقصى درجة (تحسين ملكي)
  output: 'standalone', 
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // حذف الكاش لتقليل الحجم
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.cache = false;
    }
    return config;
  },
};
export default nextConfig;
