import React from 'react';
import WellnessStatItem from '../components/68_WellnessStatitem';
import '../styles/profile.css';

const WellnessTracking = () => {
  return (
    <div className="section-block">
      <h3 className="section-title">📈 Your Progress & Wellness Tracking</h3>
      <div className="stats-grid">
        <WellnessStatItem icon="📅" value="12" label="Sessions Completed" color="#2dd4bf" />
        <WellnessStatItem icon="📈" value="7.4" label="Avg Mood Score" color="#3b82f6" />
        <WellnessStatItem icon="🏅" value="8" label="Week Streak" color="#f59e0b" />
        <WellnessStatItem icon="🎯" value="72%" label="Goals Progress" color="#10b981" />
      </div>
    </div>
  );
};

export default WellnessTracking;