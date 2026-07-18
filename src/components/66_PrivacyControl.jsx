import React from 'react';

import '../styles/profile.css';


const PrivacyControl = () => {
  return (
    <div className="privacy-banner">
      <span className="lock-icon">🔒</span>
      <div className="privacy-text">
        <h4>Your Privacy is Protected</h4>
        <p>All information is encrypted. Only therapists you explicitly choose can view your data.</p>
      </div>
    </div>
  );
};

export default PrivacyControl;