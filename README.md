# QuickChat Demo Mobile

A real-time chat application built with Expo and WebSocket.

## Security Note
This repository does not include any real credentials.
Environment variables were provided by the company for local testing and are not committed.

## Getting Started

```bash
# Copy environment file to root directory (same directory as README.md)
cp /path/to/.env.quick .env.quick

# Then fill in your values in .env.quick

# Install dependencies
npm install

# Run development server
npm start

# Run on iOS simulator [ *** ]
npm run ios

# Run on Android emulator
npm run android
```

## Libraries

| Library | Purpose |
|---------|---------|
| **Expo ~54** | React Native development framework |
| **Expo Router ~6** | File-based navigation for React Native |
| **Zustand ^5** | Lightweight state management |
| **AsyncStorage ^2** | Persistent storage for chat history |
| **Expo Vector Icons ^15** | Icon library (Ionicons, FontAwesome, etc.) |
| **React Native Reanimated ~4** | Smooth animations |

---

## Socket Architecture

A dedicated socket service module was created under:

```
service/socket
```

This module is responsible for all real-time communication and contains:

* `startConversation()` – initiates a new conversation
* `sendMessage()` – sends messages within an active conversation
* Socket event handlers for incoming server events

### Reconnection Strategy

* `scheduleReconnect()`

  * The socket connection automatically retries up to 3 reconnection attempts.
  * Each retry uses an exponentially increasing backoff delay.
  * If the connection cannot be established after all attempts:

An error popup is displayed to inform the user about the connection issue.

### Socket Initialization & Authentication

* The socket connection is established once, when the application boots, inside **RootLayout**.
* Immediately after connection, an **auth emit** is sent using a **static token**.
* On successful authentication:

  * The returned `user_id` is stored in **Zustand** state

---

## State Management (Zustand)

Zustand is used as the global state management solution.

#### chatStore

* `currentConversation`

  * Manages the active conversation flow
  * Holds messages exchanged during the current session

* `history`

  * Stores past conversations
  * Persisted using **AsyncStorage**
  * Ensures conversation history remains accessible after app restarts

> Only the `history` slice is persisted to keep runtime state lightweight.

---

## Quick Chat Flow

### Screen Architecture

* The application runs on a **single screen**:

  * `ChatScreen (index.tsx)`

### Conversation Lifecycle

* On the **first user message**:

  * `start_quick_conversation` socket event is emitted
* On **subsequent messages**:

  * `quick_message` socket event is used

### Message Handling & UX

* While waiting for an AI response:

  * A **3-dot loading animation** is rendered
  * A **25-second timeout** is applied for responses

  * Each user message includes a extra `timestamp` to manage this timeout

### Message Limit Logic

* The client enforces a **3-message limit**:

  * After the **3rd assistant response**:

    * Chat input is disabled
    * Conversation is saved to history

---

## Colors & Header & Navigation

* The shared color palette used across the project is defined under:

  ```
  constants/colors
  ```

* Displays:

  * Socket connection status
  * `user_id` (once authenticated)

* Action buttons:

  * **History**
  * **New Chat**

### History Drawer

* Opens from the header
* Allows users to:

  * View previous conversations
  * Restore a past conversation
  * Delete conversations

---

## New Chat Flow

* When **New Chat** is triggered:

  * The current conversation is saved or updated in history
  * Chat state is reset
  * Quick messages and text input are re-rendered for a fresh session

---

## AI Response Rendering

* AI responses are received in **HTML format**
* Rendered directly in the chat UI
* A fallback mechanism is in place using:

  ```
  data.response
  ```

---

## Cross-Platform Consistency

* **Socket logic** and **state management architecture** are shared conceptually between Web & Mobile projects

---

## Typography

* Outfit-Regular 
* Outfit-Bold 

## Summary

This project demonstrates:

* Clean separation of socket, state, and UI layers
* Real-time messaging with controlled client-side limits
* Persistent chat history with a lightweight runtime state
* A focused, minimal mobile chat experience aligned with the web counterpart
