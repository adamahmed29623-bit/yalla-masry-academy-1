"use client"

export interface FirestorePermissionError {
  code: string;
  message: string;
  name: string;
  request?: any;
  path?: string;
  timestamp: number;
}

type Events = {
  "permission-error": (error: FirestorePermissionError) => void;
  "auth-error": (error: { code: string; message: string }) => void;
  "connection-failed": () => void;
};

class ErrorEmitter {
  // استخدام Map داخلي لتجنب تعقيدات المصفوفات مع TypeScript Generics
  private listeners = new Map<keyof Events, Function[]>();

  on<E extends keyof Events>(event: E, callback: Events[E]): () => void {
    const current = this.listeners.get(event) || [];
    this.listeners.set(event, [...current, callback]);
    
    return () => this.off(event, callback);
  }

  off<E extends keyof Events>(event: E, callback: Events[E]): void {
    const current = this.listeners.get(event);
    if (!current) return;

    this.listeners.set(
      event,
      current.filter((listener) => listener !== callback)
    );
  }

  emit<E extends keyof Events>(event: E, ...args: Parameters<Events[E]>): void {
    const current = this.listeners.get(event);
    if (!current) return;

    current.forEach((callback) => {
      try {
        callback(...args);
      } catch (err) {
        console.error(`🔴 Academy Monitor Error [${event}]:`, err);
      }
    });
  }
}

export const errorEmitter = new ErrorEmitter();
