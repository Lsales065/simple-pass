import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

import * as theme from '../../../styles/theme';
import { Container } from '../../../components/Container';
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

const PaymentScreen = () => {
    const router = useRouter();
    const [selectedMethod, setSelectedMethod] = useState(null);

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
                <Input label="Nome do Destinatário" icon="person" placeholder="Digite o nome completo" />
                <Input label="Valor" icon="logo-usd" placeholder="R$0,00" />
            </View>
            <View style={styles.payments}>
                <Text style={styles.paymentsTitle}>Métodos de Pagamento</Text>
                <Button
                    title="Pix"
                    icon="qr-code"
                    style={{ backgroundColor: selectedMethod === 'pix' ? theme.colors.green : theme.colors.primary }}
                    onPress={() => setSelectedMethod('pix')}
                />
                <Button
                    title="Cartão"
                    icon="card"
                    style={{ backgroundColor: selectedMethod === 'card' ? theme.colors.green : theme.colors.primary }}
                    onPress={() => setSelectedMethod('card')}
                />

                <Button
                    title="Continuar"
                    icon="arrow-forward"
                    onPress={() => {
                        if (selectedMethod) {
                            if (selectedMethod === 'pix') {
                                router.navigate('reload/pix-payment');
                            } else if (selectedMethod === 'card') {
                                router.navigate('reload/card-payment');
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
