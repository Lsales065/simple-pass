import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

import { Button } from '../../components/Button';
import * as theme from '../../styles/theme';

const OnBoardingScreen = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} alt="Logo SimplePass" />
            <Text style={styles.text}>Simplificando os pagamentos de recarga do transporte público</Text>
            <Button title="Entrar" onPress={() => router.navigate('login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.xl,
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.spacing.md,
    },
    text: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.secondary,
        textAlign: 'center',
    },
});

export default OnBoardingScreen;
