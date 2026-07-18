import React, { useState } from 'react';
import ToggleItem from '../components/74_Toggleitem';
import '../styles/settings.css';

const NotificationSettings = () => {
  const [notifs, setNotifs] = useState({
    email: true,
    sms: false,
    push: true,
    reminders: true,
    reports: true,
    newsletter: false,
  });

  const handleToggle = (key) => {
    setNotifs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="settings-section">
      <h3 className="section-title">
        <span className="icon">🔔</span> Notifications
      </h3>
      <div className="section-card">
        <ToggleItem label="Email Notifications" description="Receive updates via email" checked={notifs.email} onChange={() => handleToggle('email')} />
        <ToggleItem label="SMS Notifications" description="Get text message alerts" checked={notifs.sms} onChange={() => handleToggle('sms')} />
        <ToggleItem label="Push Notifications" description="Browser push notifications" checked={notifs.push} onChange={() => handleToggle('push')} />
        <ToggleItem label="Session Reminders" description="24h before scheduled sessions" checked={notifs.reminders} onChange={() => handleToggle('reminders')} />
        <ToggleItem label="Weekly Progress Reports" description="Summary of your wellness journey" checked={notifs.reports} onChange={() => handleToggle('reports')} />
        <ToggleItem label="Newsletter" description="Mental health tips and resources" checked={notifs.newsletter} onChange={() => handleToggle('newsletter')} />
      </div>
    </section>
  );
};

export default NotificationSettings;