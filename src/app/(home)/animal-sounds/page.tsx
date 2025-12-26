'use client';

import React from 'react';
import AnimalSoundCard from '@/components/animal-sound-card';
import placeholderData from '@/lib/placeholder-images.json';


export default function AnimalSoundsPage() {
  const animals = placeholderData.placeholderImages.filter(p => p.id.startsWith('animal-'));

  return (
    <div className="min-h-screen bg-nile-blue p-6 md:p-12" dir="rtl">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-gold-accent font-display mb-3">
          لعبة أصوات الحيوانات
        </h1>
        <p className="text-lg text-sand-ochre max-w-2xl mx-auto">
          اضغط على صورة الحيوان لتستمع إلى صوته! تجربة تعليمية ممتعة للأطفال مقدمة من Gemini.
        </p>
      </header>

      <main>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {animals.map((animal) => (
            <AnimalSoundCard
              key={animal.id}
              animalName={(animal.metadata as any)?.name || 'حيوان'}
              imageUrl={animal.imageUrl}
              imageHint={animal.imageHint}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
