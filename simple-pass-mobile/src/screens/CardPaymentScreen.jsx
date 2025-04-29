import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function CardPaymentScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* Ícone de Voltar */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>❮</Text>
                </TouchableOpacity>

                {/* Título */}
                <Text style={styles.title}>Pagamento com cartão</Text>
            </View>

            {/* Informações do Cartão */}
            <Text style={styles.label}>Número do Cartão</Text>
            <TextInput placeholder="Digite o número do cartão" style={styles.input} />

            {/* Nome do Cartão */}
            <Text style={styles.label}>Nome no Cartão</Text>
            <TextInput placeholder="Nome como está no cartão" style={styles.input} />

            {/* Data de Validade */}
            <Text style={styles.label}>Data de validade</Text>
            <TextInput placeholder="MM/AA" style={styles.input} />

            {/* CVV */}
            <Text style={styles.label}>CVV</Text>
            <TextInput placeholder="CVV" style={styles.input} />

            {/* Botão Confirmar Pagamento */}
            <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('CardPaymentConfirmation')}>
                <Text style={styles.confirmButtonText}>Confirmar pagamento</Text>
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
    header: {
        flexDirection: 'row', // Alinha o ícone de voltar e o título na mesma linha
        alignItems: 'center', // Centraliza verticalmente
        marginBottom: 50,
        marginTop: 35,
    },
    backButton: {
        alignSelf: 'flex-start', // Alinha o botão de voltar à esquerda
        marginRight: -6, // Espaçamento entre o ícone e o título
    },
    backButtonText: {
        fontSize: 24,
        color: '#000', // Cor preta
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000', // Cor preta
        textAlign: 'center',
        flex: 1, // Ocupa o espaço restante ao lado do ícone
        marginVertical: 50,
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
        backgroundColor: '#22C55E', // Fundo verde
        borderRadius: 8,
        padding: 16,
        marginTop: 24,
    },
    confirmButtonText: {
        fontSize: 16,
        color: '#fff', // Cor branca
        textAlign: 'center',
    },
});
