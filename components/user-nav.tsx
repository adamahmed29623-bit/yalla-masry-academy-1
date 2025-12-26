import * as THREE from 'three';

// 1. تعريف أنواع القطع (Artifact Types) لتنظيم المحتوى
export type ArtifactCategory = 'statue' | 'scroll' | 'jewelry' | 'monument' | 'tool';

// 2. الهيكل المطور للبيانات (Refactored ArtifactData)
export type ArtifactData = {
    id: string;
    title: string;
    description: string;
    puzzle: string;
    position: THREE.Vector3;
    icon: string;
    category: ArtifactCategory; // الإضافة الجديدة للتصنيف
    rarity: 'common' | 'rare' | 'legendary'; // إضافة عامل الجذب (الندرة)
    goal: boolean;
    isExplored: boolean;
    audioUrl?: string;
    isPlaying?: boolean;
};

export type Artifacts = {
    [key: string]: ArtifactData;
};

// 3. تحديث UserNavData بالهوية الجديدة للأكاديمية
export const UserNavData: Artifacts = {
    'mask': {
        id: 'mask',
        title: 'قناع توت عنخ آمون',
        description: 'أشهر قطعة أثرية في العالم. مصنوع من الذهب الخالص ومطعم بالأحجار الكريمة.',
        puzzle: 'لغز: ما هي الألوان الرئيسية التي استخدمها المصريون القدماء لطلاء القناع الذهبي؟',
        position: new THREE.Vector3(0, 0, -150),
        icon: 'fas fa-crown',
        category: 'jewelry',
        rarity: 'legendary',
        goal: false,
        isExplored: false,
        isPlaying: false
    },
    'rosetta': {
        id: 'rosetta',
        title: 'حجر رشيد',
        description: 'لوحة حجرية حاسمة لفك رموز اللغة الهيروغليفية.',
        puzzle: 'لغز: من هو العالم الفرنسي الذي فك شفرة الحجر في عام 1822؟',
        position: new THREE.Vector3(-150, 0, 0),
        icon: 'fas fa-book-open',
        category: 'monument',
        rarity: 'legendary',
        goal: true,
        isExplored: false,
        isPlaying: false
    },
    'canopic': {
        id: 'canopic',
        title: 'الأواني الكانوبية',
        description: 'الأواني الأربعة المستخدمة لحفظ الأعضاء الداخلية للمتوفى أثناء عملية التحنيط.',
        puzzle: 'لغز: من هو ابن حورس الذي كان يحمي الرئتين؟',
        position: new THREE.Vector3(150, 0, 0),
        icon: 'fas fa-vial',
        category: 'tool',
        rarity: 'rare',
        goal: false,
        isExplored: false,
        isPlaying: false
    },
    'book_of_dead': {
        id: 'book_of_dead',
        title: 'بردية كتاب الموتى',
        description: 'مجموعة من النصوص الجنائزية والتعاويذ لمساعدة المتوفى في العالم الآخر.',
        puzzle: 'لغز: ما هو الاسم المصري الأصلي لهذه البرديات؟',
        position: new THREE.Vector3(-100, 0, 100),
        icon: 'fas fa-scroll',
        category: 'scroll',
        rarity: 'rare',
        goal: false,
        isExplored: false,
        isPlaying: false
    },
    'nefertiti_bust': {
        id: 'nefertiti_bust',
        title: 'تمثال نفرتيتي',
        description: 'تمثال نصفي للملكة نفرتيتي، يُعتبر أيقونة للجمال العالمي.',
        puzzle: 'لغز: ما هي الميزة المفقودة بشكل غامض في إحدى عيني التمثال؟',
        position: new THREE.Vector3(-150, 0, -150),
        icon: 'fas fa-female',
        category: 'statue',
        rarity: 'legendary',
        goal: false,
        isExplored: false,
        isPlaying: false
    }
    // يمكن إضافة باقي القطع بنفس النمط الملكي...
};
