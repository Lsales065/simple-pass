import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import * as theme from '../styles/theme';

export const Balance = ({ balance }) => {
    const [showBalance, setShowBalance] = useState(false);

    return (
        <TouchableOpacity onPress={() => setShowBalance(!showBalance)} style={styles.container}>
            <Text style={styles.label}>Saldo do cartão</Text>
            <Text style={styles.value}>{showBalance ? `R$ ${balance}` : 'R$ *****'}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: theme.spacing.md,
        gap: theme.spacing.xs,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: theme.fontSize.medium,
        fontWeight: 'bold',
    },
    value: {
        fontSize: theme.fontSize.medium,
    },
});
