import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importação do ícone

const PixPaymentConfirmationScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>❮</Text>
                </TouchableOpacity>
                <Text style={styles.title}>PIX</Text>
            </View>

            {/* QR Code */}
            <View style={styles.qrCodeContainer}>
                <FontAwesome name="qrcode" size={80} color="#000" />
            </View>

            {/* Informações do Pagamento */}
            <Text style={styles.label}>Nome</Text>
            <TextInput placeholder="Digite o nome" style={styles.input} />
            <Text style={styles.label}>Chave PIX</Text>
            <TextInput placeholder="Digite a chave PIX" style={styles.input} />
            <Text style={styles.label}>Valor</Text>
            <TextInput placeholder="Digite o valor" style={styles.input} />

            {/* Botão Confirmar Pagamento */}
            <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => navigation.navigate('PaymentSuccess')} // Redireciona para a tela de sucesso do pagamento
            >
                <Text style={styles.confirmButtonText}>Confirmar pagamento</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PixPaymentConfirmationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00BFFF',
        padding: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 45,
    },
    backButton: {
        marginRight: 0,
    },
    backButtonText: {
        fontSize: 24,
        color: '#000', // Cor preta
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000', // Cor preta
        flex: 1,
        textAlign: 'center',
        marginVertical: 50,
    },
    qrCodeContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    label: {
        fontSize: 18,
        color: '#000', // Cor preta
        marginBottom: 8,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#d9d9d9',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    confirmButton: {
        backgroundColor: '#22C55E',
        borderRadius: 8,
        padding: 16,
        marginTop: 48, // Espaçamento maior para descer o botão
    },
    confirmButtonText: {
        fontSize: 16,
        color: '#fff', // Cor preta
        textAlign: 'center',
    },
});
