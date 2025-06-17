import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

import * as theme from '../../../styles/theme';
import { Container } from '../../../components/Container';
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { usePaymentContext } from '../../../contexts/payment-context';

const PaymentScreen = () => {
    const { registerPayment, loading } = usePaymentContext();

    const router = useRouter();

    const [selectedMethod, setSelectedMethod] = useState(null);
    const [value, setValue] = useState('');

    return (
        <Container>
            <Header title="Realizar Pagamento" subtitle="Informe os Dados">
                <View style={styles.headerButton}>
                    <Ionicons
                        name="arrow-back-sharp"
                        onPress={() => router.back()}
                        color={theme.colors.secondary}
                        size={theme.scale(24)}
                    />
                </View>
            </Header>
            <View style={styles.form}>
                <Input label="Valor" value={value} onChangeText={setValue} icon="logo-usd" placeholder="R$0,00" />
            </View>
            <View style={styles.payments}>
                <Text style={styles.paymentsTitle}>Métodos de Pagamento</Text>
                <Button
                    title="Pix"
                    icon="qr-code"
                    style={{ backgroundColor: selectedMethod === 'PIX' ? theme.colors.green : theme.colors.primary }}
                    onPress={() => setSelectedMethod('PIX')}
                />
                <Button
                    title="Cartão"
                    icon="card"
                    style={{ backgroundColor: selectedMethod === 'CREDIT' ? theme.colors.green : theme.colors.primary }}
                    onPress={() => setSelectedMethod('CREDIT')}
                />

                <Button
                    title="Continuar"
                    icon="arrow-forward"
                    loading={loading}
                    onPress={async () => {
                        if (selectedMethod) {
                            const result = await registerPayment({
                                paymentMethod: selectedMethod,
                                value: Number(value),
                            });
                            if (result) {
                                router.navigate('home');
                            }
                        }
                    }}
                />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        alignSelf: 'flex-start',
    },
    form: {
        width: '100%',
        gap: theme.spacing.md,
    },
    payments: {
        width: '100%',
        gap: theme.spacing.md,
    },
    paymentsTitle: {
        fontSize: theme.fontSize.large,
        fontWeight: 'bold',
        color: theme.colors.secondary,
    },
});

export default PaymentScreen;
