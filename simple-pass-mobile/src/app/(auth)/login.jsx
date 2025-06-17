import { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useRouter } from 'expo-router';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import * as theme from '../../styles/theme';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { useAuthContext } from '../../contexts/auth-context';

const LoginScreen = () => {
    const { login, loading, error } = useAuthContext();

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberLogin, setRememberLogin] = useState(false);

    return (
        <Container>
            <Header title="Bem-vindo de volta!" subtitle="Digite seu E-mail e Senha">
                <Image source={require('../../assets/images/bus.png')} style={styles.logo} resizeMethod="scale" />
            </Header>
            <View style={styles.form}>
                <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
                <Input
                    placeholder="Senha"
                    value={password}
                    onPressIcon={() => setShowPassword(!showPassword)}
                    onChangeText={setPassword}
                    icon={showPassword ? 'eye' : 'eye-off'}
                    secureTextEntry={!showPassword}
                />
                <Button title="Entrar" loading={loading} onPress={() => login({ email, password })} />
                {error && <Text style={styles.error}>{error}</Text>}
                <Checkbox title="Lembrar login" value={rememberLogin} onValueChange={setRememberLogin} />
            </View>
            <View style={styles.options}>
                {/* <Button variant="text" title="Esqueceu sua senha?" onPress={() => router.navigate('recover-account')} /> */}
                <Button variant="text" title="Não tem uma conta? Inscreva-se" onPress={() => router.navigate('register')} />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: theme.scale(100),
        height: theme.scale(100),
    },
    form: {
        width: '100%',
        gap: theme.spacing.sm,
    },
    options: {
        width: '100%',
        gap: theme.spacing.md,
    },
    error: {
        color: theme.colors.red,
    },
});

export default LoginScreen;
