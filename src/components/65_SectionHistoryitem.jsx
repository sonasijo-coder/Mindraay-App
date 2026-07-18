import React from 'react';
import '../styles/profile.css';


const SessionHistoryItem = ({ date, type, therapist, desc, time }) => {
  return (
    <div className="history-item">
      <div className="history-top">
        <span className="date">📅 {date}</span>
        <span className={`badge ${type.toLowerCase()}`}>{type}</span>
      </div>
      <div className="history-content">
        <p><strong>Therapist:</strong> {therapist}</p>
        <p className="desc">{desc}</p>
      </div>
      <div className="history-footer">
        <span>⏱️ {time}</span>
      </div>
    </div>
  );
};

export default SessionHistoryItem;