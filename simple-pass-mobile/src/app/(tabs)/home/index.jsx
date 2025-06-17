import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import * as theme from '../../../styles/theme';
import { Header } from '../../../components/Header';
import { Container } from '../../../components/Container';
import { Balance } from '../../../components/Balance';
import { Card } from '../../../components/Card';
import { NotificationCard } from '../../../components/NotificationCard';
import { usePaymentContext } from '../../../contexts/payment-context';
import { useAuthContext } from '../../../contexts/auth-context';
import { useCardContext } from '../../../contexts/card-context';

const HomeScreen = () => {
    const { payments, loading: loadingPayment } = usePaymentContext();
    const { card, loading: loadingCard } = useCardContext();
    const { user, loading: loadingUser } = useAuthContext();

    const router = useRouter();

    return (
        <Container>
            <Header title="Gerenciar Cartões">
                <View style={styles.headerButton}>
                    <Ionicons name="menu" onPress={() => router.navigate('home/settings')} size={theme.scale(24)} />
                </View>
            </Header>
            {loadingCard || !card ? <ActivityIndicator /> : <Balance balance={card.balance} />}
            {loadingCard || loadingUser || !card || !user ? <ActivityIndicator /> : <Card card={card} username={user.name} />}
            <View style={styles.notificationsContainer}>
                <Text style={styles.notificationsTitle}>Notificações</Text>
                {loadingPayment || !payments ? (
                    <ActivityIndicator />
                ) : (
                    payments.map((item) => (
                        <NotificationCard key={item.id} title={`Pagamento - ${item.method}`} description={`R$ ${item.value}`} />
                    ))
                )}
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
