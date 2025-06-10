import React from 'react';
import { Stack } from 'expo-router';
import { AuthContextProvider } from '../../contexts/auth-context';

const AuthLayout = () => {
    return (
        <AuthContextProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" />
                <Stack.Screen name="register" />
                <Stack.Screen name="recover-account" />
            </Stack>
        </AuthContextProvider>
    );
};

export default AuthLayout;
