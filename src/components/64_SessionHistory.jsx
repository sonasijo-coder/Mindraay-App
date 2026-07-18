import React from 'react';
import SessionHistoryItem from '../components/65_SectionHistoryitem';
import '../styles/profile.css';


const SessionHistory = () => {
  return (
    <div className="section-block">
      <h3 className="section-title">🔄 Session History</h3>
      <div className="history-list">
        <SessionHistoryItem 
          date="2026-05-20" 
          type="Video" 
          therapist="Dr. Sarah Mitchell" 
          desc="Discussed coping strategies for workplace stress" 
          time="50 min" 
        />
        <SessionHistoryItem 
          date="2026-05-13" 
          type="Video" 
          therapist="Dr. Sarah Mitchell" 
          desc="Sleep hygiene and mindfulness techniques" 
          time="50 min" 
        />
      </div>
    </div>
  );
};

export default SessionHistory;