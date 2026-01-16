"use client";
import React from 'react';

export default function Home() {
  return (
    <div style={containerStyle}>
      {/* الجزء العلوي: ترحيب ملكي */}
      <header style={headerStyle}>
        <h1 style={titleStyle}>أكاديمية يلا مصري</h1>
        <p style={subtitleStyle}>مرحباً بكِ في قصر اللغة والثقافة</p>
      </header>

      {/* نموذج التسجيل: ألوان واضحة وفخمة */}
      <div style={formCardStyle}>
        <h2 style={{ color: '#fff', marginBottom: '20px' }}>إنشاء حساب ملكي</h2>
        
        <label style={labelStyle}>الاسم الكريم</label>
        <input type="text" placeholder="اكتبي اسمك هنا" style={inputStyle} />

        <label style={labelStyle}>البريد الإلكتروني</label>
        <input type="email" placeholder="example@mail.com" style={inputStyle} />

        <label style={labelStyle}>كلمة السر</label>
        <input type="password" placeholder="••••••••" style={inputStyle} />

        <label style={labelStyle}>من أنتِ؟</label>
        <select style={inputStyle}>
          <option value="student">أنا ملكة (طالبة)</option>
          <option value="teacher">أنا مرشدة (معلمة)</option>
          <option value="parent">ولي أمر ملكي</option>
        </select>

        <button style={mainButtonStyle} onClick={() => window.location.href = '/goals'}>
          دخول إلى المملكة
        </button>
      </div>
    </div>
  );
}

// --- التنسيقات الملكية (CSS in JS) ---
const containerStyle = {
  backgroundColor: '#0f172a', // كحلي غامق جداً فخم
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  direction: 'rtl'
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '40px'
};

const titleStyle = {
  color: '#f1d27b', // ذهبي ملكي
  fontSize: '3rem',
  margin: '0',
  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
};

const subtitleStyle = {
  color: '#e2e8f0',
  fontSize: '1.2rem'
};

const formCardStyle = {
  backgroundColor: '#1e293b',
  padding: '40px',
  borderRadius: '20px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
  border: '2px solid #f1d27b',
  width: '100%',
  maxWidth: '450px'
};

const labelStyle = {
  display: 'block',
  color: '#f1d27b',
  marginBottom: '8px',
  textAlign: 'right',
  fontWeight: 'bold'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '20px',
  borderRadius: '10px',
  border: '1px solid #334155',
  backgroundColor: '#f8fafc',
  color: '#0f172a',
  fontSize: '16px',
  outline: 'none'
};

const mainButtonStyle = {
  width: '100%',
  padding: '15px',
  backgroundColor: '#f1d27b',
  color: '#0f172a',
  border: 'none',
  borderRadius: '10px',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: '0.3s'
};
