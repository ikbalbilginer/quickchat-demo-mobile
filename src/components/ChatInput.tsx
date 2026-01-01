import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';

interface ChatInputProps {
    onSend: (message: string) => void;
    disabled?: boolean;
    locked?: boolean;
}

export function ChatInput({ onSend, disabled, locked }: ChatInputProps) {
    const insets = useSafeAreaInsets();
    const [text, setText] = useState('');

    const handleSend = () => {
        const message = text.trim();
        if (message && !locked) {
            onSend(message);
            setText('');
        }
    };

    const isDisabled = !text.trim() || disabled || locked;

    return (
        <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 12) }]}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder={locked ? "Message limit exceeded" : "Type your message..."}
                placeholderTextColor="#999"
                multiline
                editable={!disabled && !locked}
            />
            <TouchableOpacity
                style={[styles.sendButton, isDisabled && styles.sendButtonDisabled]}
                onPress={handleSend}
                disabled={isDisabled}
            >
                <Ionicons
                    name={locked ? "lock-closed" : "send"}
                    size={20}
                    color={colors.textLight}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 12,
        paddingTop: 8,
        backgroundColor: colors.surface,
        borderTopWidth: 1,
        borderTopColor: colors.background,
        gap: 10,
    },
    input: {
        flex: 1,
        minHeight: 44,
        maxHeight: 120,
        backgroundColor: colors.background,
        borderRadius: 22,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        color: colors.textPrimary,
        fontFamily: fonts.regular
    },
    sendButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonDisabled: {
        opacity: 0.5,
    },
});
