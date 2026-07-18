import React, { useState } from 'react';
import PrivacyToggleSystem from './76_PrivacyToggle';
import '../styles/settings.css';

const PrivacySettings = () => {
  const [privacy, setPrivacy] = useState({
    shareProgress: false,
    publicProfile: false,
    showDirectory: false,
  });

  const handleToggle = (key) => {
    setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="settings-section">
      <h3 className="section-title">
        <span className="icon">🔒</span> Privacy
      </h3>
      <div className="section-card no-padding">
        <PrivacyToggleSystem privacyState={privacy} onToggle={handleToggle} />
      </div>
    </section>
  );
};

export default PrivacySettings;