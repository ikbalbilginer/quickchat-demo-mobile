import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';
import { ChatMessage } from '../constants/types';
import { CustomText } from './CustomText';

interface HistoryItemProps {
    id: string;
    messages: ChatMessage[];
    isActive: boolean;
    onPress: () => void;
}

export function HistoryItem({ id, messages, isActive, onPress }: HistoryItemProps) {
    // Use first message content as title
    const firstMessage = messages[0];
    const title = firstMessage?.content || id;

    return (
        <TouchableOpacity
            style={[styles.item, isActive && styles.itemActive]}
            onPress={onPress}
        >
            <Ionicons
                name={isActive ? "chatbubble" : "chatbubble-outline"}
                size={18}
                color={isActive ? colors.textLight : colors.primary}
            />
            <CustomText
                style={[styles.itemText, isActive && styles.itemTextActive]}
                numberOfLines={1}
            >
                {title}
            </CustomText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 14,
        backgroundColor: colors.background,
        borderRadius: 10,
        marginBottom: 8,
    },
    itemActive: {
        backgroundColor: colors.primary,
    },
    itemText: {
        flex: 1,
        color: colors.textPrimary,
    },
    itemTextActive: {
        color: colors.textLight,
        fontWeight: '600',
    },
});
