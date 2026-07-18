// WebinarCtaBanner.jsx
import React from 'react';

function WebinarCtaBanner() {
  const handleApplyClick = () => {
    console.log("Apply to Host clicked");
    // ഇവിടെ ലിങ്കോ ഫോം ഓപ്പൺ ചെയ്യാനുള്ള ലോജിക്കോ നൽകാം
  };

  return (
    <div className="webinar-cta-container">
      <div className="webinar-cta-box">
        <h2 className="webinar-cta-title">Want to Host a Webinar?</h2>
        <p className="webinar-cta-desc">
          Mental health professionals can apply to host webinars and workshops on our platform
        </p>
        <button className="webinar-cta-btn" onClick={handleApplyClick}>
          Apply to Host
        </button>
      </div>
    </div>
  );
}

export default WebinarCtaBanner;