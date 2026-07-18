import SituationItem from "./15_SituationItem";
import React from "react";

const situations = [
  { icon: "🎓", iconBg: "#8B5CF6", title: "Students", count: 45 },
  { icon: "💼", iconBg: "#3B82F6", title: "Working Professionals", count: 87 },
  { icon: "🏠", iconBg: "#10B981", title: "Parents", count: 38 },
  { icon: "🧒", iconBg: "#EC4899", title: "Children & Teens", count: 29 },
];

const TherapistsBySituation = () => {
  return (
    <div className="situation-section">
      <h2 className="situation-section-title">Find Therapists for Your Situation</h2>
      <p className="situation-section-subtitle">
        Specialized support tailored to your life stage and role
      </p>
      <div className="situation-list">
        {situations.map((item, index) => (
          <SituationItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TherapistsBySituation;