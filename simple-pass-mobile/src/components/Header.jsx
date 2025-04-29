import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as theme from '../styles/theme';

export const Header = ({ title, subtitle, children }) => {
    return (
        <View style={styles.header}>
            {children}
            {!!title && <Text style={styles.title}>{title}</Text>}
            {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        gap: theme.spacing.sm,
        alignItems: 'center',
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
});
