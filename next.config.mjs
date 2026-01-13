/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // هذا السطر سيحل مشكلة المجلد المفقود
  images: {
    unoptimized: true, // ضروري عند استخدام 'export'
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
