"use client";
import React, { useState, useEffect, CSSProperties } from 'react';
import { auth } from './lib/firebase'; // تأكدي من مسار الملف
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function NefertitiAcademy() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // مراقبة حالة المستخدم (هل هو داخل المملكة أم لا؟)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // وظيفة فتح بوابات المملكة (تسجيل الدخول)
  const handleAuth = async (type: 'login' | 'signup') => {
    try {
      if (type === 'signup') {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      alert("خطأ في الدخول للمملكة: " + error.message);
    }
  };

  // إذا لم يكن المستخدم مسجلاً، تظهر صفحة الدخول الملكية
  if (!user) {
    return (
      <div style={authBg}>
        <div style={royalCard}>
          <div style={crownIcon}>🏺</div>
          <h1 style={goldText}>بوابة نفرتيتي الملكية</h1>
          <input type="email" placeholder="البريد الملكي" onChange={(e) => setEmail(e.target.value)} style={inputField} />
          <input type="password" placeholder="كلمة السر" onChange={(e) => setPassword(e.target.value)} style={inputField} />
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button onClick={() => handleAuth('login')} style={primaryBtn}>دخول العرش</button>
            <button onClick={() => handleAuth('signup')} style={secondaryBtn}>إنشاء هوية</button>
          </div>
        </div>
      </div>
    );
  }

  // الواجهة الرئيسية بعد تسجيل الدخول (التصميم الفخم المرتب)
  return (
    <div style={dashboardBg}>
      <nav style={royalNav}>
        <div style={goldText}>🏺 نفرتيتي الملكية</div>
        <div style={navItems}>
          <button onClick={() => setActiveTab('home')} style={activeTab === 'home' ? activeLink : link}>الرئيسية</button>
          <button onClick={() => setActiveTab('goals')} style={activeTab === 'goals' ? activeLink : link}>أهدافي</button>
          <button onClick={() => setActiveTab('challenges')} style={activeTab === 'challenges' ? activeLink : link}>التحديات</button>
        </div>
        <button onClick={() => signOut(auth)} style={logoutBtn}>خروج</button>
      </nav>

      <main style={mainContent}>
        {activeTab === 'home' && (
          <div style={fadeIn}>
            <h1 style={heroTitle}>أهلاً بكِ في عرشك، {user.email?.split('@')[0]}</h1>
            <p style={subHero}>"نحن لا نبني مشروعاً، نحن نعيد صياغة الهوية"</p>
            <div style={xpCounter}>✨ XP 1250</div>
          </div>
        )}

        {/* هنا يمكنك إضافة أقسام الأهداف والتحديات بنفس النمط */}
        {activeTab === 'goals' && <h2 style={goldText}>المسارات الملكية قيد التجهيز...</h2>}
        {activeTab === 'challenges' && <h2 style={goldText}>التحديات السحرية في انتظارك...</h2>}
      </main>
    </div>
  );
}

// --- التنسيقات (Styles) مستوحاة من صورك الأخيرة ---
const authBg: CSSProperties = { background: '#05050a', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' };
const dashboardBg: CSSProperties = { background: 'radial-gradient(circle, #1a1a2e, #05050a)', minHeight: '100vh', color: '#fff' };
const royalCard: CSSProperties = { background: 'rgba(255,255,255,0.03)', padding: '50px', borderRadius: '30px', border: '1px solid #D4AF37', textAlign: 'center', width: '400px' };
const goldText: CSSProperties = { color: '#D4AF37', fontWeight: 'bold' };
const inputField: CSSProperties = { display: 'block', width: '100%', margin: '15px 0', padding: '12px', background: '#111', border: '1px solid #333', color: '#fff', borderRadius: '10px' };
const primaryBtn: CSSProperties = { flex: 1, padding: '12px', background: '#D4AF37', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' };
const secondaryBtn: CSSProperties = { ...primaryBtn, background: 'none', border: '1px solid #D4AF37', color: '#D4AF37' };
const royalNav: CSSProperties = { display: 'flex', justifyContent: 'space-between', padding: '20px 40px', background: 'rgba(0,0,0,0.5)', borderBottom: '1px solid #D4AF37' };
const navItems: CSSProperties = { display: 'flex', gap: '25px' };
const link: CSSProperties = { background: 'none', border: 'none', color: '#fff', cursor: 'pointer' };
const activeLink: CSSProperties = { ...link, color: '#D4AF37', borderBottom: '2px solid #D4AF37' };
const mainContent: CSSProperties = { padding: '100px 20px', textAlign: 'center' };
const heroTitle: CSSProperties = { fontSize: '3rem', color: '#D4AF37' };
const subHero: CSSProperties = { color: '#aaa', fontStyle: 'italic' };
const xpCounter: CSSProperties = { marginTop: '30px', fontSize: '1.5rem', color: '#D4AF37' };
const crownIcon: CSSProperties = { fontSize: '50px', marginBottom: '20px' };
const logoutBtn: CSSProperties = { background: 'none', border: '1px solid #ff4444', color: '#ff4444', padding: '5px 15px', borderRadius: '8px', cursor: 'pointer' };
const fadeIn: CSSProperties = { animation: 'fadeIn 0.5s ease-in' };
