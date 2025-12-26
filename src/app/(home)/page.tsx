import { redirect } from 'next/navigation';

export default function HomePage() {
  // The root page will redirect to the dashboard, which will handle authentication checks.
  redirect('/dashboard');
}
