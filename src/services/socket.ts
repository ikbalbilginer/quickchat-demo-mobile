import { config } from '@/src/constants/config';
import type { ChatMessage, IncomingMessage } from '@/src/constants/types';
import { useChatStore } from '@/src/store/chatStore';

let socket: WebSocket | null = null;
let reconnectAttempts = 0;
let reconnectTimeout: ReturnType<typeof setTimeout> | null = null;
let isManualDisconnect = false;

export function connect() {
    const store = useChatStore.getState();

    if (socket?.readyState === WebSocket.OPEN || socket?.readyState === WebSocket.CONNECTING) {
        return;
    }

    isManualDisconnect = false;
    store.setStatus('connecting');
    store.setError(null);

    socket = new WebSocket(config.WS_URL);

    socket.onopen = () => {
        console.log('[WS] Connected');
        store.setStatus('connected');
        reconnectAttempts = 0; // Reset on successful connection
    };

    socket.onmessage = (event) => {
        try {
            const message: IncomingMessage = JSON.parse(event.data);
            handleMessage(message);
        } catch (err) {
            console.error('[WS] Parse error:', err);
        }
    };

    socket.onclose = () => {
        console.log('[WS] Disconnected');
        store.setStatus('disconnected');
        socket = null;

        // Attempt reconnect if not manual disconnect
        if (!isManualDisconnect) {
            scheduleReconnect();
        }
    };
}

function scheduleReconnect() {
    const store = useChatStore.getState();

    if (reconnectAttempts >= config.MAX_RECONNECT_ATTEMPTS) {
        console.log('[WS] Max reconnect attempts reached');
        store.setError('Connection lost. Please try again.');
        return;
    }

    // Exponential backoff: 1s, 2s, 4s, 8s, 16s
    const delay = config.BASE_RECONNECT_DELAY * Math.pow(2, reconnectAttempts);
    reconnectAttempts++;

    console.log(`[WS] Reconnecting in ${delay}ms (attempt ${reconnectAttempts}/${config.MAX_RECONNECT_ATTEMPTS})`);

    reconnectTimeout = setTimeout(() => {
        connect();
    }, delay);
}

function handleMessage(message: IncomingMessage) {
    const store = useChatStore.getState();

    switch (message.type) {
        case 'connected':
            console.log('[WS] Session data:', !!message.data);
            if (message.data?.session_id) {
                store.setSessionId(message.data.session_id);
            }
            authenticate();
            break;

        case 'authenticated':
            store.setUserId(message.data.user_id);
            store.setStatus('authenticated');
            break;

        case 'quick_conversation_created':
            store.setConversationId(message.data.conversation_id);
            break;

        case 'quick_response':
            const aiMessage: ChatMessage = {
                id: Date.now().toString(),
                role: 'assistant',
                content: message.data.response,
                timestamp: new Date(),
                sources: message.data.sources,
            };
            store.addMessage(aiMessage);
            break;

        case 'error':
            console.log('Error:', message.data.message);
            store.setError(message.data.message);
            break;
    }
}

function authenticate() {
    send({
        type: 'auth',
        data: { token: config.JWT_TOKEN }
    });
}

export function startConversation(message: string) {
    const store = useChatStore.getState();

    const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content: message,
        timestamp: new Date(),
    };
    store.addMessage(userMessage);

    send({
        type: 'start_quick_conversation',
        data: {
            user_id: store.userId,
            company_name: config.COMPANY_NAME,
            brand_name: config.BRAND_NAME,
            product_model_name: config.PRODUCT_MODEL_NAME,
            response_language_code: config.RESPONSE_LANGUAGE_CODE,
            message,
        }
    });
}

export function sendMessage(message: string) {
    const store = useChatStore.getState();

    if (!store.currentConversation?.id) {
        console.warn('[WS] No active conversation');
        return;
    }

    const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content: message,
        timestamp: new Date(),
    };
    store.addMessage(userMessage);

    send({
        type: 'quick_message',
        data: {
            conversation_id: store.currentConversation.id,
            message,
        }
    });
}

function send(data: object) {
    if (socket?.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(data));
    } else {
        console.warn('[WS] Socket not ready');
        useChatStore.getState().setError('Connection not ready. Please wait...');
    }
}

export function disconnect() {
    isManualDisconnect = true;

    // Clear any pending reconnect
    if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
        reconnectTimeout = null;
    }

    if (socket) {
        socket.close();
        socket = null;
    }

    reconnectAttempts = 0;
}

export function isConnected() {
    return socket?.readyState === WebSocket.OPEN;
}

// Force reconnect (can be called from UI)
export function reconnect() {
    disconnect();
    isManualDisconnect = false;
    reconnectAttempts = 0;
    connect();
}
