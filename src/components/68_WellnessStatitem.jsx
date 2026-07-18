import React from 'react';
import '../styles/profile.css';

const WellnessStatItem = ({ icon, value, label, color }) => {
  return (
    <div className="stat-box">
      <span className="stat-icon" style={{ color }}>{icon}</span>
      <div className="stat-info">
        <h4>{value}</h4>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default WellnessStatItem;