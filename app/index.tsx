import { ChatBubble } from '@/src/components/ChatBubble';
import { ChatInput } from '@/src/components/ChatInput';
import { ChatWaiter } from '@/src/components/ChatWaiter';
import { CustomText } from '@/src/components/CustomText';
import { Header } from '@/src/components/Header';
import { HistoryDrawer } from '@/src/components/HistoryDrawer';
import { InfoPopup } from '@/src/components/InfoPopup';
import { colors } from '@/src/constants/colors';
import { config } from '@/src/constants/config';
import { fastMessages } from '@/src/constants/fastMessages';
import { sendMessage, startConversation } from '@/src/services/socket';
import { useChatStore } from '@/src/store/chatStore';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ChatScreen() {
    const currentConversation = useChatStore((state) => state.currentConversation);
    const setConversationId = useChatStore((state) => state.setConversationId);
    const error = useChatStore((state) => state.error);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [now, setNow] = useState(Date.now());
    const scrollViewRef = useRef<ScrollView>(null);

    const hasConversation = !!currentConversation.id;
    const assistantCount = currentConversation.messages.filter((m) => m.role === 'assistant').length;
    const remainingMessages = 3 - assistantCount;

    // Waiting check
    const messages = currentConversation.messages;
    const lastMessage = messages[messages.length - 1];
    const isLastFromUser = lastMessage?.role === 'user';
    const lastMessageTime = lastMessage?.timestamp ? new Date(lastMessage.timestamp).getTime() : 0;
    const isWaiting = isLastFromUser && (now - lastMessageTime) < config.WAITING_TIMEOUT && !error;

    // Time update for waiting check
    useEffect(() => {
        if (!isLastFromUser) return;

        const interval = setInterval(() => {
            setNow(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, [isLastFromUser, lastMessage?.id]);

    // Auto scroll to bottom
    useEffect(() => {
        setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 200);
    }, [currentConversation.id, currentConversation.messages.length]);

    const handleSend = (message: string) => {
        if (hasConversation) {
            sendMessage(message);
        } else {
            startConversation(message);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Header
                onHistoryPress={() => setDrawerVisible(true)}
                onNewChatPress={() => setConversationId('')}
            />

            {/* Remaining Messages Badge */}
            <View style={styles.remainingBadge}>
                <CustomText weight="bold" size={12} color={colors.textLight}>{`Remains: ${remainingMessages}`}</CustomText>
            </View>

            <ScrollView
                ref={scrollViewRef}
                style={styles.messages}
                contentContainerStyle={styles.messagesContent}
                keyboardShouldPersistTaps="handled"
            >
                {!hasConversation ? (
                    <View style={styles.fastMessagesContainer}>
                        <CustomText weight="bold" size={20} color={colors.textPrimary} style={styles.fastMessagesTitle}>What would you like to know?</CustomText>
                        <View style={styles.fastMessages}>
                            {fastMessages.map((msg, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.fastMessageBox}
                                    onPress={() => handleSend(msg.text)}
                                >
                                    <View style={styles.fastMessageContent}>
                                        <Ionicons name={msg.icon} size={20} color={colors.primary} style={styles.fastMessageIcon} />
                                        <CustomText size={15} color={colors.textPrimary} style={styles.fastMessageText}>{msg.text}</CustomText>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ) : (
                    <>
                        {currentConversation.messages.map((msg) => (
                            <ChatBubble key={msg.id} message={msg} />
                        ))}
                        {isWaiting && <ChatWaiter />}
                    </>
                )}
            </ScrollView>

            <ChatInput
                onSend={handleSend}
                locked={remainingMessages <= 0 && hasConversation}
            />

            <HistoryDrawer
                visible={drawerVisible}
                onClose={() => setDrawerVisible(false)}
            />

            <InfoPopup />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    remainingBadge: {
        position: 'absolute',
        top: 100,
        right: 16,
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        zIndex: 10,
    },
    remainingText: {
        // Moved to CustomText props
    },
    messages: {
        flex: 1,
    },
    messagesContent: {
        paddingTop: 40,
        paddingBottom: 12,
        flexGrow: 1,
    },
    fastMessagesContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    fastMessagesTitle: {
        marginBottom: 16,
        textAlign: 'center',
    },
    fastMessages: {
        gap: 12,
    },
    fastMessageBox: {
        backgroundColor: colors.surface,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.primary + '30',
    },
    fastMessageText: {
        flex: 1,
    },
    fastMessageContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    fastMessageIcon: {
        marginRight: 12,
        marginTop: 2,
    },
});
