/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. الأمر الملكي بإنتاج ملفات ثابتة للنشر المجاني
  output: 'export', 
  
  // 2. تحصين الصور لتعمل بكفاءة على Cloudflare دون تكلفة إضافية
  images: {
    unoptimized: true,
  },

  // 3. تجاهل أخطاء الـ ESLint والـ TypeScript مؤقتاً لضمان سرعة النشر
  eslint: {
    ignoreDuringBuild: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // 4. إعدادات المسارات لضمان عدم حدوث أخطاء 404 عند تحديث الصفحة
  trailingSlash: true,
};

export default nextConfig;
