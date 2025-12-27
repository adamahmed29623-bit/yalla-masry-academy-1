'use client';

// المركز الرئيسي لتصدير أدوات Firebase
export * from './provider';
export * from './client-provider';
export * from './client'; 

// تصدير الأدوات الإضافية - تأكدي من وجود هذه الملفات في المجلد
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';

// إذا كان مجلد firestore موجوداً، اتركي هذه السطور. إذا كان محذوفاً، قومي بمسحها:
// export * from './firestore/use-collection';
// export * from './firestore/use-doc';
