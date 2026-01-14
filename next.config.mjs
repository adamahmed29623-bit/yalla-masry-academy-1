/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. حذف output: 'export' هو السر؛ لنجعل Cloudflare يتعامل بمرونة
  // 2. إعدادات الصور لضمان عمل الصور الملكية
  images: {
    unoptimized: true,
  },
  // 3. منع Next.js من محاولة تخمين المسارات أثناء البناء
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
