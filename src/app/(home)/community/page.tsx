'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CommunityPage = () => {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Community Hub</CardTitle>
                    <CardDescription>This feature is coming soon!</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>We are working hard to build a vibrant community space for all learners. Soon, you will be able to:</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Chat with fellow students and practice your Egyptian Arabic.</li>
                        <li>Participate in group challenges and events.</li>
                        <li>Share your learning progress and ask questions.</li>
                        <li>Connect with native speakers and tutors.</li>
                    </ul>
                    <p className="mt-4 font-semibold">Stay tuned for updates!</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default CommunityPage;
