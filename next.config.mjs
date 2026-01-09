/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // هذا سيحول الأكاديمية إلى نظام ثابت تماماً ويتخطى أخطاء الذاكرة
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true }, // ضروري عند استخدام نظام export
};

export default nextConfig;
