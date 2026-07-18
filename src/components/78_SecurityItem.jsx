import React from 'react';
import '../styles/settings.css';

const SecurityOption = ({ title, description, onClick }) => {
  return (
    <div className="security-option" onClick={onClick}>
      <div className="security-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <span className="arrow">›</span>
    </div>
  );
};

export default SecurityOption;