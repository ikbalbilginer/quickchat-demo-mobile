import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ChatMessage, ConnectionStatus } from '../constants/types';

interface Conversation {
    id: string;
    messages: ChatMessage[];
}

interface ChatStore {
    // Connection state
    status: ConnectionStatus;
    sessionId: string | null;
    userId: string | null;
    currentConversation: Conversation;
    history: Conversation[];

    // Error handling
    error: string | null;

    // Actions
    setStatus: (status: ConnectionStatus) => void;
    setSessionId: (id: string | null) => void;
    setUserId: (id: string | null) => void;
    addMessage: (message: ChatMessage) => void;
    setError: (error: string | null) => void;
    setConversationId: (id: string) => void;
    loadFromHistory: (id: string) => void;
    clearHistory: () => void;
}

const initialState = {
    status: 'disconnected' as ConnectionStatus,
    sessionId: null,
    userId: null,
    currentConversation: {
        id: '',
        messages: [],
    },
    history: [] as Conversation[],
    error: null,
};

export const useChatStore = create<ChatStore>()(
    persist(
        (set) => ({
            ...initialState,

            setStatus: (status) => set({ status }),
            setSessionId: (sessionId) => set({ sessionId }),
            setUserId: (userId) => set({ userId }),

            setConversationId: (id) => set((state) => {
                const current = state.currentConversation;
                let newHistory = [...state.history];

                if (current.id && current.id !== id) {
                    newHistory = newHistory.filter((c) => c.id !== current.id);
                    newHistory.push({ ...current });
                }

                const messages = !state.currentConversation.id ? state.currentConversation.messages : [];

                return {
                    history: newHistory,
                    currentConversation: { id, messages },
                };
            }),

            addMessage: (message) => set((state) => ({
                currentConversation: {
                    ...state.currentConversation,
                    messages: [...state.currentConversation.messages, message],
                },
            })),

            setError: (error) => set({ error }),

            loadFromHistory: (id) => set((state) => {
                const conv = state.history.find((c) => c.id === id);
                if (!conv) return state;

                const current = state.currentConversation;
                let newHistory = [...state.history];

                // save current conversation to history
                if (current.id && current.id !== id) {
                    newHistory = newHistory.filter((c) => c.id !== current.id);
                    newHistory.push({ ...current });
                }

                return {
                    history: newHistory,
                    currentConversation: { ...conv },
                };
            }),

            clearHistory: () => set({ history: [] }),
        }),
        {
            // only history will be saved
            name: 'chat-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: (state) => ({ history: state.history }),
        }
    )
);
