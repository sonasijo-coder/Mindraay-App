// components/48_CrisisSupportBanner.jsx
import React from 'react';

function CrisisSupportBanner() {
  return (
    <div className="crisis-banner-container">
      <h2 className="crisis-title">Need Immediate Support?</h2>
      <p className="crisis-desc">If you're experiencing a mental health crisis, help is available 24/7</p>
      
      <div className="crisis-actions-row">
        <button className="crisis-hotline-btn" onClick={() => window.location.href = 'tel:988'}>
          Crisis Hotline: 988
        </button>
        <button className="crisis-text-btn">Text Support</button>
      </div>
    </div>
  );
}

export default CrisisSupportBanner;