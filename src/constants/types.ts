/**
 * WebSocket Message Types
 */

// Connection status
export type ConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'authenticated';

// Base message structure
export interface BaseMessage {
    type: string;
    timestamp?: string;
}

// Auth request
export interface AuthRequest {
    type: 'auth';
    data: {
        token: string;
    };
}

// Auth response
export interface AuthenticatedResponse extends BaseMessage {
    type: 'authenticated';
    data: {
        message: string;
        user_id: string;
    };
}

// Start conversation request
export interface StartConversationRequest {
    type: 'start_quick_conversation';
    data: {
        user_id: string;
        company_name: string;
        brand_name: string;
        product_model_name: string;
        response_language_code: string;
        message: string;
    };
}

// Conversation created response
export interface ConversationCreatedResponse extends BaseMessage {
    type: 'quick_conversation_created';
    data: {
        conversation_id: string;
        status: string;
        max_user_messages: number;
        remaining_messages: number;
    };
}

// Quick message request
export interface QuickMessageRequest {
    type: 'quick_message';
    data: {
        conversation_id: string;
        message: string;
    };
}

// AI response
export interface QuickResponse extends BaseMessage {
    type: 'quick_response';
    data: {
        conversation_id: string;
        response: string;
        sources: Array<{
            document_name: string;
            page: number;
        }>;
        is_at_limit: boolean;
    };
}

// Error response
export interface ErrorResponse extends BaseMessage {
    type: 'error';
    data: {
        error: string;
        message: string;
    };
}

// Connected message (received on connection)
export interface ConnectedMessage extends BaseMessage {
    type: 'connected';
    data?: {
        session_id?: string;
    };
}

// Union type for all incoming messages
export type IncomingMessage =
    | ConnectedMessage
    | AuthenticatedResponse
    | ConversationCreatedResponse
    | QuickResponse
    | ErrorResponse;

// Union type for all outgoing messages
export type OutgoingMessage =
    | AuthRequest
    | StartConversationRequest
    | QuickMessageRequest;

// Chat message for UI
export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    sources?: Array<{
        document_name: string;
        page: number;
    }>;
}
