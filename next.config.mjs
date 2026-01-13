/** @type {import('next').NextConfig} */
const nextConfig = {
  // أزلنا سطر output: 'export' للهروب من تعقيدات generateStaticParams
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // سنترك الخصائص الأخرى كما هي للحفاظ على استقرار النظام
};

export default nextConfig;
