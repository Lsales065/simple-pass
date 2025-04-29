import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as theme from '../../styles/theme';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';
import { OrDivider } from '../../components/OrDivider';

export default function SignupScreen() {
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberLogin, setRememberLogin] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Cadastre-se</Text>
                <Text style={styles.subtitle}>Insira seus dados para continuar</Text>
            </View>

            <View style={styles.form}>
                <Input label="Insira seu CPF" placeholder="CPF" value={cpf} onChangeText={setCpf} />
                <Input label="Insira seu E-mail" placeholder="E-mail" value={email} onChangeText={setEmail} />
                <Input
                    label="Insira sua Senha"
                    placeholder="Senha"
                    password={password}
                    onChangeText={setPassword}
                    icon="eye-off"
                    secureTextEntry
                />
                <Checkbox title="Lembrar login" value={rememberLogin} onValueChange={setRememberLogin} />
                <Button title="Entrar" />
            </View>

            <OrDivider />

            <Button title="Entrar com o Google" variant="outlined" icon="logo-google" />
        </View>
    );
}

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
    title: {
        fontSize: theme.fontSize.large,
        color: theme.colors.secondary,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.secondary,
        textAlign: 'center',
    },
    form: {
        width: '100%',
        gap: theme.spacing.md,
    },
});
