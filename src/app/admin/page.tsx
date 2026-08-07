import { redirect } from 'next/navigation';
import { isAuthenticatedAdmin } from '@/lib/auth';

export default async function AdminIndexPage() {
  const isAuth = await isAuthenticatedAdmin();
  if (isAuth) {
    redirect('/admin/dashboard');
  } else {
    redirect('/admin/login');
  }
}
