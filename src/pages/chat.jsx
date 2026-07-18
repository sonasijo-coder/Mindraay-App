import React from 'react';
import MessagesList from '../components/56_MessageHeader';
import ChatWindow from '../components/57_ChatMessage';
import '../styles/chat.css';                   // സ്റ്റൈൽ ഫയൽ

const Messages = () => {
  return (
    <div className="messages-layout-container">
      
      <MessagesList />
      
      
      <ChatWindow />
    </div>
  );
};

export default Messages;