import React from "react";

const StepCardItem = ({ number, icon, iconBg, title, desc }) => {
  return (
    <div className="step-card-item">
      <span className="step-card-number">{number}</span>
      <div className="step-card-icon" style={{ backgroundColor: iconBg }}>
        {icon}
      </div>
      <h3 className="step-card-title">{title}</h3>
      <p className="step-card-desc">{desc}</p>
    </div>
  );
};

export default StepCardItem;