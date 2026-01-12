// إضافة التعريف الخاص بالخصائص (Props)
interface UserNavProps {
  lang: string;
  dict: any;
}

export function UserNav({ lang, dict }: UserNavProps) {
  return (
    // ... باقي كود المكون الموجود لديكِ حالياً ...
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
       {/* تأكدي أن الكود الداخلي يستخدم dict.profile أو ما شابه إذا أردتِ الترجمة */}
       <span>{dict?.profile || 'Profile'}</span>
    </div>
  );
}
