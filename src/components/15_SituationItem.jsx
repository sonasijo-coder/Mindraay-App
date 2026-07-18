import React from "react";

const SituationItem = ({ icon, iconBg, title, count }) => {
  return (
    <div className="situation-item">
      <div className="situation-icon" style={{ backgroundColor: iconBg }}>
        {icon}
      </div>
      <h4 className="situation-title">{title}</h4>
      <p className="situation-count">{count} therapists</p>
      <span className="situation-explore">Explore →</span>
    </div>
  );
};

export default SituationItem;