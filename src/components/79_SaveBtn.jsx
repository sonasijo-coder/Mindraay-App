import React from 'react';
import '../styles/settings.css';

const SaveButton = ({ onSave }) => {
  return (
    <button className="save-changes-btn" onClick={onSave}>
      {/* SVG Save Icon */}
      <svg 
        className="btn-icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
        <polyline points="17 21 17 13 7 13 7 21"></polyline>
        <polyline points="7 3 7 8 15 8"></polyline>
      </svg>
      Save All Changes
    </button>
  );
};

export default SaveButton;