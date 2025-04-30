import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import * as theme from '../../styles/theme';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { TransactionCard } from '../../components/TransactionCard';

const NotificationsScreen = () => {
    const router = useRouter();

    return (
        <Container>
            <Header title="Notificações">
                <View style={styles.headerButton}>
                    <Ionicons onPress={() => router.back()} name="arrow-back-sharp" size={theme.scale(24)} />
                </View>
            </Header>

            <View style={styles.transactionsContainer}>
                <Text style={styles.transactionsTitle}>Minhas Transações</Text>
            </View>

            <View style={styles.paymentHistoryContainer}>
                <Text style={styles.paymentHistoryTitle}>Histórico de pagamento</Text>
                <TransactionCard label="Transações" value="50,00" />
                <TransactionCard label="Transações" value="50,00" />
                <TransactionCard label="Transações" value="50,00" />
                <TransactionCard label="Transações" value="50,00" />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        alignSelf: 'flex-start',
    },
    transactionsContainer: {
        width: '100%',
        backgroundColor: theme.colors.lightGray,
        padding: theme.spacing.md,
        borderRadius: theme.scale(8),
    },
    transactionsTitle: {
        textAlign: 'center',
        fontSize: theme.fontSize.large,
        fontWeight: 'bold',
        color: theme.colors.secondary,
    },
    paymentHistoryContainer: {
        width: '100%',
        gap: theme.spacing.md,
    },
    paymentHistoryTitle: {
        fontSize: theme.fontSize.large,
        fontWeight: 'bold',
        color: theme.colors.secondary,
    },
});

export default NotificationsScreen;
