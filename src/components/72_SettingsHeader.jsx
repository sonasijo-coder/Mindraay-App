import React from 'react';
import '../styles/settings.css';

const SettingsHeader = () => {
  return (
    <header className="settings-header">
      <button className="back-btn" onClick={() => window.history.back()}>
        <span className="back-arrow">←</span> Back
      </button>
      <h2>Settings</h2>
      <p>Manage your account preferences and privacy settings</p>
    </header>
  );
};

export default SettingsHeader;