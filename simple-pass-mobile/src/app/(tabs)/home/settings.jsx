import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

import * as theme from '../../../styles/theme';
import { Container } from '../../../components/Container';
import { Header } from '../../../components/Header';
import { SettingsCard } from '../../../components/SettingsCard';
import { Button } from '../../../components/Button';

const SettingsScreen = () => {
    const router = useRouter();

    return (
        <Container>
            <Header title="Perfil">
                <View style={styles.headerButton}>
                    <Ionicons
                        name="arrow-back-sharp"
                        onPress={() => router.back()}
                        color={theme.colors.secondary}
                        size={theme.scale(24)}
                    />
                </View>
            </Header>

            <View style={styles.profileContainer}>
                <View style={styles.info}>
                    <Ionicons name="person-circle" size={theme.scale(40)} />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Luiza Marinho</Text>
                        <Text style={styles.userEmail}>Usuário Simple pass</Text>
                    </View>
                </View>
                <Ionicons name="pencil-sharp" size={theme.scale(24)} />
            </View>

            <View style={styles.options}>
                <Text style={styles.optionsTitle}>Opções</Text>
                <SettingsCard iconLeft="person" title="Configurações da Conta" iconRight="arrow-forward" />
                <SettingsCard iconLeft="card" title="Métodos de Pagamento" iconRight="arrow-forward" />
                <SettingsCard iconLeft="shield-checkmark" title="Segurança" iconRight="arrow-forward" />
                <SettingsCard iconLeft="help-circle" title="Central de Ajuda" iconRight="arrow-forward" />
                <Button variant="text" title="Sair" />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        alignSelf: 'flex-start',
    },
    profileContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    info: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.sm,
    },
    userName: {
        fontSize: theme.fontSize.large,
        color: theme.colors.secondary,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.secondary,
    },
    options: {
        width: '100%',
        gap: theme.spacing.md,
    },
    optionsTitle: {
        fontSize: theme.fontSize.large,
        fontWeight: 'bold',
        color: theme.colors.secondary,
    },
});

export default SettingsScreen;
