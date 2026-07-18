import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import SearchBar from './6_SearchBar';

const MessagesList = () => {
  const contacts = [
    { id: 1, name: 'Dr. Sarah Mitchell', role: 'Clinical Psychologist', subtext: 'See you Thursday at 2 PM!', time: '10:42 AM', active: true },
    { id: 2, name: 'Dr. Michael Chen', role: 'Family Therapist', subtext: 'Please complete the worksheet I...', time: 'Yesterday', unread: 2 },
    { id: 3, name: 'Alex M.', role: 'Patient', subtext: 'Thanks for the session, I feel bet...', time: '9:15 AM', unread: 1 },
    { id: 4, name: 'Jordan K.', role: 'Patient', subtext: 'Can we reschedule to Friday?', time: 'Mon' },
    { id: 5, name: 'Dr. Patel', role: 'Colleague', subtext: 'Interesting case study, thanks!', time: 'Tue' }
  ];

  return (
    <div className="messages-sidebar">
      {/* Header Area */}
      <div className="sidebar-header">
        <button className="msg-back-btn">
          <ArrowLeft size={16} />
        </button>
        <h2>Messages</h2>
      </div>

      {/* Reusable Search Bar Area (Homepage-ൽ ഉള്ളത് പോലെ) */}
      <div className="search-bar-wrapper">
        <Search className="search-icon" size={16} />
        <input 
          type="text" 
          placeholder="Search contacts..." 
          className="contact-search-input"
        />
      </div>

      {/* Contacts List */}
      <div className="contacts-scroll-area">
        {contacts.map((contact) => (
          <div key={contact.id} className={`contact-card ${contact.active ? 'active' : ''}`}>
            <div className="avatar-wrapper">
              <div className="avatar-circle">
                {contact.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
              </div>
              <span className="online-indicator"></span>
            </div>
            
            <div className="contact-info">
              <div className="contact-name-row">
                <h4>{contact.name}</h4>
                <span className="msg-time">{contact.time}</span>
              </div>
              <p className="contact-role">{contact.role}</p>
              <p className="contact-subtext">{contact.subtext}</p>
            </div>

            {contact.unread && (
              <span className="unread-msg-badge">{contact.unread}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesList;