"use client"

/** 🛡️ Yalla Masry Academy - Robust Error Monitoring System
 * هذا النظام مصمم لمراقبة أخطاء Firestore وتصنيفها بدقة ملكية
 */

export interface FirestorePermissionError {
  code: string;
  message: string;
  path?: string;
  timestamp: number;
}

// تعريف دقيق للفعاليات المدعومة في النظام
type Events = {
  "permission-error": (error: FirestorePermissionError) => void;
  "auth-error": (error: { code: string; message: string }) => void;
  "connection-failed": () => void;
};

class ErrorEmitter {
  // استخدام Record لضمان قوة تعريف المستمعين ومنع الـ "any"
  private listeners: { [E in keyof Events]?: Events[E][] } = {};

  /**
   * تسجيل مستمع جديد للخطأ مع نوع بيانات صارم
   */
  on<E extends keyof Events>(event: E, callback: Events[E]): () => void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    
    // تأكيد النوع للمجمع (Type Casting) لضمان توافق TypeScript الصارم
    (this.listeners[event] as Events[E][]).push(callback);
    
    // إرجاع وظيفة الإلغاء (Cleanup function) لضمان نظافة الذاكرة
    return () => this.off(event, callback);
  }

  /**
   * إزالة مستمع معين عند انتهاء الحاجة إليه
   */
  off<E extends keyof Events>(event: E, callback: Events[E]): void {
    const eventListeners = this.listeners[event] as any[];
    if (!eventListeners) return;

    this.listeners[event] = eventListeners.filter(
      (listener) => listener !== callback
    ) as Events[E][];
  }

  /**
   * إرسال تنبيه بوقوع خطأ إلى كل الأجزاء المهتمة في الأكاديمية
   */
  emit<E extends keyof Events>(event: E, ...args: Parameters<Events[E]>): void {
    const eventListeners = this.listeners[event] as any[];
    if (!eventListeners) return;

    eventListeners.forEach((callback) => {
      try {
        callback(...args);
      } catch (err) {
        console.error(`🔴 Error in Academy Monitor [${event}]:`, err);
      }
    });
  }
}

// تصدير نسخة واحدة ثابتة (Singleton) لتعمل في كل أرجاء الأكاديمية
export const errorEmitter = new ErrorEmitter();
