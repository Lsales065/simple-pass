import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importe todas as telas necessárias
import SplashScreen from './src/screens/SplashScreen'; // Tela de Splash
import LoginScreen from './src/screens/LoginScreen'; // Tela de Login
import RecoverAccountScreen from './src/screens/RecoverAccountScreen'; // Tela de Recuperação de Conta
import SignupScreen from './src/screens/SignupScreen'; // Tela de Cadastro
import ManageCardsScreen from './src/screens/ManageCardsScreen'; // Tela Gerenciar Cartões
import NotificationsScreen from './src/screens/NotificationsScreen'; // Tela de Notificações
import SettingsScreen from './src/screens/SettingsScreen'; // Tela de Configurações
import PaymentScreen from './src/screens/PaymentScreen'; // Tela de Pagamento
import PixConfirmationScreen from './src/screens/PixConfirmationScreen'; // Nova tela de confirmação de PIX
import PaymentSuccessScreen from './src/screens/PaymentSuccessScreen'; // Nova tela de sucesso do pagamento
import CardPaymentScreen from './src/screens/CardPaymentScreen'; // Nova tela de pagamento com cartão
import CardPaymentConfirmationScreen from './src/screens/CardPaymentConfirmationScreen'; // Nova tela de confirmação de pagamento com cartão

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Rotas */}
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RecoverAccount" component={RecoverAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ManageCards" component={ManageCardsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PixConfirmation" component={PixConfirmationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CardPayment" component={CardPaymentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CardPaymentConfirmation" component={CardPaymentConfirmationScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}