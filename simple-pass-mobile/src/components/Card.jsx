import { StyleSheet, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import * as theme from '../styles/theme';

export const Card = ({ title = 'CARTÃO TRANSPORTE', icon = 'person', card, username }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardBackground}>
                <View style={styles.cardType}>
                    <Text style={styles.cardTypeName}>{card.type}</Text>
                    <View style={styles.circle} />
                </View>
            </View>
            <View style={styles.cardContent}>
                <View style={styles.userInfo}>
                    <Ionicons name={icon} style={styles.icon} />
                    <Text style={styles.cardTitle}>{title}</Text>
                </View>
                <View>
                    <Text style={styles.userName}>Usuário: {username}</Text>
                    <Text style={styles.userNumber}>Número do cartão: {card.code}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.scale(16),
        padding: theme.spacing.md,
        flexDirection: 'row',
        position: 'relative',
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: theme.scale(4) },
        shadowOpacity: 0.2,
        elevation: 8,
        shadowRadius: theme.scale(16),
        height: theme.scale(200),
        width: '100%',
    },
    cardBackground: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: theme.scale(70),
        backgroundColor: theme.colors.darkGray,
        borderTopLeftRadius: theme.scale(16),
        borderBottomLeftRadius: theme.scale(16),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardType: {
        transform: [{ rotate: '-90deg' }],
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.sm,
        textTransform: 'uppercase',
    },
    cardTypeName: {
        fontSize: theme.fontSize.md,
        color: theme.colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    circle: {
        width: theme.scale(28),
        height: theme.scale(28),
        borderRadius: theme.scale(100),
        borderWidth: theme.scale(2),
        borderColor: theme.colors.secondary,
        backgroundColor: theme.colors.green,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.sm,
    },
    cardContent: {
        marginLeft: theme.scale(70),
        width: '60%',
        gap: theme.spacing.md,
    },
    cardTitle: {
        fontSize: theme.fontSize.large,
        fontWeight: 'bold',
        color: theme.colors.secondary,
    },
    icon: {
        color: theme.colors.secondary,
        fontSize: theme.scale(32),
    },
});
