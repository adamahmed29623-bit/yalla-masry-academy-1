/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👑 ملاحظة ملكية: حذفنا 'output: export' لنعطي فيرسل الحرية
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // تجاهل أخطاء اللغة
  },
  eslint: {
    ignoreDuringBuilds: true, // تجاهل أخطاء التنسيق
  },
  // منع الانهيار بسبب جلب البيانات أثناء البناء
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
};

export default nextConfig;
