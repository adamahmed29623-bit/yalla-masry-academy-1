'use client';

import React from 'react';
import { useFirebase } from '@/firebase';
import { useParams } from 'next/navigation';
import { LayoutDashboard, ShoppingBag, MessageCircle, Quote, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function AdminSidebar() {
  const { auth } = useFirebase();
  const params = useParams();

  const menuItems = [
    { name: 'لوحة التحكم', icon: <LayoutDashboard size={20} />, href: '/admin' },
    { name: 'إدارة المتجر', icon: <ShoppingBag size={20} />, href: '/admin/store-management' },
    { name: 'أحاديث اليوم', icon: <MessageCircle size={20} />, href: '/admin/hadith-management' },
    { name: 'عبارات ملهمة', icon: <Quote size={20} />, href: '/admin/quotes-management' },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#0a1a31] border-l border-gold-500/20 p-6 flex flex-col shadow-2xl">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-black text-gold-500 italic tracking-tighter">نفرتيتي</h2>
        <p className="text-[10px] text-gold-400/60 uppercase tracking-[0.2em]">الإدارة الملكية</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-gold-500/10 hover:text-gold-400 transition-all group"
          >
            <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
            <span className="font-bold">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="pt-6 border-t border-white/5">
        <button 
          onClick={() => auth?.signOut()}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-bold"
        >
          <LogOut size={20} />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </div>
  );
}
