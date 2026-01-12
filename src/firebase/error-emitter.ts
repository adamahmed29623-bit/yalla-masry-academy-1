"use client"

export interface FirestorePermissionError {
  code: string;
  message: string;
  name: string;      // أضفنا هذا ليتوافق مع المكونات الأخرى
  request?: any;     // أضفنا هذا ليتوافق مع المكونات الأخرى
  path?: string;
  timestamp: number;
}

type Events = {
  "permission-error": (error: FirestorePermissionError) => void;
  "auth-error": (error: { code: string; message: string }) => void;
  "connection-failed": () => void;
};

class ErrorEmitter {
  private listeners: { [E in keyof Events]?: Events[E][] } = {};

  on<E extends keyof Events>(event: E, callback: Events[E]): () => void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    (this.listeners[event] as Events[E][]).push(callback);
    return () => this.off(event, callback);
  }

  off<E extends keyof Events>(event: E, callback: Events[E]): void {
    const eventListeners = this.listeners[event] as any[];
    if (!eventListeners) return;
    this.listeners[event] = eventListeners.filter(listener => listener !== callback) as Events[E][];
  }

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

export const errorEmitter = new ErrorEmitter();
