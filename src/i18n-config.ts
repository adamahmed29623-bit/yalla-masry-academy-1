export const i18n = {
  defaultLocale: 'ar',
  // أضفنا 'ur' لتكتمل المجموعة الدولية
  locales: ['ar', 'en', 'fr', 'es', 'de', 'it', 'ru', 'zh', 'ja', 'tr', 'ur'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
