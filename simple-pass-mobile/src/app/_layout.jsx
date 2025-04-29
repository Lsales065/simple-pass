import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    useEffect(() => {
        setTimeout(() => SplashScreen.hideAsync(), 1000);
    }, []);

    return <Stack screenOptions={{ headerShown: false }} />;
};

export default RootLayout;
