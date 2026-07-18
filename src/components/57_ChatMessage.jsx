import React from 'react';
import { Paperclip, Smile, Send } from 'lucide-react';

const ChatWindow = () => {
  const chatHistory = [
    { id: 1, sender: 'them', text: 'Hi! How are you feeling since our last session?', time: '10:00 AM' },
    { id: 2, sender: 'me', text: 'Much better, thank you. The breathing exercises really helped.', time: '10:05 AM' },
    { id: 3, sender: 'them', text: "That's wonderful to hear! Keep practicing them daily.", time: '10:06 AM' },
    { id: 4, sender: 'me', text: "I will. I've also been journaling like you suggested.", time: '10:10 AM' },
    { id: 5, sender: 'them', text: 'Great progress! See you Thursday at 2 PM!', time: '10:42 AM' }
  ];

  return (
    <div className="chat-window-container">
      {/* Top Header Row */}
      <div className="chat-header">
        <div className="header-profile">
          <div className="avatar-circle small-avatar">SM</div>
          <div className="profile-details">
            <h3>Dr. Sarah Mitchell</h3>
            <p><span className="status-dot"></span> Online · Clinical Psychologist</p>
          </div>
        </div>
        <div className="header-action-buttons">
          <button className="action-tag active">Chat</button>
          <button className="action-tag">Audio</button>
          <button className="action-tag">Video</button>
        </div>
      </div>

      {/* Main Messages Area */}
      <div className="chat-messages-area">
        {chatHistory.map((msg) => (
          <div key={msg.id} className={`message-row ${msg.sender}`}>
            {msg.sender === 'them' && <div className="avatar-circle micro-avatar">SM</div>}
            <div className="message-bubble-wrapper">
              <div className="message-bubble">
                <p>{msg.text}</p>
              </div>
              <span className="bubble-time">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text Input Area */}
      <div className="chat-input-footer">
        <button className="footer-icon-btn">
          <Paperclip size={20} />
        </button>
        <div className="input-wrapper-box">
          <input type="text" placeholder="Message Dr. Sarah Mitchell..." />
          <button className="emoji-btn">
            <Smile size={20} />
          </button>
        </div>
        <button className="send-btn">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;