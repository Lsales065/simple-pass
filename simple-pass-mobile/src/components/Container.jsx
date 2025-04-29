import React from 'react';
import { StyleSheet, View } from 'react-native';

import * as theme from '../styles/theme';

export const Container = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
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
