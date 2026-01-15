/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // تجاهل أخطاء التنسيق أثناء النشر
  },
  typescript: {
    ignoreBuildErrors: true, // تجاهل أخطاء التايب سكريبت لو وجدت
  },
  output: 'standalone', // تحسين الأداء ليتناسب مع السيرفرات
}

module.exports = nextConfig
