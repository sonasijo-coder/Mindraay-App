import React from "react";

function CrisisSupportBanner() {
  return (
    <div className="crisis-banner">
      <span className="crisis-badge">● 24/7 Crisis Support Available</span>
      <h2 className="crisis-title">Need Immediate Support?</h2>
      <p className="crisis-text">
        If you're in crisis or need immediate assistance, we're here for you around the clock.
      </p>
      
      {/* Buttons Container for Horizontal Alignment */}
      <div className="crisis-actions">
        <button className="hotline-btn">
          <span className="btn-icon">📞</span> Crisis Hotline: 988
        </button>
        <button className="chat-support-btn">
          <span className="btn-icon">💬</span> Chat with Support
        </button>
      </div>
      
      <p className="crisis-note">Available 24/7 · Confidential · Free of charge</p>
    </div>
  );
}

export default CrisisSupportBanner;