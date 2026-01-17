/** @type {import('next').NextConfig} */
const nextConfig = {
  // تفعيل استخراج الملفات كصفحات ثابتة للهوستنجر
  output: 'export',
  
  // لضمان عمل الصور بشكل صحيح بدون سيرفر Node.js
  images: {
    unoptimized: true,
  },
  
  // الحفاظ على الهوية الملكية للأكاديمية
  reactStrictMode: true,
};

export default nextConfig;
