import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import { CardContextProvider } from '../../contexts/card-context';
import { PaymentContextProvider } from '../../contexts/payment-context';

const TabLayout = () => {
    return (
        <CardContextProvider>
            <PaymentContextProvider>
                <Tabs initialRouteName="home" screenOptions={{ headerShown: false }}>
                    <Tabs.Screen
                        name="home"
                        options={{
                            title: 'Lar',
                            tabBarIcon: ({ color, size }) => <Ionicons name="home-sharp" size={size} color={color} />,
                        }}
                    />
                    <Tabs.Screen
                        name="notifications"
                        options={{
                            title: 'Notificações',
                            tabBarIcon: ({ color, size }) => <Ionicons name="notifications" size={size} color={color} />,
                        }}
                    />
                    <Tabs.Screen
                        name="reload"
                        options={{
                            title: 'Recarregar',
                            tabBarIcon: ({ color, size }) => <Ionicons name="card-sharp" size={size} color={color} />,
                        }}
                    />
                </Tabs>
            </PaymentContextProvider>
        </CardContextProvider>
    );
};

export default TabLayout;
