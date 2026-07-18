import React from 'react';
import { FaArrowLeft } from "react-icons/fa";

const NotificationHeader = () => {
  return (
    <div className="notification-container">
      {/* Back Button */}
      <button className="back-btn">
        <FaArrowLeft size={16} />
        <span>Back</span>
      </button>

      {/* Title Area */}
      <div className="title-section">
        <h2>
          Notifications <span className="badge">3</span>
        </h2>
        <p className="subtitle">Stay up to date with sessions, messages, and reminders</p>
      </div>

      {/* Controls Box */}
      <div className="controls-card">
        <div className="toggle-section">
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
          <div className="toggle-text">
            <span className="toggle-title">Notifications On</span>
            <span className="toggle-subtitle">All alerts enabled</span>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-mark-read">Mark all read</button>
          <button className="btn-clear-all">Clear all</button>
        </div>
      </div>

      {/* Filters (All / Unread) */}
      <div className="filter-tabs">
        <button className="filter-btn">All</button>
        <button className="filter-btn active">Unread (3)</button>
      </div>
    </div>
  );
};

export default NotificationHeader;