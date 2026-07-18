import React from "react";

function SectionTitle({ badge, title, subtitle }) {
  return (
    <div className="section-title-block">
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;