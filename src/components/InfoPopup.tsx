import { Ionicons } from '@expo/vector-icons';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/colors';
import { useChatStore } from '../store/chatStore';
import { CustomText } from './CustomText';

export function InfoPopup() {
    const error = useChatStore((state) => state.error);
    const setError = useChatStore((state) => state.setError);

    if (!error) return null;

    return (
        <Modal
            visible={!!error}
            transparent
            animationType="fade"
            onRequestClose={() => setError(null)}
        >
            <View style={styles.overlay}>
                <View style={styles.popup}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="warning" size={40} color={colors.warning} />
                    </View>

                    <CustomText size={15} style={styles.message}>{error}</CustomText>

                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setError(null)}
                    >
                        <CustomText size={16} style={styles.closeButtonText}>Kapat</CustomText>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    popup: {
        width: '100%',
        maxWidth: 320,
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 10,
    },
    iconContainer: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: colors.warning + '20',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    message: {
        color: colors.textPrimary,
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 24,
    },
    closeButton: {
        width: '100%',
        paddingVertical: 14,
        backgroundColor: colors.primary,
        borderRadius: 12,
        alignItems: 'center',
    },
    closeButtonText: {
        fontWeight: '600',
        color: colors.textLight,
    },
});
