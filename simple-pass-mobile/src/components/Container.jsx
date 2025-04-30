import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import * as theme from '../styles/theme';

export const Container = ({ children }) => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {children}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    content: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: theme.spacing.md,
    },
});
