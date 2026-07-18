import React from 'react';

const AuthHeader = ({ title, subtitle }) => {
  return (
    <div className="auth-header">
      <div className="logo-container">
        <span className="logo-icon">💚</span>
        <span className="logo-text">Mindraay</span>
      </div>
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default AuthHeader;