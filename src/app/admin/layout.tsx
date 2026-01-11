import { Metadata } from "next"

export const metadata: Metadata = {
  title: "لوحة تحكم نفرتيتي الملكية",
  description: "إدارة الصرح التعليمي العالمي",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#050c16] text-white">
      {/* هيدر بسيط وأنيق مدمج لضمان عدم حدوث خطأ في المسارات */}
      <header className="border-b border-gold-500/20 bg-[#0a1a31]/50 backdrop-blur-md">
        <div className="flex h-16 items-center px-6 max-w-7xl mx-auto justify-between">
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-black font-black">N</div>
             <span className="font-black text-gold-400 italic tracking-tighter">NEFERTITI ADMIN</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse text-sm font-medium">
            <a href="/admin" className="hover:text-gold-500 transition-colors">الرئيسية</a>
            <a href="/admin/quran" className="hover:text-gold-500 transition-colors">القرآن</a>
            <a href="/admin/hadiths" className="hover:text-gold-500 transition-colors">الأحاديث</a>
          </nav>

          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full border border-gold-500/50 bg-white/5" />
          </div>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 p-8 pt-6 max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  )
}
