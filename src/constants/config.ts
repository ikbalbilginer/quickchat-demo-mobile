/**
 * Quick Mobile - Configuration
 * 
 * Environment variables are loaded from .env.quick file
 */

export const config = {
    // WebSocket Configuration
    WS_URL: process.env.EXPO_PUBLIC_WS_URL || '',

    // JWT Token
    JWT_TOKEN: process.env.EXPO_PUBLIC_JWT_TOKEN || '',

    // Static Configuration
    COMPANY_NAME: process.env.EXPO_PUBLIC_COMPANY_NAME || '',
    BRAND_NAME: process.env.EXPO_PUBLIC_BRAND_NAME || '',
    PRODUCT_MODEL_NAME: process.env.EXPO_PUBLIC_PRODUCT_MODEL_NAME || '',
    RESPONSE_LANGUAGE_CODE: process.env.EXPO_PUBLIC_RESPONSE_LANGUAGE_CODE || '',

    // UI Configuration
    WAITING_TIMEOUT: 25 * 1000,

    MAX_RECONNECT_ATTEMPTS: 3,
    BASE_RECONNECT_DELAY: 1000,
};

