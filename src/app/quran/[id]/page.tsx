'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import quranData from '@/lib/quran-data.json';
import quranFull from '@/lib/quran-full.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Define types for our data for better type safety
type SurahInfo = {
    id: number;
    name: string;
    englishName: string;
    numberOfAyahs: number;
    revelationType: string;
};

type SurahContent = {
    name: string;
    ayahs: string[];
};

type QuranFullData = {
    [key: string]: SurahContent;
};

const surahInfos: SurahInfo[] = quranData.surahs;
const surahContents: QuranFullData = quranFull;

export default function SurahDetailPage({ params }: { params: { id: string } }) {
    const surahId = parseInt(params.id, 10);

    const surahInfo = surahInfos.find(s => s.id === surahId);
    const surahContent = surahContents[surahId.toString()];

    if (!surahInfo || !surahContent) {
        notFound();
    }

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="mb-8">
                <Link href="/quran" passHref>
                    <Button variant="outline">
                        <ArrowLeft className="mr-2" />
                        Back to All Surahs
                    </Button>
                </Link>
            </div>
            
            <Card className="shadow-lg">
                <CardHeader className="text-center bg-muted/30">
                    <p className="text-sm text-muted-foreground">{surahInfo.revelationType} - {surahInfo.numberOfAyahs} Ayahs</p>
                    <CardTitle className="text-4xl font-headline font-bold text-primary">{surahInfo.name}</CardTitle>
                    <p className="text-lg text-muted-foreground">{surahInfo.englishName}</p>
                </CardHeader>
                <CardContent className="p-6 md:p-8" dir="rtl">
                    <div className="space-y-6 text-right">
                        {surahContent.ayahs.map((ayah, index) => (
                            <React.Fragment key={index}>
                                <p className="text-2xl md:text-3xl leading-relaxed font-serif text-foreground">
                                    {ayah} <span className="text-xl text-primary font-sans">({index + 1})</span>
                                </p>
                                {index < surahContent.ayahs.length - 1 && <Separator />}
                            </React.Fragment>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
