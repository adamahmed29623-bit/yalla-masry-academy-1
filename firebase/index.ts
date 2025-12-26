'use client';

// This file serves as a central hub for exporting all Firebase-related modules.

export * from './provider';
export * from './client-provider';
export * from './client'; // Exporting the new centralized initialization
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
