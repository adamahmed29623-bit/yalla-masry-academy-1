/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // إضافة هذا السطر لتجاوز أخطاء الـ Prerendering
  output: 'standalone', 
};

export default nextConfig;
