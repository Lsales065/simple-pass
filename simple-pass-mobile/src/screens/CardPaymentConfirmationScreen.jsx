import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function CardPaymentConfirmationScreen({ navigation }) {
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
            <Text style={styles.title}>Pagamento Confirmado!</Text>
            <Text style={styles.subtitle}>Seu pagamento foi processado com sucesso.</Text>
            <Text style={styles.subtitle}>Você receberá um e-mail com os detalhes da transação.</Text>

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
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
    },
    checkIconContainer: {
        marginBottom: 32,
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
        marginTop: -10, // Posiciona o título abaixo do ícone
    },
    subtitle: {
        fontSize: 16,
        color: '#000', // Cor preta
        textAlign: 'center',
        marginBottom: 32,
    },
    backButton: {
        backgroundColor: '#d9d9d9', // Fundo verde
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 32,
        marginTop: 24,
    },
    backButtonText: {
        fontSize: 16,
        color: '#000', // Cor branca
        textAlign: 'center',
    },
});
