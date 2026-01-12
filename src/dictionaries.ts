import 'server-only'

// تعريف اللغات المدعومة حالياً فقط
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default),
}

export type Locale = 'en' | 'ar' | string // إضافة string للسماح بمرونة البحث

export const getDictionary = async (locale: Locale) => {
  // التأكد من أن اللغة المطلوبة موجودة في القاموس، وإلا العودة للعربية كخيار افتراضي للأكاديمية
  const loadDictionary = (dictionaries as any)[locale] ?? dictionaries.ar;
  return loadDictionary();
}
