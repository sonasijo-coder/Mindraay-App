import React from "react";

function InsightsHeader() {
  return (
    <div className="insights-header-container">
      {/* Left Side: Header Text */}
      <div className="insights-header-text">
        <h2 className="insights-title">Mental Health Insights</h2>
        <p className="insights-subtitle">Educational content to support your wellness</p>
      </div>

      {/* Right Side: View All Link */}
      <a href="#view-all" className="insights-view-all">
        View All <span className="arrow">→</span>
      </a>
    </div>
  );
}

export default InsightsHeader;