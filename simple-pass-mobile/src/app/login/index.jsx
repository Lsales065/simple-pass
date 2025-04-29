import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import * as theme from '../../styles/theme';

const LoginScreen = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberLogin, setRememberLogin] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/images/bus.png')} style={styles.logo} resizeMethod="scale" />
                <Text style={styles.title}>Bem-vindo de volta!</Text>
                <Text style={styles.subtitle}>Digite seu E-mail e Senha</Text>
            </View>
            <View style={styles.form}>
                <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
                <Input placeholder="Senha" value={password} onChangeText={setPassword} icon="eye-off" secureTextEntry />
                <Button title="Entrar" />
                <Checkbox title="Lembrar login" value={rememberLogin} onValueChange={setRememberLogin} />
            </View>
            <View style={styles.options}>
                <Button variant="text" title="Esqueceu sua senha?" />
                <Button variant="text" title="Não tem uma conta? Inscreva-se" onPress={() => router.navigate('register')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: theme.colors.background,
        padding: theme.spacing.md,
    },
    header: {
        width: '100%',
        gap: theme.spacing.sm,
        alignItems: 'center',
    },
    logo: {
        width: theme.scale(100),
        height: theme.scale(100),
    },
    title: {
        fontSize: theme.fontSize.large,
        color: theme.colors.secondary,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.secondary,
        textAlign: 'center',
    },
    form: {
        width: '100%',
        gap: theme.spacing.sm,
    },
    options: {
        width: '100%',
        gap: theme.spacing.md,
    },
});

export default LoginScreen;
