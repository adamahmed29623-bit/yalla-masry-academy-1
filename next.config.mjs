/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // هذا السطر يمنع محاولة الاتصال بالخارج أثناء البناء
  output: 'standalone', 
};

export default nextConfig;
