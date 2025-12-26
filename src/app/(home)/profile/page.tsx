'use client';

import React from 'react';
import { useFirebase, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getBadgeByName, type BadgeInfo } from '@/lib/badges';
import { Award, BookOpen, Shield, Star } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { User } from 'firebase/auth';

const UserProfileSkeleton = () => (
    <div className="space-y-8">
        <Card>
            <CardHeader className="items-center text-center">
                <Skeleton className="h-24 w-24 rounded-full" />
                <div className="space-y-2 mt-4">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-4 w-32" />
                </div>
            </CardHeader>
            <CardContent className="text-center">
                <Skeleton className="h-4 w-full max-w-md mx-auto" />
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <Skeleton className="h-6 w-1/3" />
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                 <Skeleton className="h-6 w-1/4" />
            </CardHeader>
            <CardContent className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
            </CardContent>
        </Card>
    </div>
);


const ProfileCard = ({ authUser, dbUser }: { authUser: User, dbUser: any }) => {
    const getInitials = (name: string | null | undefined) => {
        if (!name) return '..';
        const names = name.split(' ');
        if (names.length > 1) {
            return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    };

    return (
        <Card className="text-center">
            <CardHeader className="items-center">
                <Avatar className="h-24 w-24 mb-4 border-4 border-primary">
                    <AvatarImage src={authUser.photoURL || ''} alt={authUser.displayName || 'User'} />
                    <AvatarFallback className="text-3xl">{getInitials(authUser.displayName)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-3xl font-headline text-primary">{authUser.displayName || 'Valued Member'}</CardTitle>
                <CardDescription>Pharaonic Alias: <span className="font-bold text-accent-foreground">{dbUser.alias}</span></CardDescription>
                <Badge variant="secondary" className="mt-2">{dbUser.role || 'Student'}</Badge>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground max-w-md mx-auto">
                    A dedicated student on the path to mastering the Egyptian dialect, currently at the <span className="font-semibold text-foreground">{dbUser.level}</span> level, focusing on <span className="font-semibold text-foreground">{dbUser.goal}</span>.
                </p>
            </CardContent>
        </Card>
    );
};

const StatsCard = ({ user }: { user: any }) => (
    <Card>
        <CardHeader>
            <CardTitle>Your Progress</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
                <Award className="h-8 w-8 text-primary" />
                <p className="text-2xl font-bold">{user.nilePoints}</p>
                <p className="text-sm text-muted-foreground">Nile Points</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8 text-primary" />
                <p className="text-2xl font-bold">{user.badges?.length || 0}</p>
                <p className="text-sm text-muted-foreground">Badges Earned</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <BookOpen className="h-8 w-8 text-primary" />
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Lessons Completed</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Star className="h-8 w-8 text-primary" />
                <p className="text-2xl font-bold">4.8</p>
                <p className="text-sm text-muted-foreground">Average Score</p>
            </div>
        </CardContent>
    </Card>
);

const BadgesCard = ({ user }: { user: any }) => {
    const earnedBadges = (user.badges || []).map(getBadgeByName).filter(Boolean) as BadgeInfo[];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Badge Collection</CardTitle>
                <CardDescription>Showcasing your achievements and milestones.</CardDescription>
            </CardHeader>
            <CardContent>
                {earnedBadges.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {earnedBadges.map((badge) => (
                            <div key={badge.name} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                                <badge.icon className="h-10 w-10 shrink-0" style={{ color: badge.color }} />
                                <div>
                                    <p className="font-bold">{badge.name}</p>
                                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted-foreground text-center py-8">Your badge collection is awaiting its first treasure. Complete some challenges to start earning them!</p>
                )}
            </CardContent>
        </Card>
    );
};

export default function ProfilePage() {
    const { user, isUserLoading, firestore } = useFirebase();

    const userDocRef = useMemoFirebase(() => {
        if (!user || !firestore) return null;
        return doc(firestore, 'users', user.uid);
    }, [user, firestore]);
    
    const { data: dbUser, isLoading: isDbUserLoading } = useDoc(userDocRef);
    
    const isLoading = isUserLoading || isDbUserLoading;

    if (isLoading || !user || !dbUser) {
        return <UserProfileSkeleton />;
    }

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="space-y-8">
                <ProfileCard authUser={user} dbUser={dbUser} />
                <StatsCard user={dbUser} />
                <BadgesCard user={dbUser} />
            </div>
        </div>
    );
}