import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import * as theme from '../styles/theme';

export const Input = ({ label, icon, onPressIcon, ...rest }) => {
    return (
        <View style={styles.container}>
            {!!label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholderTextColor={theme.colors.secondary} {...rest} />
                {!!icon && (
                    <TouchableOpacity style={styles.iconButton} onPress={onPressIcon}>
                        <Ionicons name={icon} style={styles.icon} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: theme.spacing.sm,
    },
    label: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.secondary,
    },
    inputWrapper: {
        position: 'relative',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        backgroundColor: theme.colors.lightGray,
        borderRadius: theme.spacing.md,
        fontSize: theme.fontSize.medium,
        color: theme.colors.secondary,
        padding: theme.spacing.md,
        paddingRight: theme.scale(40),
    },
    iconButton: {
        position: 'absolute',
        right: theme.spacing.md,
    },
    icon: {
        fontSize: theme.fontSize.large,
        color: theme.colors.secondary,
    },
});
