// components/43_ToolCardItem.jsx
import React from 'react';

function ToolCardItem({ tool }) {
  return (
    <div className="tool-card-item">
      {/* 1. Tool Icon/Emoji Box */}
      <div className="tool-icon-box">
        <span className="tool-emoji">{tool.icon}</span>
      </div>

      {/* 2. Tool Tag */}
      <div className="tool-tag-container">
        <span className="tool-badge">{tool.tag}</span>
      </div>

      {/* 3. Title & Description */}
      <h3 className="tool-card-title">{tool.title}</h3>
      <p className="tool-card-desc">{tool.description}</p>

      {/* 4. Open Tool Button */}
      <button className="open-tool-btn" onClick={() => console.log(`Opening: ${tool.title}`)}>
        Open Tool
      </button>
    </div>
  );
}

export default ToolCardItem;