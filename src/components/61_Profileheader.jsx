import React from 'react';

import "../styles/profile.css";

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="header-left">
        <button className="back-btn" onClick={() => window.history.back()}>← Back</button>
        <h1>My Profile</h1>
        <p>Manage your personal information and medical history</p>
      </div>
      <button className="edit-profile-btn">✏️ Edit Profile</button>
    </div>
  );
};

export default ProfileHeader;