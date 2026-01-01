import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Animated, Dimensions, Modal, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import { useChatStore } from '../store/chatStore';
import { CustomText } from './CustomText';
import { HistoryItem } from './HistoryItem';

interface HistoryDrawerProps {
    visible: boolean;
    onClose: () => void;
}

const DRAWER_WIDTH = Dimensions.get('window').width * 0.8;

export function HistoryDrawer({ visible, onClose }: HistoryDrawerProps) {
    const insets = useSafeAreaInsets();
    const history = useChatStore((state) => state.history);
    const currentId = useChatStore((state) => state.currentConversation.id);
    const loadFromHistory = useChatStore((state) => state.loadFromHistory);
    const clearHistory = useChatStore((state) => state.clearHistory);
    const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: visible ? 0 : -DRAWER_WIDTH,
            duration: 250,
            useNativeDriver: true,
        }).start();
    }, [visible]);

    const handleSelect = (id: string) => {
        loadFromHistory(id);
        onClose();
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.backdrop} onPress={onClose} />

                <Animated.View
                    style={[
                        styles.drawer,
                        {
                            paddingTop: insets.top || 12,
                            transform: [{ translateX: slideAnim }]
                        }
                    ]}
                >
                    <View style={styles.header}>
                        <CustomText size={20} style={styles.title}>History</CustomText>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons name="close" size={24} color={colors.textPrimary} />
                        </TouchableOpacity>
                    </View>

                    {history.length === 0 ? (
                        <CustomText style={styles.empty}>No history data</CustomText>
                    ) : (
                        <>
                            <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
                                {history.map((conv) => (
                                    <HistoryItem
                                        key={conv.id}
                                        id={conv.id}
                                        messages={conv.messages}
                                        isActive={conv.id === currentId}
                                        onPress={() => handleSelect(conv.id)}
                                    />
                                ))}
                            </ScrollView>

                            <TouchableOpacity style={styles.clearButton} onPress={clearHistory}>
                                <Ionicons name="trash-outline" size={18} color={colors.error} />
                                <CustomText style={styles.clearButtonText}>Clear History</CustomText>
                            </TouchableOpacity>
                        </>
                    )}
                </Animated.View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        flexDirection: 'row',
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    drawer: {
        width: DRAWER_WIDTH,
        backgroundColor: colors.surface,
        height: '100%',
        paddingHorizontal: 16,
        paddingBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.background,
    },
    title: {
        fontWeight: '700',
        color: colors.textPrimary,
    },
    empty: {
        marginTop: 40,
        textAlign: 'center',
        color: colors.textPrimary,
        opacity: 0.5,
    },
    list: {
        marginTop: 12,
    },
    clearButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 14,
        marginVertical: 16,
        borderTopWidth: 1,
        borderTopColor: colors.background,
    },
    clearButtonText: {
        color: colors.error,
        fontWeight: '500',
    },
});
