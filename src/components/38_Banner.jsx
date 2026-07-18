// ResourceBanner.jsx
import React from 'react';

function ResourceBanner({ onBack, onFindTherapist, onSignIn }) {
  return (
    <header className="resource-banner-header">
      {/* 1. മുകളിലെ നാവിഗേഷൻ ബാർ (Back, Find Therapist, Sign In) */}
      <div className="resource-banner-nav">
        <button className="resource-back-btn" onClick={onBack}>
          <span className="resource-back-arrow">←</span> Back
        </button>
        
        <div className="resource-nav-actions">
          <button className="resource-link-btn" onClick={onFindTherapist}>
            Find Therapist
          </button>
          <button className="resource-signin-btn" onClick={onSignIn}>
            Sign In
          </button>
        </div>
      </div>

      {/* 2. ഫിഗ്മ ഡിസൈനിലെ മെയിൻ ഹെഡിങ് ഏരിയ */}
      <div className="resource-banner-content">
        <h1 className="resource-main-title">Mental Health Resources & Tools</h1>
        <p className="resource-subtitle">
          Educational content, self-help tools, and community support for your wellness journey
        </p>
      </div>
    </header>
  );
}

export default ResourceBanner;