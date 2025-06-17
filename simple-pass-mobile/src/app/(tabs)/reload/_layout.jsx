import { Stack } from 'expo-router';

const ReloadLayout = () => {
    return (
        <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="card-payment" />
            <Stack.Screen name="pix-payment" />
            <Stack.Screen name="payment-confirmation" />
        </Stack>
    );
};

export default ReloadLayout;
