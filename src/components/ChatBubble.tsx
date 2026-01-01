import { StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import { ChatMessage } from '../constants/types';
import { CustomText } from './CustomText';

interface ChatBubbleProps {
    message: ChatMessage;
}

export function ChatBubble({ message }: ChatBubbleProps) {
    const isUser = message.role === 'user';

    return (
        <View style={[styles.container, isUser ? styles.userContainer : styles.assistantContainer]}>
            <View style={[styles.bubble, isUser ? styles.userBubble : styles.assistantBubble]}>
                <CustomText size={15} style={[styles.text, isUser ? styles.userText : styles.assistantText]}>
                    {message.content}
                </CustomText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
        paddingHorizontal: 12,
    },
    userContainer: {
        alignItems: 'flex-end',
    },
    assistantContainer: {
        alignItems: 'flex-start',
    },
    bubble: {
        maxWidth: '80%',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 16,
    },
    userBubble: {
        backgroundColor: colors.surface,
        borderBottomRightRadius: 4,
    },
    assistantBubble: {
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 4,
    },
    text: {
        lineHeight: 22,
    },
    userText: {
        color: colors.textPrimary,
    },
    assistantText: {
        color: colors.textLight,
    },
});
