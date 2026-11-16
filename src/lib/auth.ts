import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export type RouterWithRedirect = {
    push: (href: string) => void;
    refresh: () => void;
};

export async function handleLogout(router: RouterWithRedirect) {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
}

export function useLogout() {
    const router = useRouter();
    return () => handleLogout(router);
}
