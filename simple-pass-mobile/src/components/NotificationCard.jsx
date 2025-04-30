import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import * as theme from '../styles/theme';

export const NotificationCard = ({ title, description, iconLeft = 'logo-usd', iconRight = 'arrow-down' }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.content}>
                <Ionicons name={iconLeft} style={styles.iconLeft} />
                <View style={styles.infos}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
            <Ionicons style={styles.iconRight} name={iconRight} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray,
        borderRadius: theme.scale(8),
        padding: theme.spacing.md,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    content: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.md,
    },
    iconLeft: {
        fontSize: theme.fontSize.large,
    },
    infos: {
        width: '100%',
        gap: theme.scale(1),
    },
    title: {
        fontSize: theme.fontSize.medium,
        fontWeight: 'bold',
        color: theme.colors.secondary,
    },
    description: {
        fontSize: theme.fontSize.small,
        color: theme.colors.darkGray,
    },
    iconRight: {
        fontSize: theme.fontSize.large,
        color: theme.colors.secondary,
    },
});
