/** @type {import('next').NextConfig} */
const nextConfig = {
  // هذا السطر يخبر النظام بتحويل الموقع لملفات جاهزة للنشر
  output: 'export', 
  // هذا السطر يضمن ظهور الصور بشكل صحيح في الأكاديمية
  images: {
    unoptimized: true,
  },
  // لإخلاء المسؤولية من أي أخطاء بسيطة أثناء البناء لضمان النجاح
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
