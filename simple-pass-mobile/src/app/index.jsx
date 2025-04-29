import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

import * as theme from '../styles/theme';
import { Button } from '../components/Button';
import { Container } from '../components/Container';

const OnBoardingScreen = () => {
    const router = useRouter();

    return (
        <Container>
            <Image source={require('../assets/images/logo.png')} alt="Logo SimplePass" />
            <Text style={styles.text}>Simplificando os pagamentos de recarga do transporte público</Text>
            <Button title="Entrar" onPress={() => router.navigate('login')} />
        </Container>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.secondary,
        textAlign: 'center',
    },
});

export default OnBoardingScreen;
