/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // هذه هي اللمسة السحرية
  images: {
    unoptimized: true, // ضروري عند استخدام التصدير الثابت
  },
  // بقية إعداداتكِ كما هي...
};

export default nextConfig;
