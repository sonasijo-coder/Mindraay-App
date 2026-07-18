import React from 'react';

import '../styles/profile.css';

const MoodTrackerChart = () => {
  const data = [
    { day: 'Mon', score: 70 },
    { day: 'Tue', score: 60 },
    { day: 'Wed', score: 80 },
    { day: 'Thu', score: 70 },
    { day: 'Fri', score: 90 },
    { day: 'Sat', score: 85 },
    { day: 'Sun', score: 75 },
  ];

  return (
    <div className="info-card">
      <div className="card-header">
        <span className="icon">📊</span>
        <h3>Weekly Mood Tracker</h3>
      </div>
      <div className="chart-wrapper">
        <div className="chart-bars">
          {data.map((d, i) => (
            <div className="chart-column" key={i}>
              <div className="bar-container">
                <div className="bar-fill-vertical" style={{ height: `${d.score}%` }}>
                  <span className="bar-val">{d.score / 10}</span>
                </div>
              </div>
              <span className="bar-label">{d.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodTrackerChart;