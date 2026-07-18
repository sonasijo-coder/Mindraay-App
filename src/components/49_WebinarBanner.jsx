import React from 'react';
import { IoArrowBack } from 'react-icons/io5';

const WebinarBanner = ({ onBack, onFindTherapist, onSignIn }) => {
  return (
    <div className="webinar-header-container">
      {/* 1. മുകളിലെ നാവിഗേഷൻ ബാർ (Back Button & Actions) */}
      <div className="webinar-top-nav">
        <button className="webinar-back-btn" onClick={onBack}>
          <IoArrowBack size={16} />
          <span>Back</span>
        </button>

        <div className="webinar-nav-actions">
          <button className="webinar-link-btn" onClick={onFindTherapist}>
            Find Therapist
          </button>
          <button className="webinar-signin-btn" onClick={onSignIn}>
            Sign In
          </button>
        </div>
      </div>

      {/* 2. മധ്യത്തിലെ ഹീറോ കണ്ടന്റ് (Title & Subtitle) */}
      <div className="webinar-hero-content">
        <h1>Webinars & Workshops</h1>
        <p>
          Join live sessions with mental health experts and learn valuable skills 
          for your wellness journey
        </p>
      </div>
    </div>
  );
};

export default WebinarBanner;