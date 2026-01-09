'use client';
export const dynamic = 'force-dynamic';

import { useState, useEffect, useMemo } from 'react'; 
import { useFirebase, useDoc } from '@/firebase'; 
import { Loader2, Gem, Trophy, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { doc } from 'firebase/firestore';

export default function DashboardPage() {
    const { user, firestore, isUserLoading } = useFirebase();

    // تأمين جلب المرجع لبيانات المستخدم
    const userRef = useMemo(() => {
        if (!firestore || !user?.uid) return null;
        return doc(firestore, 'users', user.uid);
    }, [firestore, user?.uid]);

    const { data: userData, isLoading: isUserDataLoading } = useDoc(userRef);

    if (isUserLoading || isUserDataLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-gold-accent" />
                <p className="text-sand-ochre font-headline">جاري تحضير الديوان الملكي...</p>
            </div>
        );
    }

    if (!user || !userData) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl text-gold-accent font-headline">أهلاً بك في أكاديمية يلا مصري</h2>
                <Button asChild className="mt-6 bg-gold-accent text-nile-dark hover:bg-white">
                    <Link href="/login">ابدأ رحلتك الملكية</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 space-y-8 animate-in fade-in duration-700" dir="rtl">
            {/* الترحيب الملكي */}
            <div className="bg-nile-blue p-8 rounded-2xl border-r-4 border-gold-accent shadow-lg">
                <h1 className="text-3xl font-headline text-gold-accent">أهلاً بك، {userData.name}</h1>
                <p className="text-sand-ochre mt-2">لقبك الحالي في الأكاديمية: <span className="text-white font-bold">{userData.alias || 'باحث عن العلم'}</span></p>
            </div>

            {/* إحصائيات القوة */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-nile-blue border-gold-accent/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm text-sand-ochre">نقاط النيل</CardTitle>
                        <Gem className="h-5 w-5 text-gold-accent" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-white">{userData.nilePoints || 0}</div>
                    </CardContent>
                </Card>

                <Card className="bg-nile-blue border-gold-accent/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm text-sand-ochre">الرتبة الملكية</CardTitle>
                        <Trophy className="h-5 w-5 text-gold-accent" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white uppercase">{userData.level || 'مبتدئ'}</div>
                    </CardContent>
                </Card>

                <Card className="bg-nile-blue border-gold-accent/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm text-sand-ochre">الإنجازات</CardTitle>
                        <Star className="h-5 w-5 text-gold-accent" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-lg text-white font-semibold">{userData.badges?.length || 0} شارة ملكية</div>
                    </CardContent>
                </Card>
            </div>

            {/* التقدم الدراسي */}
            <Card className="bg-gradient-to-l from-nile-blue to-black border-gold-accent/40 shadow-2xl overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-gold-accent font-headline text-xl">استمر في رحلتك</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm text-sand-ochre">
                            <span>تقدمك الحالي</span>
                            <span>{userData.progress || 0}%</span>
                        </div>
                        <Progress value={userData.progress || 10} className="h-2 bg-gold-accent/10" />
                    </div>
                    <Button className="w-full md:w-auto bg-gold-accent text-nile-dark hover:scale-105 transition-transform" asChild>
                        <Link href="/lessons">انطلق إلى الدرس التالي <ArrowRight className="mr-2 h-4 w-4" /></Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
