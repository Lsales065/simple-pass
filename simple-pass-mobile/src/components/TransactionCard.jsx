import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as theme from '../styles/theme';

export const TransactionCard = ({ label, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>R$ {value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.lightGray,
        borderRadius: theme.scale(8),
        padding: theme.spacing.sm,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    label: {
        fontSize: theme.fontSize.medium,
        fontWeight: 'bold',
        padding: theme.spacing.md,
    },
    value: {
        fontSize: theme.fontSize.medium,
        padding: theme.spacing.md,
    },
});
