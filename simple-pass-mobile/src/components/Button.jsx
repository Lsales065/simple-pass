import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import * as theme from '../styles/theme';

export const Button = ({ title, variant = 'contained', icon, style, ...rest }) => {
    return (
        <TouchableOpacity style={[styles.container, styles.variant[variant], style]} {...rest}>
            {!!icon && <Ionicons style={styles.icon} name={icon} />}
            {!!title && <Text style={styles.text}>{title}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.md,
    },
    variant: {
        contained: {
            width: '100%',
            backgroundColor: theme.colors.primary,
            padding: theme.spacing.md,
            borderRadius: theme.spacing.md,
        },
        text: {
            width: '100%',
            textDecorationLine: 'underline',
        },
        outlined: {
            width: '100%',
            backgroundColor: 'transparent',
            padding: theme.spacing.md,
            borderRadius: theme.spacing.md,
            borderWidth: theme.scale(1),
            borderColor: theme.colors.secondary,
        },
    },
    icon: {
        fontSize: theme.fontSize.large,
        color: theme.colors.secondary,
    },
    text: {
        color: theme.colors.secondary,
        fontSize: theme.fontSize.medium,
        textAlign: 'center',
    },
});
