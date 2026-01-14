/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 👑 الأمر الملكي بتقليص الحجم ومنع التخزين الضخم
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false; // منع تكوين ملفات الـ Cache الضخمة التي سببت الخطأ
    }
    return config;
  },
  eslint: {
    ignoreDuringBuild: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
