"use client"; // ضروري جداً لتشغيل الأزرار والتنقل

import React, { useState } from 'react';

export default function FinalGoalsPage() {
  const [step, setStep] = useState(1); // 1 للأهداف، 2 للمستويات

  return (
    <div style={containerStyle}>
      {/* زخرفة علوية فرعونية بسيطة */}
      <div style={crownDecoration}>𓋹 𓇳 𓁺</div>

      {step === 1 ? (
        /* --- المرحلة الأولى: تحديد الهدف الملكي --- */
        <div style={contentWrapper}>
          <h1 style={goldTitle}>ادخلي المملكة أيتها الملكة..</h1>
          <p style={silverText}>حددي هدفكِ اليوم لنسطر معاً أمجاداً جديدة</p>
          
          <div style={gridStyle}>
            <button style={goalButtonStyle} onClick={() => setStep(2)}>
              <span style={hieroglyph}>𓇳</span> إتقان اللهجة المصرية
            </button>
            <button style={goalButtonStyle} onClick={() => setStep(2)}>
              <span style={hieroglyph}>𓍹</span> حفظ القرآن الكريم
            </button>
            <button style={goalButtonStyle} onClick={() => setStep(2)}>
              <span style={hieroglyph}>𓁲</span> تعلم القيم والأخلاق
            </button>
          </div>
        </div>
      ) : (
        /* --- المرحلة الثانية: تحديد المستوى الملكي --- */
        <div style={contentWrapper}>
          <h1 style={goldTitle}>مستواكِ إيه يا جميلة الجميلات؟</h1>
          <p style={silverText}>كل ملكة تبدأ بخطوة لتصل إلى العرش</p>
          
          <div style={levelGrid}>
            {/* مستوى مبتدئ */}
            <div style={levelCard}>
              <div style={iconCircle}>𓆸</div>
              <h3 style={levelName}>زهرة اللوتس</h3>
              <p style={levelDesc}>أنا مبتدئة أكتشف سحر اللغة المصرية</p>
              <button style={actionButton} onClick={() => window.location.href = '/challenge'}>اختيار</button>
            </div>

            {/* مستوى متوسط */}
            <div style={levelCard}>
              <div style={iconCircle}>𓋹</div>
              <h3 style={levelName}>الملكة الشابة</h3>
              <p style={levelDesc}>أعرف القليل وأطمح للكثير من المعرفة</p>
              <button style={actionButton} onClick={() => window.location.href = '/challenge'}>اختيار</button>
            </div>

            {/* مستوى متقدم */}
            <div style={levelCard}>
              <div style={iconCircle}>𓁲</div>
              <h3 style={levelName}>نفرتيتي الصغيرة</h3>
              <p style={levelDesc}>أتحدث بطلاقة وأعشق التحديات الكبرى</p>
              <button style={actionButton} onClick={() => window.location.href = '/challenge'}>اختيار</button>
            </div>
          </div>
          
          <button style={backButton} onClick={() => setStep(1)}>← العودة للأهداف</button>
        </div>
      )}
    </div>
  );
}

// --- التنسيقات الملكية النهائية (فرعوني فخم) ---
const containerStyle = {
  backgroundColor: '#050a14', // كحلي غامق جداً قريب للأسود
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 20px',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  direction: 'rtl',
};

const crownDecoration = {
  color: '#d4af37',
  fontSize: '2rem',
  marginBottom: '20px',
  letterSpacing: '15px'
};

const contentWrapper = {
  textAlign: 'center',
  maxWidth: '1000px',
  width: '100%',
};

const goldTitle = {
  color: '#d4af37',
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  marginBottom: '15px',
  fontWeight: 'bold',
  textShadow: '2px 2px 8px rgba(212, 175, 55, 0.3)',
};

const silverText = {
  color: '#cbd5e1',
  fontSize: '1.3rem',
  marginBottom: '50px',
};

const gridStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center'
};

const goalButtonStyle = {
  width: '100%',
  maxWidth: '450px',
  padding: '20px 30px',
  backgroundColor: 'rgba(212, 175, 55, 0.05)',
  color: '#d4af37',
  border: '2px solid #d4af37',
  borderRadius: '15px',
  fontSize: '1.4rem',
  cursor: 'pointer',
  transition: '0.3s all',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
};

const hieroglyph = { fontSize: '2rem' };

const levelGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '30px',
  marginTop: '10px'
};

const levelCard = {
  backgroundColor: '#0f172a',
  padding: '35px 20px',
  borderRadius: '25px',
  border: '1px solid #1e293b',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: '0.4s transform',
  boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
};

const iconCircle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#d4af37',
  color: '#050a14',
  fontSize: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
};

const levelName = { color: '#fff', fontSize: '1.6rem', marginBottom: '10px' };

const levelDesc = { color: '#94a3b8', fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.6' };

const actionButton = {
  padding: '12px 40px',
  backgroundColor: '#d4af37',
  color: '#050a14',
  border: 'none',
  borderRadius: '10px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer'
};

const backButton = {
  marginTop: '50px',
  background: 'none',
  border: 'none',
  color: '#94a3b8',
  fontSize: '1.1rem',
  cursor: 'pointer',
  textDecoration: 'underline'
};
