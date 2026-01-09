'use client';
export const dynamic = 'force-dynamic';

import { useState, useEffect, useMemo } from 'react'; // أضفنا useMemo هنا
import { useFirebase } from '@/firebase';
import { Loader2, ArrowRight, Star, Gem, Trophy, PlusCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useDoc } from '@/firebase'; // حذفنا useMemoFirebase لأنه غير موجود ويسبب الخطأ
import { doc } from 'firebase/firestore';

export default function DashboardPage() {
    const { user, firestore, isUserLoading } = useFirebase();

    // استخدام useMemo العادية من React
    const userRef = useMemo(() => {
        if (!firestore || !user) return null;
        return doc(firestore, 'users', user.uid);
    }, [firestore, user]);

    const { data: userData, isLoading: isUserDataLoading } = useDoc(userRef);

    const [nilePoints, setNilePoints] = useState<number | null>(null);

    useEffect(() => {
        if (userData) {
            const initialPoints = userData.nilePoints;
            setNilePoints(initialPoints);
            localStorage.setItem('nilePoints', initialPoints?.toString() || '0');

            const handleStorageChange = (event: StorageEvent) => {
                if (event.key === 'nilePoints' && event.newValue) {
                    setNilePoints(parseInt(event.newValue, 10));
                }
            };
            window.addEventListener('storage', handleStorageChange);
            return () => {
                window.removeEventListener('storage', handleStorageChange);
            };
        }
    }, [userData]);

    if (isUserLoading || isUserDataLoading) {
        return (
            <div className="container mx-auto py-10 flex justify-center items-center min-h-[60vh]">
                <div className="flex flex-col items-center gap-4 text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-gold-accent" />
                    <p className="text-sand-ochre font-semibold">جاري تحميل بياناتك الملكية...</p>
                </div>
            </div>
        );
    }

    if (!user || !userData) {
        return (
            <div className="container mx-auto py-10 text-center">
                <h1 className="text-3xl font-bold font-headline text-gold-accent">أهلاً بك في أكاديمية يلا مصري</h1>
                <p className="text-sand-ochre mt-2">من فضلك، قم بتسجيل الدخول لبدء رحلتك في تعلم العامية المصرية.</p>
                <Button asChild className="mt-6 bg-gold-accent text-nile-dark hover:bg-sand-ochre">
                    <Link href="/login">تسجيل الدخول</Link>
                </Button>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto py-10 space-y-8 animate-fade-in-up" dir='rtl'>
            {/* Welcome Header */}
            <div className="p-6 rounded-lg bg-nile-blue border border-gold-accent/20">
                <h1 className="text-3xl font-bold font-headline text-gold-accent">أهلاً بعودتك، {userData.name}!</h1>
                <p className="text-lg text-sand-ochre">لقبك الفرعوني هو: <span className="font-semibold text-white">{userData.alias}</span></p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-nile-blue border-gold-accent/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-sand-ochre">نقاط النيل</CardTitle>
                        <Gem className="h-4 w-4 text-gold-accent" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{nilePoints ?? '0'}</div>
                        <p className="text-xs text-muted-foreground">واصل التقدم لجمع المزيد!</p>
                    </CardContent>
                </Card>

                <Card className="bg-nile-blue border-gold-accent/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-sand-ochre">المستوى الحالي</CardTitle>
                        <Trophy className="h-4 w-4 text-gold-accent" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold capitalize">{userData.level || 'مبتدئ'}</div>
                        <p className="text-xs text-muted-foreground">هدفك: {userData.goal}</p>
                    </CardContent>
                </Card>

                <Card className="bg-nile-blue border-gold-accent/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-sand-ochre">الشارات المكتسبة</CardTitle>
                        <Star className="h-4 w-4 text-gold-accent" />
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {userData.badges && userData.badges.length > 0 ? (
                                userData.badges.map((badge: string) => (
                                    <Badge key={badge} variant="secondary" className="capitalize bg-sand-ochre text-nile-dark">
                                        {badge.replace('_', ' ')}
                                    </Badge>
                                ))
                            ) : (
                                <p className="text-xs text-muted-foreground">لا شارات بعد.</p>
                            )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">شارة جديدة على وشك الفتح!</p>
                    </CardContent>
                </Card>
            </div>

            {/* Continue Learning Section */}
            <Card className="bg-gradient-to-br from-gold-accent to-sand-ochre text-nile-dark border-none">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">أكمل من حيث توقفت</CardTitle>
                    <CardDescription className="text-nile-dark/80">أنت على وشك إتقان التحيات والمجاملات. أكمل الدرس لفتح تحدٍ جديد!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-1 font-bold">
                            <span>الدرس 1: التحيات الأساسية</span>
                            <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2 bg-black/20 [&>div]:bg-nile-dark" />
                    </div>
                    <Button variant="secondary" size="lg" className="w-full md:w-auto bg-nile-dark text-sand-ochre hover:bg-black border-none" asChild>
                        <Link href="/lessons">إلى الدرس التالي <ArrowRight className="mr-2 h-4 w-4" /></Link>
                    </Button>
                </CardContent>
            </Card>
            
            {/* Admin Panel Link */}
            {userData.role === 'admin' && (
                <Card className="bg-nile-blue border-gold-accent/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-gold-accent"><PlusCircle className="h-5 w-5" /> لوحة تحكم المشرف</CardTitle>
                        <CardDescription className="text-sand-ochre/60">إدارة المحتوى والطلاب من هنا.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button asChild variant="outline" className="border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-nile-dark">
                            <Link href="/admin/dashboard">الانتقال إلى لوحة التحكم</Link>
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
