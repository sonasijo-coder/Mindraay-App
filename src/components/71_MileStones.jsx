import React from 'react';

import '../styles/profile.css';

const Milestones = () => {
  return (
    <div className="info-card">
      <div className="card-header">
        <span className="icon">🏅</span>
        <h3>Milestones & Achievements</h3>
      </div>
      <ul className="milestone-list">
        <li>✅ Completed 10 therapy sessions</li>
        <li>✅ 7-day mood tracking streak</li>
        <li>✅ Practiced mindfulness 5 times</li>
      </ul>
    </div>
  );
};

export default Milestones;