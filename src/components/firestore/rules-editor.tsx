'use client';

import React, { useState, useEffect } from 'react';
// استخدام useActionState بدلاً من useFormState للتوافق مع React 19/Next.js 15
import { useActionState } from 'react'; 
import { handleGenerateRules, handleSuggestImprovements } from '@/app/actions/firestore-actions';

export default function RulesEditor() {
  // الحالة الابتدائية المصححة لضمان عدم حدوث Type Error
  const initialState = {
    message: "",
    errors: {},
    success: false
  };

  const [generateState, generateAction] = useActionState(handleGenerateRules, initialState);
  const [improveState, improveAction] = useActionState(handleSuggestImprovements, {
    ...initialState,
    vulnerabilitiesIdentified: [],
    performanceSuggestions: []
  });

  return (
    <div className="p-6 bg-[#0a1a31] border border-gold-500/20 rounded-3xl shadow-2xl text-white" dir="rtl">
      <h2 className="text-2xl font-black text-gold-500 mb-6 italic">حصن البيانات الملكي</h2>
      
      <form action={generateAction} className="space-y-6">
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm mb-4">هذا القسم مسؤول عن حماية بيانات الأكاديمية بقوة فرعونية لا تخترق.</p>
          <button 
            type="submit"
            className="px-8 py-3 bg-gold-500 text-black font-black rounded-xl hover:bg-white transition-all shadow-lg"
          >
            تحديث القواعد الأمنية
          </button>
        </div>
        
        {generateState?.message && (
          <p className="mt-4 text-gold-400 font-bold">{generateState.message}</p>
        )}
      </form>
    </div>
  );
}
