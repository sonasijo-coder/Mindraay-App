// WebinarHeader.jsx
import React from "react";

function WebinarHeader() {
  return (
    <div className="webinar-header-container">
      {/* Left side text */}
      <div className="webinar-header-text">
        <h2 className="webinar-header-title">Upcoming Webinars & Workshops</h2>
        <p className="webinar-header-subtitle">
          Join live sessions with mental health experts
        </p>
      </div>

      {/* Right side View All */}
      <a href="#view-all" className="webinar-view-all">
        View All <span className="webinar-view-arrow">›</span>
      </a>
    </div>
  );
}

export default WebinarHeader;