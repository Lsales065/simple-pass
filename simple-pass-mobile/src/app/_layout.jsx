import { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { AuthContextProvider, useAuthContext } from '../contexts/auth-context';

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
    return (
        <AuthContextProvider>
            <RootNavigation />
        </AuthContextProvider>
    );
};

const RootNavigation = () => {
    const { user, authLoading } = useAuthContext();
    const segments = useSegments(); // ["(auth)"] ou ["(tabs)"]
    const router = useRouter();

    useEffect(() => {
        if (authLoading) return;

        const inAuthGroup = segments[0] === '(auth)';

        if (!user && !inAuthGroup) {
            router.replace('/login');
        } else if (user && inAuthGroup) {
            router.replace('/home');
        }

        setTimeout(() => SplashScreen.hideAsync(), 300);
    }, [user, authLoading]);

    if (authLoading) return null; // splash screen enquanto verifica login

    return <Slot />;
};

export default InitialLayout;
