'use client';

import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#001524] text-white p-8">
      {/* هيدر داخلي مدمج */}
      <div className="mb-12 border-b border-[#D4AF37]/30 pb-6 flex justify-between items-center">
        <div>
          <h1 className="text-[#D4AF37] text-3xl font-bold tracking-widest uppercase">Dashboard</h1>
          <p className="text-gray-400 mt-2">مرحباً بكِ في لوحة تحكم الأكاديمية</p>
        </div>
        <div className="text-[#D4AF37] border border-[#D4AF37] px-4 py-1 rounded-full text-xs">
          ROYAL ACCESS
        </div>
      </div>

      {/* محتوى الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Students', value: '1,250' },
          { label: 'Active Courses', value: '14' },
          { label: 'Revenue', value: 'EGP 45,000' }
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-[#D4AF37]/10 p-6 rounded-2xl backdrop-blur-sm">
            <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            <p className="text-[#D4AF37] text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
