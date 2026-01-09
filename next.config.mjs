/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // استخدام هذا النظام بدلاً من export مؤقتاً لتجنب أخطاء الصفحات الثابتة
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
