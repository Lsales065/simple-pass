import { useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';

import * as theme from '../../styles/theme';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';

const RecoverAccountScreen = () => {
    const router = useRouter();

    return (
        <Container>
            <Header title="Recupere sua conta!" />
            <View style={styles.form}>
                <Input label="E-mail" placeholder="Insira seu E-mail" keyboardType="email-address" />
                <Input label="Senha" placeholder="Insira sua Senha" icon="eye-off" secureTextEntry />
                <Button title="Entrar" />
                <Button title="Precisa de uma conta? Cadastre-se" variant="text" onPress={() => router.navigate('register')} />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    form: {
        width: '100%',
        gap: theme.spacing.md,
    },
});

export default RecoverAccountScreen;
