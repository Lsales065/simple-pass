import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import * as theme from '../../styles/theme';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';
import { OrDivider } from '../../components/OrDivider';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { useAuthContext } from '../../contexts/auth-context';

export default function SignupScreen() {
    const { register, loading, error } = useAuthContext();

    const router = useRouter();

    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [rememberLogin, setRememberLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);

    return (
        <Container>
            <Header title="Cadastre-se" subtitle="Insira seus dados para continuar" />

            <View style={styles.form}>
                <Input label="Insira seu CPF" placeholder="CPF" value={cpf} onChangeText={setCpf} />
                <Input label="Insira seu Nome" placeholder="Nome" value={name} onChangeText={setName} />
                <Input label="Insira seu E-mail" placeholder="E-mail" value={email} onChangeText={setEmail} />
                <Input
                    label="Insira sua Senha"
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    onPressIcon={() => setShowPassword(!showPassword)}
                    icon={showPassword ? 'eye' : 'eye-off'}
                    secureTextEntry={!showPassword}
                />
                <Input
                    label="Confirma sua Senha"
                    placeholder="Confirmação da senha"
                    value={confirmationPassword}
                    onChangeText={setConfirmationPassword}
                    onPressIcon={() => setShowConfirmationPassword(!showConfirmationPassword)}
                    icon={showConfirmationPassword ? 'eye' : 'eye-off'}
                    secureTextEntry={!showConfirmationPassword}
                />
                <Checkbox title="Lembrar login" value={rememberLogin} onValueChange={setRememberLogin} />
                {error && <Text style={styles.erro}>{error}</Text>}
                <Button
                    title="Entrar"
                    loading={loading}
                    onPress={() => register({ name, cpf, email, password, confirmationPassword })}
                />
            </View>

            <OrDivider />
            <Button title="Já tenho uma conta" variant="outlined" onPress={() => router.navigate('login')} />
        </Container>
    );
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        gap: theme.spacing.md,
    },
    erro: {
        color: theme.colors.red,
    },
});
