// 🏛️ Yalla Masry Academy - Central Firebase Exports
export * from './config';
export * from './client';
export * from './error-emitter';

// تصدير الأدوات مع تجنب التضارب
export { useCollection } from './firestore/use-collection';
export { useDoc } from './firestore/use-doc';

// تصدير الأنواع المشتركة
export type { WithId } from './firestore/use-collection';

export * from './non-blocking-updates';
export * from './non-blocking-login';
