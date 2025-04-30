import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import * as theme from '../../../styles/theme';
import { Header } from '../../../components/Header';
import { Container } from '../../../components/Container';
import { Balance } from '../../../components/Balance';
import { Card } from '../../../components/Card';
import { NotificationCard } from '../../../components/NotificationCard';

const HomeScreen = () => {
    const router = useRouter();

    return (
        <Container>
            <Header title="Gerenciar Cartões">
                <View style={styles.headerButton}>
                    <Ionicons name="menu" onPress={() => router.navigate('home/settings')} size={theme.scale(24)} />
                </View>
            </Header>
            <Balance value={150} />
            <Card />
            <View style={styles.notificationsContainer}>
                <Text style={styles.notificationsTitle}>Notificações</Text>
                <NotificationCard title={'Ônibus - Linha 123'} description={'Nome do cartão'} />
                <NotificationCard title={'Ônibus - Linha 123'} description={'Nome do cartão'} />
                <NotificationCard title={'Ônibus - Linha 123'} description={'Nome do cartão'} />
                <NotificationCard title={'Ônibus - Linha 123'} description={'Nome do cartão'} />
                <NotificationCard title={'Ônibus - Linha 123'} description={'Nome do cartão'} />
                <NotificationCard title={'Ônibus - Linha 123'} description={'Nome do cartão'} />
                <NotificationCard title={'Ônibus - Linha 123'} description={'Nome do cartão'} />
                <NotificationCard title={'Ônibus - Linha 123'} description={'Nome do cartão'} />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        alignSelf: 'flex-start',
    },
    notificationsContainer: {
        width: '100%',
        padding: theme.spacing.lg,
        gap: theme.spacing.sm,
    },
    notificationsTitle: {
        fontSize: theme.fontSize.large,
        fontWeight: 'bold',
        color: theme.colors.secondary,
        marginBottom: theme.spacing.md,
    },
});

export default HomeScreen;
