import { StyleSheet, Text, View } from 'react-native';

import * as theme from '../styles/theme';

export const OrDivider = () => {
    return (
        <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.orText}>ou</Text>
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create({
    divider: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        width: '50%',
        height: theme.scale(1),
        backgroundColor: theme.colors.white,
        marginHorizontal: theme.spacing.md,
    },
    orText: {
        color: theme.colors.white,
        fontSize: theme.fontSize.md,
    },
});
