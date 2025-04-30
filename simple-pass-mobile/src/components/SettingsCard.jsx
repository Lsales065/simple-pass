import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import * as theme from '../styles/theme';

export const SettingsCard = ({ iconLeft, title, iconRight }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Ionicons name={iconLeft} size={theme.scale(28)} />
            <Text style={styles.title}>{title}</Text>
            <Ionicons name={iconRight} size={theme.scale(28)} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.lightGray,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing.md,
        borderRadius: theme.scale(8),
    },
    title: {
        fontSize: theme.fontSize.medium,
        fontWeight: 'bold',
        color: theme.colors.secondary,
    },
});
