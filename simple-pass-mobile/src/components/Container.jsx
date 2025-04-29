import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import * as theme from '../styles/theme';

export const Container = ({ children }) => {
    return <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: theme.colors.background,
        padding: theme.spacing.md,
    },
});
