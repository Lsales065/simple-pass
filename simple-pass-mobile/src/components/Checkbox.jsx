import React from 'react';
import CheckboxExpo from 'expo-checkbox';
import { StyleSheet, Text, View } from 'react-native';

import * as theme from '../styles/theme';

export const Checkbox = ({ title, ...rest }) => {
    return (
        <View style={styles.container}>
            <CheckboxExpo style={styles.checkbox} color={theme.colors.secondary} {...rest} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        margin: theme.spacing.sm,
    },
    text: {
        fontSize: theme.fontSize.medium,
    },
});
