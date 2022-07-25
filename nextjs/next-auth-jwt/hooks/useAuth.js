import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAuth(shouldRedirect) {
    const { data: session } = useSession();
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    console.log('session', session);
    useEffect(() => {
        if (session?.error === "RefreshAccessTokenError") {
            signOut({ callbackUrl: '/login', redirect: shouldRedirect });
        }

        if (session === null) {
            if (router.route !== '/') {
                router.replace('/');
            }
            setIsAuthenticated(false);
        } else if (session !== undefined) {
            if (router.route === '/') {
                router.replace('/abcd');
            }
            setIsAuthenticated(true);
        }
    }, [session]);

    return isAuthenticated;
}