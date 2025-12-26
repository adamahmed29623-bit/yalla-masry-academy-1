'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { 
  Trophy, BookOpen, Gem, Calendar, Clock, 
  ChevronLeft, ChevronRight, Lock, 
  Sparkles, Crown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFirebase } from '@/firebase';
import { useDoc, useMemoFirebase } from '@/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';
import { getDictionary } from '@/dictionaries';
import { i18n, type Locale } from '@/i18n-config';


type DashboardDict = Awaited<ReturnType<typeof getDictionary>>['dashboard'];

// Royal Student Dashboard
export default function RoyalStudentDashboard() {
  const router = useRouter();
  const params = useParams();
  const locale = params.lang as Locale;
  
  const [dict, setDict] = useState<DashboardDict | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [progress, setProgress] = useState(0);

  const { user, firestore, isUserLoading } = useFirebase();

  const userRef = useMemoFirebase(() => {
      if (!firestore || !user) return null;
      return doc(firestore, 'users', user.uid);
  }, [firestore, user]);

  const { data: userData, isLoading: isUserDataLoading, error } = useDoc(userRef);

  useEffect(() => {
    getDictionary(locale).then(d => setDict(d.dashboard));
  }, [locale]);

  useEffect(() => {
    if(userData) {
      // Animate progress bar
      const timer = setTimeout(() => setProgress(65), 500);
      return () => clearTimeout(timer);
    }
  }, [userData]);

  const handleUpdateAlias = async (newName: string) => {
    if (!userRef || !newName.trim()) return;
    setIsEditing(false);
    try {
      await updateDoc(userRef, { alias: newName.trim() });
    } catch (e) {
      console.error("Failed to update alias:", e);
    }
  };
  
  const handleLangChange = (newLocale: string) => {
      const newPath = `/${newLocale}/dashboard`;
      router.push(newPath);
  };

  const isLoading = isUserLoading || isUserDataLoading || !dict;

  if (isLoading) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#0d284e]">
            <Loader2 className="h-12 w-12 animate-spin text-amber-400" />
        </div>
    );
  }

  if (!user || !userData) {
    // This case should ideally be handled by a higher-level layout or middleware
    // redirecting to login if no user is found.
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#0d284e] p-4 text-center text-white">
            <p>{dict?.redirecting_to_login ?? "Please log in to view your dashboard."}</p>
        </div>
    );
  }

  const isRtl = locale === 'ar';

  return (
    <div className="min-h-screen bg-[#0d284e] p-4 md:p-8 font-headline text-white selection:bg-amber-400 selection:text-blue-900" dir={isRtl ? 'rtl' : 'ltr'}>
      
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-10 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="bg-amber-400 p-2 rounded-lg text-blue-900">
            <Crown size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter text-amber-400">YALLA MASRY</span>
        </div>
        
        <select 
          value={locale}
          onChange={(e) => handleLangChange(e.target.value)}
          className="bg-[#0b4e8d] text-amber-400 font-bold p-2 rounded-xl border-2 border-amber-400/30 focus:outline-none"
        >
          {i18n.locales.map(loc => (
              <option key={loc} value={loc}>
                  {loc.toUpperCase()}
              </option>
          ))}
        </select>
      </nav>

      <main className="max-w-6xl mx-auto">
        
        <section className="relative mb-12 text-center">
          <div className="inline-block relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-amber-400 p-1 shadow-[0_0_50px_rgba(255,215,0,0.3)] overflow-hidden bg-blue-900">
              <img src={user.photoURL || `https://i.pravatar.cc/150?u=${user.uid}`} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute -bottom-2 right-4 bg-amber-400 text-blue-900 p-2 rounded-full shadow-lg border-4 border-[#0d284e]">
              <Sparkles size={24} />
            </div>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-black text-amber-400 drop-shadow-lg uppercase">
            {dict.title}
          </h1>
          
          <div className="mt-4 flex flex-col items-center gap-2">
            {!isEditing ? (
              <div className="flex items-center gap-3 bg-white/5 px-6 py-2 rounded-full border border-white/10">
                <span className="text-2xl font-bold text-amber-200">✨ {userData.alias}</span>
                <button onClick={() => setIsEditing(true)} className="text-xs text-amber-400 hover:underline">{dict.edit_alias}</button>
              </div>
            ) : (
              <div className="flex gap-2">
                <input 
                  type="text" 
                  defaultValue={userData.alias}
                  id="aliasInput"
                  className="bg-blue-900 border-2 border-amber-400 rounded-lg px-4 py-1 text-white"
                />
                <Button onClick={() => handleUpdateAlias((document.getElementById('aliasInput') as HTMLInputElement).value)} className="bg-amber-400 text-blue-900 font-bold">{dict.save_alias}</Button>
              </div>
            )}
            <p className="text-blue-300 font-medium tracking-widest uppercase text-sm">
               {dict.rank_label}: {dict.rank_name}
            </p>
          </div>
        </section>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard icon={<Gem className="text-amber-400" />} value={userData.nilePoints.toLocaleString()} label={dict.stat_points} color="border-amber-400" />
          <StatCard icon={<BookOpen className="text-emerald-400" />} value="48" label={dict.stat_lessons} color="border-emerald-400" />
          <StatCard icon={<Calendar className="text-rose-400" />} value="12" label={dict.stat_streak} color="border-rose-400" />
          <StatCard icon={<Clock className="text-sky-400" />} value="5.2" label={dict.stat_hours} color="border-sky-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-black text-amber-400 flex items-center gap-3 mb-4">
              <Trophy size={28} /> {dict.missions_title}
            </h2>
            
            <ChallengeBox 
              title={dict.mission_1_title}
              desc={dict.mission_1_desc}
              points="+50"
              status="active"
              isRtl={isRtl}
              onClick={() => router.push(`/${locale}/stories/comic-studio`)}
            />

            <ChallengeBox 
              title={dict.mission_2_title}
              desc={dict.mission_2_desc}
              points="+30"
              status="locked"
              isRtl={isRtl}
            />
          </div>

          <aside className="bg-white/5 backdrop-blur-xl rounded-[40px] p-8 border border-white/10 shadow-3xl flex flex-col items-center">
            <h2 className="text-xl font-black text-amber-400 mb-8 border-b-2 border-amber-400/20 pb-4 w-full text-center">
              👑 {dict.hof_title}
            </h2>
            
            <div className="w-full space-y-4">
               <LeaderItem rank={1} name="سارة النبيلة" pts="2450" />
               <LeaderItem rank={2} name="ياسين الملك" pts="2100" />
               <LeaderItem rank={3} name={userData.alias} pts={userData.nilePoints.toString()} current />
            </div>

            <div className="mt-12 w-full">
              <div className="flex justify-between text-xs mb-2 text-amber-200">
                <span>{dict.next_level_label}: {dict.next_level_name}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-4 w-full bg-blue-900/50 rounded-full border border-white/10 overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-amber-600 to-amber-300 shadow-[0_0_15px_rgba(255,215,0,0.5)] transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

// Sub-components
function StatCard({ icon, value, label, color }: {icon: React.ReactNode, value: string, label: string, color: string}) {
  return (
    <div className={`bg-white/5 p-6 rounded-[30px] border-b-4 ${color} backdrop-blur-sm hover:scale-105 transition-all text-center group`}>
      <div className="flex justify-center mb-3 group-hover:animate-bounce">{icon}</div>
      <div className="text-3xl font-black mb-1">{value}</div>
      <div className="text-[10px] uppercase tracking-[3px] text-blue-200 font-bold">{label}</div>
    </div>
  );
}

function ChallengeBox({ title, desc, points, status, isRtl, onClick }: {title: string, desc: string, points: string, status: string, isRtl: boolean, onClick?: ()=>void}) {
  const active = status === 'active';
  return (
    <div className={`group relative p-6 rounded-3xl border-2 transition-all ${
      active ? 'bg-gradient-to-br from-[#0b4e8d] to-[#0d284e] border-amber-400/50 shadow-xl cursor-pointer hover:border-amber-400' 
             : 'bg-white/5 border-white/5 opacity-50'
    }`} onClick={active ? onClick : undefined}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-blue-200 text-sm">{desc}</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-xs font-black">
             <Gem size={12} /> {points} {isRtl ? 'نقطة' : 'PTS'}
          </div>
        </div>
        {active ? (
          <div className="bg-amber-400 text-blue-900 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
            {isRtl ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </div>
        ) : (
          <Lock size={24} className="text-white/20" />
        )}
      </div>
    </div>
  );
}

function LeaderItem({ rank, name, pts, current }: {rank: number, name: string, pts: string, current?: boolean}) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-2xl border ${
      current ? 'bg-amber-400 border-white text-blue-900 shadow-lg scale-105' : 'bg-white/5 border-white/5'
    }`}>
      <div className="flex items-center gap-4">
        <span className={`text-lg font-black ${current ? 'text-blue-900' : 'text-amber-400'}`}>#{rank}</span>
        <span className="font-bold">{name}</span>
      </div>
      <span className="font-black">{pts} 💎</span>
    </div>
  );
}
