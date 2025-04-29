import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import * as theme from '../../styles/theme';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';
import { OrDivider } from '../../components/OrDivider';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';

export default function SignupScreen() {
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberLogin, setRememberLogin] = useState(false);

    return (
        <Container>
            <Header title="Cadastre-se" subtitle="Insira seus dados para continuar" />

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
        </Container>
    );
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        gap: theme.spacing.md,
    },
});
