// WebinarCardItem.jsx
import React from "react";

function WebinarCardItem({ webinar }) {
  return (
    <div className="webinar-card">
      {/* Top Part: Icon Box + Title & Speaker */}
      <div className="webinar-card-top">
        <div className="webinar-icon-box">
          {webinar.icon || "🎯"}
        </div>
        <div className="webinar-main-details">
          <h3 className="webinar-card-title">{webinar.title}</h3>
          <p className="webinar-speaker">{webinar.host}</p>
        </div>
      </div>

      {/* Middle Part: Date & Time Row */}
      <div className="webinar-meta-row">
        <span className="webinar-meta-item">
          <span className="icon">📅</span> {webinar.date}
        </span>
        <span className="webinar-meta-item">
          <span className="icon">🕒</span> {webinar.time}
        </span>
      </div>

      {/* Bottom Part: Registered Count + Register Button */}
      <div className="webinar-card-footer">
        <p className="webinar-count">
          <span className="icon">👥</span> {webinar.registeredCount}
        </p>
        <a href={webinar.link} className="webinar-register-btn">
          Register
        </a>
      </div>
    </div>
  );
}

export default WebinarCardItem;