import React from 'react';
import SecurityOption from '../components/78_SecurityItem';
import '../styles/settings.css';

const SecuritySettings = () => {
  return (
    <section className="settings-section">
      <h3 className="section-title">
        <span className="icon">🛡️</span> Security
      </h3>
      <div className="section-card no-padding">
        <SecurityOption title="Change Password" description="Update your password regularly for security" onClick={() => alert('Password Route')} />
        <SecurityOption title="Two-Factor Authentication" description="Add an extra layer of security" onClick={() => alert('2FA Route')} />
        <SecurityOption title="Active Sessions" description="Manage devices where you're logged in" onClick={() => alert('Sessions Route')} />
      </div>
    </section>
  );
};

export default SecuritySettings;