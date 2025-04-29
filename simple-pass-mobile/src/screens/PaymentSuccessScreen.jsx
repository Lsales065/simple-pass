import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';

export default function PaymentSuccessScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Ícone de Verificação Verde */}
            <View style={styles.checkIconContainer}>
                <Image
                    source={require('../assets/check-icon.png')} // Substitua pelo caminho correto da imagem
                    style={styles.checkIcon}
                />
            </View>

            {/* Título e Subtítulo */}
            <Text style={styles.title}>Pagamento Realizado!</Text>
            <Text style={styles.subtitle}>Seu pagamento via PIX foi processado com sucesso</Text>

            {/* Informações do Pagamento */}
            <View style={styles.paymentDetailsContainer}>
                <View style={styles.paymentDetailRow}>
                    <Text style={styles.paymentDetailTitle}>Data</Text>
                    <Text style={styles.paymentDetailValue}>21/03/2025</Text>
                </View>
                <View style={styles.paymentDetailRow}>
                    <Text style={styles.paymentDetailTitle}>Hora</Text>
                    <Text style={styles.paymentDetailValue}>15:30:53</Text>
                </View>
                <View style={styles.paymentDetailRow}>
                    <Text style={styles.paymentDetailTitle}>Valor</Text>
                    <Text style={styles.paymentDetailValue}>R$ 4,75</Text>
                </View>
            </View>

            {/* ID da Transação */}
            <View style={styles.transactionIdContainer}>
                <Text style={styles.transactionIdLabel}>ID da Transação</Text>
                <TextInput
                    placeholder="ID da Transação"
                    value="PIX123456789" // Valor fixo ou dinâmico conforme necessário
                    editable={false}
                    style={styles.transactionIdInput}
                />
            </View>

            {/* Botão Compartilhar Comprovante */}
            <TouchableOpacity style={styles.shareButton}>
                <Text style={styles.shareButtonText}>Compartilhar Comprovante</Text>
            </TouchableOpacity>

            {/* Botão Voltar ao Início */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('ManageCards')}>
                <Text style={styles.backButtonText}>Voltar ao Início</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00BFFF', // Fundo azul
        padding: 24,
    },
    checkIconContainer: {
        alignItems: 'center',
        marginBottom: 70,
        margin: 50,
    },
    checkIcon: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000', // Cor preta
        textAlign: 'center',
        marginTop: 0, // Posiciona o título abaixo do ícone
    },
    subtitle: {
        fontSize: 18,
        color: '#000', // Cor preta
        textAlign: 'center',
        marginBottom: 40,
    },
    paymentDetailsContainer: {
        backgroundColor: '#d9d9d9', // Fundo cinza claro
        borderRadius: 8,
        padding: 15,
        marginBottom: 24,
    },
    paymentDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    paymentDetailTitle: {
        fontSize: 16,
        color: '#000', // Cor preta
    },
    paymentDetailValue: {
        fontSize: 16,
        color: '#000', // Cor preta
    },
    transactionIdContainer: {
        marginBottom: 24,
    },
    transactionIdLabel: {
        fontSize: 16,
        color: '#000', // Cor preta
        fontWeight: 'bold',
        marginBottom: 8,
    },
    transactionIdInput: {
        width: '100%',
        height: 50,
        backgroundColor: '#d9d9d9',
        borderRadius: 8,
        paddingHorizontal: 16,
    },
    shareButton: {
        backgroundColor: '#22C55E', // Fundo verde
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    shareButtonText: {
        fontSize: 16,
        color: '#fff', // Cor branca
        textAlign: 'center',
    },
    backButton: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        margin: 35,
    },
    backButtonText: {
        fontSize: 16,
        color: '#000', // Cor preta
        textAlign: 'center',
    },
});
