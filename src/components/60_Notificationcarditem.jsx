import React from 'react';
import { Calendar, MessageSquare, Clock, CheckCircle2, Star, AlertCircle, Trash2, Check } from 'lucide-react';

const NotificationCardItem = ({ item }) => {
  // ടൈപ്പ് അനുസരിച്ച് ഐക്കണുകൾ മാറാൻ
  const getIcon = (type) => {
    switch (type) {
      case 'calendar': return <Calendar size={20} />;
      case 'message': return <MessageSquare size={20} />;
      case 'clock': return <Clock size={20} />;
      case 'success': return <CheckCircle2 size={20} />;
      case 'star': return <Star size={20} />;
      case 'danger': return <AlertCircle size={20} />;
      default: return <MessageSquare size={20} />;
    }
  };

  return (
    <div className={`notification-card ${item.isUnread ? 'unread' : ''}`}>
      {/* Left Icon */}
      <div className={`icon-wrapper type-${item.type}`}>
        {getIcon(item.type)}
      </div>

      {/* Content Area */}
      <div className="card-content">
        <h4 className="card-title">
          {item.isUnread && <span className="unread-dot"></span>}
          {item.title}
        </h4>
        <p className="card-description">{item.description}</p>
        
        <div className="card-footer">
          <span className="time-text">{item.time}</span>
          {item.actionText && (
            <a href="#action" className={`action-link color-${item.type}`}>
              {item.actionText} <span className="arrow">›</span>
            </a>
          )}
        </div>
      </div>

      {/* Hover Actions (Right Side Top) */}
      <div className="hover-actions">
        <button className="action-btn tick-btn" title="Mark as read">
          <Check size={14} />
        </button>
        <button className="action-btn delete-btn" title="Delete">
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
};

export default NotificationCardItem;