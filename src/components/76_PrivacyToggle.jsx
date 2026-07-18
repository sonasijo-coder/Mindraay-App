import React from 'react';
import ToggleItem from './74_Toggleitem';
import '../styles/settings.css';

const PrivacyToggleSystem = ({ privacyState, onToggle }) => {
  return (
    <div className="toggle-system-container">
      <ToggleItem 
        label="Share Progress with Therapist" 
        description="Allow therapists to view your mood and goal tracking" 
        checked={privacyState.shareProgress} 
        onChange={() => onToggle('shareProgress')} 
      />
      <ToggleItem 
        label="Public Profile" 
        description="Make your profile visible to other users" 
        checked={privacyState.publicProfile} 
        onChange={() => onToggle('publicProfile')} 
      />
      <ToggleItem 
        label="Show in Directory" 
        description="Appear in patient success stories" 
        checked={privacyState.showDirectory} 
        onChange={() => onToggle('showDirectory')} 
      />
    </div>
  );
};

export default PrivacyToggleSystem;