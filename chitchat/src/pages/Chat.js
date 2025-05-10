import React from 'react';
import ChatScreen from '../components/ChatScreen';
import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute

export default function Chat() {
  return (
    <ProtectedRoute>
      <div>
        <ChatScreen />
      </div>
    </ProtectedRoute>
  );
}