import React from 'react';
import '../styles/settings.css';

const ToggleItem = ({ label, description, checked, onChange }) => {
  return (
    <div className="toggle-item">
      <div className="toggle-info">
        <span className="toggle-label">{label}</span>
        {description && <span className="toggle-desc">{description}</span>}
      </div>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleItem;