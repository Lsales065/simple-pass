import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import * as theme from '../../../styles/theme';
import { Header } from '../../../components/Header';
import { Container } from '../../../components/Container';

const HomeScreen = () => {
    const router = useRouter();

    const [showBalance, setShowBalance] = useState(false);

    return (
        <Container>
            <Header title="Gerenciar Cartões">
                <View style={styles.headerButton}>
                    <Ionicons name="menu" onPress={() => router.navigate('home/settings')} size={theme.scale(24)} />
                </View>
            </Header>

            {/* Saldo do Cartão */}
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)} style={styles.balanceContainer}>
                <Text style={styles.balanceLabel}>Saldo do cartão</Text>
                <Text style={styles.balanceValue}>
                    {showBalance ? 'R$150,00' : 'R$*****'} {/* Alterna entre o saldo oculto e visível */}
                </Text>
            </TouchableOpacity>

            {/* Cartão de Transporte */}
            <View style={styles.cardContainer}>
                <View style={styles.cardBackground}>
                    <View style={styles.cardType}>
                        <Text style={styles.cardTypeName}>ESTUDANTE</Text>
                    </View>
                </View>
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>CARTÃO TRANSPORTE</Text>
                    <View style={styles.userInfo}>
                        <View style={styles.userIconPlaceholder} />
                        <View style={styles.userInfoDetails}>
                            <Text style={styles.userName}>Nome do Usuário</Text>
                            <Text style={styles.userNumber}>Número do Cartão</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Notificações */}
            <View style={styles.notificationsContainer}>
                <Text style={styles.notificationsTitle}>Notificações</Text>
                <TouchableOpacity style={styles.notificationItem}>
                    <View style={styles.notificationContent}>
                        {/* <FontAwesome name="dollar" size={18} color="#000" /> */}
                        <View style={styles.notificationDetails}>
                            <Text style={styles.notificationTitle}>Notificação</Text>
                            <Text style={styles.notificationDescription}>Nome do cartão</Text>
                        </View>
                    </View>
                    {/* <FontAwesome name="arrow-up" size={18} color="#000" /> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificationItem}>
                    <View style={styles.notificationContent}>
                        {/* <FontAwesome name="dollar" size={18} color="#000" /> */}
                        <View style={styles.notificationDetails}>
                            <Text style={styles.notificationTitle}>Notificação</Text>
                            <Text style={styles.notificationDescription}>Nome do cartão</Text>
                        </View>
                    </View>
                    {/* <FontAwesome name="arrow-down" size={18} color="#000" /> */}
                </TouchableOpacity>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        width: '100%',
    },
    balanceContainer: {
        marginBottom: 32,
    },
    balanceLabel: {
        fontSize: 14,
        color: '#000',
    },
    balanceValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
        height: 180,
    },
    cardBackground: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 70,
        backgroundColor: '#90A4AE',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardType: {
        transform: [{ rotate: '-90deg' }],
    },
    cardTypeName: {
        fontSize: 12, // Ajustado para caber em uma única linha
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cardContent: {
        marginLeft: 70,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 50, // Ajustado para ficar acima do nome do usuário
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIconPlaceholder: {
        width: 50,
        height: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 25,
        marginRight: 16,
    },
    userInfoDetails: {
        flexDirection: 'column',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    userNumber: {
        fontSize: 16,
        color: '#666',
    },
    notificationsContainer: {
        marginBottom: 40,
    },
    notificationsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 16,
    },
    notificationItem: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    notificationContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationDetails: {
        marginLeft: 12,
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    notificationDescription: {
        fontSize: 14,
        color: '#666',
    },
    bottomNavigation: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
    },
    bottomNavItem: {
        alignItems: 'center',
    },
    bottomNavItemText: {
        fontSize: 12,
        color: '#000',
        marginTop: 4,
    },
});

export default HomeScreen;
