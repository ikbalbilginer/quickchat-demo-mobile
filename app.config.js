const { existsSync } = require('fs');
const { resolve } = require('path');

// Load .env.quick if it exists (only log once)
const envPath = resolve(__dirname, '.env.quick');
if (!global.__ENV_LOADED__) {
    if (existsSync(envPath)) {
        require('dotenv').config({ path: envPath, quiet: true });
        console.log('✓ Loaded environment from .env.quick');
    } else {
        console.warn('⚠ Warning: .env.quick file not found');
    }
    global.__ENV_LOADED__ = true;
}

module.exports = {
    expo: {
        name: 'quickchat-demo-mobile',
        slug: 'quickchat-demo-mobile',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/images/icon.png',
        scheme: 'quickchatdemomobile',
        userInterfaceStyle: 'automatic',
        newArchEnabled: false,
        ios: {
            supportsTablet: true,
        },
        android: {
            adaptiveIcon: {
                backgroundColor: '#E6F4FE',
                backgroundImage: './assets/images/android-icon-background.png',
            },
            edgeToEdgeEnabled: true,
            predictiveBackGestureEnabled: false,
        },
        web: {
            output: 'static',
            favicon: './assets/images/favicon.png',
        },
        plugins: [
            'expo-router',
            [
                'expo-splash-screen',
                {
                    image: './assets/images/splash-icon.png',
                    imageWidth: 200,
                    resizeMode: 'contain',
                    backgroundColor: '#ffffff',
                    dark: {
                        backgroundColor: '#000000',
                    },
                },
            ],
        ],
        experiments: {
            typedRoutes: true,
            reactCompiler: true,
        },
    },
};
