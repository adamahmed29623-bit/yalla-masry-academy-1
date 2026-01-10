/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // هذه هي اللمسة الملكية الحاسمة
  images: {
    unoptimized: true, // ضروري لأن Cloudflare Pages لا يدعم تحسين الصور التلقائي لـ Next.js
  },
};

export default nextConfig;
