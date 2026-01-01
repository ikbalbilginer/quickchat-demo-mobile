import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import { useChatStore } from '../store/chatStore';
import { CustomText } from './CustomText';

interface HeaderProps {
    onHistoryPress?: () => void;
    onNewChatPress?: () => void;
}

export function Header({ onHistoryPress, onNewChatPress }: HeaderProps) {
    const insets = useSafeAreaInsets();
    const status = useChatStore((state) => state.status);
    const userId = useChatStore((state) => state.userId);

    const isAuthenticated = status === 'authenticated';
    const topPadding = (insets.top < 8 ? 12 : insets.top) + 4;

    return (
        <View style={[styles.container, { paddingTop: topPadding }]}>
            <TouchableOpacity onPress={onHistoryPress} style={styles.sideButton}>
                <Fontisto name="history" size={24} color={colors.textLight} />
            </TouchableOpacity>

            <View style={styles.center}>
                <View style={styles.statusRow}>
                    {status === 'disconnected' && <View style={styles.disconnectedDot} />}
                    {status === 'authenticated' && <View style={{ ...styles.disconnectedDot, backgroundColor: colors.success }} />}
                    <CustomText size={15} style={styles.centerText}>
                        {isAuthenticated ? userId : getStatusText(status)}
                    </CustomText>
                </View>
            </View>

            <TouchableOpacity onPress={onNewChatPress} style={styles.sideButton}>
                <FontAwesome name="plus" size={24} color={colors.textLight} />
            </TouchableOpacity>
        </View>
    );
}

function getStatusText(status: string) {
    const map: Record<string, string> = {
        disconnected: 'Disconnected',
        connecting: 'Connecting...',
        connected: 'Connected',
        authenticated: 'Authenticated',
    };
    return map[status] || status;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: colors.primary,
    },
    sideButton: {
        width: 40,
        alignItems: 'center',
    },
    center: {
        flex: 1,
        alignItems: 'center',
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    disconnectedDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.error,
    },
    centerText: {
        color: colors.textLight,
        fontWeight: '600',
    },
});
