import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NotificationsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>❮</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Notificações</Text>
            </View>

            {/* Minhas Transações */}
            <View style={styles.transactionsContainer}>
                <Text style={styles.transactionsTitle}>Minhas Transações</Text>
            </View>

            {/* Histórico de Pagamento */}
            <View style={styles.paymentHistoryContainer}>
                <Text style={styles.paymentHistoryTitle}>Histórico de pagamento</Text>
                <View style={styles.transactionItem}>
                    <Text style={styles.transactionLabel}>Transação</Text>
                    <Text style={styles.transactionValue}>R$ 10,00</Text>
                </View>
                <View style={styles.transactionItem}>
                    <Text style={styles.transactionLabel}>Transação</Text>
                    <Text style={styles.transactionValue}>R$ 20,00</Text>
                </View>
                <View style={styles.transactionItem}>
                    <Text style={styles.transactionLabel}>Transação</Text>
                    <Text style={styles.transactionValue}>R$ 8,55</Text>
                </View>
                <View style={styles.transactionItem}>
                    <Text style={styles.transactionLabel}>Transação</Text>
                    <Text style={styles.transactionValue}>R$ 4,95</Text>
                </View>
                <View style={styles.transactionItem}>
                    <Text style={styles.transactionLabel}>Transação</Text>
                    <Text style={styles.transactionValue}>R$ 3,00</Text>
                </View>
                <View style={styles.transactionItem}>
                    <Text style={styles.transactionLabel}>Transação</Text>
                    <Text style={styles.transactionValue}>R$ 1,50</Text>
                </View>
                <View style={styles.transactionItem}>
                    <Text style={styles.transactionLabel}>Transação</Text>
                    <Text style={styles.transactionValue}>R$ 7,25</Text>
                </View>
                <View style={styles.transactionItem}>
                    <Text style={styles.transactionLabel}>Transação</Text>
                    <Text style={styles.transactionValue}>R$ 6,75</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00BFFF',
        padding: 24,
    },
    header: {
        flexDirection: 'row', // Ícone à esquerda e título centralizado
        alignItems: 'center',
        marginBottom: 50, // Espaçamento maior
    },
    backButton: {
        marginRight: 0, // Espaçamento entre o ícone e o título
    },
    backButtonText: {
        fontSize: 24,
        color: '#000',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        flex: 1, // Ocupa o espaço restante para centralizar o título
        textAlign: 'center',
        marginBottom: 20, // Posiciona o título mais abaixo
        marginVertical: 60,
    },
    transactionsContainer: {
        backgroundColor: '#d9d9d9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24,
    },
    transactionsTitle: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    },
    paymentHistoryContainer: {
        marginTop: 24,
    },
    paymentHistoryTitle: {
        fontSize: 18,
        color: '#000',
        marginBottom: 16,
        fontWeight: 'bold',
    },
    transactionItem: {
        backgroundColor: '#ADD8E6',
        borderRadius: 8,
        padding: 16,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    transactionLabel: {
        fontSize: 16,
        color: '#000',
    },
    transactionValue: {
        fontSize: 16,
        color: '#000',
    },
});
