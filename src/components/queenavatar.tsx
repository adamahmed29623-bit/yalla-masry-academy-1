"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface QueenAvatarProps {
  message?: string;
  status?: 'idle' | 'success' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

export default function QueenAvatar({ message, status = 'idle', size = 'md' }: QueenAvatarProps) {
  // تحديد الأحجام
  const sizes = {
    sm: "w-16 h-16",
    md: "w-32 h-32",
    lg: "w-48 h-48"
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        {/* هالة ضوئية متفاعلة خلف الملكة */}
        <motion.div 
          animate={{ 
            scale: status === 'success' ? [1, 1.2, 1] : 1,
            opacity: status === 'success' ? [0.2, 0.5, 0.2] : 0.2
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute inset-0 rounded-full blur-2xl ${
            status === 'success' ? 'bg-gold-500' : status === 'error' ? 'bg-red-500' : 'bg-blue-500'
          }`}
        />
        
        {/* صورة الأفاتار */}
        <motion.img 
          src="/nefertiti-avatar.png" 
          alt="Queen Nefertiti"
          animate={status === 'success' ? { y: [0, -10, 0] } : {}}
          className={`${sizes[size]} rounded-full border-4 border-gold-500 shadow-2xl relative z-10 object-cover`}
        />
      </div>

      {/* فقاعة النص الملكية */}
      {message && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md border border-gold-500/30 p-4 rounded-2xl max-w-xs text-center shadow-xl"
        >
          <p className="text-gold-400 text-sm font-black italic">نفرتيتي تقول:</p>
          <p className="text-white font-bold text-base">{message}</p>
        </motion.div>
      )}
    </div>
  );
}
