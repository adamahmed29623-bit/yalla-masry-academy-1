'use client';
export const dynamic = 'force-dynamic';

import { useState, useEffect, useMemo } from 'react'; 
import { useFirebase, useDoc } from '@/firebase'; // استدعاء الأدوات المتاحة فعلياً
import { Loader2, ArrowRight, Star, Gem, Trophy, PlusCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { doc } from 'firebase/firestore';

export default function DashboardPage() {
    const { user, firestore, isUserLoading } = useFirebase();

    // استخدام useMemo من React مباشرة لضمان الاستقرار
    const userRef = useMemo(() => {
        if (!firestore || !user) return null;
        return doc(firestore, 'users', user.uid);
    }, [firestore, user]);

    const { data: userData, isLoading: isUserDataLoading } = useDoc(userRef);

    const [nilePoints, setNilePoints] = useState<number | null>(null);

    useEffect(() => {
        if (userData) {
            const points = userData.nilePoints || 0;
            setNilePoints(points);
            localStorage.setItem('nilePoints', points.toString());
        }
    }, [userData]);

    if (isUserLoading || isUserDataLoading) {
        return (
            <div className="container mx-auto py-10 flex justify-center items-center min-h-[60vh]">
                <div className="flex flex-col items-center gap-4 text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-gold-accent" />
                    <p className="text-sand-ochre font-semibold font-headline">جاري تحميل بياناتك الملكية...</p>
                </div>
            </div>
        );
    }

    if (!user || !userData) {
        return (
            <div className="container mx-auto py-10 text-center">
                <h1 className="text-3xl font-bold font-headline text-gold-accent">أهلاً بك في أكاديمية يلا مصري</h1>
                <p className="text-sand-ochre mt-2">من فضلك، قم بتسجيل الدخول لبدء رحلتك الملكية.</p>
                <Button asChild className="mt-6 bg-gold-accent text-nile-dark hover:bg-sand-ochre">
                    <Link href="/login">تسجيل الدخول</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10 space-y-8 animate-fade-in-up" dir='rtl'>
            <div className="p-6 rounded-lg bg-nile-blue border border-gold-accent/20">
                <h1 className="text-3xl font-bold font-headline text-gold-accent">أهلاً بعودتك، {userData.name}!</h1>
                <p className="text-lg text-sand-ochre">لقبك الفرعوني هو: <span className="font-semibold text-white">{userData.alias}</span></p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-nile-blue border-gold-accent/10 border shadow-gold-accent/5">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-sand-ochre">نقاط النيل</CardTitle>
                        <Gem className="h-4 w-4 text-gold-accent" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">{nilePoints ?? 0}</div>
                    </CardContent>
                </Card>

                <Card className="bg-nile-blue border-gold-accent/10 border">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-sand-ochre">المستوى الحالي</CardTitle>
                        <Trophy className="h-4 w-4 text-gold-accent" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white capitalize">{userData.level || 'مبتدئ'}</div>
                    </CardContent>
                </Card>

                <Card className="bg-nile-blue border-gold-accent/10 border">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-sand-ochre">الشارات المكتسبة</CardTitle>
                        <Star className="h-4 w-4 text-gold-accent" />
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {userData.badges?.length > 0 ? (
                                userData.badges.map((badge: string) => (
                                    <Badge key={badge} className="bg-gold-accent text-nile-dark">{badge.replace('_', ' ')}</Badge>
                                ))
                            ) : <span className="text-xs text-muted-foreground">لا يوجد شارات بعد</span>}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-gradient-to-br from-gold-accent to-sand-ochre text-nile-dark border-none shadow-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">أكمل من حيث توقفت</CardTitle>
                    <CardDescription className="text-nile-dark/80">أنت على وشك إتقان مهارة جديدة في العامية المصرية.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Progress value={75} className="h-3 bg-black/20 [&>div]:bg-nile-dark" />
                    <Button variant="secondary" className="bg-nile-dark text-sand-ochre hover:bg-black" asChild>
                        <Link href="/lessons">انطلق للدرس التالي <ArrowRight className="mr-2 h-4 w-4 rtl:rotate-180" /></Link>
                    </Button>
                </CardContent>
            </Card>

            {userData.role === 'admin' && (
                <Card className="bg-nile-blue border-gold-accent/30 border-dashed">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-gold-accent"><PlusCircle /> إدارة الأكاديمية</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button asChild variant="outline" className="border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-nile-dark">
                            <Link href="/admin/dashboard">الانتقال للوحة التحكم</Link>
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
