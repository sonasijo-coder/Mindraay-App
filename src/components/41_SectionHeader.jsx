// components/41_SectionHeader.jsx
import React from 'react';

function SectionHeader({ title, subtitle }) {
  return (
    <div className="tools-section-header">
      <h2 className="tools-main-title">{title}</h2>
      {subtitle && <p className="tools-sub-title">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;