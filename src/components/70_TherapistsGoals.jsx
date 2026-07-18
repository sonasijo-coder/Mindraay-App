import React from 'react';
import '../styles/profile.css';

const TherapyGoals = () => {
  const goals = [
    { name: 'Manage Anxiety', progress: '75%' },
    { name: 'Improve Sleep', progress: '60%' },
    { name: 'Mindfulness Practice', progress: '40%' }
  ];

  return (
    <div className="info-card">
      <div className="card-header">
        <span className="icon">🎯</span>
        <h3>Therapy Goals Progress</h3>
      </div>
      <div className="progress-group">
        {goals.map((g, i) => (
          <div className="prog-item" key={i}>
            <span className="prog-name">{g.name}</span>
            <div className="bar">
              <div className="fill" style={{ width: g.progress }}></div>
            </div>
            <span className="prog-percent">{g.progress}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherapyGoals;